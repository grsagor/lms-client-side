import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import UseTittle from '../../Hooks/UseTittle';
import '../../Styles/Styles.css'
import img1 from '../Login/images/img1.png';
import img2 from '../Login/images/img2.png';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
  UseTittle('Login');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const {LogIn,googleLogIn} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();


  const handleLogin=data=>{
    LogIn(data.email,data.password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        console.log('login')
    })
    .catch(error =>{
        console.log(error)
    });
  }
    const handleGoogleLogIn = () => {
      googleLogIn(googleProvider)
      .then(result => {
              const user = result.user;
              console.log(user);
          })
          .catch(error => {
              console.error(error);
          })
    }
  

  return (
    <div className="hero p-5 bg-base-100">
      <div className="hero-content grid md:grid-cols-2 gap-8 flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl ml-3 bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body ">
            
            <div className='self-center '>
              <img className='h-16 w-16 ' src={img2} alt="" />
            </div>
            <h2 className='text-2xl font-bold'>LOGIN</h2>
            <div className="form-control w-full ">
              {/* <label className="label"><span className="label-text">Email</span></label> */}
              <input {...register("email", { required: "Email Address is required" })} type="text" placeholder="Enter email" className="input w-full " />
              {errors.email && <p className='text-error'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full">
              {/* <label className="label"><span className="label-text">Password</span></label> */}
              <input {...register("password", { required: "Password is required" })} type="password" placeholder="Enter password" className="input  w-full" />
              {errors.password && <p className='text-error'>{errors.password?.message}</p>}
              {/* <label className="label"><span className="label-text">Forgot Password?</span></label> */}
            </div>

            <input className='btn text-white orange-bg border-none my-5' value='Login' type="submit" />
          </form>

          <p className='text-center'>New to the website,please <Link className='font-semibold orange-text' to='/register'>Register</Link>.</p>
<div className='p-8'>
<button  onClick={handleGoogleLogIn} className='btn orange-text white-bg button-border text-secondary w-full y-4'>Continue With Google</button>

</div>
        </div>
        <div className="text-center lg:text-left">
          <img className='w-full h-4/5 rounded-3xl' src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;