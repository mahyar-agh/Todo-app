import React, { useState } from "react";
import { connect } from "react-redux";
import "../styles/CompletedTask.css";

const CompletedTasks = (props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const renderList = () => {
    return props.completedTasks.map((task, i) => {
      return (
        <div
          onClick={(e) => e.stopPropagation()}
          key={i}
          className="taskContainer"
        >
          <div className="bullet completed"></div>
          <div className="task">
            <h4>{task.title}</h4>
            <p>{task.date}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div
      onClick={() => setOpenDropdown(!openDropdown)}
      className={`completedTaskContainer ${openDropdown ? "active" : ""}`}
    >
      <div className="textContainer">
        <h4>Completed</h4>
        <div className="arrowContainer">
          <div className="arrow"></div>
        </div>
      </div>
      <div className="completedTasks">{renderList()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { completedTasks: state.completedTasks };
};
export default connect(mapStateToProps)(CompletedTasks);
