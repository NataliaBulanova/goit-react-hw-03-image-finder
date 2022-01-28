import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Gallery from "./ImageGallery.styled";

const ImageGallery = ({ images, onImage }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
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

export default ImageGallery;
