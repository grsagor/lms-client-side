import React from 'react';
import img1 from '../Assignment/images/task.png';
import { useForm } from 'react-hook-form';


const Assignment = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className='p-10 rounded'>
            <from onSubmit={handleSubmit()} >
                <div className='main-part'>
                    <div className='heading-photo'>
                        <h1>ASSIGNMENT</h1>
                        <div className='deadline'>
                            <div className=''>
                                <label for=''>Date</label>
                                <input {...register("assignment")} type='date' className="" />
                            </div>
                            <div className=''>
                                <label for=''>Time</label>
                                <input {...register("assignment")} type='time' className="" />
                            </div>
                        </div>
                        <img src={img1} className='task-photo' />
                    </div>
                    <div className='add-submit'>
                        <input {...register("add-assignment")} type='file' id='file' className='inputfile' />
                        <label for='file'>Choose file</label>
                        <button>Submit</button>
                    </div>
                </div>
            </from>
        </div>
    );
};

export default Assignment;