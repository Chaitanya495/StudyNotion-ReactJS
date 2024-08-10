import React from "react";
import frameImage from "../assets/frameImage.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import {FcGoogle} from 'react-icons/fc';

function Template ({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto flex-col-reverse gap-y-12 md:gap-y-0 md:gap-x-12 md:flex-row">
            <div className="w-11/12 max-w-[450px] mx-auto md:mx-0">
                <h1 className="w-full text-welcomeText font-semibold text-[1.875rem] leading-[2.375rem] font-overallFont tracking-wide">
                    {title}
                </h1>

                <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-desc1Text font-overallFont">{desc1}</span>
                    <span className="text-desc2Text italic font-overallFont">{desc2}</span>
                </p>

                {formtype === "signup" ?
                (<SignUpForm  setIsLoggedIn={setIsLoggedIn}/>) :
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="w-full flex items-center gap-x-2 my-4">
                    <div className="flex-1 h-[1px] bg-orline"></div>
                    <p className="text-orColor font-medium text-[0.875rem] leading-[1.375rem] font-overallFont">OR</p>
                    <div className="flex-1 h-[1px] bg-orline"></div>
                </div>

                <button className="w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-100 border border-richblack-700">
                    <FcGoogle className="text-xl"></FcGoogle>
                    <p className="font-overallFont tracking-normal text-buttontext text-md">Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px] mx-auto md:mx-0">
                <img src={frameImage} alt="Logo" loading="lazy" height="504" width="558"/>
                
                <img src={image} alt="Students" loading="lazy" height="504" width="558" className="absolute z-10 -top-4 right-4"/>
            </div>

        </div>
    );
};

export default Template;