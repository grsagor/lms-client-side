import React from 'react';
import { useForm } from 'react-hook-form';
import { WiDirectionRight } from "react-icons/wi";
import { GrAttachment } from "react-icons/gr";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';



const SubmitTask = () => {
    const { id } = useParams();
    console.log(id)
    const post = useLoaderData()[0];
    const { user } = useContext(AuthContext);
    console.log(post);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handlePost = async (data) => {
        const { files } = data;

        const formData = new FormData();
        formData.append('studentEmail', user?.email);
        formData.append('courseID', post?.courseID);
        formData.append('postID', id);
        for (let i = 0; i < files.length; i++) {
            formData.append('photos', files[i]);
        }

        fetch('http://localhost:5000/submittask', {
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
                if (data?.acknowledged) {
                    toast.success('Submit done')
                }
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='submit-main-part'>
            <div>
                <h2>Show title here </h2>
                <h4>Show description here</h4>
                <form onSubmit={handleSubmit(handlePost)}>
                    <div className='option-design p-3'>
                        <GrAttachment></GrAttachment>
                        <label for='file'><span>Attached file</span></label>
                        <input {...register("files")} type='file' id='file' className='inputfile' required/>
                        <input type="submit" value="Submit Answer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitTask;