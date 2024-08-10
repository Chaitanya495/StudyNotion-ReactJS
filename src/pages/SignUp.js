import React from 'react';
import Template from '../components/Template';
import signupImg from '../assets/signupImage.png'

function SignUp ({setIsLoggedIn}) {
    return(
        <div className='w-screen h-screen flex justify-start items-start'>
            <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={signupImg}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    );
};

export default SignUp;
