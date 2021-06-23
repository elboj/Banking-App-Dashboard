/* eslint-disable */
import React, { useState, useEffect } from "react";
// import Sidebar from "./components/Sidebar/Sidebar";
import {
  Sidebar,
  SearchBar,
  Transactions,
  Converter,
  ShoppingChart,
} from "./components/index";
import "./index.css";

function App() {
  const [hidden, setHidden] = useState(true);
  return (
    <main>
      <section className="container">
        {hidden && <Sidebar />}
        <SearchBar />
        <ShoppingChart />
      </section>
    </main>
  );
}

export default App;
