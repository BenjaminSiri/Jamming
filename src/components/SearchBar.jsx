import React from 'react';

import cardsJSON from '../examples.json';

import styles from '../styles/searchBar.module.css';

function SearchBar(props) {

    const handleChange = (event) => {
        props.changeText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.text !== '') {
            props.search(props.text);
        }
    }

    return (
        <div className={styles.searchForm}>
            <form onSubmit={handleSubmit} >
                <input className={styles.searchBox} placeholder="Enter A Song, Album, or Artist" onChange={handleChange} />
                <button className={styles.searchButton}>SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;