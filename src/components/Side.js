import React from "react";
import "../styles/Side.css";
import image from "../assets/images/mehran.jpg";
import ShowTasks from "./ShowTasks";
import CompletedTasks from "./CompletedTasks";

class Side extends React.Component {
  render() {
    return (
      <div className="sideContainer">
        <div className="header">
          <div className="imgContainer">
            <img src={image} alt="user" />
          </div>
          <div className="person">
            <div className="titile">Good morning</div>
            <div className="personName" style={{ color: "#393E46" }}>
              Mehran
            </div>
          </div>
        </div>
        <ShowTasks />
        <CompletedTasks />
      </div>
    );
  }
}

export default Side;
