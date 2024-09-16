import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedHairstyle, setSelectedHairstyle] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [SelectedSalon, setSelectedSalon] = useState('');

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
            imageUrl: require('../images/ponytail.jfif')
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
        // ... (include all other hairstyles here)
    ];

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
        if (item === 'Hairstyle') {
            navigate('/FirstPage');
        }
    };

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
        <div className="planity-container">
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
                    <button>Book now</button>
                </div>
            </header>

            <div className="main-content">
                <h1>Reserve an appointment online for a haircut</h1>
                
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <Search size={20} className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="What are you looking for?" 
                            defaultValue="Hairstyle"
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                        <div key={hairstyle.id} className="hairstyle-card" onClick={() => handleImageClick(hairstyle)}>
                            <img
                                src={hairstyle.imageUrl}
                                alt={hairstyle.name}
                            />
                            <div className="hairstyle-info">
                                <h3>{hairstyle.name}</h3>
                                <p>Price: {hairstyle.price}</p>
                                <p>Town: {hairstyle.town}</p>
                                <p>Salon: {hairstyle.salon}</p>
                            </div>
                        </div>
                    ))}
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
  

export default HomePage;