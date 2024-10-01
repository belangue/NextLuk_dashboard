import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Star, Search } from 'lucide-react';
import Footer from './Footer';
import DatePicker from 'react-datepicker';
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
  MDBCol
} from 'mdb-react-ui-kit';
import Map from './Map';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'sans-serif',
    overflow: 'hidden', // Prevent scrolling on the main container
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1000,
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    cursor: 'pointer',
  },
  searchBar: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  input: {
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '4px',
  },
  searchButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  headerButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  outlineButton: {
    border: '1px solid black',
    backgroundColor: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  blackButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    marginTop: '90px', // Adjust this value based on your header height
    height: 'calc(100vh - 180px)', // Adjust this value based on your header height
  },
  leftPanel: {
    width: '66.66%',
    overflowY: 'auto',
    padding: '24px',
    height: '100%', // Ensure the left panel takes full height
  },
  nav: {
    display: 'flex',
    gap: '8px',
    marginBottom: '24px',
  },
  navButton: {
    border: '1px solid #ccc',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  salonItem: {
    border: '1px solid #e0e0e0',
    padding: '24px',
    marginBottom: '24px',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  salonImage: {
    width: '33.33%',
    height: '192px',
    objectFit: 'cover',
    marginRight: '24px',
    borderRadius: '4px',
  },
  salonInfo: {
    flex: 1,
  },
  salonName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  salonAddress: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    marginBottom: '4px',
  },
  salonRating: {
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    marginBottom: '16px',
  },
  timeSlots: {
    marginBottom: '16px',
  },
  timeSlotTitle: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    marginBottom: '4px',
  },
  timeSlotButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '4px',
  },
  timeSlotButton: {
    border: '1px solid #ccc',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '14px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  rightPanel: {
    width: '33.33%',
    backgroundColor: '#f0f0f0',
    // Prevent scrolling in the map area
  },
};

const SalonList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const town = searchParams.get("town");
  const [salons, setSalon] = useState([]);

  const fetchSalonData = async () => {
    await fetch(`${process.env.REACT_APP_DEV_URL}/salon/getAllPerSalons/${town}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'access-control': '*',
        'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),

      },
    })
      .then(res => res.json())
      .then(async response => {
        console.log(response);
        if (response.salon) {
          setSalon(response.salon)
        }
        // toast.error(response.error);

      })
      .catch(async err => {
        console.log(err);
        // toast.success("Logout Success");
      });
  };
  useEffect(() => {

    return () => {
      fetchSalonData()
    }
  }, [])

  // const [salons] = useState([
  //   {
  //     id: 1,
  //     name: "Body Float - Centre de Flottaison - Paris 04",
  //     location: "Châtelet Hôtel de Ville",
  //     address: "5 Rue Saint-Bon, 75004 Paris",
  //     rating: 4.6,
  //     reviews: 14,
  //     imageUrl: require('../images/city1.jpg'),
  //   },
  //   {
  //     id: 2,
  //     name: "Point Soleil - Paris 04 Châtelet Hôtel de Ville",
  //     location: "Châtelet Hôtel de Ville",
  //     address: "5 Rue Saint-Bon, 75004 Paris",
  //     rating: 4.9,
  //     reviews: 25,
  //     imageUrl: require('../images/city2.jpg'),
  //   },
  //   {
  //     id: 3,
  //     name: "Point Soleil - Paris 04 Châtelet Hôtel de Ville",
  //     location: "Châtelet Hôtel de Ville",
  //     address: "5 Rue Saint-Bon, 75004 Paris",
  //     rating: 4.9,
  //     reviews: 25,
  //     imageUrl: require('../images/city3.jpg'),
  //   },
  // ]);

  const [basicModal, setBasicModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    phone: "",
    designID: ''
  });

  const toggleOpen = () => {
    navigate('/HomePage')
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

  const submit = async () => {
    setError('');
    setSuccess('');
    setLoading(true);
    if (selectedDate === '' || data.name === '' || data.phone === '') {
      setError("Fill all the form fields");
      setLoading(false);
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/book/orderBook', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'access-control-origin': '*',
          },
          body: JSON.stringify({
            date: selectedDate,
            name: data.name,
            phone: data.phone,
            designID: data.designID,
          })
        });
        const respond = await response.json();
        if (respond.message === "book created successfully") {
          setSuccess(respond.message);
          setSelectedDate('');
          setData({
            date: "",
            name: "",
            phone: ""
          });
          setLoading(false);
          setBasicModal(false);
        } else {
          setError("Something went wrong check your connection and try again");
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong check your connection and try again");
        setLoading(false);
      }
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}><a href="/FirstPage">NextLuk</a></div>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Hairstyle" style={{ ...styles.input, flexGrow: 1 }} />
          <input type="text" placeholder={town} style={{ ...styles.input, width: '25%' }} />
          <select style={{ ...styles.input, width: '25%' }}>
            <option>À tout moment</option>
          </select>
          <button style={styles.searchButton}><Search size={20} /></button>
        </div>
        <div style={styles.headerButtons}>
          <button style={styles.outlineButton}>Ajoutez votre établissement</button>
          <button style={styles.blackButton}>Se connecter</button>
        </div>
      </header>

      <div style={styles.content}>
        <div style={styles.leftPanel}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Select a beauty Institute</h2>
          <p style={{ marginBottom: '24px', color: '#666' }}>The best beauty institutes in {town} : Book now</p>

          {salons.map((salon) => (
            <div key={salon.id} style={styles.salonItem}>
              <img src={salon.imageUrl} alt={salon.name} style={styles.salonImage} />
              <div style={styles.salonInfo}>
                <h3 style={styles.salonName}>{salon.name}</h3>
                <p style={styles.salonAddress}><MapPin size={16} style={{ marginRight: '4px' }} /> {salon.address}</p>
                <p style={styles.salonRating}><Star size={16} style={{ marginRight: '4px', color: '#ffc107' }} /> {salon.rating} ({salon.reviews} avis)</p>
                <button style={styles.blackButton} onClick={toggleOpen}>Book now</button>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.rightPanel}>
          {typeof window !== 'undefined' && <Map />}
        </div>
      </div>

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
                  {success && <span style={{ color: 'green' }}>{success}</span>}
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
                    disabledDays={[0]}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm"
                    minTime={new Date(0, 0, 0, 8, 0)}
                    maxTime={new Date(0, 0, 0, 18, 0)}
                  />
                </MDBCol>
                <MDBCol>
                  <input type="text" placeholder='Name' name="name" style={{
                    borderRadius: '4px',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0, 0.1)',
                    border: '1px solid black'
                  }} onChange={handleChange} required />
                </MDBCol>
                <MDBCol>
                  <input type="text" placeholder='Phone' name="phone" style={{
                    borderRadius: '4px',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0, 0.1)',
                    border: '1px solid black',
                    marginTop: '5px'
                  }} onChange={handleChange} required />
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='pink' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn style={{ backgroundColor: 'pink' }} onClick={submit} disabled={loading}>
                {loading ? <img src={require('../images/loader.gif')} width={'30px'} alt="loader" /> : 'SUBMIT'}
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <Footer></Footer>
    </div>
  );
};


export default SalonList;