import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Pages/Common/Menu';
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;