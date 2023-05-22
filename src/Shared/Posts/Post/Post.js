import React from 'react';
import img2 from '../Post/images/img2 .png';
import img3 from '../Post/images/gift.jpg';
import { FaFileUpload, FaTasks, FaEllipsisH } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { BiLike, BiComment } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Post = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
  const handlePost = async (data) => {
    const { post, files } = data;

    const formData = new FormData();
    formData.append('email', user?.email);
    formData.append('type', 'normal');
    formData.append('post', post);
    for (let i = 0; i < files.length; i++) {
      formData.append('photos', files[i]);
    }

    fetch('http://localhost:5000/post', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        if(data?.acknowledged){
            toast.success('Post done')
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

    return (
        <div>
            <form onSubmit={handleSubmit(handlePost)}>
                <div className='create-post'>
                    <div className='write-post gap-3 '>
                        <div >
                            <img className='h-16 w-16 rounded-full ' src={img2} alt="" />
                        </div>

                        <input {...register("post")} type='text' value='Write something here!' id='create-post' />
                        <input type='submit' value='POST' className='post-btn orange-bg' />
                    </div>

                    <hr className='w-20px' />

                    <div className='post-option'>
                        <div className='option-design'>
                            <FaFileUpload></FaFileUpload>
                            <input {...register("files")} type='file' id='file' className='inputfile' multiple />
                            <label for='file'>Add file</label>
                        </div>
                        <div className='option-design'>
                            <FaTasks></FaTasks>
                            <label for='file'><Link to='/addtask'>Add Task</Link></label>
                        </div>
                        <div className='option-design'>
                            <MdQuiz></MdQuiz>
                            <button><Link to='/addquiz'>Add Quiz</Link></button>
                        </div>
                    </div>
                </div>
            </form>
            {/* *********************************************Feeds*********************************************** */}

            <div className='feeds'>
                {/* ************************************feed with text******************************************8 */}
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
        </div>
    );
};

export default Post;