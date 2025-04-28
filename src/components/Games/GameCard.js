import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function GameCard({ game }) {
  const [imageError, setImageError] = useState(false);
  
  // Create a proper image URL
  let imageUrl;
  try {
    // Try to import the image directly from the images folder
    imageUrl = require(`../../images/${game.id}.jpg`);
  } catch (error) {
    // If image doesn't exist in the images folder, use the default placeholder
    imageUrl = 'https://via.placeholder.com/300x150?text=Game+Image';
  }
  
  const isFree = game.price === 0 || game.price === 0.00;
  
  return (
    <Link 
      to={`/games/${game.id}`}
      className="card hover-lift"
    >
      {isFree && <span className="card-badge">Free</span>}
      
      <div className="card-image-container">
        <img 
          src={imageError ? 'https://via.placeholder.com/300x150?text=Game+Image' : imageUrl} 
          alt={game.title} 
          className="card-image"
          onError={() => setImageError(true)}
        />
      </div>
      
      <div className="card-content">
        <h3>{game.title}</h3>
        <p className="card-seller">{game.seller}</p>
        
        <div className="card-meta">
          <div className="card-genres">
            {game.genre && game.genre.length > 0 && game.genre[0]}
          </div>
          
          <div className="card-price">
            {isFree ? 'Free' : `$${game.price?.toFixed(2)}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
