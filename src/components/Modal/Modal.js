import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      console.log("escape pressed");
      this.props.onClose();
    }
  };

  handleBackDropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackDropClick}>
        <ModalContainer>{this.props.children}</ModalContainer>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
