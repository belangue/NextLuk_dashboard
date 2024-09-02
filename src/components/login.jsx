import React, { useState } from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <div className="tap-top">
                <svg className="feather">
                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-up"></use>
                </svg>
            </div>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="login-card login-dark">
                            <div>
                                <div>
                                    <a className="logo" href="index.html">
                                        <img style={{width:'50px', height:'50px'}} className="img-fluid for-light" src={require("../assets/images/logo/logo.jpg")}
                                            alt="looginpage" />
                                        <img className="img-fluid for-dark m-auto" src={require("../assets/images/logo/dark-logo.png")}
                                            alt="logo" />
                                    </a>
                                </div>
                                <div className="login-main">
                                    <form className="theme-form">
                                        <h2 className="text-center">Sign in to account</h2>
                                        <p className="text-center">Enter your email &amp; password to login</p>
                                        <div className="form-group">
                                            <label className="col-form-label">Email Address</label>
                                            <input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Password</label>
                                            <div className="form-input position-relative">
                                                <input className="form-control"
                                                    type={showPassword
                                                        ? "text" : "password"}
                                                    name="login[password]" required=""
                                                    placeholder="*********" />
                                                <div className="show-hide" onClick={handleShowPassword}>
                                                    <span className="">{showPassword ? 'Hide' : 'Show'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 checkbox-checked">
                                            <div className="form-check checkbox-solid-info">
                                                <input className="form-check-input" id="solid6" type="checkbox" />
                                                <label className="form-check-label" for="solid6">Remember password</label>
                                            </div><a className="link-two" href="forget-password.html">Forgot password?</a>
                                            <div className="text-end mt-3"><a className="btn btn-primary btn-block w-100 text-white"
                                                href="/Dashboard">Sign in </a></div>
                                        </div>
                                        <div className="login-social-title">
                                            <h6>Or Sign in with </h6>
                                        </div>
                                        
                                        <p className="mt-4 mb-0 text-center">Don't have account?<a className="ms-2" href="/Signup">Create
                                            Account</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
