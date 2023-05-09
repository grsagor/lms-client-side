import React from 'react';
import img1 from '../Tasks/images/task.png'
import { useForm } from 'react-hook-form';

const Addtask = () => {
    const { register, handleSubmit} = useForm();

    return (
        <div className='task-main'>
           <div className='task-img'>
                <img src={img1} className=''/>
           </div>
           <div >
           <form className='task-body'>
           <label for=''>Title</label>
           <input {...register("addtask")} type='test' className="bordered" />
           <label for=''><span>Descripton</span></label>
           <input {...register("addtask")} type='test' className="" />
           <input {...register("addtask")} type='file' id='file' className='inputfile' />
                    <label for='file'>Choose file</label>
                    <button>Submit</button>
           </form>
           </div>
        </div>
    );
};

export default Addtask;