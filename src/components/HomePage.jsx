import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import ModelComponent from './Model';
import Footer from './Footer';
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
        marginLeft: '20px',
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
        height: '100%',
        minHeight: '400px',// Ensure it takes full height
    },

};
const HomePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedHairstyle, setSelectedHairstyle] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [SelectedSalon, setSelectedSalon] = useState('');
    const [hairstyles, setPublicationList] = useState([]);
    const [basicModal, setBasicModal] = useState(false);

    const fetchHairstyleData = async () => {
        await fetch(`${process.env.REACT_APP_DEV_URL}/hairstyle/getAllHairstyle`, {
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
                if (response.hairstyle) {
                    setPublicationList(response.hairstyle)
                }
                // toast.error(response.error);

            })
            .catch(async err => {
                console.log(err);
                // toast.success("Logout Success");
            });
    };
    // const toggleOpen = setBasicModal(!basicModal)
    useEffect(() => {

        return () => {
            fetchHairstyleData()
        }
    }, [])

    const handleImageClick = (hairstyle) => {
        const urlSearchParams = new URLSearchParams({
            image: hairstyle.imageUrl,
            name: hairstyle.name,
            price: hairstyle.price,
            town: hairstyle.town,
            salon: hairstyle.salon,
        });
        window.location.href = `/InfoPage?${urlSearchParams.toString()}`;
    };

    const handleNavClick = (item) => {
        if (item === 'Beauty Institute') {
            navigate('/institute');
        }
        if (item === 'Hairstyle') {
            navigate('/HomePage');
        }
        if (item === 'Nextluk') {
            navigate('/FirstPage');
        }
    };
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Update state with the input value
      };
    
      const filteredHairstyles = hairstyles.filter((hairstyle) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            (hairstyle.name.toLowerCase().includes(searchTermLower) ||
                hairstyle.price.toLowerCase().includes(searchTermLower) ||
                // hairstyle.town.toLowerCase().includes(searchTermLower) ||
                hairstyle.salon.toLowerCase().includes(searchTermLower)) &&
            (selectedPrice === '' || hairstyle.price === selectedPrice) &&
            (selectedHairstyle === '' || hairstyle.name === selectedHairstyle) &&
            (selectedTown === '' || hairstyle.town === selectedTown) &&
            (SelectedSalon === '' || hairstyle.salon === SelectedSalon)
        );
    });
    
      

    return (
        <div className="planity-container">
            <ModelComponent
                basicModal={basicModal}
                setBasicModal={setBasicModal}
            />
            <div className='top-nav'>
                <header>
                    <div className="logo"><a href="/FirstPage" >NextLuk</a></div>
                    <nav>
                        <ul>
                            {['Hairstyle', 'Beauty Institute'].map((item) => (
                                <li key={item} onClick={() => handleNavClick(item)}>
                                    <span className="nav-item">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header-buttons">
                        <button onClick={()=>{setBasicModal(!basicModal)}}>Book now</button>
                    </div>
                </header>
            </div>

            <div className="main-content">
                <h1>Reserve an appointment online for a haircut</h1>

                <div className="search-container">
                    <div className="search-input-wrapper">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            defaultValue="Hairstyle"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Address, town..."
                        />
                    </div>
                    <button>Search</button>
                </div>
            </div>

            <div className="hairstyles-section">
                <h2>Hairstyle</h2>
                <div className="hairstyles-grid">
                    {filteredHairstyles.map((hairstyle) => (
                        <div key={hairstyle.hairstyleId} className="hairstyle-card"
                        // onClick={() => handleImageClick(hairstyle)}
                        >
                            <img
                                src={`${process.env.REACT_APP_DEV_URL}/../images/${hairstyle.hairstyleId}`}
                                alt={hairstyle.name} height={250}
                            />
                            <div className="hairstyle-info">
                                <h3>{hairstyle.name}</h3>
                                <p>Price: {hairstyle.price}</p>
                                <p>Description: {hairstyle.description}</p>
                                {/* <p>Salon: {hairstyle.salon}</p> */}
                            </div>
                            <button style={styles.blackButton} onClick={() => {
                                navigate(`/WebcamCapture`, { replace: true }) // Replace the current URL with the new one
                            }}>Try-on</button>
                            <button style={styles.blackButton} onClick={()=>{setBasicModal(!basicModal)}}>Book</button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};


export default HomePage;