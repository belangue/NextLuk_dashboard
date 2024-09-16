// import React, { useState } from 'react';
// import { useNavigate, useLoaderData } from 'react-router-dom'

// export default function Login() {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const navigate = useNavigate()
//     const User = useLoaderData()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState('')
//     const [respond, setRespond] = useState('')
//     const [success, setSuccess] = useState('')

//     async function submit() {
//         if (email == '' || password == '') {
//             return
//         }
//         setError('')
//         setRespond('')
//         setSuccess('')
//         setLoading(true)

//         await fetch('https://comel-back-end.vercel.app/api/admin/login', {
//             method: 'post',
//             headers: {
//                 'content-type': 'application/json',
//                 'accept': 'applicaion/json',
//                 'access-control-origin': '*'
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password
//             })
//         })
//             .then(res => res.json())
//             .then(async (data) => {
//                 // console.log("data", data)
//                 if (data.token) {
//                     setSuccess(data.message)
//                     await localStorage.setItem('token', data.token)
//                     // window.location.reload();
//                     window.location.pathname = "/dashboard/salon"
//                     // navigate("/dashboard/view/B1A", { replace: true, state: { name: data.name } })
//                 } else {
//                     setRespond(data.message)
//                 }
//                 setLoading(false)
//             })
//             .catch(e => {
//                 // console.log(e)
//                 setError("Verify your internet connection")
//                 setLoading(false)
//             })
//     }
//     const toDashboard = () => {
//         setTimeout(() => {
//             navigate("/dashboard", { replace: true, state: { name: User.name } })
//         }, 200)
//     }

//     return (
//         <div>
//             <div className="tap-top">
//                 <svg className="feather">
//                     <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-up"></use>
//                 </svg>
//             </div>
//             <div className="container-fluid p-0">
//                 <div className="row m-0">
//                     <div className="col-12 p-0">
//                         <div className="login-card login-dark">
//                             <div>
//                                 <div>
//                                     <a className="logo" href="index.html">
//                                         <img style={{width:'50px', height:'50px'}} className="img-fluid for-light" src={require("../assets/images/logo/logo.jpg")}
//                                             alt="looginpage" />
//                                         <img className="img-fluid for-dark m-auto" src={require("../assets/images/logo/dark-logo.png")}
//                                             alt="logo" />
//                                     </a>
//                                 </div>
//                                 <div className="login-main">
//                                     <form className="theme-form">
//                                         <h2 className="text-center">Sign in to account</h2>
//                                         <p className="text-center">Enter your email &amp; password to login</p>
//                                         <div className="form-group">
//                                             <label className="col-form-label">Email Address</label>
//                                             <input className="form-control" type="email" required="" placeholder="Test@gmail.com" onChange={e => setEmail(e.target.value)} value={email}/>
//                                         </div>
//                                         <div className="form-group">
//                                             <label className="col-form-label">Password</label>
//                                             <div className="form-input position-relative">
//                                                 <input className="form-control"
//                                                     type={showPassword
//                                                         ? "text" : "password"}
//                                                     name="login[password]" required=""
//                                                     placeholder="*********"  value={password} onChange={e => setPassword(e.target.value)} />
//                                                 <div className="show-hide" onClick={handleShowPassword}>
//                                                     <span className="">{showPassword ? 'Hide' : 'Show'}</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="form-group mb-0 checkbox-checked">
//                                             <div className="form-check checkbox-solid-info">
//                                                 <input className="form-check-input" id="solid6" type="checkbox" />
//                                                 <label className="form-check-label" for="solid6">Remember password</label>
//                                             </div><a className="link-two" href="forget-password.html">Forgot password?</a>
//                                             <div className="text-end mt-3"><a className="btn btn-primary btn-block w-100 text-white"
//                                                 onClick={() => submit()}>Sign in </a></div>
//                                         </div>
//                                         <div className="login-social-title">
//                                             <h6>Or Sign in with </h6>
//                                         </div>
                                        
//                                         <p className="mt-4 mb-0 text-center">Don't have account?<a className="ms-2" href="/Signup">Create
//                                             Account</a></p>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export const loginLoader = async ({ params }) => {
//     let token = localStorage.getItem('token')
//     const res = await fetch('https://comel-back-end.vercel.app/api/isLogin', {
//         headers: {
//             'content-type': 'application/json',
//             'accept': 'applicaion/json',
//             'access-conteol-origin': '*',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//     })

//     if (!res.ok) {
//         throw Error('Could not find any user.')
//     }
//     // console.log("res.json()",res.json());
//     let response = res.json()
//     return response

// }

import React, { useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const User = useLoaderData();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [respond, setRespond] = useState('');
    const [success, setSuccess] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    async function submit(e) {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill in all fields');
            return;
        }

        setError('');
        setRespond('');
        setSuccess('');
        setLoading(true);

        try {
            const response = await fetch('https://{{bk_url}}/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Origin': window.location.origin, // Add this line
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Add this line
            });

            const data = await response.json();
            console.log('Response:', response);
            console.log('Data:', data);

            if (response.ok) {
                if (data.token) {
                    setSuccess(data.message || 'Login successful');
                    localStorage.setItem('token', data.token);
                    navigate("/dashboard/salon");
                } else {
                    setRespond(data.message || 'Login successful, but no token received');
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (e) {
            console.error('Login error:', e);
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-card login-dark">
            <div className="login-main">
                <form className="theme-form" onSubmit={submit}>
                    {/* Form content remains the same */}
                </form>
            </div>
        </div>
    );
}

export const loginLoader = async ({ request }) => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch('https://{{bk_url}}/api/user/getAllUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Origin': window.location.origin,
            },
            credentials: 'include',
        });

        if (!res.ok) {
            throw new Error('Authentication failed');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Login loader error:', error);
        return null;
    }
};