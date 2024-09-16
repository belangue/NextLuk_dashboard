import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Institute.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [SelectedSalon, setSelectedSalon] = useState('');

   const hairsalon = [
    {name: '', description:'',town: 'Yaounde',imageUrl:require('../images/city1.jpg') ,},
    {name: '', description:'',town: 'Douala',imageUrl:require('../images/city2.jpg') ,},
    {name: '', description:'',town: 'Ngaoundere',imageUrl:require('../images/city3.jpg') ,},
   ]

    const handleImageClick = (hairsalon) => {
        const urlSearchParams = new URLSearchParams({
            image: hairsalon.imageUrl,
            name: hairsalon.name,
            town: hairsalon.town,
            salon: hairsalon.salon,
        });
        window.location.href = `/InfoPageSalon?${urlSearchParams.toString()}`;
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

    const filteredHairstyles = hairsalon.filter((hairsalon) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            (hairsalon.name.toLowerCase().includes(searchTermLower) ||
                hairsalon.town.toLowerCase().includes(searchTermLower) ||
                hairsalon.salon.toLowerCase().includes(searchTermLower)) &&
            (selectedTown === '' || hairsalon.town === selectedTown) &&
            (SelectedSalon === '' || hairsalon.salon === SelectedSalon)
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
                <h2>Beauty Institute</h2>
                <div className="hairstyles-grid">
                    {filteredHairstyles.map((hairsalon) => (
                        <div key={hairsalon.id} className="hairstyle-card" onClick={() => handleImageClick(hairsalon)}>
                            <img
                                src={hairsalon.imageUrl}
                                alt={hairsalon.name}
                            />
                            <div className="hairstyle-info">
                                <h3>{hairsalon.name}</h3>
                                <p>Town: {hairsalon.town}</p>
                                <p>Salon: {hairsalon.salon}</p>
                            </div>
                        </div>
                    ))}
                     <Footer></Footer>
                </div>
            </div>
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