export default function SortSelector({ sortType, onSortChange }) {
  return (
    <div className="sort-selector">
      <span>Sort by:</span>
      <select 
        value={sortType} 
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="seller">Seller</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}
