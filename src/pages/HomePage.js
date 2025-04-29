import { useState, useEffect } from 'react';
import { getSortedGames, getFilteredGames } from '../utils/gameData';
import Layout from '../components/Layout';
import GameCard from '../components/Games/GameCard';
import SortSelector from '../components/Games/SortSelector';
import GameFilters from '../components/Games/GameFilters';

export default function HomePage() {
  const [sortType, setSortType] = useState('alphabetical');
  const [filters, setFilters] = useState({
    genre: 'all',
    seller: 'all',
    platform: 'all'
  });
  const [displayedGames, setDisplayedGames] = useState([]);
  
  useEffect(() => {
    const filteredGames = getFilteredGames(filters);
    const sortedFilteredGames = getSortedGames(sortType, filteredGames);
    setDisplayedGames(sortedFilteredGames);
  }, [sortType, filters]);
  
  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="home-container">
        <section className="hero-section fade-in">
          <h1 className="hero-title">Game Collection Hub</h1>
          <div className="hero-content slide-up delay-100">
            <p className="hero-text">
              Welcome to our Game Collection Hub! This website serves as a comprehensive database of video games,
              providing detailed information about various titles including their descriptions, publishers, release dates,
              and more. Browse through our collection to discover both classic and new games across different platforms.
            </p>
          </div>
        </section>

        <section className="filters-section slide-up delay-100">
          <GameFilters filters={filters} onFilterChange={handleFilterChange} />
        </section>

        <section className="games-section slide-up delay-200">
          <div className="section-header">
            <h2 className="section-title">Game Collection</h2>
            <div className="section-controls">
              <SortSelector sortType={sortType} onSortChange={handleSortChange} />
              <span className="game-count">{displayedGames.length} games</span>
            </div>
          </div>
          
          {displayedGames.length === 0 ? (
            <div className="no-games-message">
              <p>No games match your current filters. Try adjusting your filters to see more games.</p>
            </div>
          ) : (
            <div className="games-grid">
              {displayedGames.map((game, index) => (
                <div key={game.id} className={`game-card-wrapper delay-${(index % 3 + 1) * 100}`}>
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
