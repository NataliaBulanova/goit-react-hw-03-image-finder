import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api";

const FetchImagesWithQuery = async (searchQuery, page) => {
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
};

export default FetchImagesWithQuery;
