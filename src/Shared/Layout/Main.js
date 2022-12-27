import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;