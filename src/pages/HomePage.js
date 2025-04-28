import { useState } from 'react';
import { getSortedGames } from '../utils/gameData';
import Layout from '../components/Layout';
import GameCard from '../components/Games/GameCard';
import SortSelector from '../components/Games/SortSelector';

export default function HomePage() {
  const [sortType, setSortType] = useState('alphabetical');
  const sortedGames = getSortedGames(sortType);

  const handleSortChange = (newSortType) => {
    setSortType(newSortType);
  };

  return (
    <Layout>
      <div className="home-container">
        {/* Hero Section */}
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

        {/* Game Collection Section */}
        <section className="games-section slide-up delay-200">
          <div className="section-header">
            <h2 className="section-title">Game Collection</h2>
            <SortSelector sortType={sortType} onSortChange={handleSortChange} />
          </div>
          
          <div className="games-grid">
            {sortedGames.map((game, index) => (
              <div key={game.id} className={`game-card-wrapper delay-${(index % 3 + 1) * 100}`}>
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
