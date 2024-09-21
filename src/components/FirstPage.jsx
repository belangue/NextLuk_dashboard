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
import './FirstPage.css';
import { toast } from 'react-toastify';

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
      <div className="logo">NextLuk</div>
      <nav>
        <ul>
          <li><a href="/HomePage">Hairstyle</a></li>
          <li><a href="/Institute">Beauty Institute</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="btn btn-outline">Ajoutez votre établissement</button>
        {localStorage.getItem('nextluk_token')  ? (
          <button className="btn btn-solid"
          onClick={handleLogout}
          >Se deconnecter</button>
        ) : (
          <button className="btn btn-solid">Se connecter</button>
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
                <h1 className='h1Carousel'>Welcome To Gorgeous braids by Carol</h1>
                <h1 className='h1Carousel2'>Beauty at your service</h1>
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
                src={require('../images/images/photo2.jpg')}
                className='d-block w-100'
                alt='...'
                style={{
                  opacity: '0.8 grey',
                  width: '100%',
                  height: '1100px',
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
                src={require('../images/images/photo3.jpg')}
                className='d-block w-100'
                alt='...'
                style={{
                  opacity: '0.8 grey',
                  height: '100%',
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
        <Footer></Footer>
      </div>
    </main>

  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">PLANITY</h2>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">○</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>À propos de Planity</h3>
          <ul>
            <li>Ajoutez votre établissement</li>
            <li>Rejoignez-nous</li>
            <li>CGU</li>
            <li>Planity Belgique</li>
            <li>Planity België</li>
            <li>Planity Deutschland</li>
            <li>Politique de confidentialité</li>
            <li>Politique de lutte contre les contenus illicites</li>
            <li>Gestion des cookies</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Trouvez votre prestation</h3>
          <ul>
            <li>Coiffeur</li>
            <li>Institut de beauté</li>
            <li>Barbier</li>
            <li>Manucure et beauté des pieds</li>
            <li>Spa</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recherches fréquentes</h3>
          <ul>
            <li>Coiffeur Paris</li>
            <li>Coiffeur Bordeaux</li>
            <li>Coiffeur Lyon</li>
            <li>Coiffeur Toulouse</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Planity</p>
      </div>
    </footer>
  );
};


export default App;