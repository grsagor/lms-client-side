import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideBar = ({ img1, classes }) => {
    return (
        <div className='first-sec col-span-3'>
            <div className="intro-sec">
                <img className='intro-sec-photo' src={img1} alt="" />
                <h3>Nusrat Nova</h3>
                <h2>Student</h2>
            </div>
            <hr className='w-20px' />

            <div className='classes'>
                {
                    classes?.map(singleClass => <Link to={`/class/${singleClass?._id}`}><button>{singleClass?.title}</button></Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;