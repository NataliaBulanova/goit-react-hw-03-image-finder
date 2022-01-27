import "./App.css";
import { Component } from "react";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import FetchImagesWithQuery from "./fetch/FetchImagesWithQuery";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    images: null,
    showModal: false,
    query: "",
    page: 1,
    loader: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onSubmitHandler = async ({ query }) => {
    const images = await FetchImagesWithQuery(query, 1);
    this.setState({ images, query, page: 1 });
  };

  onLoadMoreHandler = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const moreImages = await FetchImagesWithQuery(
        this.state.query,
        this.state.page
      );
      this.setState(({ images }) => ({
        images: [...images, ...moreImages],
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmitHandler} />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              This HTML file is a template. If you open it directly in the
              browser, you will see an empty page. You can add webfonts, meta
              tags, or analytics to this file. The build step will place the
              bundled scripts into the tag. To begin the development, run `npm
              start` or `yarn start`. To create a production bundle, use `npm
              run build` or `yarn build`.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.images && <Button handleClick={this.onLoadMoreHandler} />}
      </div>
    );
  }
}

export default App;
