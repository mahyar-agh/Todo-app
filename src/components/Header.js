import React from "react";
import "../styles/Header.css";

const Header = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();

  return (
    <div className="headerContainer">
      <div className="dateContainer">
        <div className="titleContainer">
          <h4>July 2021</h4>
          <div className="date">
            Today
            <br />
            <span>{`${date.getDate()},${days[date.getDay()]}`}</span>
          </div>
          <div className="greet">Have a nice day😉 </div>
        </div>
      </div>
      <ul className="weekContainer">
        <li className="day">Sun</li>
        <li className="day">Mon</li>
        <li className="day">Tue</li>
        <li className="day">Wed</li>
        <li className="day">Thu</li>
        <li className="day">Fri</li>
        <li className="day">Sat</li>
      </ul>
    </div>
  );
};

export default Header;
