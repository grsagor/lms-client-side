import React from 'react';
import UseTittle from '../../Hooks/UseTittle';
import img1 from './images/img1.jpeg';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const Home = () => {
    const classes = useLoaderData();
    UseTittle('Home');
    return (
        <div className='p-5 '>
            <div className='first grid grid-cols-12 gap-5'>
                <LeftSideBar classes={classes} img1={img1}></LeftSideBar>
                <div className='col-span-6 rounded '><Outlet></Outlet></div>
                <div className='col-span-3 bg-red-300'></div>
            </div>
        </div>
    );
};

export default Home;