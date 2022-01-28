import PropTypes from "prop-types";
import { toast } from "react-toastify";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Gallery from "./ImageGallery.styled";

const ImageGallery = ({ images, onImage }) => {
  return (
    <Gallery>
      {!images.length
        ? toast("Nothing was found")
        : images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                handleClick={() => onImage(largeImageURL)}
              />
            );
          })}
    </Gallery>
  );
};

ImageGallery.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGallery;
