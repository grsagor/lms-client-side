import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar nav bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl">EduMART.bd</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className="navbar-end dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/home'>Home</Link></li>
                     <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;