import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";

function SignUpForm ({setIsLoggedIn}) {

    const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", createPass : "", confirmPass: "",})
    const [showpass, setShowPass] = useState(false);
    const [showconfirmpass, setShowConfirmPass] = useState(false);
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("student");

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
        if(formData.createPass != formData.confirmPass){
            toast.error("Passwords do not match!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created!");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final Account Data...");
        console.log(finalData);

        navigate("/dashboard");
    };

    const buttonStyle={
        boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.18) inset'
    }

    return(
        <div className="flex flex-col justify-evenly items-start gap-2 mt-1 font-overallFont">
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-5 rounded-full max-w-max bg-buttonBG" style={buttonStyle}>
                <button className={`font-overallFont bg-pageBG text-richblack-5 py-2 px-5 rounded-full transition-all duration-200 ${accountType === "student" ? 'bg-pageBG text-welcomeText' : 'bg-transparent text-buttontext'}`}
                    onClick={()=>setAccountType("student")}
                >
                    Student
                </button> 

                <button className={`font-overallFont bg-pageBG text-richblack-200 py-2 px-5 rounded-full transition-all duration-200 ${accountType === "instructor" ? 'bg-pageBG text-welcomeText' : 'bg-transparent text-buttontext'}`} 
                    onClick={()=>setAccountType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className="w-full flex flex-col gap-y-4">
                <div className="flex gap-x-4">
                    <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1 font-overallFont">
                        First Name<sup className="text-red-500 font-overallFont">*</sup>
                    </p>
                    <input
                        required 
                        type="text" 
                        name="firstname"
                        placeholder='Enter first name'
                        value={formData.firstname}
                        onChange={changeHandler} 
                        className="w-full p-[12px] bg-buttonBG rounded-[0.5rem] font-overallFont text-welcomeText"
                        style={buttonStyle}
                    />
                    </label>

                    <label>
                    <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1 font-overallFont">
                        Last Name<sup className="text-red-500 font-overallFont">*</sup>
                    </p>
                    <input
                        required 
                        type="text" 
                        name="lastname"
                        placeholder='Enter last name'
                        value={formData.lastname}
                        onChange={changeHandler}
                        className="w-full p-[12px] bg-buttonBG rounded-[0.5rem] font-overallFont text-welcomeText" 
                        style={buttonStyle} 
                    />
                    </label>
                </div>

                <label className="w-full">
                <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1 font-overallFont">
                    Email Address<sup className="text-red-500 font-overallFont">*</sup>
                </p>
                <input 
                    required 
                    type="email" 
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={changeHandler}
                    className="p-[12px] bg-buttonBG rounded-[0.5rem] w-full text-welcomeText"
                    style={buttonStyle}
                />
                </label>

                <div className="flex gap-x-4">
                    <label className="relative">
                    <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1 font-overallFont">
                        Create Password<sup className="text-red-500 font-overallFont">*</sup>
                    </p>
                    <input
                        required 
                        type={showpass ? ("text") : ("password")} 
                        name="createPass"
                        placeholder='Enter Password'
                        value={formData.createPass}
                        onChange={changeHandler}
                        className="w-full p-[12px] pr-10 bg-buttonBG rounded-[0.5rem] font-overallFont text-welcomeText" 
                        style={buttonStyle}
                    />

                    <span onClick={() => {setShowPass((prev) => !prev)}} className="text-welcomeText absolute right-3 top-[43px] z-[10] cursor-pointer">
                        {showpass? (<BsEyeSlash/>) : (<BsEye/>)} 
                    </span>
                    </label>

                    <label className="relative">
                    <p className="text-[0.875rem] leading-[1.375rem] text-welcomeText mb-1 font-overallFont">
                        Confirm Password<sup className=" text-red-500 font-overallFont">*</sup>
                    </p>
                    <input
                        required 
                        type={showconfirmpass ? ("text") : ("password")} 
                        name="confirmPass"
                        placeholder='Confirm Password'
                        value={formData.confirmPass}
                        onChange={changeHandler} 
                        className="w-full p-[12px] pr-10 bg-buttonBG rounded-[0.5rem] font-overallFont text-welcomeText"
                        style={buttonStyle}
                    />

                    <span onClick={() => {setShowConfirmPass((prev) => !prev)}} className="text-welcomeText absolute right-3 top-[43px] z-[10] cursor-pointer">
                        {showconfirmpass? (<BsEyeSlash/>) : (<BsEye/>)} 
                    </span>
                    </label>
                </div>

                <button className="bg-signinBG py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-signinColor font-overallFont">Create Account</button>
            </form>
        </div>
        
        
    );
};

export default SignUpForm;