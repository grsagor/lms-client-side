import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img1 from '../Register/Images/img1.png';
import img2 from '../Register/Images/img2.png';
import UseTittle from '../../Hooks/UseTittle';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Register = () => {
    UseTittle('Register');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                saveUsers(data);
            })
            .catch(error => console.log(error));
    }

    const saveUsers = (data) => {
        const user = { 
            name: data?.name, 
            email: data?.email,
            university: 'Not Set',
            address: 'Not Set',
            role: data.role,
            classes: [],
        };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('User Created');
            })
    }

    return (
        <div>
            <div className="hero p-5 bg-base-100">
                <div className="hero-content grid md:grid-cols-2 gap-8 flex-col lg:flex-row ">
                    <div className="text-center lg:text-left">
                        <img className='w-full h-full rounded-3xl' src={img1} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ml-3 bg-base-100">

                        <form className='card-body' onSubmit={handleSubmit(handleSignUp)}>
                            <div className='self-center '>
                                <img className='h-16 w-16 ' src={img2} alt="" />
                            </div>
                            <h2 className='text-2xl font-bold'> REGISTER</h2>
                            <div className="form-control w-full">
                                {/* <label className="label"><span className="label-text">Name</span></label> */}
                                <input {...register("name")} type="text" placeholder="Enter name" className="input w-full" />
                            </div>

                            {/* <div className="form-control w-full max-w-xs py-3">
                                <label className="label"><span className="label-text">Enter Picture</span></label>
                                <input {...register("image")} type="file" placeholder="Enter Picture" className="input w-full" />
                            </div> */}

                            <div className="form-control w-full">
                                {/* <label className="label"><span className="label-text">Email</span></label> */}
                                <input {...register("email")} type="email" placeholder="Enter email" className="input w-full" />
                            </div>

                            <div className="form-control w-full">
                                {/* <label className="label"><span className="label-text">Password</span></label> */}
                                <input {...register("password")} type="password" placeholder="Enter password" className="input w-full" />
                            </div>

                            <div className="form-control w-full max-w-xs mt-5">
                                <label className="label">
                                    <span className="label-text">Are you a teacher or a student?</span>
                                </label>
                                <select {...register("role")} className="select select-bordered">
                                    <option disabled selected>Select one</option>
                                    <option>Teacher</option>
                                    <option>Student</option>
                                </select>
                            </div>

                            <input className='btn border-none w-full mt-3 orange-bg  text-white' value='REGISTER' type="submit" />
                        </form>
                        <p className='text-center mt-0 mb-3'>Already have an account, please <Link className='font-semibold orange-text' to='/login'>Login</Link>.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;