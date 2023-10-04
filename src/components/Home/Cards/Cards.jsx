import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Cards = ({ card }) => {
  const { _id, destination, image, description, date } = card;
  return (
     <Card style={{ width: '18rem', }} className='position-relative '>
      <Card.Img className='h-100' variant="top" src={image} />
      <Card.Body style={{ bottom: 10, left: 0 }} className='position-absolute text-white mb-2'>
        <Card.Title >{destination}</Card.Title>
      </Card.Body>
     
      <Link  to={`/card/${_id}`}><Button className='bg-success w-100'>Book Now</Button> </Link>
    </Card>
  );
};

export default Cards;