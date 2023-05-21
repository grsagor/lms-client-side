import React from 'react';
import UseTittle from '../../Hooks/UseTittle';
import Post from '../../Shared/Posts/Post/Post';
import img1 from './images/img1.jpeg';
import { useForm } from 'react-hook-form';
import { Outlet, useLoaderData } from 'react-router-dom';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const classes = useLoaderData();
    console.log(classes)

    UseTittle('Home');
    return (
        <div className='p-5 '>
            <div className='first grid grid-cols-12 gap-5'>
                <div className='first-sec col-span-3'>
                    <div className="intro-sec">
                        <img className='intro-sec-photo' src={img1} alt="" />
                        <h3>Nusrat Nova</h3>
                        <h2>Student</h2>
                    </div>
                    <hr className='w-20px' />

                    <div className='classes'>
                        {
                            classes?.map(singleClass => <button>{singleClass?.title}</button>)
                        }
                    </div>
                </div>


                <div className='col-span-6 rounded '>
                    <Outlet></Outlet>
                </div>

                <div className='col-span-3 bg-red-300'>

                </div>
            </div>
        </div>
    );
};

export default Home;