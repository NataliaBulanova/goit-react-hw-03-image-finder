import Btn from "./Button.styled";

const Button = ({ handleClick }) => {
  return (
    <Btn type="button" onClick={() => handleClick()}>
      Load more
    </Btn>
  );
};

export default Button;
