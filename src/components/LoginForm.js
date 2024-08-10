import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";

function LoginForm ({setIsLoggedIn}) { 

    const [formData, setFormData] = useState({email:"", password:""});
    const [showpass, setShowPass] = useState(false);
    const navigate = useNavigate();
 
    const changeHandler = (event) => {
        setFormData((prevData) => {
            return{
                ...prevData,
                [event.target.name]: event.target.value
            } 
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In!"); 
        console.log("Printing the form data...");
        console.log(formData);
        navigate("/dashboard");
    };


    return(
            <form onSubmit={submitHandler} className="w-full flex flex-col gap-y-4 mt-4 ">
            <label className="w-full">
                <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1">
                    Email Address<sup className="text-red-500 ml-1 font-overallFont">*</sup>
                </p>
                <input 
                    required 
                    type="email" 
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={changeHandler}
                    className="p-[12px] bg-buttonBG rounded-[0.5rem] text-richblack-5 w-full text-welcomeText"
                />
            </label>
            
            <label className="w-full">
                <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1">
                    Password<sup className="text-red-500 ml-1 font-overallFont">*</sup>
                </p>
                <input 
                    required
                    type={showpass ? ("text") : ("password")}
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="p-[12px] bg-buttonBG rounded-[0.5rem] text-richblack-5 w-full text-welcomeText"
                />

                <span className="absolute top-[382px] left-[600px] cursor-pointer text-welcomeText" onClick={() => {setShowPass((prev) => !prev)}}>
                    {showpass? (<BsEyeSlash/>) : (<BsEye/>)} 
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-desc2Text tracking-wide max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-signinBG py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-signinColor font-overallFont">Sign In</button>
        </form>
    );
};

export default LoginForm;