import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";

import styles from "./styles/app.module.css";


function App() {
  const [searchText, setSearchText] = useState('');
  const [playlistText, setPlaylistText] = useState('');
  const [results, setResults] = useState([]);
  const [addedSongs, setAddedSongs] = useState([]);

  const savePlaylist = () => {
    const trackURIs = addedSongs.map((elem) => {
      return elem.uri;
    });
    console.log(trackURIs);
  }

  return (
    <div className={styles.app}>
      <Header />
      <SearchBar text={searchText} changeText={setSearchText} setResults={setResults}/>
      <div className={styles.body}>
        <TrackList cards={results} changePlaylist={setAddedSongs}/>
        <Playlist save={savePlaylist} cards={addedSongs} text={playlistText} changePlaylist={setAddedSongs} changeText={setPlaylistText}/>
      </div>
    </div>
  );
}

export default App;
