import React from 'react';
import style from './StyleCard.module.css';

const CardGallery = ({ cards }) => {
  const CardDisplay = {
    cards: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Card 1',
        description: 'This is the description for Card 1.',
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Card 2',
        description: 'This is the description for Card 2.',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1684230413575-f83bf3acddb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Card 3',
        description: 'This is the description for Card 3.',
      },
      // Add more card objects here
    ],
  };
  return (
    <>
    <br></br>
      <div className={style["card-gallery"]}>
        {CardDisplay.cards.map((card, index) => (
          <div key={index} className={style["card"]}>
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGallery;