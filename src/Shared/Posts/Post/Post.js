import React from 'react';
import img1 from '../Post/images/img1.png';
import img2 from '../Post/images/img2 .png';
import { FaFileUpload, FaTasks, FaEllipsisH } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";




const Post = () => {
    return (
        <div className='p-5 '>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-3 bg-red-300 justify-items-center w-full'>
                    <img className='h-16 w-16 rounded-full ' src={img1} alt="" />
                </div>
                {/* *****************Mid Section****************** */}

                <div className='gray-bg col-span-6 rounded '>
                    <div className='create-post gap-3 '>
                        <div >
                            <img className='h-16 w-16 rounded-full ' src={img2} alt="" />
                        </div>

                        <input type='text' value='Write something here!' id='create-post' />
                        <input type='submit' value='POST' className='post-btn orange-bg' />
                    </div>

                    <hr className='w-20px' />

                    <div className='post-option'>
                        <div className='option-design'>
                            <FaFileUpload></FaFileUpload>
                            <input type='file' id='file' className='inputfile' />
                            <label for='file'>Add file</label>
                        </div>
                        <div className='option-design'>
                            <FaTasks></FaTasks>
                            <input type='file' id='file' className='inputfile' />
                            <label for='file'>Add Task</label>
                        </div>
                        <div className='option-design'>
                            <MdQuiz></MdQuiz>
                            <input type='file' id='file' className='inputfile' />
                            <label for='file'>Add Quiz</label>
                        </div>
                    </div>
                    {/* *********************************************Feeds*********************************************** */}

                    <div className='feeds'>
                        <div className="feed">
                            <div className="head">
                                <div className="user">
                                    <div className="profile-photo">
                                        <img src={img2} className='h-16 w-16 rounded-full '/>
                                    </div>
                                    <div className="info">
                                        <h3>Tuki</h3>
                                        <small>Dhaka,15 minutes ago</small>
                                    </div>
                                    
                                </div>
                                <span className="edit">
                                        <FaEllipsisH></FaEllipsisH>
                                    </span>
                            </div>
                            <div className="body-text">
                                <h4>This is tuki.The dream girl of Jikku.</h4>
                            </div>
                            <div className="action-button">
                                <div className="interaction-buttons">
                                    <button className='like-comment-btn'><SlLike></SlLike></button>
                                    <button className='like-comment-btn'><TfiComment></TfiComment></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-span-3 bg-red-300'>

                </div>
            </div>
        </div>
    );
};

export default Post;