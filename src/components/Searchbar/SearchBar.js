import { Component } from "react";

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.HandleChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
