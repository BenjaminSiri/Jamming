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
                    <h4>{props.songArtist}</h4>
                    <h4>{props.songAlbum}</h4>
                </div> 
            </div>
            <button onClick={onClick} className={styles.playlistCardButton}>X</button>
        </div>
    )
}

export default PlaylistCard;