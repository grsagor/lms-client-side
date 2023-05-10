import React from 'react';
import img1 from '../Tasks/images/task.png'
import { useForm } from 'react-hook-form';
import { GoFileSymlinkDirectory } from "react-icons/go";


const Addtask = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className='task-main'>
            <div className='task-img'>
                <img src={img1} className='' />
            </div>
            <div >
                <form className='task-body'>
                    <div className='task-label-input'>
                        <label for='' className='task-label'>Title</label>
                        <input {...register("addtask")} type='test' className="bordered" />
                    </div>
                    <div className='task-label-input'>
                        <label for=''><span>Descripton</span></label>
                        <input {...register("addtask")} type='test' className="task-input" />
                    </div>
                    <div className=''>
                        <GoFileSymlinkDirectory></GoFileSymlinkDirectory>
                        <label for='file'>Choose file</label>
                        <input {...register("addtask")} type='file' id='file' className='inputfile' />

                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Addtask;