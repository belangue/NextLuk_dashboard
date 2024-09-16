import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import styled from 'styled-components';

const PlanityContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
`;

const logo = styled.logo`
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
  }

  ul li {
    cursor: pointer;
  }
`;
const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: black;
    transform: scale(0);
    transition: transform 0.3s ease;
  }
     &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }

  ${Logo} ul li:hover &::before,
  ${Logo} ul li:hover &::after {
    width: 50%;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 1rem;
  }

  ul li {
    cursor: pointer;
  }
`;

const NavItem = styled.span`
  position: relative;
  padding-bottom: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }

  ${Nav} ul li:hover &::before,
  ${Nav} ul li:hover &::after {
    width: 50%;
  }
`;

const HeaderButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const MainContent = styled.div`
  max-width: 980px;
  margin: 100px auto;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  flex-grow: 1;

  input {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 70px;
    font-size: 1rem;
  }

  .search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
`;

const HairstylesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const HairstylesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const HairstyleCard = styled.div`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const HairstyleInfo = styled.div`
  padding: 1rem;

  h3 {
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }
`;



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
        <PlanityContainer>
            <Header>
            <logo></logo>
                <Nav>
                    <ul>
                        {['Hairstyle', 'Beauty Institute'].map((item) => (
                            <li key={item} onClick={() => handleNavClick(item)}>
                                <NavItem>{item}</NavItem>
                            </li>
                        ))}
                    </ul>
                </Nav>
                <div>
                    <HeaderButton>Book now</HeaderButton>
                </div>
            </Header>

            <MainContent>
                <h1>Reserve an appointment online for a haircut</h1>
                
                <SearchContainer>
                    <SearchInputWrapper>
                        <Search size={20} className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="What are you looking for?" 
                            defaultValue="Hairstyle"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </SearchInputWrapper>
                    <SearchInputWrapper>
                        <input 
                            type="text" 
                            placeholder="Address, town..." 
                        />
                    </SearchInputWrapper>
                    <SearchButton>Search</SearchButton>
                </SearchContainer>
            </MainContent>

            <HairstylesSection>
                <h2>Hairstyle</h2>
                <HairstylesGrid>
                    {filteredHairstyles.map((hairstyle) => (
                        <HairstyleCard key={hairstyle.id} onClick={() => handleImageClick(hairstyle)}>
                            <img
                                src={hairstyle.imageUrl}
                                alt={hairstyle.name}
                            />
                            <HairstyleInfo>
                                <h3>{hairstyle.name}</h3>
                                <p>Price: {hairstyle.price}</p>
                                <p>Town: {hairstyle.town}</p>
                                <p>Salon: {hairstyle.salon}</p>
                            </HairstyleInfo>
                        </HairstyleCard>
                    ))}
                </HairstylesGrid>
            </HairstylesSection>
        </PlanityContainer>
    );
};

export default HomePage;