import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import "../styles/Main.css";

const Main = (props) => {
  const renderList = () => {
    return props.days.map((item, i) => {
      return (
        <li className="item" key={i}>
          {item.day}
          {item.task ? <div className="task">{item.task}</div> : null}
        </li>
      );
    });
  };
  return (
    <div className="mainContainer">
      <Header />
      <ul className="daysContainer">{renderList()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { days: state.days };
};
export default connect(mapStateToProps)(Main);
