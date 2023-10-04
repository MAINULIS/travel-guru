import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='mx-auto w-50 m-5 shadow-lg p-5 '>
        <Form >
            <h2 className='text-secondary pb-3'>Register Your Account</h2> <hr />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUrl">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter your photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter your email address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder=" Enter your password" required />
            </Form.Group>
            <Form.Group className="mb-3 text-info" controlId="formBasicCheckbox">
                <Form.Check 
                 type="checkbox"
                 name='accept'
                  label={<>Accepts <Link to="/terms">Terms And Conditions</Link></>} />
            </Form.Group> 

           <div className='text-center'>
           <Form.Text className="text-success">
              
            </Form.Text>
            <Form.Text className="text-danger">
                
            </Form.Text>
           </div>
            <Button variant="secondary w-100 my-3 fw-bold" type="submit">
                Register
            </Button> 
            
            <div className='text-center'>
            <Form.Text className="text-secondary fw-semibold ">
             Already Have An Account? Please <Link to='/login'>Login</Link>
            </Form.Text>
            </div>
        </Form>
    </Container>
    );
};

export default Register;