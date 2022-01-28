import PropTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContainer, CloseButton } from "./Modal.styled";
import { ReactComponent as CloseIcon } from "../../images/cross.svg";

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

  propType = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackDropClick}>
        <CloseButton type="button" aria-label="close modal">
          <CloseIcon
            width="30"
            height="30"
            fill="fff"
            onClick={this.props.onClose}
          />
        </CloseButton>
        <ModalContainer>
          <img src={this.props.largeImageURL} alt="" width="800" />
        </ModalContainer>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;

// render() {
//   return createPortal(
//     <ModalBackdrop onClick={this.handleBackDropClick}>
//       <ModalContainer>{this.props.children}</ModalContainer>
//     </ModalBackdrop>,
//     modalRoot
//   );
// }
