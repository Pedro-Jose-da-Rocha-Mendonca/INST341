import { useState } from 'react';
import { getUniqueGenres, getUniqueSellers, getUniquePlatforms } from '../../utils/gameData';

export default function GameFilters({ filters, onFilterChange }) {
  const genres = ['all', ...getUniqueGenres()];
  const sellers = ['all', ...getUniqueSellers()];
  const platforms = ['all', ...getUniquePlatforms()];
  
  return (
    <div className="game-filters">
      <h3 className="filters-title">Filter Games</h3>
      
      <div className="filters-group">
        <div className="filter-item">
          <label htmlFor="genre-filter">Genre:</label>
          <select 
            id="genre-filter"
            value={filters.genre || 'all'} 
            onChange={(e) => onFilterChange({...filters, genre: e.target.value})}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre === 'all' ? 'All Genres' : genre}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-item">
          <label htmlFor="seller-filter">Seller:</label>
          <select 
            id="seller-filter"
            value={filters.seller || 'all'} 
            onChange={(e) => onFilterChange({...filters, seller: e.target.value})}
          >
            {sellers.map(seller => (
              <option key={seller} value={seller}>
                {seller === 'all' ? 'All Sellers' : seller}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-item">
          <label htmlFor="platform-filter">Platform:</label>
          <select 
            id="platform-filter"
            value={filters.platform || 'all'} 
            onChange={(e) => onFilterChange({...filters, platform: e.target.value})}
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform === 'all' ? 'All Platforms' : platform}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <button 
        className="clear-filters-btn"
        onClick={() => onFilterChange({ genre: 'all', seller: 'all', platform: 'all' })}
      >
        Clear Filters
      </button>
    </div>
  );
}
