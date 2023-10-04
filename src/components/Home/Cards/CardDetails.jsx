import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const details = useLoaderData();
    const { _id, destination, description, date } = details;
    return (
        <Container style={{ marginTop: 200 }} className='pb-5'>
            <div className='d-flex'>
                <div className='p-4 secondary'>
                    <h3>{destination} </h3>
                    <p>{description}</p>
                    <Link to='/'>Back Home</Link>
                </div>
                <div>
                    <Form className='bg-white p-2 shadow-lg'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" name='place' placeholder="Dhaka" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>destination</Form.Label>
                            <Form.Control type="text" name='place' placeholder={`${destination}`} />
                        </Form.Group>
                        <Form.Group className="mb-3 text-info " controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember email & password" />
                        </Form.Group>
                        <h2>RangeDatePicker</h2>

                        <Button variant="warning w-100 my-3 fw-bold" type="submit">
                            Start Book Now
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default CardDetails;