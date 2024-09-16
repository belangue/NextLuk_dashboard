// import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import Map from './Map';



// function InfoPage() {
//     const navigate = useNavigate()
//     // const searchParams = useSearchParams();
//     const [searchParams, setsearchParams] = useSearchParams()
//     console.log(searchParams);

//     let image = searchParams.get("image")
//     let name = searchParams.get("name")
//     let price = searchParams.get("price")
//     let town = searchParams.get("town")
//     let salon = searchParams.get("salon")

//     console.log('image:', searchParams.get("image"));
//     // console.log('name:', searchParams.get("name"));
//     // console.log('price:', searchParams.get("price"));
//     // console.log('town:', searchParams.get("town"));
//     // console.log('salon:', searchParams.get("salon"));

//     // Use the extracted parameters to display information
//     return (
//         <div><button style={{
//             position: 'absolute',
//             top: '7px',
//             right: '130px',
//             zIndex: 1
//         }} className='btn-outline-info'  >Try-on</button>
//             <div className='row' style={{}}>
//                 <div className='col-md-3'>
//                     <img className='100-mh' src={image} alt={name} width={"100%"} />
//                 </div>
//                 <div className='col-md-9'>
//                     <div style={{ display: 'block', width: '100%', backgroundColor: 'transparent' }}>
//                         <h1>{name}</h1>
//                         <p>Price: {price} </p>
//                         <p>Town: {town}</p>
//                         <p>Salon: {salon}</p>
//                         {/* Add more information as needed */}
//                     </div>
//                 </div>
//             </div>
//             <Map></Map>
//         </div>
//     );
// }

// export default InfoPage;

import React, { useState } from 'react';
import { MapPin, Star, Search } from 'lucide-react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
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
    height: '100%', 
    minHeight: '400px',// Ensure it takes full height
  },
  
};

const SalonList = () => {
  const [salons] = useState([
    {
      id: 1,
      name: "Body Float - Centre de Flottaison - Paris 04",
      location: "Châtelet Hôtel de Ville",
      address: "5 Rue Saint-Bon, 75004 Paris",
      rating: 4.6,
      reviews: 14,
      imageUrl: require('../images/ponytail.jfif'),
    },
    {
      id: 2,
      name: "Point Soleil - Paris 04 Châtelet Hôtel de Ville",
      location: "Châtelet Hôtel de Ville",
      address: "5 Rue Saint-Bon, 75004 Paris",
      rating: 4.9,
      reviews: 25,
      imageUrl: require('../images/bohemian.jfif'),
    },
    {
        id: 3,
        name: "Point Soleil - Paris 04 Châtelet Hôtel de Ville",
        location: "Châtelet Hôtel de Ville",
        address: "5 Rue Saint-Bon, 75004 Paris",
        rating: 4.9,
        reviews: 25,
        imageUrl: require('../images/bohemian.jfif'),
      },
    // Add more salon objects here to test scrolling
  ]);

  const navigate = useNavigate()
 const params = useSearchParams();
    const [searchParams, setsearchParams] = useSearchParams()
    console.log(searchParams);

    let town = searchParams.get("town")

    console.log('town:', searchParams.get("town"));

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}><a href="/FirstPage">Nextluk</a></div>
        <div style={styles.searchBar}>
          <input type="text" placeholder="Hairstyle" style={{...styles.input, flexGrow: 1}} />
          <input type="text" placeholder={town} style={{...styles.input, width: '25%'}} />
          <select style={{...styles.input, width: '25%'}}>
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

          <h2 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '8px'}}>Select a hairstyle</h2>
          <p style={{marginBottom: '24px', color: '#666'}}>The best hairstyles ready to be tested : Visualize hairstyle</p>

          {salons.map((salon) => (
            <div key={salon.id} style={styles.salonItem}>
              <img src={salon.imageUrl} alt={salon.name} style={styles.salonImage} />
              <div style={styles.salonInfo}>
                <h3 style={styles.salonName}>{salon.name}</h3>
                <p style={styles.salonAddress}><MapPin size={16} style={{marginRight: '4px'}} /> {salon.address}</p>
                <p style={styles.salonRating}><Star size={16} style={{marginRight: '4px', color: '#ffc107'}} /> {salon.rating} ({salon.reviews} avis)</p>
                <button style={styles.blackButton} onClick={() => {
     navigate(`/WebcamCapture`, { replace: true }) // Replace the current URL with the new one
              }}>Try-on</button>
              </div>
            </div>
          ))}
        </div>
        <div style={styles.rightPanel}>
  {typeof window !== 'undefined' && <Map />}
</div>
      </div>
      <Footer></Footer>
    </div>
  
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

export default SalonList;