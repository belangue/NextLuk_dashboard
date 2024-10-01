// // App.js
// import React, {useState, useEffect} from 'react';
// import './FirstPage.css';
// import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";
// import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
// import { MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBFooter, MDBRipple, MDBRow } from 'mdb-react-ui-kit'
// import defaultLogo from '../images/logo.jpg'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';


// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Main />
//     </div>
//   );
// };
// const Home = () => {
//     let item = useLoaderData();
//     const navigate = useNavigate();
//     let cardWidth = (window.innerWidth / 4)
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth)
//     const handleChanges = () => {
//         setScreenWidth(window.innerWidth)
//     }

// }
// const Header = () => {
//   return (
//     <header>
//       <div className="logo">PLANITY</div>
//       <nav>
//         <ul>
//           <li><a href="#">Coiffeur</a></li>
//           <li><a href="#">Barbier</a></li>
//           <li><a href="#">Manucure</a></li>
//           <li><a href="#">Institut de beauté</a></li>
//         </ul>
//       </nav>
//       <div className="cta-buttons">
//         <button className="btn btn-outline">Ajoutez votre établissement</button>
//         <button className="btn btn-solid">Se connecter</button>
//       </div>
//     </header>
//   );
// };

// const Main = () => {
//   return (
//     <main>
//      <MDBCarousel
//                 showIndicators
//                 showControls
//                 fade
//                 light
//                 fadeautoplay={true}
//                 interval={100000}
//                 keyboard={true}
//             // pause={true}
//             >
//                 <MDBCarouselItem itemId={1}>
//                     {/* <img
//                         src={img2}
//                         className='d-block w-100'
//                         alt='...'
//                         height={520}
//                         style={{
//                             opacity: '0.8 grey'
//                         }}
//                     /> */}
//                     <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
//                         <img
//                             src={require('../images/images/img3.jpg')}
//                             className='d-block w-100'
//                             alt='...'
//                             height={650}
//                             style={{
//                                 // opacity: '0.8 grey'
//                             }}
//                         />
//                         <a href='#!' onClick={() => {
//                             // setBasicModal(true)
//                         }}>
//                             <div className='mask' style={{
//                                 display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
//                                 color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
//                                 fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
//                                 transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
//                             }}> Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
//                         </a>
//                     </MDBRipple>
//                     <MDBCarouselCaption>
//                         {/* <div style={{marginTop:"-400px"}}> */}
//                         <center style={{ border: 'solid 1px transparent', marginLeft: '200px' }}>
//                             <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
//                             <h1 className='h1Carousel2'>Beauty at your service</h1>
//                             <p>Our braids all kinds offers you a unique and personalized style that will make you shine
//                                 from the inside and give you confidence in yourself, while highlighting your natural beauty.
//                             </p>
//                             {/* <button}
//                                 className='submit2'
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     alignItems: "center"
//                                 }}
//                                 onClick={toggleOpen}
//                             >
//                                 Make An Appoinment
//                             </button>
//                         </center>
//                         {/* <Service /> */}
//                             {/* </div> */}</center>
//                     </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId={2}>
//                     <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
//                         <img
//                             src={require('../images/images/img1.avif')}
//                             className='d-block w-100'
//                             alt='...'
//                             height={650}
//                             style={{
//                                 opacity: '0.8 grey'
//                             }}
//                         />
//                         <a href='#!' onClick={() => {
//                             // setBasicModal(true)
//                         }}>
//                             <div className='mask' style={{
//                                 display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
//                                 color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
//                                 fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
//                                 transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
//                             }}>Welcome To Our Application<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
//                         </a>
//                     </MDBRipple>
//                     <MDBCarouselCaption>
//                         {/* <div style={{ textAlign: "right" }}> */}
//                         <center style={{ border: 'solid 1px transparent', marginRight: '200px', marginLeft: '-50px' }}>
//                             <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
//                             <h1 className='h1Carousel2'>Beauty at your service</h1>
//                             <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
//                                 from the inside and give you confidence in yourself, while highlighting your natural beauty.
//                             </p>
//                             <div style={{
//                                 display: "flex",
//                                 justifyContent: "flex-end"
//                             }}>
//                                 {/* <button
//                                     className='submit2'
//                                     style={{
//                                         textAlign: "right"
//                                     }}
//                                     onClick={toggleOpen}
//                                 >
//                                     Make An Appoinment
//                                 </button> */}
//                             </div>
//                             {/* </div> */}
//                         </center>
//                         {/* <Service /> */}
//                     </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId={3}>
//                     <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height:'100%' }}>
//                         <img
//                             src={require('../images/images/img2.webp')}
//                             className='d-block w-100'
//                             alt='...'
//                             height={650}
//                             style={{
//                                 opacity: '0.8 grey'
//                             }}
//                         />
//                         <a href='#!' onClick={() => {
//                             // setBasicModal(true)
//                         }}>
//                             <div className='mask' style={{
//                                 display: screenWidth < 700 ? 'block' : 'none', fontFamily: 'tahoma',
//                                 color: 'white', backgroundColor: 'rgba(0,0,0,0.15)', height: 'fit-content',
//                                 fontWeight: 'lighter', top: '50%', left: '50%', width: '70%',
//                                 transform: 'translate(-50% ,-50%)', textAlign: 'center', fontSize: 'x-large'
//                             }}>Welcome To Gorgeous braids by Carol<br /><span style={{ color: 'orange' }}>Beauty at your service</span></div>
//                         </a>
//                     </MDBRipple>
//                     <MDBCarouselCaption>
//                         <div style={{ textAlign: "left" }}>
//                             {/* <center> */}
//                             <h1 className='h1Carousel'>Welcome To Our Application</h1>
//                             <h1 className='h1Carousel2'>Beauty at your service</h1>
//                             <p>Our braids company of all kinds offers you a unique and personalized style that will make you shine
//                                 from the inside and give you confidence in yourself, while highlighting your natural beauty.
//                             </p>
//                             {/* <button
//                                 className='submit2'
//                                 style={{
//                                     textAlign: "right"
//                                 }}
//                                 onClick={toggleOpen}
//                             >
//                                 Make An Appoinment
//                             </button> */}
//                         </div>
//                         {/* </center> */}
//                         {/* <Service /> */}
//                     </MDBCarouselCaption>
//                 </MDBCarouselItem>
//             </MDBCarousel>
//       <div className="hero">
//         <div className="hero-content">
//           <h1>Réservez en beauté</h1>
//           <p>Simple • Immédiat • 24h/24</p>
//           <SearchBar />
//         </div>
//       </div>
//     </main>
//   );
// };

// const SearchBar = () => {
//   return (
//     <div className="search-bar">
//       <div className="search-input">
//         <label htmlFor="service">Que cherchez-vous ?</label>
//         <input type="text" id="service" placeholder="Nom du salon, prestations (coupe...)" />
//       </div>
//       <div className="search-input">
//         <label htmlFor="location">Où ?</label>
//         <input type="text" id="location" placeholder="Adresse, ville..." />
//       </div>
//       <button className="btn btn-search">Rechercher</button>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBRipple } from "mdb-react-ui-kit";
import { useLoaderData, useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PlusCircle, Clock, CalendarCheck, Scissors, DollarSign } from 'lucide-react';
import './FirstPage.css';
import FAQ from './FAQ';
import AboutUs from './AboutUs';
import Footer from './Footer';
import { toast } from 'react-toastify';

const professionals = [
  {
    title: 'Hairdresser',
    description: "Discover our hair experts for an exceptional hair transformation.",
    image: require('../images/beauty3.jpg'),
  },
  {
    title: 'Hairdresser',
    description: "Discover our hair experts for an exceptional hair transformation.",
    image: require('../images/beauty2.jpg'),
  },
  {
    title: 'Hairdresser',
    description: "Discover our hair experts for an exceptional hair transformation.",
    image: require('../images/beauty1.jpg'),
  },
  {
    title: 'Hairdresser',
    description: "Discover our hair experts for an exceptional hair transformation.",
    image: require('../images/beauty4.jpg'),
  },
];

const SeeMoreComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        {!isExpanded && (
          <span style={styles.seeMore} onClick={toggleExpanded}>
            See More
          </span>
        )}
      </p>
      
      {isExpanded && (
        <div style={styles.extraContent}>
          <p>Here is some more detailed information that you can now see!</p>
          <button style={styles.seeLessBtn} onClick={toggleExpanded}>
            See Less
          </button>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    padding: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  text: {
    display: 'inline',
  },
  seeMore: {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  extraContent: {
    marginTop: '10px',
  },
  seeLessBtn: {
    backgroundColor: 'lightgray',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '3px',
  },
};

const ProfessionalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % professionals.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + professionals.length) % professionals.length);
  };

  return (
    <div className="professional-carousel">
      <div className="image-container">
        <img 
          src={professionals[currentIndex].image} 
          alt={professionals[currentIndex].title} 
          className="carousel-image"
        />
      </div>
      <div className="content-container">
      <div>
    <h2>Discover Our Professionals</h2>
    <h3>{professionals[currentIndex].title}</h3>
    <p>{professionals[currentIndex].description}</p>
   <SeeMoreComponent/>
</div>
        <div className="navigation-container">
          <button onClick={prevSlide} className="nav-button">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="nav-button">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const StatBox = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`stat-box ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-description">{description}</p>
      </div>
    </div>
  );
};

const BeautyStatsGrid = () => {
  return (
    <div className="container">
      <h1 className="main-title">STRONG GROWTH</h1>
      <h2 className="sub-title">
        Are you a beauty professional?<br />
        Discover online booking!
      </h2>
      <div className="stats-grid">
        <StatBox
          title="+ 50%"
          description="50% increase in online appointments"
        />
        <StatBox
          title="4x"
          description="4 times fewer missed appointments thanks to SMS reminders"
        />
        <StatBox
          title="50%"
          description="50% of online appointments booked outside of business hours"
        />
        <StatBox
          title="+ 40,000"
          description="Salons & institutes"
        />
        <StatBox
          title="4 appointments"
          description="Booked every second"
        />
        <StatBox
          title="> €5 billion"
          description="Worth of appointments booked"
        />
      </div>
    </div>
  );
};

const PlanityInterface = () => {
  return (
    <div className="planity-container1">
      <div className="image-container1">
        <img src={require('../images/beauty5.jpg')} alt="Team photo" className="team-photo" />
      </div>
      <div className="content-container1">
        <h2 className="professional-tag">PROFESSIONAL</h2>
        <p className="main-title1">
          Nextluk is looking for professionals across Cameroon to digitalize the beauty industry
        </p>
        <p className="ceo-name">Ndongo Josepha - CEO</p>
        <button className="discover-button">Discover our offers</button>
      </div>
    </div>
  );
};

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="app">
      <Header />
      <Main screenWidth={screenWidth} />
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await fetch(`${process.env.REACT_APP_DEV_URL}/user/logout`, {
      method: 'get',
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
        if (response.message) {
          // toast.success(response.message);
          await localStorage.setItem('nextluk_token', '');
        }
        // toast.error(response.error);
        await localStorage.setItem('nextluk_token', '');

      })
      .catch(async err => {
        console.log(err);
        // toast.success("Logout Success");
        await localStorage.setItem('nextluk_token', '');
      });
      window.location.reload();
  }
  return (
    <header className="header-overlay">
      <div className="logo"><a href="/FirstPage">Nextluk</a></div>
      <nav>
        <ul>
          <li><a href="/HomePage">Hairstyle</a></li>
          <li><a href="/Institute">Beauty Institute</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        {localStorage.getItem('nextluk_token')  ? (
          <button className="btn btn-solid"
          onClick={handleLogout}
          >SignUp</button>
        ) : (
          <button className="btn btn-solid">SignUp</button>
        )}
      </div>
    </header>
  );
};

const Main = ({ screenWidth }) => {
  return (
    <main>
      <div className="carousel-container">
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
            <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height: '100%' }}>
              <img
                src={require('../images/images/photo1.jpg')}
                className='d-block w-100'
                alt='...'
                height={760}
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
              <h1 className='h1Carousel' style={{color:'white'}}>Welcome To Our Application</h1>
              <h1 className='h1Carousel2' style={{color:'white'}}>Beauty at your service</h1>
                <p>
                  Our hair salons offers you a unique and personalized style that will make you shine
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
            <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow'>
              <img
                src={require('../images/images/new7.jpg')}
                className='d-block w-100'
                alt='...'
                style={{
                  opacity: '0.8 grey',
                  width: '100%',
                  height: '870px',
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
                }}>Welcome To Our Application<br /><span style={{ color: 'white' }}>Beauty at your service</span></div>
              </a>
            </MDBRipple>
            <MDBCarouselCaption>
              {/* <div style={{ textAlign: "right" }}> */}
              <center style={{ border: 'solid 1px transparent', marginRight: '200px', marginLeft: '-50px' }}>
              <h1 className='h1Carousel' style={{color:'white'}}>Welcome To Our Application</h1>
              <h1 className='h1Carousel2' style={{color:'white'}}>Beauty at your service</h1>
                <p>Reimagine Your Hair: Visualize Stunning Styles and Secure Your Appointment with Ease!
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
            <MDBRipple rippleTag='div' className='bg-image overlay hover-zoom hover-shadow' style={{ width: "100%", height: '10%' }}>
              <img
                src={require('../images/images/new8.jpg')}
                className='d-block w-100'
                alt='...'
                style={{
                  opacity: '0.8 grey',
                  height: '100%',
                  width: '100%',
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
                <h1 className='h1Carousel' style={{color:'white'}}>Welcome To Our Application</h1>
                <h1 className='h1Carousel2' style={{color:'white'}}>Beauty at your service</h1>
                <p>Transform your look: Discover, Visualize, and Book your Perfect Hairstyle Today!
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
        <ProfessionalCarousel/>
        <AboutUs/>
        <BeautyStatsGrid/>
        <PlanityInterface/>
        <FAQ/>
        <Footer></Footer>
      </div>
    </main>

  );
};






export default App;