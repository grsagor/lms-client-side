import React from 'react';
import img1 from '../Tasks/images/task.png'
import { useForm } from 'react-hook-form';
import { GoFileSymlinkDirectory } from "react-icons/go";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Addtask = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);

    const handlePost = async (data) => {
        const { title, description, date, time, files } = data;
    
        const formData = new FormData();
        formData.append('email', user?.email);
        formData.append('type', 'task');
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('time', time);
        for (let i = 0; i < files?.length; i++) {
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
                toast.success('The task has posted')
            }
          })
          .catch((error) => {
            console.error('There was an error!', error);
          });
      };

    return (
        <div className='task-main'>
            <div className='task-img'>
                <img src={img1} className='' />
            </div>
            <div >
                <form className='task-body' onSubmit={handleSubmit(handlePost)}>
                    <div className='task-label-input'>
                        <label for='' className='task-label'>Title</label>
                        <input {...register("title")} type='text' className="task-input" />
                    </div>
                    <div className='task-label-input'>
                        <label for=''>Descripton</label>
                        <input {...register("description")} type='text' className="task-input" />
                    </div>
                    
                    <div className='option-design p-3'>
                    <GoFileSymlinkDirectory></GoFileSymlinkDirectory>
                        <label for='file'><span>Choose file</span></label>
                        <input {...register("files")} type='file' id='file' className='inputfile' />
                    </div>
                    <div className='date-time'>
                        <label for='file'><span>Date</span></label>
                        <input {...register("date")} type='date' id='file' className='' />
                        <label for='file'><span>Time</span></label>
                        <input {...register("time")} type='time' id='file' className='' />
                    </div>
                    <div className='task-btn'>
                    <input type="submit" value="Submit" />

                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Addtask;