import "./App.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import SearchBar from "./components/Searchbar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
// import FetchImagesWithQuery from "./fetch/FetchImagesWithQuery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";

axios.defaults.baseURL = "https://pixabay.com/api";

class App extends Component {
  state = {
    images: [],
    showModal: false,
    query: "",
    page: 1,
    loader: false,
    largeImageURL: "",
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onSubmitHandler = ({ query }) => {
    this.setState({ query, page: 1 });
  };

  onLoadMoreHandler = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleModalOpener = (largeImageURL) => {
    this.toggleModal();
    console.log(largeImageURL);
    this.setState({ largeImageURL });
  };

  FetchImagesWithQuery = async (searchQuery, page) => {
    this.setState({ loader: true });

    try {
      const response = await axios.get(
        `?key=24354649-5345b0d4fac46ed3dd7873120&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&&page=${page}`
      );
      const images = response.data.hits.map(
        ({ id, webformatURL, tags, largeImageURL }) => ({
          id,
          webformatURL,
          tags,
          largeImageURL,
        })
      );
      return images;
    } catch (error) {
      toast("Something was going wrong");
    } finally {
      this.setState({ loader: false });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      const moreImages = await this.FetchImagesWithQuery(
        this.state.query,
        this.state.page
      );
      this.setState(({ images }) => ({
        images: [...images, ...moreImages],
      }));
      // if(moreImages.length < 12){
      //   this.setState({lo})
      // }
    }
    if (prevState.query !== this.state.query) {
      this.setState({ images: [] });
      const images = await this.FetchImagesWithQuery(
        this.state.query,
        this.state.page
      );
      this.setState({ images });
      if (!this.state.images.length) {
        toast("Sorry, Nothing was found");
      }
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmitHandler} />
        <ToastContainer autoClose={2500} />
        {this.state.loader && <Loader />}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
          ></Modal>
        )}
        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onImage={this.handleModalOpener}
          />
        )}
        {this.state.images.length > 0 && (
          <Button handleClick={this.onLoadMoreHandler} />
        )}
      </div>
    );
  }
}

export default App;
