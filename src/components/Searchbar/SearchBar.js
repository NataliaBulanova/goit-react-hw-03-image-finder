import { Component } from "react";
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  ButtonLabel,
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
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
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
