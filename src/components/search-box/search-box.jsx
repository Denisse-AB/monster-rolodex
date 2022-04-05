import './search-box.css';

export const SearchBox = ({ className, placeholder, handleChange}) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);