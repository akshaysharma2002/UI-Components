// import Card from "@/components/Card";
// function CardComponent() {
//   const cardData = {
//     ImageSrc: "",
//     header: "Card Title",
//     details: "Card Description",
//     buttonText: "Card Button",
//     buttonClick: () => {},
//   };

//   const cardClasses = {
//     container: "w-25",
//     Images: "mw-100 mh-50",
//     header: "card-title mt-1 h5 p-2",
//     details: "p-2 card-text",
//     buttons: "btn btn-primary m-2",
//   };
//   return <Card data={cardData} classNames={cardClasses} />;
// }
// export default CardComponent;


import React from 'react'
import CardGallery from '@/components/Cards'

function CardComponent() {
  const breadcrumbLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Cards",
      url:"/Card",
    }
  ];
  return (
    <>
    <CardGallery/>
  </>
  )
}

export default CardComponent