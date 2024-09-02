import React, { useState, useEffect } from 'react'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedHairstyle, setSelectedHairstyle] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [SelectedSalon, setSelectedSalon] = useState('');

    const [images, setImages] = useState([
        require('../images/image5.jpg'),
        require('../images/image3.jpg'),
        require('../images/image4.jpg'),
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
            imageUrl: require('../images/image10.jpg'),
        },
    ];

    const filteredHairstyles = hairstyles.filter((hairstyle) =>
        hairstyle.name.toLowerCase().includes(searchTerm.toLowerCase())
        && (selectedPrice === '' ||
            hairstyle.price === selectedPrice) &&
        (selectedHairstyle === '' ||
            hairstyle.name === selectedHairstyle)
        &&
        (selectedTown === '' ||
            hairstyle.town === selectedTown) &&
        (SelectedSalon === '' ||
            hairstyle.salon === SelectedSalon)
    );
    return (
        <div>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                webkitbackdropfilter: 'blur(10px)',
                height: '70px'
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
                </div>
            </header>

            <div style={{
                width: '100%',/* Adjust width as needed */
                height: '300px', /* Adjust height as needed */
                overflow: 'hidden', /* Hide overflowing content */
                position: 'relative',
            }}>
                <img
                    src={images[currentImageIndex]}
                    alt="Flipping"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fit-content', /* Ensure image fills the container */
                        transition: 'transform 0.5s ease-in-out',
                    }}
                    onClick={handleImageClick}
                />
                {/* Add additional elements or styling as needed */}
            </div>

            <div
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                    {filteredHairstyles.map((hairstyle) => (
                        <div key={hairstyle.id}
                            style={{

                            }}>
                            <img
                                src={hairstyle.imageUrl}
                                alt={hairstyle.name}
                                style={{ width: '200px', height: '200px', borderRadius: '8px', flex: '1 1 250px', paddingTop: '10px' }}
                                onClick={() => handleImageClick(hairstyle)} // Pass hairstyle object to handleImageClick
                            />
                            <h3>{hairstyle.name}</h3>
                            <p>Price:{hairstyle.price}</p>
                            <p>Town:{hairstyle.town}</p>
                            <p>Salon:{hairstyle.salon}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home