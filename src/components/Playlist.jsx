import React from 'react';

import PlaylistCard from './PlaylistCard';
import styles from "../styles/playlist.module.css";

function Playlist(props) {

    const handleChange = (event) => {
        props.changeText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(props.text !== '' && props.cards.length > 0) {
            props.save();
            props.changePlaylist([]);
        }
    };

    const cardDeck = props.cards.map((elem, i) => {
        return <PlaylistCard key={i} id={i} removePlaylist={props.changePlaylist} songTitle={elem.songTitle} songArtist={elem.songArtist} songAlbum={elem.songAlbum}/>;
    });

    return (
        <div className={styles.playlist}>
            <input placeholder="New Playlist" onChange={handleChange} />
            <div className={styles.playlistTracks}>
                {cardDeck}
            </div>
            <button className={styles.playlistSave} onClick={handleSubmit}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;