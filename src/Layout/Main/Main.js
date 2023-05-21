import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { IoAdd } from "react-icons/io5";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { useEffect } from 'react';


const Main = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);

    const { data: loggedUser = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    useEffect(()=>{refetch()},[user])
    const teacher = loggedUser[0]?.role === 'Teacher';
    const student = loggedUser[0]?.role === 'Student';

    const handleCreateClass = (data) => {
        console.log('Clicked');
        if(teacher){
            const course = { 
                title: data?.value, 
                teacher: user?.email,
                students: [],
            };
            fetch('http://localhost:5000/create-class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(course)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Class Created');
                })
        }
        if(student){
            const body = {
                code: data?.value,
                email: user?.email
            }
    
            fetch(`http://localhost:5000/join-class`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        toast.success('Joined in the class');
                    }
                })
        }
    }

    const handleJoinClass = (data) => {
        console.log('clicked')
        
    }
    return (
        <div className='full-body'>
            <Navbar></Navbar>
            <Outlet className="outlet-body"></Outlet>
            <Footer></Footer>
            <label htmlFor="my-modal" className='add-class-btn btn'><IoAdd></IoAdd></label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <form onSubmit={handleSubmit(handleCreateClass)}>
                        <input {...register("value", { required: "Title is required" })} type="text" placeholder={`${teacher? 'Enter Title' : ''}${student? 'Enter Code' : ''}`} className="input w-full " />
                        <div className="modal-action">
                            <label htmlFor="my-modal" className='btn'>Close</label>
                        </div>
                        <input value={`${teacher? 'Create Class' : ''}${student? 'Join Class' : ''}`} className='btn' type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;