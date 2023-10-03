import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import hero from '../src/assets/hero.jpg'

const App = () => {
  let backgroundPik = {
    backgroundImage: `url(${hero})`
 }
  return (
    <div style={backgroundPik}>
       <Header />
       <Outlet />
    </div>
  );
};

export default App;