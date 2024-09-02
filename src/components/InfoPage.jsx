import { useParams } from 'react-router-dom';

function InfoPage() {
    const { image, name, price, town, salon } = useParams();

    console.log('image:', image);
    console.log('name:', name);
    console.log('price:', price);
    console.log('town:', town);
    console.log('salon:', salon);

    // Use the extracted parameters to display information
    return (
        <div className="info-page">
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>Price: {price}</p>
            <p>Town: {town}</p>
            <p>Salon: {salon}</p>
            {/* Add more information as needed */}
        </div>
    );
}

export default InfoPage;