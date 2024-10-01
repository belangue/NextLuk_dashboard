import React, { useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <main className="page-wrapper compact-wrapper" id="pageWrapper">
                <header className="page-header row">
                    <div className="logo-wrapper d-flex align-items-center col-auto">
                        <a href="#"><img className="for-light"
                            src={require("../assets/images/logo/logo.jpg")} alt="logo" style={{ width: '50px', height: '40px' }} />
                        </a>
                        <h1 style={{ color: 'pink', fontStyle: 'italic' }}>NextLuk</h1>
                        <a className="close-btn" onClick={toggleSidebar} >
                            <div className="toggle-sidebar">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        </a>
                    </div>
                    <div className="page-main-header col">
                        <div className="header-left d-lg-block d-none">
                            <form className="search-form mb-0">
                                <div className="input-group"><span className="input-group-text pe-0">
                                    <svg className="search-bg svg-color">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                    </svg></span>
                                    <input className="form-control" type="text" placeholder="Search anything..." />
                                </div>
                            </form>
                        </div>
                        <div className="nav-right">
                        </div>
                    </div>
                </header>

                {/* <!-- Page header end--> */}
                <div className="page-body-wrapper">
                    {/* <!-- Page sidebar start--> */}
                    <div className="overlay"></div>
                    {isSidebarOpen ? (
                        <></>
                    ) : (
                        <aside className="page-sidebar" data-sidebar-layout="stroke-svg">
                            <div id="sidebar-menu">
                                <ul className="sidebar-menu" id="simple-bar">
                                    <li className="pin-title sidebar-list p-0">
                                        <h5 className="sidebar-main-title">Pinned</h5>
                                    </li>
                                    <li className="line pin-line"></li>
                                    {/* <li className="sidebar-main-title">General</li> */}
                                    <li className="sidebar-list">
                                        <NavLink className="sidebar-link" to={"User"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg><span>User</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="feather feather-user-x">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="8.5" cy="7" r="4"></circle>
                                                <line x1="18" y1="8" x2="23" y2="13"></line>
                                                <line x1="23" y1="8" x2="18" y2="13"></line>
                                            </svg>
                                        </NavLink>
                                    </li>
                                    <li className="sidebar-list">
                                        <svg className="pinned-icon">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                        </svg><NavLink className="sidebar-link" to={"salonAdmin"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 
40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 
112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 
0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 
112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg><span>salonAdmin</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-scissors">
<circle cx="6" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<line x1="20" y1="4" x2="8.12" y2="15.88"></line>
<line x1="14.47" y1="14.48" x2="20" y2="20"></line>
<line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
                                        </NavLink>
                                    </li>
                                    <li className="sidebar-list">
                                        <svg className="pinned-icon">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                        </svg><NavLink className="sidebar-link" to={"publication"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg><span>Publication</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" className="feather feather-camera">
                                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z">
                                                </path><circle cx="12" cy="13" r="4"></circle></svg>
                                        </NavLink>
                                    </li>
                                    
                                    <li className="sidebar-list">
                                        <svg className="pinned-icon">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                        </svg><NavLink className="sidebar-link" to={"schedule"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" /></svg><span>Schedule</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        </NavLink>
                                    </li>
                                    <li className="sidebar-list">
                                        <svg className="pinned-icon">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                        </svg><NavLink className="sidebar-link" to={"Salon"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 
40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 
112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 
0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 
112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg><span>SalonChange</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-scissors">
                                                <circle cx="6" cy="6" r="3"></circle>
                                                <circle cx="6" cy="18" r="3"></circle>
                                                <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                                                <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                                                <line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
                                        </NavLink>
                                    </li>
                                    <li className="sidebar-list">
                                        <svg className="pinned-icon">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                        </svg><NavLink className="sidebar-link" to={"finance"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"> <path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 
.7c.4 .1 .7 .1 1.1 
.2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 
33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7
 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2
  0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5
   75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 
   .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 
   0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7
    116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"/></svg><span>Finance</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
    stroke-linecap="round" stroke-linejoin="round" className="feather feather-dollar-sign">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    )}
                    <div className='page-body'
                    // style={{width: '100%',
                    // marginLeft: isSidebarOpen ? '-250px':'00px',
                    // transition: "margin-left 0.3s ease-in-out"}}
                    >
                        <Outlet />
                    </div>
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 footer-copyright">
                                    <p className="mb-0">Copyright 2024 © Nextluk Template by Ndongo Josepha.</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>

        </div>
    )
}
