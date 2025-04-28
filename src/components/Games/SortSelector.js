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
      </select>
    </div>
  );
}
