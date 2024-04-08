import React from 'react';

import styles from '../styles/trackCard.module.css';

function TrackCard(props) {

  const onClick = (event) => {
    event.preventDefault();
    props.addPlaylist((prev) => {
        return [...prev, {songTitle: props.songTitle, songArtist: props.songArtist, songAlbum: props.songAlbum, uri: props.uri}];
    });
  }

  return (
    <div className={styles.trackCard}>
      <div className={styles.information}>
        <h2>{props.songTitle}</h2>
        <div className={styles.description}>
            <h5>{props.songArtist}</h5>
            <h5>{props.songAlbum}</h5>
        </div>    
      </div>
      <button onClick={onClick} className={styles.trackCardButton}>+</button>
    </div>
  );
}

export default TrackCard;