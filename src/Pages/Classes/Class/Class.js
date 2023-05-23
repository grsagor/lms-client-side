import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaFileUpload, FaTasks } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import img2 from './images/img2 .png';
import Post from '../../../Shared/Posts/Post/Post';

const Class = () => {
    const allData = useLoaderData();
    const course = allData?.courseDetails[0];
    const posts = allData?.posts;
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handlePost = async (data) => {
      const { post, files } = data;
  
      const formData = new FormData();
      formData.append('email', user?.email);
      formData.append('type', 'normal');
      formData.append('post', post);
      formData.append('courseID', course?._id);
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

                        <input {...register("post")} type='text' defaultValue='Write something here!' id='create-post' />
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
                            <label for='file'><Link to={`/addtask/${course?._id}`}>Add Task</Link></label>
                        </div>
                        <div className='option-design'>
                            <MdQuiz></MdQuiz>
                            <button><Link to={`/addquiz/${course?._id}`}>Add Quiz</Link></button>
                        </div>
                    </div>
                </div>
            </form>
            <h1>{course?.title}</h1>
            <Post posts={posts}></Post>
        </div>
    );
};

export default Class;