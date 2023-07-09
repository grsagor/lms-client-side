import React from 'react';
import UseTittle from '../../Hooks/UseTittle';
import img1 from './images/img1.jpeg';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const Home = () => {
    UseTittle('Home');

    const {user} = useContext(AuthContext);
    const { data: userInfo = [], refetch } = useQuery({
        queryKey: ['homeuser'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    useEffect(()=>{
        refetch()
    },[user]);

    const classes = userInfo[0]?.classInfo;
    const posts = userInfo[0]?.posts;

    return (
        <div className='p-5 '>
            <div className='first grid grid-cols-12 gap-5'>
                <LeftSideBar classes={classes} img1={img1}></LeftSideBar>
                <div className='col-span-6 rounded' posts={posts}><Outlet></Outlet></div>
                <div className='col-span-3 bg-red-300'></div>
            </div>
        </div>
    );
};

export default Home;