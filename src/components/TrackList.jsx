import React from 'react';
import TrackCard from './TrackCard';
import styles from '../styles/trackList.module.css';

function TrackList(props) {

    const cardDeck = props.cards.map((elem, i) => {
        return <TrackCard key={i} addPlaylist={props.changePlaylist} songTitle={elem.songTitle} songArtist={elem.songArtist} songAlbum={elem.songAlbum} uri={elem.uri}/>;
    });

  return (
    <div className={styles.trackList}>
      <h2>TrackList</h2>
      <div className={styles.trackDeck}>
        {cardDeck}
      </div>
    </div>
  );
}

export default TrackList;