import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getGeneralGenre } from '../../utils/gameData';

export default function GameCard({ game }) {
  const [imageError, setImageError] = useState(false);
  
  let imageUrl;
  try {
    imageUrl = require(`../../images/${game.id}.jpg`);
  } catch (error) {
    imageUrl = 'https://via.placeholder.com/300x150?text=Game+Image';
  }
  
  const isFree = game.price === 0 || game.price === 0.00;
  
  const mainGenre = game.genre && game.genre.length > 0 ? 
    getGeneralGenre(game.genre[0]) : '';
  
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
            {mainGenre}
          </div>
          
          <div className="card-price">
            {isFree ? 'Free' : `$${game.price?.toFixed(2)}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
