import React from 'react';
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { BiLike, BiComment } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaFileUpload, FaTasks, FaEllipsisH } from "react-icons/fa";



const Classes = () => {
    return (
        <div className='p-5 '>
        <div className='first grid grid-cols-12 gap-5'>
            {/* ************************first section************* */}
            <div className='first-sec col-span-3'>
                <div className="intro-sec">
                    <img className='intro-sec-photo' src='' alt="" />
                    <h3>Nusrat Nova</h3>
                    <h2>Student</h2>
                </div>
                <hr className='w-20px' />

                <div className='classes'>
                    <button><Link to='/class'>CSI 111:Computer graphics</Link></button>
                    <button>CSI 111:Computer graphics</button>
                    <button>CSI 111:Computer graphics</button>
                    <button>CSI 111:Computer graphics</button>

                </div>
            </div>

            {/* *****************Mid Section****************** */}

            <div className='col-span-6 rounded '>
                
                {/* *********************************************Feeds*********************************************** */}

                <div className='feeds'>
                    {/* ************************************feed with text******************************************8 */}
                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src='' className='h-16 w-16 rounded-full ' />
                                </div>
                                <div className="info">
                                    <h3>Tuki</h3>
                                    <small>Dhaka,15 minutes ago</small>
                                </div>

                            </div>
                            <button className="edit">
                                <FaEllipsisH></FaEllipsisH>
                            </button>
                        </div>
                        <div className="body-text">
                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quasi, voluptatum odio veritatis et animi ut earum excepturi, dignissimos eum suscipit tenetur eius nisi iusto aut inventore obcaecati. Inventore possimus ducimus quisquam deleniti ipsa iure unde delectus est omnis sint sunt atque fugit suscipit nobis, distinctio dignissimos. Aspernatur, illo quae.</h4>
                        </div>
                        <div className='view-interactions'>
                            <div className='view-likes'>
                                <BiLike></BiLike>
                                <button>Liked by 5 people</button>
                            </div>
                            <div className='view-comments'>
                                <BiComment></BiComment>
                                <button>View all comments</button>
                            </div>

                        </div>
                        <hr className='w-20px' />
                        <div className="action-button">
                            <div className="interaction-buttons">
                                <button className='like-comment-btn'><SlLike></SlLike></button>
                                <button className='like-comment-btn'><TfiComment></TfiComment></button>
                            </div>
                        </div>
                    </div>
                    {/* ********************************************feed with picture*********************************** */}
                    <div className="feed">
                        <div className="head">
                            <div className="user">
                                <div className="profile-photo">
                                    <img src='' className='h-16 w-16 rounded-full ' />
                                </div>
                                <div className="info">
                                    <h3>Tuki</h3>
                                    <small>Dhaka,15 minutes ago</small>
                                </div>

                            </div>
                            <button className="edit">
                                <FaEllipsisH></FaEllipsisH>
                            </button>
                        </div>
                        <div className="body-text">
                            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore impedit, pariatur esse est possimus voluptatum animi laboriosam et! Corrupti, sunt.</h4>
                        </div>
                        <div className="">
                            <img src='' className='photo' />
                        </div>
                        <div className='view-interactions'>
                            <div className='view-likes'>
                                <BiLike></BiLike>
                                <button>Liked by 5 people</button>
                            </div>
                            <div className='view-comments'>
                                <BiComment></BiComment>
                                <button>View all comments</button>
                            </div>

                        </div>
                        <hr className='w-20px' />
                        <div className="action-button">
                            <div className="interaction-buttons">
                                <button className='like-comment-btn'><SlLike></SlLike></button>
                                <button className='like-comment-btn'><TfiComment></TfiComment></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    );
};

export default Classes;