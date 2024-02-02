// Search.js

import React from 'react';
import './search.css';
import { MdSearch } from 'react-icons/md';

const Search = ({ city, setCity, onSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city name"
                className="combined-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <div className="icon-container" onClick={onSearch}>
                <MdSearch size={20} color="#007bff" />
            </div>
        </div>
    );
};

export default Search;
