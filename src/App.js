import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import SearchBar from './components/searchBar';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        let tempData = [...data];

        if (searchQuery) {
            tempData = tempData.filter(row =>
                Object.values(row).some(val =>
                    String(val).toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }

        setFilteredData(tempData);
    }, [data, searchQuery]);

    

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'age', label: 'Age' },
        { key: 'role', label: 'Role' },
        { key: 'hireDate', label: 'Hire Date' },
        { key: 'isActive', label: 'Active' },
        { key: 'salary', label: 'Salary' },
        { key: 'department', label: 'Department' },
        { key: 'projectsCompleted', label: 'Projects Completed' },
        { key: 'lastLogin', label: 'Last Login' },
        { key: 'accessLevel', label: 'Access Level' },
    ];

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Filters onFilterChange={handleFilterChange} />
            <Table data={filteredData} columns={columns} />
        </div>
    );
};

export default App;
