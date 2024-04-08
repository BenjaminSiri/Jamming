import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";

import Spotify from "./util/Spotify";

import credsJSON from "./cred.json";

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
    Spotify.savePlayList(playlistText, trackURIs);
  }

  const search = (term) => {
    Spotify.search(term)
    .then((tracks) => {
      setResults(tracks);
    });
  }

  const login = () => {
    Spotify.getAccessToken();
  }

  return (
    <div className={styles.app}>
      <Header login={login} />
      <SearchBar text={searchText} changeText={setSearchText} search={search} setResults={setResults}/>
      <div className={styles.body}>
        <TrackList cards={results} changePlaylist={setAddedSongs}/>
        <Playlist save={savePlaylist} cards={addedSongs} text={playlistText} changePlaylist={setAddedSongs} changeText={setPlaylistText}/>
      </div>
    </div>
  );
}

export default App;
