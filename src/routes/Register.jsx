import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);

    const handleRegister =(event) =>{
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const ConfirmPass = form.RePassword.value;
        console.log(name, email, password, ConfirmPass)

        if(password !== ConfirmPass){
            setError('Password din not match')
            return;
        }

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            setSuccess("Account has been successfully created");
            setError('');
            event.target.reset();
        })
        .catch(error =>{
            setError(error.message);
            setSuccess('');
        })
    }

    const handleAccept = event =>{
        setAccept(event.target.checked);
    }
    return (
        <Container className='mx-auto w-50 m-5 shadow-lg p-5 '>
        <Form onSubmit={handleRegister}>
            <h2 className='text-secondary pb-3'>Register Your Account</h2> <hr />
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter your email address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder=" Enter your password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='RePassword' placeholder="Confirm password" required />
            </Form.Group>
            <Form.Group className="mb-3 text-info" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccept}
                 type="checkbox"
                 name='accept'
                  label={<>Accepts <Link to="/terms">Terms And Conditions</Link></>} />
            </Form.Group> 

           <div className='text-center'>
           <Form.Text className="text-success">
              {success}
            </Form.Text>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
           </div>
            <Button variant="secondary w-100 my-3 fw-bold" disabled={!accept} type="submit">
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