/* eslint-disable */
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";
import "./transactions.css";

const transactionHistory = [
  {
    name: "Fasoranti Tosin",
    date: "22, March 2021",
    amount: "$5000",
    status: "sent",
    userAvatar:
      "https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg",
  },
  {
    name: "Deborah Obemi",
    date: "22, January 2021",
    amount: "$300",
    status: "received",
    userAvatar:
      "https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg",
  },
  {
    name: "Siewe Wambe",
    date: "22, January 2021",
    amount: "$3500",
    status: "reveived",
    userAvatar:
      " https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg",
  },
  {
    name: "Freddy Poundz",
    date: "12, July 2021",
    amount: "$2000",
    status: "reveived",
    userAvatar:
      " https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg",
  },
  {
    name: "Bolu Adaja",
    date: "12, July 2021",
    amount: "$1500",
    status: "sent",
    userAvatar:
      " https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg",
  },
];

const Transactions = () => {
  return (
    <section className="transaction">
      <div className="transactionHeading">
        <p className="title">Transaction</p>
        <button className="transactionBtn">
          {" "}
          <BiSearchAlt />
        </button>
      </div>
      {transactionHistory.map((details) => {
        const { name, date, amount, status, userAvatar } = details;
        return (
          <section className="transactionDetails">
            <div className="nameContainer">
              <div className="avatar">
                <img src={userAvatar} alt="user" className="userImg" />
                <div className="transactionStatus">
                  {status === "sent" ? <HiUpload /> : <HiDownload />}
                </div>
              </div>
              <div className="nameIdentity">
                <p className="name">{name}</p>
                <p className="dateStamp">{date}</p>
              </div>
            </div>
            <div className="amount">
              <p className="amount">{amount}</p>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Transactions;
