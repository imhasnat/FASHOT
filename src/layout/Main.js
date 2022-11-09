import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar';
import './Main.css';

const Main = () => {
    return (
        <div>
            <div className='page-container'>
                <div className='content-wrapper'>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;