import React from 'react';
import { useForm } from 'react-hook-form';
import { WiDirectionRight } from "react-icons/wi";
import { GrAttachment } from "react-icons/gr";
import { Link } from 'react-router-dom';



const SubmitTask = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className='submit-main-part'>
            <div>
                <h2>Show title here </h2>
                <h4>Show description here</h4>
                <div className='option-design p-3'>
                <GrAttachment></GrAttachment>
                        <label for='file'><span>Attached file</span></label>
                        <input {...register("addtask")} type='file' id='file' className='inputfile' />
                    </div>
                    <button><Link to='/assignment' className='submit-btn'>Add Your Task<WiDirectionRight className='icon'></WiDirectionRight></Link></button>
            </div>
        </div>
    );
};

export default SubmitTask;