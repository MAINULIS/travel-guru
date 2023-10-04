import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';
import hero from '../../../assets/travel.jpg'
import Header from '../../Header';


const Home = () => {
    const cardData = useLoaderData();
    console.log(cardData)
    let backgroundPik = {
        backgroundImage: `url(${hero})`
     };
    
    return (
       <div style={backgroundPik}>
        <Header />
        <Container style={{marginTop:200}}>
        <div className='fs-4 text-warning fw-semibold'>
        Bangladesh's natural beauty, from the Sundarbans mangrove forests to the serene tea gardens of Sylhet, offers a diverse landscape of lush greenery, pristine beaches, and unique ecosystems that will leave you awe-inspired.
       </div>
        <Marquee pauseOnClick>
        <div className='d-flex gap-4 pb-4' style={{marginTop:250}}>
           {
                cardData.map(card => <Cards
                    key={card._id}
                    card = {card}
                ></Cards>
            )}
           
        </div>
        </Marquee>
       </Container>
       </div>
    );
};

export default Home;