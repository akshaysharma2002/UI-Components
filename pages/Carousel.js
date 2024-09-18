import React from "react";
import Carousel from "@/components/Carousel/carousel";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function CarouselComponent() {
  const carouselConfig = {
    images: [
      // "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      "https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg",
      "https://finearts.utexas.edu/sites/files/cofa/styles/hero_homepage/public/hero/img_0211.jpg?itok=qkzs-yrr ",
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80",
    ],
    images1: [
      "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg",
      "https://worlduniversityofdesign.ac.in/assets/images/bgs/school-of-visual-arts-banner.jpg",
      "https://finearts.utexas.edu/sites/files/cofa/styles/hero_homepage/public/hero/img_0211.jpg?itok=qkzs-yrr ",
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcnR8ZW58MHx8MHx8&w=1000&q=80",
    ],

    transitionTime: 5000, //MiliSeconds
    transitionTime2: 1000, //MiliSeconds
    showNavigation: true,
    circleLeft: faChevronCircleLeft,
    circleRight: faChevronCircleRight,
    prevButtonIcon: faChevronLeft,
    nextButtonIcon: faChevronRight,
  };
  // faChevronCircleRight
  // faChevronCircleLeft
  // faChevronRight
  // faChevronLeft
  return (
    <>
      <div>
        <h1>Carousel Component</h1>
        <br></br>
      </div>
      <Carousel
        images={carouselConfig.images}
        transitionTime={carouselConfig.transitionTime}
        showNavigation={carouselConfig.showNavigation}
        prevButtonIcon={carouselConfig.circleLeft}
        nextButtonIcon={carouselConfig.circleRight}
      />
    </>
  );
}

export default CarouselComponent;
