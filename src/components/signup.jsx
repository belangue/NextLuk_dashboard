import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './login.css'

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "Client",
    });


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = async () => {
        // alert(JSON.stringify(data));
        console.log(process.env.REACT_APP_DEV_URL);
        console.log(process.env.REACT_APP_DEV_URL2);
        await fetch(`${process.env.REACT_APP_DEV_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'access-control': '*'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if (response.message) {
                    toast.success(response.message);    
                    setTimeout(() => {
                        navigate("/login");
                    }, 1500);                
                }
                toast.error(response.error);
            })
            .catch(err => {
                console.log(err);
                toast.error("An error occurred");
            });


    }
    return (
        <div>
            <div className="container-fluid p-0 login-container">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="login-card login-dark">
                            <div>
                                <div>
                                    <div>
                                        <a className="logo" href="index.html">
                                            <img style={{ width: '50px', height: '50px' }} className="img-fluid for-light" src={require("../assets/images/logo/logo.jpg")}
                                                alt="looginpage" />
                                        </a>
                                    </div>
                                </div>
                                <div className="login-main">
                                    <div className="theme-form">
                                        <h2 className="text-center">Create your account</h2>
                                        <p className="text-center">Enter your personal details to create account</p>
                                        <div className="form-group">
                                            <label className="col-form-label">Your Name</label>
                                            <input className="form-control" type="text" required=""
                                                placeholder="Name"
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Email Address</label>
                                            <input className="form-control" type="email" required="" placeholder="Test@gmail.com"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Password</label>
                                            <div className="form-input position-relative">
                                                <input className="form-control"
                                                    type={showPassword
                                                        ? "text" : "password"}
                                                    name="login[password]" required=""
                                                    placeholder="*********"
                                                    value={data.password}
                                                    onChange={(e) => setData({ ...data, password: e.target.value })} />
                                                <div className="show-hide" onClick={handleShowPassword}>
                                                    <span className="">{showPassword ? 'Hide' : 'Show'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Confirm Password</label>
                                            <div className="form-input position-relative">
                                                <input className="form-control"
                                                    type={showPassword
                                                        ? "text" : "password"}
                                                    name="login[password]" required=""
                                                    placeholder="*********"
                                                    value={data.confirmPassword}
                                                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })} />
                                                <div className="show-hide" onClick={handleShowPassword}>
                                                    <span className="">{showPassword ? 'Hide' : 'Show'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 checkbox-checked">
                                            <div className="form-check checkbox-solid-info">
                                                <input className="form-check-input" id="solid6" type="checkbox" />
                                                <label className="form-check-label" htmlFor="solid6">Agree with</label><a className="ms-3 link"
                                                    href="forget-password.html">Privacy Policy</a>
                                            </div>
                                            <button className="btn btn-primary btn-block w-100 mt-3" type="submit"
                                                onClick={handleSubmit}
                                            >Create Account</button>
                                        </div>
                                        <p className="mt-4 mb-0 text-center">Already have an account?<a className="ms-2" href="/login">Sign in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
