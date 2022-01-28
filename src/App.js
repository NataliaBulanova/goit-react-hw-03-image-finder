import "./App.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from "react-loader-spinner";
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
    largeImageURL: "",
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

  handleModalOpener = (largeImageURL) => {
    this.toggleModal();
    console.log(largeImageURL);
    this.setState({ largeImageURL });
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
        <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />;
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
          ></Modal>
        )}
        {this.state.images && (
          <ImageGallery
            images={this.state.images}
            onImage={this.handleModalOpener}
          />
        )}
        {this.state.images && <Button handleClick={this.onLoadMoreHandler} />}
      </div>
    );
  }
}

export default App;
