import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast';
import { HiMiniBars3 } from "react-icons/hi2";

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto'>
            <div className=''>
                <Link to='/'>
                    <img width="160" height="32" loading='lazy' src='https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg'></img>
                </Link>
            </div>

            <nav className='hidden md:block'>
                <ul className='text-text flex gap-x-6'>
                    <li className='tracking-wide font-overallFont'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='tracking-wide font-overallFont'>
                        <Link to='/'>About</Link>
                    </li>
                    <li className='tracking-wide font-overallFont'>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='md:flex items-center gap-x-4 hidden'>
                {   !isLoggedIn &&
                    <Link to='/login'>
                        <button className='bg-buttonBG text-buttontext py-[8px] px-[12px] rounded-[8px] border border-gray-700 font-overallFont'>Log in</button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to='/signup'>
                        <button className='bg-buttonBG text-buttontext py-[8px] px-[12px] rounded-[8px] border border-gray-700 font-overallFont'>Sign up</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='/login'>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out!");
                        }} className='bg-buttonBG text-buttontext py-[8px] px-[12px] rounded-[8px] border border-gray-700 font-overallFont'>Log Out</button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className='bg-buttonBG text-buttontext py-[8px] px-[12px] rounded-[8px] border border-gray-700 font-overallFont'>Dashboard</button>
                    </Link>
                }
            </div>
                
            <button className='md:hidden mr-4'>
                <HiMiniBars3 className='text-buttontext text-2xl'/>
            </button>
        </div>
    );
};

export default Navbar;