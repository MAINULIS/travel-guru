import React from 'react';
import { Card } from 'react-bootstrap';



const Cards = ({ card }) => {
  const { _id, destination, image, description, date } = card;
  return (

    <Card style={{ width: '18rem', }} className='position-relative '>
      <Card.Img className='h-100' variant="top" src={image} />
      <Card.Body style={{ bottom: 10, left: 0 }} className='position-absolute text-white'>
        <Card.Title >{destination}</Card.Title>
      </Card.Body>
    </Card>

  );
};

export default Cards;