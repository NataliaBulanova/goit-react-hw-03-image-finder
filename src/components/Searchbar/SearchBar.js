import PropTypes from "prop-types";
import { Component } from "react";
import { ReactComponent as SearchIcon } from "../../images/search.svg";
import { toast } from "react-toastify";
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  ButtonInput,
} from "./Searchbar.styled";

class SearchBar extends Component {
  state = {
    query: "",
  };

  HandleChange = (e) => {
    const query = e.currentTarget.value;
    this.setState({ query });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.query.trim()
      ? this.props.onSubmit(this.state)
      : toast("Enter the word");
    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  propType = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon width="30" height="30" fill="fff" />
          </SearchButton>

          <ButtonInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.HandleChange}
            value={this.state.query}
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}

export default SearchBar;
