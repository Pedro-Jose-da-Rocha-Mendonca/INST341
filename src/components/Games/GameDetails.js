import { getGeneralGenre } from '../../utils/gameData';
import { getDublinCoreById } from '../../data/dublinCore';

export default function GameDetails({ game }) {
  const priceDisplay = game.price === 0 || game.price === 0.00 
    ? 'Free to Play' 
    : `$${game.price?.toFixed(2)}`;

  const imagePath = require(`../../images/${game.id}.jpg`);
  
  const genresByCategory = {};
  game.genre.forEach(genre => {
    const generalGenre = getGeneralGenre(genre);
    if (!genresByCategory[generalGenre]) {
      genresByCategory[generalGenre] = [];
    }
    genresByCategory[generalGenre].push(genre);
  });

  // Get Dublin Core metadata
  const dublinCore = getDublinCoreById(game.id);

  return (
    <div className="game-detail fade-in">
      <div className="game-header">
        <img 
          src={imagePath} 
          alt={game.title} 
          className="game-header-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x500?text=Game+Image';
          }}
        />
        <div className="game-header-overlay">
          <h1 className="hero-title">{game.title}</h1>
        </div>
      </div>

      <div className="game-content">
        <div className="game-meta">
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
            {game.seller}
          </span>
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
            </svg>
            {game.releaseDate}
          </span>
          <span className="meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
              <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
            </svg>
            {priceDisplay}
          </span>
        </div>

        <div className="slide-up">
          <h2 className="section-title">Description</h2>
          <p className="game-description">{game.description}</p>

          {dublinCore && (
            <div className="dublin-core-metadata">
              <h3 className="section-title">Additional Information</h3>
              <div className="metadata-grid">
                <div className="metadata-item">
                  <span className="metadata-label">Creator:</span>
                  <span>{dublinCore.creator}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Publisher:</span>
                  <span>{dublinCore.publisher}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Rights:</span>
                  <span>{dublinCore.rights}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label">Language:</span>
                  <span>{dublinCore.language}</span>
                </div>
              </div>
            </div>
          )}

          <div className="genre-categories">
            <h3 className="genre-title">Game Genres</h3>
            {Object.entries(genresByCategory).map(([category, genres]) => (
              <div key={category} className="genre-category">
                <span className="category-name">{category}:</span>
                <div className="game-tags">
                  {genres.map((genre, index) => (
                    <span key={index} className="tag">{genre}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slide-up delay-100">
          <h2 className="section-title">Platforms</h2>
          <div className="game-tags">
            {game.platforms.map((platform, index) => (
              <span key={index} className="tag">{platform}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
