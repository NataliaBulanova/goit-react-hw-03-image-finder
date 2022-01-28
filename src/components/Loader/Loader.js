import { createPortal } from "react-dom";
import { Audio } from "react-loader-spinner";

import SpinnerContainer from "./Loader.styled";

const spinnerRoot = document.querySelector("#spinner-root");

const Loader = () => {
  return createPortal(
    <SpinnerContainer>
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </SpinnerContainer>,
    spinnerRoot
  );
};

export default Loader;
