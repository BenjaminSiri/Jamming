import React from 'react';
import styles from '../styles/header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
            <button className={styles.login}>Login</button>
        </div>
    );
}

export default Header;
