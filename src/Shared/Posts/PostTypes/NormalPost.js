import React from 'react';
import img2 from './images/img2 .png';
import img3 from './images/gift.jpg';
import { FaEllipsisH } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { BiLike, BiComment } from "react-icons/bi";

const NormalPost = ({ post }) => {
    return (
        <div className='feeds'>
            <div className="feed">
                <div className="head">
                    <div className="user">
                        <div className="profile-photo">
                            <img src={img2} className='h-16 w-16 rounded-full ' />
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
                    <img src={img3} className='photo' />
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
    );
};

export default NormalPost;