import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';

const Main = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return (
        <div className='full-body'>
            <Navbar></Navbar>
            <Outlet className="outlet-body"></Outlet>
            <Footer></Footer>
            <label htmlFor="my-modal" className='add-class-btn btn'></label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <form action="">
                        <input {...register("class_code", { required: "Email Address is required" })} type="text" placeholder="Enter class code" className="input w-full " />
                        <div className="modal-action">
                            <label htmlFor="my-modal" className='btn'>Close</label>
                            <input type="submit" value="Submit" name="" id="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;