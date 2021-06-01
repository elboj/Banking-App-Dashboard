/* eslint-disable */
import React, { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar/Sidebar";
import { Sidebar, SearchBar } from "./components/index";
import "./index.css";

function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <main>
      <section className="container">
        {hidden && <Sidebar />}
        <SearchBar />
      </section>
    </main>
  );
}

export default App;
