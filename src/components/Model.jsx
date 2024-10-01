import React, { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRow,
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
const styles = {
    blackButton: {
        backgroundColor: 'black',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
    },
}
export default function ModelComponent({ basicModal, setBasicModal }) {

    // const [basicModal, setBasicModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [warning, setWarning] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        // name: '',
        phone: "",
        salonID: 1,
    });

    const toggleOpen = () => {
        setBasicModal(!basicModal)
    }

    const handleDateChange = (date) => {
        if (isDateValid(date)) {
            if (isHourValid(date, 8, 18)) {
                setSelectedDate(date);
                setData({ ...data, date: date });
            } else {
                const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0);
                setSelectedDate(newDate);
                setData({ ...data, date: newDate });
            }
        }
    };

    const handleChange = (e) => {
        if (e.target.type === 'text' || e.target.type === 'email') {
            setData({ ...data, [e.target.name]: e.target.value });
        } else {
            setData({ ...data, [e.target.name]: !data[e.target.name] });
        }
    };

    const isDateValid = (dateToCheck) => {
        const validDateToCheck = new Date(dateToCheck);
        const startDate = new Date();
        const endDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000);

        if (isNaN(validDateToCheck.getTime()) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.log('Invalid date provided');
            return false;
        }
        return validDateToCheck >= startDate && validDateToCheck <= endDate;
    };

    const isHourValid = (date, startHour, endHour) => {
        const hour = date.getHours();
        if (startHour > endHour) {
            endHour += 24;
        }
        return startHour <= hour && hour <= endHour;
    };
    function checkResponse(id) {
        const attemptPayment = async (transID) => {
            console.log(transID);
            try {
                let resp = await fetch(`${process.env.REACT_APP_DEV_URL}/verify/${transID}`, {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'access-control-origin': '*',
                        'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
                    },
                    body: JSON.stringify({
                        phone: data.phone,
                        date: selectedDate
                    })
                })
                    .then(res => res.json())
                    .then(respond => {
                        console.log(respond);
                        return respond
                    })
                    .catch(err => {
                        return false
                    })
                return resp
            } catch (e) {
                setError('Verify your internet connection')
                return false
            }
        }
        let attempts = 0; // Initialize attempts counter outside the interval
        let maxAttempts = 10; // Set maximum attempts
        const intervalId = setInterval(async () => {
            let payResponse = await attemptPayment(id);
            if (payResponse) {
                let status = payResponse.status
                if (status === 'FAILED') {
                    clearInterval(intervalId)
                    setError('')
                    setSuccess('')
                    setWarning('')
                    setError(payResponse.reason)
                    setLoading(false)
                    return {
                        message: payResponse.reason,
                    };
                }
                if (status === 'SUCCESSFUL') {
                    clearInterval(intervalId)
                    setError('')
                    setSuccess('')
                    setWarning('')
                    setSuccess('Your appointment has being accepted')
                    setTimeout(() => {
                        setLoading(false);
                        setBasicModal(false);
                        // navigate('/', { replace: true });
                    }, 2000);
                    return {
                        message: "accept successful",
                    };
                }
            }
            attempts++;
            if (attempts > maxAttempts) {
                clearInterval(intervalId)
                setError('')
                setSuccess('')
                setWarning('')
                setLoading(false)
                setError("timeout")
                return {
                    message: 'Transaction Failed',
                };
            }
        }, 15000);
    }
    const submit = async () => {
        setError('')
        setSuccess('')
        setLoading(true)
        if (selectedDate === '' || data.phone === '') {
            setError("Enter a phone number for payment")
            setLoading(false)
            return
        } else {
            try {
                await fetch(`${process.env.REACT_APP_DEV_URL}/payment`, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'accept': 'application/json',
                        'access-control-origin': '*',
                        'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
                    },
                    body: JSON.stringify({
                        phone: data.phone,
                        date: selectedDate
                    })
                })
                    .then(res => res.json())
                    .then(respond => {
                        // console.log(respond)
                        if (respond.statusError) {
                            setError(respond.message);
                            setLoading(false);
                        } else if (respond.error_code) {
                            setError(respond.message);
                            setLoading(false);
                        } else if (respond.status) {
                            if (respond.status === 'PENDING') {
                                setWarning("valid transaction on your phone");
                                checkResponse(respond.reference)
                            } else {
                                setError("Transaction failed please start back")
                                setLoading(false)
                            }
                        } else {
                            setWarning("operator " + respond.operator + " Press " + respond.ussd_code + " on your phone and valid transaction");
                            checkResponse(respond.reference)
                        }
                    })
                    .catch(err => {
                        setLoading(false)
                        setError('internet problem')
                    })
            } catch (e) {
                setError('Verify your internet connection')
                setLoading(false)
            }
        }
    }
    // const submit = async () => {
    //     setError('');
    //     setSuccess('');
    //     setLoading(true);
    //     alert(JSON.stringify({phone:data.phone,selectedDate:selectedDate}));
    //     if (selectedDate === '' || data.phone === '') {
    //         setError("Fill all the form fields");
    //         setLoading(false);
    //     } else {
    //         // try {
    //         //     const response = await fetch('http://localhost:5000/api/book/orderBook', {
    //         //         method: 'post',
    //         //         headers: {
    //         //             'content-type': 'application/json',
    //         //             'accept': 'application/json',
    //         //             'access-control-origin': '*',
    //         //         },
    //         //         body: JSON.stringify({
    //         //             date: selectedDate,
    //         //             name: data.name,
    //         //             phone: data.phone,
    //         //             designID: data.designID,
    //         //         })
    //         //     });
    //         //     const respond = await response.json();
    //         //     if (respond.message === "book created successfully") {
    //         //         setSuccess(respond.message);
    //         //         setSelectedDate('');
    //         //         setData({
    //         //             date: "",
    //         //             name: "",
    //         //             phone: ""
    //         //         });
    //         //         setLoading(false);
    //         //         setBasicModal(false);
    //         //     } else {
    //         //         setError("Something went wrong check your connection and try again");
    //         //     }
    //         // } catch (e) {
    //         //     console.log(e);
    //         //     setError("Something went wrong check your connection and try again");
    //         //     setLoading(false);
    //         // }
    //     }
    // };


    return (
        <div>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Book form</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBRow>
                                <div>
                                    {error && <center style={{ color: 'darkred' }}>{error}</center>}
                                    {warning && <center style={{ color: 'yellow' }}>{warning}</center>}
                                    {success && <span style={{ color: 'green' }}>{success}</span>}
                                </div>
                                <MDBModalTitle>To secure your appointment, a fee of 1000 F is required</MDBModalTitle>
                                <br />
                            </MDBRow>
                            <MDBRow>
                                <MDBRow>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Select a Date</label>
                                        <div class="col-sm-8">
                                            <DatePicker
                                                style={{ borderRadius: '5px', width: '100%' }}
                                                placeholderText='Choose a date'
                                                id='choiceDate'
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                minDate={new Date()}
                                                maxDate={new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)}
                                                disabledDays={[0]}
                                                showTimeSelect
                                                dateFormat="yyyy-MM-dd HH:mm"
                                                minTime={new Date(0, 0, 0, 8, 0)}
                                                maxTime={new Date(0, 0, 0, 18, 0)}
                                            />
                                        </div>
                                    </div>

                                </MDBRow>
                                <br />
                                <hr />
                                <MDBRow>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Phone</label>
                                        <div class="col-sm-10">
                                            <input type="text" className="form-control"
                                                name='phone' id="inputPassword"
                                                onChange={handleChange}
                                                placeholder="PasswordPhone" />
                                        </div>
                                    </div>
                                </MDBRow>
                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='pink' onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                            <MDBBtn style={styles.blackButton} onClick={submit} disabled={loading}>
                                {loading ? <img src={require('../images/loader.gif')} width={'30px'} alt="loader" /> : 'SUBMIT'}
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}
