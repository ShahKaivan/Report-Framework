import React from 'react';

const searchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={e => onSearch(e.target.value)}
        />
    );
};

export default searchBar;
