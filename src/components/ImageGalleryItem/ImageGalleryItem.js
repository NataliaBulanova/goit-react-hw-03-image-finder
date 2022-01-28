import PropTypes from "prop-types";
import { GalleryItem, Image } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  handleClick,
}) => {
  return (
    <GalleryItem key={id}>
      <Image src={webformatURL} alt={tags} onClick={handleClick} />
    </GalleryItem>
  );
};

ImageGalleryItem.propType = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
