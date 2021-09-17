import React from "react";
import { connect } from "react-redux";
import { completeTask } from "../actions";
import "../styles/ShowTasks.css";
import ShowModalContext from "../contexts/ShowModal";

class ShowTasks extends React.Component {
  static contextType = ShowModalContext;

  onTaskClick = (task) => {
    this.props.completeTask(task);
  };

  renderList = () => {
    return this.props.tasks.map((task, i) => {
      return (
        <div
          onClick={() => this.onTaskClick(task)}
          key={i}
          className="taskContainer"
        >
          <div ref={this.bulletRef} className="bullet"></div>
          <div className="task">
            <h4>{task.title}</h4>
            <p>{task.date}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="tasksContainer">
        <div className="showTasks">
          <div className="btnContainer">
            <button onClick={this.context.openModal}>+ Add a Task</button>
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};
export default connect(mapStateToProps, { completeTask })(ShowTasks);
