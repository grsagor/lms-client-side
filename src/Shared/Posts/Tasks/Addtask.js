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
                        <input {...register("addtask")} type='test' className="task-input" />
                    </div>
                    <div className='task-label-input'>
                        <label for=''>Descripton</label>
                        <input {...register("addtask")} type='test' className="task-input" />
                    </div>
                    
                    <div className='option-design p-3'>
                    <GoFileSymlinkDirectory></GoFileSymlinkDirectory>
                        <label for='file'><span>Choose file</span></label>
                        <input {...register("addtask")} type='file' id='file' className='inputfile' />
                    </div>
                    <div className='task-btn'>
                    <button>Submit</button>

                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Addtask;