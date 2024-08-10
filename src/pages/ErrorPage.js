import React from "react";
import './ErrorPage.css';

import { useNavigate } from'react-router-dom';

function NotFound() {
    
    const navigate = useNavigate();

    function gotohomeHandler() {
        navigate("/");
    };

    return(
        <div className="notfound-main">
            <div className="notfound-card">
                <p className="error-main-text">Oops!</p>

                <p className="error">404 - Page Not Found</p>
                <p className="error-text">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                <button className="gotohome-btn" onClick={gotohomeHandler}>GO TO HOMEPAGE</button>
            </div>
        </div>
    );
};

export default NotFound;