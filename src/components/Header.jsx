import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error=>{
            console(error.message)
        })
    }
    return (
        <Container >
            <Navbar collapseOnSelect expand="lg" className='pt-5'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto d-flex align-items-center fw-semibold">

                            <Link className='text-decoration-none fs-4  text-white  fw-bold opacity-75' to='/'>Travel Guru</Link>
                            <Form className="d-flex ms-5">
                                <Form.Control
                                    type="search"
                                    placeholder="Search your destination"
                                    className="me-2 bg-secondary"
                                    aria-label="Search"
                                />
                                
                            </Form>
                            <Link className='text-decoration-none ms-4 text-white' to='/'>News</Link>
                            <Link className='text-decoration-none ms-4 text-white' to='/'>Destination</Link>
                            <Link className='text-decoration-none ms-4 text-white' to='/'>Contact</Link>
                            {
                                user ?
                                <Button onClick={handleLogOut} className='py-1 px-4 ms-4' variant="dark">LogOut</Button> :
                                <Link to='/login'>
                                    <Button className='py-1 px-4 ms-5' variant="dark">Login</Button>
                                </Link>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;