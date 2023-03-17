import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import NavbarTop from '../Pages/Home/Navbar/NavbarTop';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;