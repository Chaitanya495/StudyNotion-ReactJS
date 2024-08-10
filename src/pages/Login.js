import React from 'react';
import Template from '../components/Template';
import loginImg from '../assets/loginImage.png'

function Login ({setIsLoggedIn}) {

    return(
        <div className='w-screen h-screen flex justify-start items-start'>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={loginImg}
                formtype="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    );
};

export default Login;
