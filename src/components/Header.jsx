import React from 'react';
import styles from '../styles/header.module.css';

function Header(props) {
    return (
        <div className={styles.header}>
            <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
            <button onClick={props.login} className={styles.login}>Login</button>
        </div>
    );
}

export default Header;
