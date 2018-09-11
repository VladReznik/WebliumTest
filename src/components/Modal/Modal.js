import React, { Component } from "react";
import "./Modal.scss";

import ReactDOM from "react-dom";

const Body = document.body;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.wrapper = document.createElement("div");
    this.wrapper.className = "modal-root";
  }

  componentDidMount() {
    Body.appendChild(this.wrapper);
  }

  componentDidUpdate() {
    Body.appendChild(this.wrapper);
  }

  componentWillUnmount() {
    Body.removeChild(this.wrapper);
  }

  render() {
    const isModalOpen = this.props.isModalOpen;
    const closeModal = this.props.closeModal;
    return ReactDOM.createPortal(
      <div className={isModalOpen ? "modal modal_active" : "modal"}>
        <div className={"modal__overlay"} onClick={closeModal} />
        <div className={"modal__content"}>{this.props.children}</div>
      </div>,
      this.wrapper
    );
  }
}

export default Modal;
