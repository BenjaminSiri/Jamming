import React from 'react';

import styles from '../styles/searchBar.module.css';

function SearchBar(props) {

    const handleChange = (event) => {
        props.changeText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Search submitted');
    }

    return (
        <div>
            <form className={styles.searchForm} onSubmit={handleSubmit} >
                <input className={styles.searchBox} placeholder="Enter A Song, Album, or Artist" onChange={handleChange} />
                <button className={styles.searchButton}>SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;