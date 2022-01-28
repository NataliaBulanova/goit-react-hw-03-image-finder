import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalContainer = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const CloseButton = styled.button`
  position: absolute;
  margin-left: auto;
  right: 25px;
  top: 12px;
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export { ModalBackdrop, ModalContainer, CloseButton };
