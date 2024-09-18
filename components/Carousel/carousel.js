import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./carousel.module.css";

const Carousel = ({
  images,
  transitionTime,
  showNavigation,
  prevButtonIcon,
  nextButtonIcon,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, transitionTime);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles["carousel"]}>
      <div className={styles["carousel-image-container"]}>
        <img
          src={images[currentIndex]}
          alt="Carousel Slide"
          className={styles["carousel-image"]}
        />
      </div>
      {showNavigation && (
        <>
          <button className={`${styles["carousel-button"]} ${styles["carousel-button-prev"]}`} onClick={goToPrevSlide}>
            <FontAwesomeIcon icon={prevButtonIcon} />
          </button>
          <button className={`${styles["carousel-button"]} ${styles["carousel-button-next"]}`} onClick={goToNextSlide}>
            <FontAwesomeIcon icon={nextButtonIcon} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
