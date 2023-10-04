import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header';


const LoginLayout = () => {
    return (
        <div >
            <div className='bg-secondary pb-3'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;