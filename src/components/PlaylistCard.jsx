import React from 'react';

import styles from '../styles/playlistCard.module.css';

function PlaylistCard(props) {

    const onClick = (event) => {
        event.preventDefault();
        props.removePlaylist((prev) => {
            return prev.filter((elem, i) => {
                return i !== props.id;
            });
        });
    };

    return (
        <div className={styles.playlistCard}>
            <div className={styles.information}>
                <h2>{props.songTitle}</h2>
                <div className={styles.description}>
                    <h5>{props.songArtist}</h5>
                    <h5>{props.songAlbum}</h5>
                </div> 
            </div>
            <button onClick={onClick} className={styles.playlistCardButton}>x</button>
        </div>
    )
}

export default PlaylistCard;