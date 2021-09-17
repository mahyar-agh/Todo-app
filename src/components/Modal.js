import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addTask } from "../actions";
import ShowModalContext from "../contexts/ShowModal";

class Modal extends React.Component {
  static contextType = ShowModalContext;

  renderInput = ({ input, label, type, meta }) => {
    return (
      <React.Fragment>
        <label>{label}</label>
        <input autoComplete="off" {...input} type={type} />
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </React.Fragment>
    );
  };

  onFormSubmit = (formValues) => {
    this.props.addTask(formValues);
    this.context.closeModal();
    this.props.reset();
  };

  render() {
    return ReactDOM.createPortal(
      <div
        onClick={this.context.closeModal}
        className={`modalContainer ${!this.context.showModal ? "hidden" : ""}`}
      >
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          onClick={(e) => e.stopPropagation()}
          className="modal"
        >
          <Field
            name="date"
            component={this.renderInput}
            label="Chosse Task's Day:"
            type="date"
          />
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title:"
            type="text"
          />
          <div className="btnContainer">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>,
      document.querySelector("#modal")
    );
  }
}

const validate = (formValues, state) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You shoud enter a title!";
  }
  if (!formValues.date) {
    error.date = "You shoud chosse a date!";
  }

  return error;
};

export default connect(null, { addTask })(
  reduxForm({
    form: "taskForm",
    validate,
  })(Modal)
);
