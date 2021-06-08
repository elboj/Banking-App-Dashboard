/* eslint-disable */
import React from "react";
import "./styles.css";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";
import { Transactions } from "../../components/index";

// Use a useEffect and Use Reference to cause focus on form input  on every render
//set online icon to blinking
//welcome message using username
//dropbaseline css in index.css, so all can read general peoperties from there

const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="form-container">
      <form onSubmit>
        <button type="submit" className="search-btn">
          <BiSearchAlt />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="Type here to search..."
        />
      </form>
      <CreditCard />
      <Transactions />
    </div>
  );
};

function CreditCard() {
  return (
    <section className="card-holder">
      <div className="card">
        <div className="circlelogo cl1"></div>
        <div className="circlelogo cl2"></div>
        <p className="date card-text">07/23</p>
        <p className=" card-number card-text">
          {" "}
          <span className="dots">.... .... .... </span>5567
        </p>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
      </div>
      <ActionButtons />
    </section>
  );
}

function ActionButtons() {
  const [currentAmount, setCurrentAmount] = useState("$65000");
  return (
    <div className="action-container">
      <p className="action-text">YOUR BALANCE</p>
      <p className="action-amount">{currentAmount}</p>
      <div className="button-holder">
        <button className="action-btn action-btn-left">
          <HiDownload />
        </button>
        <button className="action-btn action-btn-middle">
          <HiOutlineRefresh />
        </button>
        <button className="action-btn action-btn-right">
          <HiUpload />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
