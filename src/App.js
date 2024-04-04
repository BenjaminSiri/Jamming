import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import styles from "./styles/app.module.css";


function App() {
  const [searchText, setSearchText] = useState('');


  return (
    <div className={styles.app}>
      <Header />
      <SearchBar changeText={setSearchText} />
    </div>
  );
}

export default App;
