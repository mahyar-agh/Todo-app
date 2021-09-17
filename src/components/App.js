import React from "react";
import Side from "./Side";
import Main from "./Main";
import Modal from "./Modal";
import ShowModasContext from "../contexts/ShowModal";

import "../styles/App.css";

class App extends React.Component {
  state = { showModal: false };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <div className="container">
        <ShowModasContext.Provider
          value={{
            showModal: this.state.showModal,
            openModal: this.openModal,
            closeModal: this.closeModal,
          }}
        >
          <Modal />
          <Side />
          <Main />
        </ShowModasContext.Provider>
      </div>
    );
  }
}

export default App;
