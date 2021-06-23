/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./Converter.css";
import { BiChevronRight } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";

class Currency {
  constructor(USD, GBP, EUR, YEN) {
    this.USD = USD;
    this.GBP = GBP;
    this.EUR = EUR;
    this.YEN = YEN;
  }
}

let currentConverter = new Currency(1, 580, 500, 300);
// console.log(currentConverter);

// const url = "https://api.cryptonator.com/api/ticker/btc-usd/";
const url =
  "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true";

const Converter = () => {
  const [btc, setBtc] = useState([]);
  const [value, setValue] = useState(0);
  const [state, setState] = useState("USD");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log({ state });
    let currentValue = parseInt(currentConverter[`${state}`]);
    console.log(currentValue + parseInt(value));
  };
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user.casesByState);
        setBtc(user);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="converterContainer">
      {/* classname from transaction.css */}
      <div className="converterHeading">
        <p className="title">Exchange</p>
        <button className="transactionBtn">
          <BiChevronRight />
        </button>
      </div>
      <div className="converterHolder">
        <div className="input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="inputField"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <select className="currencyOptions">
              <option value="USD">USD</option>
            </select>
            <button
              type="submit"
              className="action-btn action-btn-middle btn-style"
            >
              <HiOutlineRefresh />
            </button>{" "}
            <select
              className="currencyOptions"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="YEN">YEN</option>
            </select>
            <input
              type="text"
              className="inputField"
              value={value}
              onChange={(e) => {
                e.target.value;
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Converter;
