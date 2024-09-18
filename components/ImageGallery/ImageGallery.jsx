import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <>
      <div className={styles["image-gallery"]}>
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;