import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Marquee from "react-fast-marquee";
import { Container } from 'react-bootstrap';


const Home = () => {
    const cardData = useLoaderData();
    console.log(cardData);
    return (
       <Container>
        <div>

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
    );
};

export default Home;