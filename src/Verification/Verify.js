import React from 'react';
import { useHistory } from "react-router-dom";

function Verify() {
    const link = sessionStorage.getItem("link")
    const history = useHistory();
    async function handleClick() {
        console.log(link);
        window.open(link, '_blank', 'noopener,noreferrer');
        history.push("/Login");
    };

    return (
        <div className="container">
            <div className="panel">
                <div className="loginLinks">
                    <p className='header'>Please click the link below to confirm your membership.</p>
                    <a href='/Login' onClick={handleClick}>
                        <span className="link">Confirm Your Account</span>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Verify;
