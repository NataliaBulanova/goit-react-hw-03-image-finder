import PropTypes from "prop-types";
import Btn from "./Button.styled";

const Button = ({ handleClick }) => {
  return (
    <Btn type="button" onClick={() => handleClick()}>
      Load more
    </Btn>
  );
};

Button.propType = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
