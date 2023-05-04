import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';

const Navbar = () => {
    const [bgColor1, setBgColor1] = useState('white');
    const [bgColor2, setBgColor2] = useState('white');
    const [bgColor3, setBgColor3] = useState('white');
    const [bgColor4, setBgColor4] = useState('white');
    const [bgColor5, setBgColor5] = useState('white');

    const mouseEvent1 = (color) => {
        setBgColor1(color);
    }
    const mouseEvent2 = (color) => {
        setBgColor2(color);
    }
    const mouseEvent3 = (color) => {
        setBgColor3(color);
    }
    const mouseEvent4 = (color) => {
        setBgColor4(color);
    }
    const mouseEvent5 = (color) => {
        setBgColor5(color);
    }

    const menuItems = <>
    <li><Link style={{backgroundColor: bgColor1}} onMouseDown={() => mouseEvent1('#FF2D20')} onMouseUp={() => mouseEvent1('white')} to='/'>Home</Link></li>
    <li><Link style={{backgroundColor: bgColor2}} onMouseDown={() => mouseEvent2('#FF2D20')} onMouseUp={() => mouseEvent2('white')} to='/assignment'>Assignment</Link></li>
    <li><Link style={{backgroundColor: bgColor4}} onMouseDown={() => mouseEvent4('#FF2D20')} onMouseUp={() => mouseEvent4('white')} to='/quiz'>Quiz</Link></li>
    <li><Link style={{backgroundColor: bgColor3}} onMouseDown={() => mouseEvent3('#FF2D20')} onMouseUp={() => mouseEvent3('white')} to=''>Blog</Link></li>
    <li><Link style={{backgroundColor: bgColor4}} onMouseDown={() => mouseEvent4('#FF2D20')} onMouseUp={() => mouseEvent4('white')} to=''>Abuot Us</Link></li>
    <li><Link style={{backgroundColor: bgColor5}} onMouseDown={() => mouseEvent5('#FF2D20')} onMouseUp={() => mouseEvent5('white')} to='login'><button className="orange-bg text-white p-2 rounded-lg px-5">Login</button></Link></li>
</>

    return (
        <div className="navbar drop-shadow">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl font-grotesque leading-9 tracking-widest orange-text">
EduMart.bd
                </Link>
            </div>
            <div className="flex-none secondary-text">
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;