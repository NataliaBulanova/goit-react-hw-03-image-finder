const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} data-large={largeImageURL}></img>
    </li>
  );
};

export default ImageGalleryItem;
