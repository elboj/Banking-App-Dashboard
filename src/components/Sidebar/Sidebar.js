/* eslint-disable */
import React from "react";
import { useState } from "react";
import "./sidebar.css";
import { FaBeer, FaHome } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";

class UserData {
  constructor(img) {
    this.img = img;
  }
}

let newUser = new UserData(
  "https://www.freecodecamp.org/news/content/images/size/w100/2020/07/avatar-mask.jpg"
);

const icons = [
  { icon: <FaHome />, id: 0 },
  {
    icon: <FaCreditCard />,
    id: 1,
  },
  {
    icon: <FiSettings />,
    id: 2,
  },
  {
    icon: <BsBarChartFill />,
    id: 3,
  },
];

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [loginStatus, setLoginStatus] = useState(true);
  return (
    <aside className="sidebar">
      {loginStatus && <Indicator />}
      <div className="avatar">
        <div className="avatar-holder">
          <img src={newUser.img} alt="image" className="img" />
        </div>
      </div>
      <div className="btn-container">
        {icons.map((item, index) => {
          const { icon, id } = item;
          return (
            <button
              onClick={() => {
                setValue(index);
              }}
              className={`btn ${id === value && "active"}`}
              key={id}
            >
              {icon}
            </button>
          );
        })}
      </div>
      <div className="btn-container-bottom">
        <button className="btn">
          <FiLogOut />
        </button>
      </div>
    </aside>
  );
};

const Indicator = () => {
  return <div className="indicator"></div>;
};

export default Sidebar;
