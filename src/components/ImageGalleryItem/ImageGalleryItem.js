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

export default ImageGalleryItem;
