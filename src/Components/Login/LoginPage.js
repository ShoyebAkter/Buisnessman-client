import React from 'react';



const LoginPage = () => {
    return (
        <div className="form-container sign-in-container">
                <form className="form" action="#">
                    <h1 className="form-title">Welcome Back!</h1>

                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />

                    <button className="form-button">sign in</button>
                    <a className="find-password" href="#">Forgot Password</a>
                </form>
            </div>
    );
};

export default LoginPage;