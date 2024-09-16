import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBFooter, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import defaultLogo from '../images/logo.jpg'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Home.css'

const Home = () => {
    let item = useLoaderData();
    const navigate = useNavigate();
    let cardWidth = (window.innerWidth / 4)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const handleChanges = () => {
        setScreenWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleChanges);
        return () => {
            window.removeEventListener('resize', handleChanges);
        };
    }, [])
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        console.log(date);
        if (isDateValid(date)) {
            if (isHourValid(date, 8, 18)) {
                setSelectedDate(date);
                setData({ ...data, [date]: date });
            } else {
                setSelectedDate(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0))
                setData({ ...data, [date]: new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0) })
            }
        }
    };
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const submit = async () => {
        setError('')
        setSuccess('')
        setLoading(true)
        if (selectedDate === ''
            || data.name === ''
            || data.phone === '') {
            setError("Fill all the form fields");
            setLoading(false)
        } else {
            try {
                await fetch('http://localhost:5000/api/book/orderBook', {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json',
                        'access-control-origin': '*',
                        // 'Authorisation': `Bearer ${localStorage.getItem('token') || ''}`
                    },
                    body: JSON.stringify({
                        date: selectedDate,
                        name: data.name,
                        phone: data.phone,
                        designID: data.designID,
                        // email: data.email
                    })
                })
                    .then(res => res.json())
                    .then(respond => {
                        console.log(respond)
                        if (respond.message === "book created successfully") {
                            setSuccess(respond.message)
                            setSelectedDate('')
                            setData({
                                date: "",
                                name: "",
                                phone: ""
                            })
                            setLoading(false)
                            setBasicModal(false);
                        } else {
                            setError("Something went wrong check you connection and try again");
                        }
                    })
                    .catch(err => {
                        setError("Something went wrong check you connection and try again");
                        setLoading(false);
                    })
            } catch (e) {
                console.log(e);
                setError("Something went wrong check you connection and try again");
                setLoading(false)
            }
        }

    }
    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);
    const [data, setData] = useState({
        name: '',
        phone: "",
        designID: ''
    })
    function isDateValid(dateToCheck) {
        const validDateToCheck = new Date(dateToCheck);
        const startDate = new Date();
        const endDate = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000 + 21 * 60 * 60 * 1000);

        if (isNaN(validDateToCheck.getTime()) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.log('Invalid date provided');
            return false;
        }
        return validDateToCheck >= startDate && validDateToCheck <= endDate;
    }
    function isHourValid(date, startHour, endHour) {
        const hour = date.getHours();
        if (startHour > endHour) {
            endHour += 24;
        }
        return startHour <= hour && hour <= endHour;
    }
    function handleChange(e) {
        if (e.target.type == 'text' || e.target.type == 'email') {
            setData({ ...data, [e.target.name]: e.target.value })
        } else {
            setData({ ...data, [e.target.name]: !data.confirm })
        }
    }

    function Service() {
        return (
            <div style={{
                color: 'black',
                width: "100%",
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[0].image[1]}
                        // src={`http://localhost:5000/Design/${item[0].designID}/${item[0].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 1 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[0].name}</h3>
                            {/* <h3>{item[0].name.slice(0, item[0].name.lastIndexOf(' ') - 1)}</h3> */}
                            <h3>${item[0].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[1].image[1]}
                        // src={`http://localhost:5000/Design/${item[1].designID}/${item[1].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 2 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[1].name.slice(0, item[1].name.lastIndexOf(' '))}</h3>
                            <h3>${item[1].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[2].image[1]}
                        // src={`http://localhost:5000/Design/${item[2].designID}/${item[2].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 3 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[2].name.slice(0, item[2].name.lastIndexOf(' '))}</h3>
                            <h3>${item[2].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[3].image[1]}
                        // src={`http://localhost:5000/Design/${item[3].designID}/${item[3].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 4 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "40px 0px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            <h3>{item[3].name.slice(0, item[3].name.lastIndexOf(' '))}</h3>
                            <h3>${item[3].price}</h3>
                        </div>
                    </a>
                </MDBRipple>
                <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'
                    style={{ borderRadius: "50%", }}>
                    <img
                        src={item[4].image[1]}
                        // src={`http://localhost:5000/Design/${item[4].designID}/${item[4].image[1]}`}
                        width={"150px"}
                        height={"150px"}
                        style={{
                            borderRadius: "50%",
                        }}
                    />
                    <a href='#!' onClick={() => {
                        setData({ ...data, ["designID"]: 5 })
                        setBasicModal(true)
                    }}>
                        <div className='mask' style={{
                            padding: "20px 20px",
                            backgroundColor: 'rgba(236, 205, 29, 0.5)',
                            color: "white",
                            fontWeight: "1200"
                        }}
                        >
                            {/* <h3>{item[4].name}</h3> */}
                            <h3>{item[4].name}</h3>
                            {/* <h3>{nameitle.slice(0, item[4].name.lastIndexOf(' ') - 1)}</h3> */}
                            <h3>${item[4].price}</h3>
                        </div>
                    </a>
                </MDBRipple>

            </div>
        )
    }
    function Design({ design, ind }) {
        let shortText
        if (design.description.length > 100) {
            shortText = design.description.slice(0, 100) + '...'
        } else {
            shortText = design.description
        }
        // let logoImage = defaultLogo
        // console.log();
        let logoImage = design.image.length > 0 ?
            design.image[0]
            : defaultLogo;
        return (
            <MDBCol >
                <MDBCard className='h-100'>
                    <center style={{ paddingTop: '10px', border: 'solid 1px rgba(0,0,0,0.3)', borderRadius: '10px' }}>
                        <div className='bg-image hover-overlay'
                            style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                            }}>
                            <img
                                className=' pink-circular-fill2'
                                // src='https://mdbootstrap.com/img/new/standard/city/062.webp'
                                src={logoImage}
                                alt='...'
                                width={"200px"}
                                height={"200px"}
                            />
                            <div
                                className='mask'
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: 'linear-gradient(45deg, rgba(236, 205, 29, 0.5), rgba(79, 59, 4, 0.5) 100%)',
                                }}
                            >
                                <button
                                    className='submit2'
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                    onClick={toggleOpen}
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                        <MDBCardBody style={{ height: "200px" }}>
                            <MDBCardTitle><b>{design.name}</b></MDBCardTitle>
                            <MDBCardText style={{ height: "80px", textAlign: 'left' }}>
                                {shortText}
                            </MDBCardText>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end"

                            }}>
                                {/* <a href='#detail'> */}
                                <button
                                    style={{
                                        border: 'solid 1px grey', backgroundColor: 'rgba(0,0,0,0.75)',
                                        fontSize: 'medium', color: 'white', fontWeight: 'lighter',
                                        padding: '5px 10px', borderRadius: '7px'
                                    }}
                                    className='direction'
                                    onClick={() => {
                                        console.log(design.designID);
                                        let i = parseInt(design.designID) - 1
                                        // let i = parseInt(ind)
                                        // navigate('/design/' + i)
                                        navigate('/' + i)
                                    }}>
                                    More..<i className='fas fa-long-arrow-down'></i>
                                </button>
                                {/* </a> */}
                            </div>
                        </MDBCardBody>
                        <MDBCardFooter style={{ color: "goldenrod" }}>
                            <h4 className='' style={{ color: "goldenrod" }} >${design.price}</h4>
                        </MDBCardFooter>
                    </center>
                </MDBCard>
            </MDBCol>
        )
    }
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedHairstyle, setSelectedHairstyle] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [SelectedSalon, setSelectedSalon] = useState('');

    const [images, setImages] = useState([
        require('../images/images/img1.avif'),
        require('../images/images/img2.webp'),
        require('../images/images/img3.jpg'),
        // Add more images as needed
    ]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                return nextIndex;
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, [images]);

    const handleImageClick = (hairstyle) => {
        // Redirect to the info page with clicked hairstyle information
        const urlSearchParams = new URLSearchParams({
            image: hairstyle.imageUrl, // Encode if necessary
            name: hairstyle.name,
            price: hairstyle.price,
            town: hairstyle.town,
            salon: hairstyle.salon,
            // Add mapUrl if you have it
        });
        window.location.href = `/InfoPage?${urlSearchParams.toString()}`;
    };

    const hairstyles = [
        {
            id: 1,
            name: 'Braided updo',
            price: '$50',
            town: 'Yaounde',
            salon: 'Curl Emporium',
            imageUrl: require("../images/braided updo1.jfif"),
        },
        {
            id: 2,
            name: 'Curly Bob',
            price: '$40',
            town: 'Douala',
            salon: 'Curl Oasis',
            imageUrl: require('../images/curly.jfif')
        },
        {
            id: 3,
            name: 'Sleek Ponytail',
            price: '$35',
            town: 'Buea',
            salon: 'Smooth styles',
            imageUrl: require('../images/ponytail.jfif')

        },
        {
            id: 4,
            name: 'Bohomian braids',
            price: '$50',
            town: 'Yaounde',
            salon: 'Curl Emporium',
            imageUrl: require('../images/bohemian.jfif'),
        },
        {
            id: 5,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image1.jpg'),
        },
        {
            id: 6,
            name: 'Braided updo',
            price: '$45',
            town: 'Bafoussam',
            salon: 'Curl Emporium',
            imageUrl: require('../images/image3.jpg'),
        },
        {
            id: 7,
            name: 'Braided updo',
            price: '$45',
            town: 'Bafoussam',
            salon: 'Curl Emporium',
            imageUrl: require('../images/image4.jpg'),
        },
        {
            id: 8,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image6.jpg'),
        },
        {
            id: 9,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image7.jpg'),
        },
        {
            id: 10,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image8.jpg'),
        },
        {
            id: 11,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image7.jpg'),
        },
        {
            id: 12,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image2.jpg'),
        },
        {
            id: 12,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image6.jpg'),
        },
        {
            id: 12,
            name: 'Braided updo',
            price: '$50',
            town: 'Buea',
            salon: 'Stylish beauty',
            imageUrl: require('../images/image10.jpg'),
        },
    ];

    const filteredHairstyles = hairstyles.filter((hairstyle) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            (hairstyle.name.toLowerCase().includes(searchTermLower) ||
                hairstyle.price.toLowerCase().includes(searchTermLower) ||
                hairstyle.town.toLowerCase().includes(searchTermLower) ||
                hairstyle.salon.toLowerCase().includes(searchTermLower)) &&
            (selectedPrice === '' || hairstyle.price === selectedPrice) &&
            (selectedHairstyle === '' || hairstyle.name === selectedHairstyle) &&
            (selectedTown === '' || hairstyle.town === selectedTown) &&
            (SelectedSalon === '' || hairstyle.salon === SelectedSalon)
        );
    });
    return (
        <div style={{backgroundColor:'transparent',backdropFilter: 'blur(10px)', webkitbackdropfilter: 'blur(10px)' }}>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                webkitbackdropfilter: 'blur(10px)',
                height: '61px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <h1>NextLuk</h1>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <input
                        type='text'
                        placeholder='Search hairstyles'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px', border: '1px solid #ccc',
                            marginRight: '1rem'
                        }}
                    />
                    <select
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px', border: '1px solid #ccc',
                            marginRight: '1rem'
                        }}>
                        <option value="">Price</option>
                        <option value="$30">$30</option>
                        <option value="$40">$40</option>
                        <option value="$50">$50</option>
                    </select>
                    <select
                        value={selectedHairstyle}
                        onChange={(e) => setSelectedHairstyle(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px', border: '1px solid #ccc',
                            marginRight: '1rem'
                        }}>
                        <option value="">Hairstyle</option>
                        <option value="Braided updo">Braided updo</option>
                        <option value="Curly Bob">Curly Bob</option>
                        <option value="Sleek Ponytail">Sleek Ponytail</option>
                        <option value="Bohomian braid">Bohomian braid</option>
                    </select>
                    <select
                        value={selectedTown}
                        onChange={(e) => setSelectedTown(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px', border: '1px solid #ccc',
                            marginRight: '1rem'
                        }}>
                        <option value="">Town</option>
                        <option value="Yaounde">Yaounde</option>
                        <option value="Douala">Douala</option>
                        <option value="Buea">Buea</option>
                        <option value="Bafoussam">Bafoussam</option>
                    </select>
                    <select
                        value={SelectedSalon}
                        onChange={(e) => setSelectedSalon(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px', border: '1px solid #ccc',
                            marginRight: '1rem'
                        }}>
                        <option value="">Salon</option>
                        <option value="Curl Emporium">Curl Emporium</option>
                        <option value="Curl Oasis">Curl Oasis</option>
                        <option value="Smooth styles">Smooth styles</option>
                        <option value="Stylish beauty">Stylish beauty</option>
                    </select>
                    <button className='btn btn secondary' onClick={toggleOpen}>Book now</button>
                </div>
            </header>
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
                                    {error ?
                                        <center style={{ color: 'darkred' }}>
                                            {error} &nbsp;
                                            {/* <i className='fas fa-wifi' style={{textDecoration:'line-through' ,color:'darkred'}}></i> */}
                                        </center>
                                        : ''}
                                    {
                                        success != '' ? <span style={{ color: 'green' }}>{success}</span> : ''
                                    }
                                </div>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <DatePicker
                                        style={{ borderRadius: '5px' }}
                                        placeholderText='Choose a date'
                                        id='choiceDate'
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        minDate={new Date()}
                                        maxDate={new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)}
                                        disabledDays={[0]} // Disable Sundays (0-indexed, starting with Sunday)
                                        showTimeSelect
                                        dateFormat="yyyy-MM-dd HH:mm"
                                        minTime={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8, 0, 0)}
                                        maxTime={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 18, 0, 0)}
                                    />
                                </MDBCol>
                                {/* <MDBCol>
                                    <input type="email" placeholder='Email' name="email" onChange={e => handleChange(e)} required />
                                </MDBCol> */}
                                <MDBCol>
                                    <input type="text" placeholder='Name' name="name" style={{
                                        borderRadius: '4px',
                                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0, 0.1)', border: '1px solid black'
                                    }} onChange={e => handleChange(e)} required />
                                </MDBCol>
                                <MDBCol>
                                    <input type="text" placeholder='Phone' name="phone" style={{
                                        borderRadius: '4px',
                                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0, 0.1)', border: '1px solid black',
                                        marginTop: '5px'
                                    }} onChange={e => handleChange(e)} required />
                                </MDBCol>

                            </MDBRow>
                        </MDBModalBody>

                        {loading ? (
                            <MDBModalFooter>
                                <MDBBtn color='secondary' >
                                    Close
                                </MDBBtn>
                                <MDBBtn style={{ backgroundColor: 'rgba(235, 210, 146, 0.897)' }} >
                                    <img src={require('../images/loader.gif')} width={'30px'} alt="loader" />
                                </MDBBtn>
                            </MDBModalFooter>
                        ) : (
                            <MDBModalFooter>
                                <MDBBtn color='pink' onClick={toggleOpen}>
                                    Close
                                </MDBBtn>
                                <MDBBtn style={{ backgroundColor: 'pink' }} onClick={() => { submit() }}>SUBMIT</MDBBtn>
                            </MDBModalFooter>
                        )}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBCarousel
                showIndicators
                showControls
                fade
                light
                fadeautoplay={true}
                interval={100000}
                keyboard={true}
            // pause={true}
            >
                <MDBCarouselItem itemId={1}>
                    {/* <img
                        src={img2}
                        className='d-block w-100'
                        alt='...'
                        height={520}
                        style={{
                            opacity: '0.8 grey'
                        }}
                    /> */}
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
                        <img
                            src={require('../images/images/img3.jpg')}
                            className='d-block w-100'
                            alt='...'
                            height={620}
                            style={{
                                // opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}> Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        {/* <div style={{marginTop:"-400px"}}> */}
                        <center style={{ border: 'solid 1px transparent', marginLeft: '200px' }}>
                            <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            {/* <button}
                                className='submit2'
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                onClick={toggleOpen}
                            >
                                Make An Appoinment
                            </button>
                        </center>
                        {/* <Service /> */}
                            {/* </div> */}</center>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
                        <img
                            src={require('../images/images/img1.avif')}
                            className='d-block w-100'
                            alt='...'
                            height={620}
                            style={{
                                opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}>Welcome To Our Application<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        {/* <div style={{ textAlign: "right" }}> */}
                        <center style={{ border: 'solid 1px transparent', marginRight: '200px', marginLeft: '-50px' }}>
                            <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            <div style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                {/* <button
                                    className='submit2'
                                    style={{
                                        textAlign: "right"
                                    }}
                                    onClick={toggleOpen}
                                >
                                    Make An Appoinment
                                </button> */}
                            </div>
                            {/* </div> */}
                        </center>
                        {/* <Service /> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
                        <img
                            src={require('../images/images/img2.webp')}
                            className='d-block w-100'
                            alt='...'
                            height={620}
                            style={{
                                opacity: '0.8 grey'
                            }}
                        />
                        <a href='#!' onClick={() => {
                            // setBasicModal(true)
                        }}>
                            <div className='mask' style={{
                                display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
                                color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
                                fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
                                transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
                            }}>Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
                        </a>
                    </MDBRipple>
                    <MDBCarouselCaption>
                        <div style={{ textAlign: "left" }}>
                            {/* <center> */}
                            <h1 className='h1Carousel'>Welcome To Our Application</h1>
                            <h1 className='h1Carousel2'>Beauty at your service</h1>
                            <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
                                from the inside and give you confidence in yourself, while highlighting your natural beauty.
                            </p>
                            {/* <button
                                className='submit2'
                                style={{
                                    textAlign: "right"
                                }}
                                onClick={toggleOpen}
                            >
                                Make An Appoinment
                            </button> */}
                        </div>
                        {/* </center> */}
                        {/* <Service /> */}
                    </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarousel>

            <div
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', cursor:'pointer' }}>
                    {filteredHairstyles.map((hairstyle) => (
                        <div key={hairstyle.id}
                            style={{

                            }}>
                            <img
                                src={hairstyle.imageUrl}
                                alt={hairstyle.name}
                                style={{ width: '279px', height: '240px', borderRadius: '8px', flex: '1 1 250px', paddingTop: '10px' 
                                    , zIndex: '999' }}
                                onClick={() => handleImageClick(hairstyle)}
                            />
                            <div style={{display: 'block'}}>
                            <h3>{hairstyle.name}</h3>
                            Price:{hairstyle.price}<br></br>
                            Town:{hairstyle.town}<br></br>
                            Salon:{hairstyle.salon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home