import React from 'react';
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { BiLike, BiComment } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEllipsisH } from "react-icons/fa";



const Classes = () => {
    const classes = useLoaderData();
    return (
        <div className='first-sec col-span-3'>
            <div className="intro-sec">
                <img className='intro-sec-photo' src='' alt="" />
                <h3>Nusrat Nova</h3>
                <h2>Student</h2>
            </div>
            <div className=''>
            <hr className='w-20px' />
            </div>

            <div className='classes'>
            {
                classes?.map(singleClass => <Link to={`/class/${singleClass?._id}`}><button>{singleClass?.title}</button></Link>)
            }
            </div>
        </div>
    );
};

export default Classes;