import React from 'react'

export default function Home() {
    return (
        <div>
            <div class="page-wrapper compact-wrapper" id="pageWrapper">
                <div class="page-header row">
                    <div class="logo-wrapper d-flex align-items-center col-auto"><a href="index.html"><img class="for-light" src="../assets/images/logo/logo.png" alt="l/ogo"/><img class="for-dark" src="../assets/images/logo/dark-logo.png" alt="l/ogo"/><a class="close-btn" href="javascript:void(0)"></a>
                        <div class="toggle-sidebar">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div></a></div>
                        <div class="page-main-header col">
                            <div class="header-left d-lg-block d-none">
                                <form class="search-form mb-0">
                                    <div class="input-group"><span class="input-group-text pe-0">
                                        <svg class="search-bg svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                        </svg></span>
                                        <input class="form-control" type="text" placeholder="Search anything..."/>
                                    </div>
                                </form>
                            </div>
                            <div class="nav-right">
                                <ul class="header-right">
                                    <li class="modes d-flex"><a class="dark-mode">
                                        <svg class="svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Moon"></use>
                                        </svg></a></li>
                                    <li class="serchinput d-lg-none d-flex"><a class="search-mode">
                                        <svg class="svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                        </svg></a>
                                        <div class="form-group search-form">
                                            <input type="text" placeholder="Search here..."/>
                                        </div>
                                    </li>
                                    <li class="custom-dropdown"><a href="javascript:void(0)">
                                        <svg class="svg-color circle-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Bell"></use>
                                        </svg></a><span class="badge rounded-pill badge-secondary">3</span>
                                        <div class="custom-menu notification-dropdown py-0 overflow-hidden">
                                            <h5 class="title bg-primary-light">Notifications <a href="private-chat.html"><span class="font-primary">View</span></a></h5>
                                            <ul class="activity-update">
                                                <li class="d-flex align-items-center b-l-primary">
                                                    <div class="flex-grow-1"> <span>Just Now</span><a href="private-chat.html">
                                                        <h5>What`s the project report update?</h5></a>
                                                        <h6>Rick Novak</h6>
                                                    </div>
                                                    <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/10.jpg" alt=""/></div>
                                                </li>
                                                <li class="d-flex align-items-center b-l-secondary">
                                                    <div class="flex-grow-1"> <span>12:47 am</span><a href="private-chat.html">
                                                        <h5>James created changelog page</h5></a>
                                                        <h6>Susan Connor</h6>
                                                    </div>
                                                    <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/4.jpg" alt=""/></div>
                                                </li>
                                                <li class="d-flex align-items-center b-l-tertiary">
                                                    <div class="flex-grow-1"> <span>06:10 pm</span><a href="private-chat.html">
                                                        <h5>Polly edited Contact page</h5></a>
                                                        <h6>Roger Lum</h6>
                                                    </div>
                                                    <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/1.jpg" alt=""/></div>
                                                </li>
                                                <li class="mt-3 d-flex justify-content-center">
                                                    <div class="button-group"><a class="btn btn-secondary" href="private-chat.html">All Notification</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="custom-dropdown"><a href="javascript:void(0)">
                                        <svg class="svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Star"></use>
                                        </svg></a>
                                        <div class="custom-menu bookmark-dropdown py-0 overflow-hidden">
                                            <h5 class="title bg-primary-light">Bookmark</h5>
                                            <ul>
                                                <li>
                                                    <form class="mb-3">
                                                        <div class="input-group">
                                                            <input class="form-control" type="text" placeholder="Search Bookmark..."/><span class="input-group-text">
                                                                <svg class="svg-color">
                                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                                                </svg></span>
                                                        </div>
                                                    </form>
                                                </li>
                                                <li class="d-flex align-items-center bg-light-primary">
                                                    <div class="flex-shrink-0 me-2"><a href="index.html">
                                                        <svg class="svg-color stroke-primary">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                                                        </svg></a></div>
                                                    <div class="d-flex justify-content-between align-items-center w-100"><a href="index.html">Dashboard</a>
                                                        <svg class="svg-color icon-star">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Star"></use>
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="d-flex align-items-center bg-light-secondary">
                                                    <div class="flex-shrink-0 me-2"><a href="to-do.html">
                                                        <svg class="svg-color stroke-secondary">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pie"></use>
                                                        </svg></a></div>
                                                    <div class="d-flex justify-content-between align-items-center w-100"><a href="to-do.html">To-do</a>
                                                        <svg class="svg-color icon-star">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Star"></use>
                                                        </svg>
                                                    </div>
                                                </li>
                                                <li class="d-flex align-items-center bg-light-tertiary">
                                                    <div class="flex-shrink-0 me-2"><a href="apexchart.html">
                                                        <svg class="svg-color stroke-tertiary">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Chart"></use>
                                                        </svg></a></div>
                                                    <div class="d-flex justify-content-between align-items-center w-100"><a href="apexchart.html">Chart</a>
                                                        <svg class="svg-color icon-star">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Star"></use>
                                                        </svg>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="custom-dropdown"><a href="javascript:void(0)">
                                        <svg class="svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Bag"></use>
                                        </svg></a>
                                        <div class="custom-menu cart-dropdown py-0 overflow-hidden">
                                            <h5 class="title bg-primary-light">Cart<span>Total : <span class="font-primary">4350.9</span></span></h5>
                                            <ul>
                                                <li class="cartbox d-flex bg-light-primary">
                                                    <div class="flex-shrink-0 border-primary"><img src={require("../assets/images/dashboard2/product/1.png")} alt=""/></div>
                                                    <div class="touchpin-details"><a href="cart.html">
                                                        <h5>Apple Computers</h5></a><span>$2600.00</span>
                                                        <div class="touchspin-wrapper">
                                                            <button class="decrement-touchspin btn-touchspin">
                                                                <svg class="svg-color">
                                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                                </svg>
                                                            </button>
                                                            <input class="form-control input-touchspin bg-light-primary" type="number" value="5"/>
                                                                <button class="increment-touchspin btn-touchspin">
                                                                    <svg class="svg-color">
                                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#plus"></use>
                                                                    </svg>
                                                                </button>
                                                        </div>
                                                        <button class="btn btn-close"></button>
                                                    </div>
                                                </li>
                                                <li class="cartbox d-flex bg-light-secondary">
                                                    <div class="flex-shrink-0 border-secondary"><img src="../assets/images/dashboard2/product/2.png" alt=""/></div>
                                                    <div class="touchpin-details"><a href="cart.html">
                                                        <h5>Microwave</h5></a><span>$1450.45</span>
                                                        <div class="touchspin-wrapper">
                                                            <button class="decrement-touchspin btn-touchspin">
                                                                <svg class="svg-color">
                                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                                </svg>
                                                            </button>
                                                            <input class="form-control input-touchspin bg-light-secondary" type="number" value="5"/>
                                                                <button class="increment-touchspin btn-touchspin">
                                                                    <svg class="svg-color">
                                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#plus"></use>
                                                                    </svg>
                                                                </button>
                                                        </div>
                                                        <button class="btn btn-close"></button>
                                                    </div>
                                                </li>
                                                <li class="cartbox d-flex bg-light-tertiary">
                                                    <div class="flex-shrink-0 border-tertiary"><img src="../assets/images/dashboard2/product/3.png" alt=""/></div>
                                                    <div class="touchpin-details"><a href="cart.html">
                                                        <h5>Mackup Kit</h5></a><span>$300.45</span>
                                                        <div class="touchspin-wrapper">
                                                            <button class="decrement-touchspin btn-touchspin">
                                                                <svg class="svg-color">
                                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                                </svg>
                                                            </button>
                                                            <input class="form-control input-touchspin bg-light-tertiary" type="number" value="5"/>
                                                                <button class="increment-touchspin btn-touchspin">
                                                                    <svg class="svg-color">
                                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#plus"></use>
                                                                    </svg>
                                                                </button>
                                                        </div>
                                                        <button class="btn btn-close"></button>
                                                    </div>
                                                </li>
                                                <li class="mt-3 p-0 d-flex justify-content-center">
                                                    <div><a class="btn btn-secondary" href="checkout.html">Checkout</a></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="custom-dropdown"><a href="javascript:void(0)">
                                        <svg class="svg-color">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Message"></use>
                                        </svg></a><span class="badge rounded-pill badge-tertiary">3</span>
                                        <div class="custom-menu message-dropdown py-0 overflow-hidden">
                                            <h5 class="title bg-primary-light">Messages</h5>
                                            <ul>
                                                <li class="d-flex b-t-primary">
                                                    <div class="d-block"><a href="letter-box.html">
                                                        <h5>Design meeting</h5></a>
                                                        <h6>
                                                            <svg class="feather me-1">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                            </svg><span>Just Now</span>
                                                        </h6>
                                                    </div>
                                                    <div class="badge badge-light-danger">
                                                        <svg class="feather me-1">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                        </svg><span>Open</span>
                                                    </div>
                                                </li>
                                                <li class="d-flex b-t-secondary">
                                                    <div class="d-block"><a href="letter-box.html">
                                                        <h5>Weekly scurm Meeting</h5></a>
                                                        <h6>
                                                            <svg class="feather me-1">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                            </svg><span>1  Hour Ago</span>
                                                        </h6>
                                                    </div>
                                                    <div class="badge badge-light-danger">
                                                        <svg class="feather me-1">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                        </svg><span>Open</span>
                                                    </div>
                                                </li>
                                                <li class="d-flex b-t-tertiary">
                                                    <div class="d-block"><a href="letter-box.html">
                                                        <h5>Check your login page</h5></a>
                                                        <h6>
                                                            <svg class="feather me-1">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                            </svg><span>2  Hour Ago</span>
                                                        </h6>
                                                    </div>
                                                    <div class="badge badge-light-success">
                                                        <svg class="feather me-1">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#clock"></use>
                                                        </svg><span>Closed</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="profile-dropdown custom-dropdown">
                                        <div class="d-flex align-items-center"><img src="../assets/images/profile.png" alt=""/>
                                            <div class="flex-grow-1">
                                                <h5>Wade Warren</h5><span>UI Designer</span>
                                            </div>
                                        </div>
                                        <div class="custom-menu overflow-hidden">
                                            <ul>
                                                <li class="d-flex">
                                                    <svg class="svg-color">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Profile"></use>
                                                    </svg><a class="ms-2" href="user-profile.html">Account</a>
                                                </li>
                                                <li class="d-flex">
                                                    <svg class="svg-color">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Message"></use>
                                                    </svg><a class="ms-2" href="letter-box.html">Inbox</a>
                                                </li>
                                                <li class="d-flex">
                                                    <svg class="svg-color">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Document"></use>
                                                    </svg><a class="ms-2" href="to-do.html">Task</a>
                                                </li>
                                                <li class="d-flex">
                                                    <svg class="svg-color">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Login"></use>
                                                    </svg><a class="ms-2" href="login.html">Log Out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <div class="page-body-wrapper">
                            <div class="overlay"></div>
                            <aside class="page-sidebar" data-sidebar-layout="stroke-svg">
                                <div class="left-arrow" id="left-arrow">
                                    <svg class="feather">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-left"></use>
                                    </svg>
                                </div>
                                <div id="sidebar-menu">
                                    <ul class="sidebar-menu" id="simple-bar">
                                        <li class="pin-title sidebar-list p-0">
                                            <h5 class="sidebar-main-title">Pinned</h5>
                                        </li>
                                        <li class="line pin-line"></li>
                                        <li class="sidebar-main-title">General</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                                                </svg><span>Dashboard</span>
                                                <div class="badge badge-primary rounded-pill">3</div>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="index.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Default</a></li>
                                                <li><a href="dashboard-02.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Ecommerce</a></li>
                                                <li><a href="dashboard-03.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Project</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pie"></use>
                                                </svg><span>Widgets</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="general-widget.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>General</a></li>
                                                <li><a href="chart-widget.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Chart</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Document"></use>
                                                </svg><span>Page Layout</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="box-layout.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Box Layout</a><a href="layout-rtl.html">
                                                        <svg class="svg-menu">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                        </svg>RTL</a><a href="layout-dark.html">
                                                        <svg class="svg-menu">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                        </svg>Dark</a></li>
                                            </ul>
                                        </li>
                                        <li class="line"> </li>
                                        <li class="sidebar-main-title">Applications</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Info-circle"></use>
                                                </svg><span>Project</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="project-list.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Project List</a></li>
                                                <li> <a href="projectcreate.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Create New</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="file-manager.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Paper"></use>
                                                </svg><span>File Manager</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="kanban-board.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Wallet"></use>
                                                </svg><span>Kanban Board</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Bag"></use>
                                                </svg><span>Ecommerce</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="product.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Product</a></li>
                                                <li><a href="product-page.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Product Page </a></li>
                                                <li><a href="add-products.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Add Product </a></li>
                                                <li><a href="list-products.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Product List</a></li>
                                                <li><a href="payment-details.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Payment Details </a></li>
                                                <li><a href="order-history.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Order History </a></li>
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Invoice
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="invoice-1.html">
                                                            Invoice-1</a></li>
                                                        <li><a href="invoice-2.html">
                                                            Invoice-2</a></li>
                                                        <li><a href="invoice-3.html">
                                                            Invoice-3</a></li>
                                                        <li><a href="invoice-4.html">
                                                            Invoice-4</a></li>
                                                        <li><a href="invoice-5.html">
                                                            Invoice-5</a></li>
                                                        <li><a href="invoice-template.html">
                                                            Invoice-6</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="cart.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Cart </a></li>
                                                <li><a href="list-wish.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Wishlist </a></li>
                                                <li><a href="checkout.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Checkout </a></li>
                                                <li><a href="pricing.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Pricing</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="letter-box.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Message"></use>
                                                </svg><span>Letter Box</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Chat"></use>
                                                </svg><span>Chat</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="private-chat.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Private Chat</a></li>
                                                <li><a href="group-chat.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Group Chat</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Profile"></use>
                                                </svg><span>Users</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="user-profile.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>User Profile</a></li>
                                                <li><a href="edit-profile.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>User Edit</a></li>
                                                <li><a href="user-cards.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>User Cards</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="bookmark.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Bookmark"></use>
                                                </svg><span>Bookmarks</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="contacts.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Contacts"></use>
                                                </svg><span>Contacts</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="task.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Tick-square"></use>
                                                </svg><span>Tasks </span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="calendar-basic.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Calendar"></use>
                                                </svg><span>Calendar</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="social-app.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Camera"></use>
                                                </svg><span>Social App </span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="to-do.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Edit"></use>
                                                </svg><span>To-Do </span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="search.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                                </svg><span>Search Result</span></a>
                                        </li>
                                        <li class="line"></li>
                                        <li class="sidebar-main-title">Components</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="buttons.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#More-box"></use>
                                                </svg><span>Buttons  </span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Folder"></use>
                                                </svg><span>Ui Kits</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="typography.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Typography</a></li>
                                                <li><a href="avatars.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Avatars</a></li>
                                                <li><a href="grid.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Grid</a></li>
                                                <li><a href="helper-classes.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Helper Classes</a></li>
                                                <li><a href="tag-pills.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Tag & Pills</a></li>
                                                <li><a href="progress.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Progress</a></li>
                                                <li><a href="popover.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Popover</a></li>
                                                <li><a href="tooltip.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Tooltip</a></li>
                                                <li><a href="alert.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Alert</a></li>
                                                <li><a href="modal.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Modal</a></li>
                                                <li><a href="dropdown.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Dropdown</a></li>
                                                <li><a href="according.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Accordion</a></li>
                                                <li><a href="bootstrap-tabs.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Tabs</a></li>
                                                <li><a href="list.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Lists</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Ticket-star"></use>
                                                </svg><span>Bonus Ui</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="scrollable.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Scrollable </a></li>
                                                <li><a href="breadcrumbs.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Breadcrumb</a></li>
                                                <li><a href="pagination.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Pagination</a></li>
                                                <li><a href="ribbons.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Ribbons</a></li>
                                                <li><a href="tree.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Tree View</a></li>
                                                <li><a href="toasts.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Toast</a></li>
                                                <li><a href="rating.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Rating</a></li>
                                                <li><a href="dropzone.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Dropzone</a></li>
                                                <li><a href="tour.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Tour</a></li>
                                                <li><a href="sweetalert.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Sweetalert2</a></li>
                                                <li><a href="modal-animated.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Animated Modal</a></li>
                                                <li><a href="slider.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Slider</a></li>
                                                <li><a href="range-slider.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Range Slider</a></li>
                                                <li><a href="image-cropper.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Image Cropper</a></li>
                                                <li><a href="basic-card.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Basic Card</a></li>
                                                <li><a href="creative-card.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Creative Card</a></li>
                                                <li><a href="dragabble.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Draggable Card</a></li>
                                                <li><a href="timeline.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Timeline</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Category"></use>
                                                </svg><span>Animation</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="wow.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Wow Animation</a></li>
                                                <li><a href="aos.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>AOS Animation</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Activity"></use>
                                                </svg><span>Icons</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="flag-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Flag Icon</a></li>
                                                <li><a href="font-awesome.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Fontawesome Icon</a></li>
                                                <li><a href="feather-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Feather Icon</a></li>
                                                <li><a href="iconly-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Iconly Icon</a></li>
                                                <li><a href="ico-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Ico Icon</a></li>
                                                <li><a href="themify-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Themify icon</a></li>
                                                <li><a href="whether-icon.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Whether Icon</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Chart"></use>
                                                </svg><span>Charts</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="apexchart.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Apexchart</a></li>
                                                <li><a href="chartist.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Chartist</a></li>
                                                <li><a href="chartjs.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Chartjs</a></li>
                                            </ul>
                                        </li>
                                        <li class="line"></li>
                                        <li class="sidebar-main-title">Forms & table</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Filter"></use>
                                                </svg><span>Form Controls</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="base_input.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Base Input</a></li>
                                                <li><a href="radio-checkbox-control.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Check & Radio Box</a></li>
                                                <li><a href="input-group.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Input Groups</a></li>
                                                <li><a href="megaoptions.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Mega Options</a></li>
                                                <li><a href="form-validation.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Form validation</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Scan"></use>
                                                </svg><span>Form Widgets</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="datepicker.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Date picker </a></li>
                                                <li><a href="touchspin.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Touchspin</a></li>
                                                <li><a href="select2.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>select 2</a></li>
                                                <li><a href="switch.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Switch</a></li>
                                                <li><a href="typeahead.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Typeahead</a></li>
                                                <li><a href="clipboard.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Clipboard</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Icon-plus"></use>
                                                </svg><span>Form Layout</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="form-wizard.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Form wizard 1</a></li>
                                                <li><a href="form-wizard-two.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Form wizard 2</a></li>
                                                <li><a href="two-factor.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Two Factor</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Edit-line"></use>
                                                </svg><span>Tables</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Bootstrap Table
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="basic-table.html">
                                                            Basic Tables</a></li>
                                                        <li><a href="table_components.html">
                                                            Table Components</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Data Tables
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="datatable-basic-init.html">
                                                            Basic Init</a></li>
                                                        <li><a href="datatable-advance.html">
                                                            Advance Init</a></li>
                                                        <li><a href="datatable-API.html">
                                                            API</a></li>
                                                        <li><a href="datatable-data-source.html">
                                                            Data Sources</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="datatable-ext-autofill.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Ex. Data Tables</a></li>
                                                <li><a href="jsgrid-table.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Js Grid Table</a></li>
                                            </ul>
                                        </li>
                                        <li class="line"> </li>
                                        <li class="sidebar-main-title">Pages</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="landing-page.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Wallet"></use>
                                                </svg><span>Landing Page</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="sample-page.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Paper-plus"></use>
                                                </svg><span>Sample Page</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="translate.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Play"></use>
                                                </svg><span>Translate</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="https://admin.pixelstrap.net/edmin/starter-kit/index.html" target="_blank">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Star"></use>
                                                </svg><span>Starter kit</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Password"></use>
                                                </svg><span>Others</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Error Page
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="error-page1.html">
                                                            Error Page 1</a></li>
                                                        <li><a href="error-page2.html">
                                                            Error Page 2</a></li>
                                                        <li><a href="error-page3.html">
                                                            Error Page 3</a></li>
                                                        <li><a href="error-page4.html">
                                                            Error Page 4</a></li>
                                                        <li><a href="error-page5.html">
                                                            Error Page 5</a></li>
                                                        <li><a href="error-page6.html">
                                                            Error Page 6</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Authentication
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="login.html">
                                                            Login simple</a></li>
                                                        <li><a href="login_one.html">
                                                            Login With Bg Image</a></li>
                                                        <li><a href="login_two.html">
                                                            Login With Image Two</a></li>
                                                        <li><a href="login-bs-validation.html">
                                                            Login With Validation</a></li>
                                                        <li><a href="login-bs-tt-validation.html">
                                                            Login With Tooltip</a></li>
                                                        <li><a href="login-sa-validation.html">
                                                            Login With Sweetalert</a></li>
                                                        <li><a href="sign-up.html">
                                                            Register Simple</a></li>
                                                        <li><a href="sign-up-one.html">
                                                            Register With Bg Image</a></li>
                                                        <li><a href="sign-up-two.html">
                                                            Register With Image Two</a></li>
                                                        <li><a href="sign-up-wizard.html">
                                                            Register Wizard</a></li>
                                                        <li><a href="unlock.html">
                                                            Unlock User</a></li>
                                                        <li><a href="forget-password.html">
                                                            Forget Password</a></li>
                                                        <li><a href="reset-password.html">
                                                            Reset Password</a></li>
                                                        <li><a href="maintenance.html">
                                                            Maintenance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Coming Soon
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="comingsoon.html">
                                                            Coming Simple</a></li>
                                                        <li><a href="comingsoon-bg-video.html">
                                                            Coming With Bg Video</a></li>
                                                        <li><a href="comingsoon-bg-img.html">
                                                            Coming With Bg Image</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="submenu-title" href="javascript:void(0)">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Email Template
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                    </svg></a>
                                                    <ul class="according-submenu">
                                                        <li><a href="basic-template.html">
                                                            Basic Email</a></li>
                                                        <li><a href="email-header.html">
                                                            Basic With Header</a></li>
                                                        <li><a href="template-email.html">
                                                            Ecomerce Template</a></li>
                                                        <li><a href="template-email-2.html">
                                                            Email Template 2</a></li>
                                                        <li><a href="ecommerce-templates.html">
                                                            Ecommerce Email</a></li>
                                                        <li><a href="email-order-success.html">
                                                            Order Success </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="line"> </li>
                                        <li class="sidebar-main-title">MISCELLANEOUS</li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Gallery"></use>
                                                </svg><span>Gallery</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="gallery.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Gallery Grid</a></li>
                                                <li><a href="gallery-with-description.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Gallery Grid Desc</a></li>
                                                <li><a href="gallery-masonry.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Masonry Gallery</a></li>
                                                <li><a href="masonry-gallery-with-disc.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Masonry With Desc</a></li>
                                                <li><a href="gallery-hover.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Hover Effects</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Game"></use>
                                                </svg><span>Blog</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="blog.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Blog Details</a></li>
                                                <li><a href="blog-single.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Blog Single</a></li>
                                                <li><a href="add-post.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Add Post</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="faq.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Danger"></use>
                                                </svg><span>FAQ</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Filter-2"></use>
                                                </svg><span>Job Search</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="job-cards-view.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Cards View</a></li>
                                                <li><a href="job-list-view.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>List View</a></li>
                                                <li><a href="job-details.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Job Details</a></li>
                                                <li><a href="job-apply.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Apply</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Work"></use>
                                                </svg><span>Learning</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="learning-list-view.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Learning List</a></li>
                                                <li><a href="learning-detailed.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Detailed Course</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="pinned-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                                </svg>
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Discovery"></use>
                                                </svg><span>Maps</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="data-map.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Data Maps</a></li>
                                                <li><a href="vector-map.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Vector Maps</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="javascript:void(0)">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Shield"></use>
                                                </svg><span>Editors</span>
                                                <svg class="feather">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-right"></use>
                                                </svg></a>
                                            <ul class="sidebar-submenu">
                                                <li> <a href="quilleditor.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>Quilljs Editor</a></li>
                                                <li><a href="ace-code-editor.html">
                                                    <svg class="svg-menu">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                                    </svg>ACE Code Editor</a></li>
                                            </ul>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="knowledgebase.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Setting"></use>
                                                </svg><span>Knowledgebase</span></a>
                                        </li>
                                        <li class="sidebar-list">
                                            <svg class="pinned-icon">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Pin"></use>
                                            </svg><a class="sidebar-link" href="support-ticket.html">
                                                <svg class="stroke-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Ticket"></use>
                                                </svg><span>Support Ticket</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="right-arrow" id="right-arrow">
                                    <svg class="feather">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-right"></use>
                                    </svg>
                                </div>
                            </aside>
                            <div class="page-body">
                                <div class="container-fluid">
                                    <div class="row page-title">
                                        <div class="col-sm-6">
                                            <h3>Product</h3>
                                        </div>
                                        <div class="col-sm-6">
                                            <nav>
                                                <ol class="breadcrumb justify-content-sm-end align-items-center">
                                                    <li class="breadcrumb-item"> <a href="index.html">
                                                        <svg class="svg-color">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                                                        </svg></a></li>
                                                    <li class="breadcrumb-item">ECommerce</li>
                                                    <li class="breadcrumb-item active">Product</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid product-wrapper">
                                    <div class="product-grid">
                                        <div class="feature-products">
                                            <div class="row">
                                                <div class="col-md-6 products-total">
                                                    <div class="square-product-setting d-inline-block"><a class="icon-grid grid-layout-view" href="#" data-original-title="" title="">
                                                        <svg class="feather">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#grid"></use>
                                                        </svg></a></div>
                                                    <div class="square-product-setting d-inline-block"><a class="icon-grid m-0 list-layout-view" href="#" data-original-title="" title="">
                                                        <svg class="feather">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#list"></use>
                                                        </svg></a></div><span class="d-none-productlist filter-toggle">
                                                        Filters<span class="ms-2">
                                                            <svg class="feather toggle-data">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#chevron-down"></use>
                                                            </svg></span></span>
                                                    <div class="grid-options d-inline-block">
                                                        <ul>
                                                            <li><a class="product-2-layout-view" href="#" data-original-title="" title=""><span class="line-grid line-grid-1 bg-primary"></span><span class="line-grid line-grid-2 bg-primary"></span></a></li>
                                                            <li><a class="product-3-layout-view" href="#" data-original-title="" title=""><span class="line-grid line-grid-3 bg-primary"></span><span class="line-grid line-grid-4 bg-primary"></span><span class="line-grid line-grid-5 bg-primary"></span></a></li>
                                                            <li><a class="product-4-layout-view" href="#" data-original-title="" title=""><span class="line-grid line-grid-6 bg-primary"></span><span class="line-grid line-grid-7 bg-primary"></span><span class="line-grid line-grid-8 bg-primary"></span><span class="line-grid line-grid-9 bg-primary"></span></a></li>
                                                            <li><a class="product-6-layout-view" href="#" data-original-title="" title=""><span class="line-grid line-grid-10 bg-primary"></span><span class="line-grid line-grid-11 bg-primary"></span><span class="line-grid line-grid-12 bg-primary"></span><span class="line-grid line-grid-13 bg-primary"></span><span class="line-grid line-grid-14 bg-primary"></span><span class="line-grid line-grid-15 bg-primary"></span></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 text-sm-end"><span class="f-w-600 m-r-5">Showing Products 1 - 24 Of 200 Results</span>
                                                    <div class="select2-drpdwn-product select-options d-inline-block">
                                                        <select class="form-control btn-square" name="select">
                                                            <option value="op/t1">Featured</option>
                                                            <option value="op/t2">Lowest Prices</option>
                                                            <option value="op/t3">Highest Prices</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <div class="product-sidebar">
                                                        <div class="filter-section">
                                                            <div class="card">
                                                                <div class="card-header">
                                                                    <h6 class="mb-0 f-w-600">Filters<span class="pull-right"><i class="fa fa-chevron-down toggle-data"></i></span></h6>
                                                                </div>
                                                                <div class="left-filter">
                                                                    <div class="card-body filter-cards-view animate-chk">
                                                                        <div class="product-filter">
                                                                            <h6 class="f-w-600">Category</h6>
                                                                            <div class="checkbox-animated mt-0">
                                                                                <label class="d-block" for="edo-ani5">
                                                                                    <input class="checkbox-primary" id="edo-ani5" type="checkbox" data-original-title="" title=""/>Man Shirt
                                                                                </label>
                                                                                <label class="d-block" for="edo-ani6">
                                                                                    <input class="checkbox-primary" id="edo-ani6" type="checkbox" data-original-title="" title=""/>Man Jeans
                                                                                </label>
                                                                                <label class="d-block" for="edo-ani7">
                                                                                    <input class="checkbox-primary" id="edo-ani7" type="checkbox" data-original-title="" title=""/>Woman Top
                                                                                </label>
                                                                                <label class="d-block" for="edo-ani8">
                                                                                    <input class="checkbox-primary" id="edo-ani8" type="checkbox" data-original-title="" title=""/>Woman Jeans
                                                                                </label>
                                                                                <label class="d-block" for="edo-ani9">
                                                                                    <input class="checkbox-primary" id="edo-ani9" type="checkbox" data-original-title="" title=""/>Man T-shirt
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-filter">
                                                                            <h6 class="f-w-600">Brand</h6>
                                                                            <div class="checkbox-animated mt-0">
                                                                                <label class="d-block" for="chk-ani">
                                                                                    <input class="checkbox-primary" id="chk-ani" type="checkbox" data-original-title="" title=""/> Levi's
                                                                                </label>
                                                                                <label class="d-block" for="chk-ani1">
                                                                                    <input class="checkbox-primary" id="chk-ani1" type="checkbox" data-original-title="" title=""/>Diesel
                                                                                </label>
                                                                                <label class="d-block" for="chk-ani2">
                                                                                    <input class="checkbox-primary" id="chk-ani2" type="checkbox" data-original-title="" title=""/>Lee
                                                                                </label>
                                                                                <label class="d-block" for="chk-ani3">
                                                                                    <input class="checkbox-primary" id="chk-ani3" type="checkbox" data-original-title="" title=""/>Hudson
                                                                                </label>
                                                                                <label class="d-block" for="chk-ani4">
                                                                                    <input class="checkbox-primary" id="chk-ani4" type="checkbox" data-original-title="" title=""/>Denizen
                                                                                </label>
                                                                                <label class="d-block" for="chk-ani5">
                                                                                    <input class="checkbox-primary" id="chk-ani5" type="checkbox" data-original-title="" title=""/>Spykar
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-filter slider-product">
                                                                            <h6 class="f-w-600">Colors</h6>
                                                                            <div class="color-selector">
                                                                                <ul>
                                                                                    <li class="white"></li>
                                                                                    <li class="gray"></li>
                                                                                    <li class="black"></li>
                                                                                    <li class="orange"></li>
                                                                                    <li class="green"></li>
                                                                                    <li class="pink"></li>
                                                                                    <li class="yellow"></li>
                                                                                    <li class="blue"></li>
                                                                                    <li class="red"></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-filter pb-0">
                                                                            <h6 class="f-w-600">Price</h6>
                                                                            <div class="slider-container">
                                                                                <input class="slider" id="slider6" type="text"/>
                                                                            </div>
                                                                            <h6 class="f-w-600">New Products</h6>
                                                                        </div>
                                                                        <div class="product-filter pb-0 product-page">
                                                                            <div class="swiper-container">
                                                                                <div class="swiper-wrapper" id="testimonial">
                                                                                    <div class="swiper-slide">
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src={require("../assets/images/ecommerce/01.jpg")} alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">Woman T-shirt</p>
                                                                                                <div class="product-price">$100.00</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src="../assets/images/ecommerce/02.jpg" alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">Beauty Fashion</p>
                                                                                                <div class="product-price">$150.00</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src="../assets/images/ecommerce/03.jpg" alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">VOXATI</p>
                                                                                                <div class="product-price">$200.00</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="swiper-slide">
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src="../assets/images/ecommerce/01.jpg" alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">Fancy Shirt</p>
                                                                                                <div class="product-price">$100.00</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src="../assets/images/ecommerce/02.jpg" alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">Fancy Shirt</p>
                                                                                                <div class="product-price">$100.00</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="product-box row">
                                                                                            <div class="product-img col-md-4"><img class="img-fluid img-100" src="../assets/images/ecommerce/03.jpg" alt="" data-original-title="" title=""/></div>
                                                                                            <div class="product-details col-md-8 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                                                                                                <p class="mb-0">Fancy Shirt</p>
                                                                                                <div class="product-price">$100.00  </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="swiper-button-next"></div>
                                                                                <div class="swiper-button-prev"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-filter text-center"><img class="img-fluid banner-product" src="../assets/images/ecommerce/banner.jpg" alt="" data-original-title="" title=""/></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-9 col-sm-12">
                                                    <form>
                                                        <div class="form-group m-0">
                                                            <input class="form-control" type="search" placeholder="Search.." data-original-title="" title=""/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-wrapper-grid">
                                            <div class="row list-collection">
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/01.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter1"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter1">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src={require("../assets/images/ecommerce/01.jpg")} alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Women's Top</h4></a>
                                                                                        <div class="product-price"><span>$50.00</span>
                                                                                            <del>$35.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Rock Paper Scissors Women Tank Top High Neck Cotton Top Stylish Women Top..</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Women's Top</h4></a>
                                                                <p class="pro-detail">Regular Flare Fit Women's white Top</p>
                                                                <div class="product-price"><span>$50.00</span>
                                                                    <del>$35.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-danger">sale</div><img class="img-fluid" src="../assets/images/ecommerce/02.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter2"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter2">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src={require("../assets/images/ecommerce/02.jpg")} alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men's Jacket</h4></a>
                                                                                        <div class="product-price"><span>$45.00</span>
                                                                                            <del>$50.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men's Jacket</h4></a>
                                                                <p class="pro-detail">Regular Flare Fit men's white Top</p>
                                                                <div class="product-price"><span>$45.00</span>
                                                                    <del>$50.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/03.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter3"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter3">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/03.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Black, White Dress</h4></a>
                                                                                        <div class="product-price"><span>$87.00</span>
                                                                                            <del>$52.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Ravaiyaa - Attitude is everything Cotton Women's Dresses One Top Button T-Shirt.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Black, White Dress</h4></a>
                                                                <p class="pro-detail">White Cotton Regular Fabric Fit Dress</p>
                                                                <div class="product-price"><span>$87.00</span>
                                                                    <del>$52.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-success ribbon-right">50%</div><img class="img-fluid" src="../assets/images/ecommerce/04.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter4"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter4">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/04.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Denim Jacket</h4></a>
                                                                                        <div class="product-price"><span>$56.00</span>
                                                                                            <del>$45.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Denim Jacket</h4></a>
                                                                <p class="pro-detail">Men's Regular Blue Denim Jacket.</p>
                                                                <div class="product-price"><span>$56.00</span>
                                                                    <del>$45.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-success ribbon-right">50%</div><img class="img-fluid" src="../assets/images/ecommerce/05.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter5"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter5">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/05.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Black, White Dress.</h4></a>
                                                                                        <div class="product-price"><span>$25.00</span>
                                                                                            <del>$45.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Lorate Solid women's Fashion red winter Latest collection for women blazer.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Black, White Dress.</h4></a>
                                                                <p class="pro-detail">Women's Black &amp; White Collection Dress.</p>
                                                                <div class="product-price"><span>$25.00</span>
                                                                    <del>$45.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/06.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter6"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter6">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/06.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Red Blazer For Winter</h4></a>
                                                                                        <div class="product-price"><span>$36.00</span>
                                                                                            <del>$35.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Rock Paper Scissors women's Tank Top High Neck Cotton Top Stylish Women Top..</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Red Blazer For Winter</h4></a>
                                                                <p class="pro-detail">Womens's Red Winter Collection Blazer.</p>
                                                                <div class="product-price"><span>$36.00</span>
                                                                    <del>$35.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-danger">sale</div><img class="img-fluid" src="../assets/images/ecommerce/07.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter7"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter7">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/07.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men Formal Wear</h4></a>
                                                                                        <div class="product-price"><span>$60.00</span>
                                                                                            <del>$63.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men Formal Wear</h4></a>
                                                                <p class="pro-detail">Men's Business Formal Suit Wear.</p>
                                                                <div class="product-price"><span>$60.00</span>
                                                                    <del>$63.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/08.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter8"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter8">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/08.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men's Formal Shirt</h4></a>
                                                                                        <div class="product-price"><span>$78.00</span>
                                                                                            <del>$95.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Ravaiyaa - Attitude is everything Cotton Men's Formal One Top Shirt.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men's Formal Shirt</h4></a>
                                                                <p class="pro-detail">Gray Denim Regular Men's Denim Shirt.</p>
                                                                <div class="product-price"><span>$78.00</span>
                                                                    <del>$95.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/04.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter9"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter9">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/04.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Denim Jacket</h4></a>
                                                                                        <div class="product-price"><span>$85.00</span>
                                                                                            <del>$90.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Rock Paper Scissors Womens Tank Top High Neck Cotton Top Stylish Women Top..</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Denim Jacket</h4></a>
                                                                <p class="pro-detail">Men's Regular Blue Denim Jacket.</p>
                                                                <div class="product-price"><span>$85.00</span>
                                                                    <del>$90.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-success ribbon-right">50%</div><img class="img-fluid" src="../assets/images/ecommerce/03.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter10"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter10">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/03.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Black, White Dress</h4></a>
                                                                                        <div class="product-price"><span>$38.00</span>
                                                                                            <del>$45.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Symbol Men's Solid Regular Fit Full Sleeve Formal Shirt, Cotton Regular Fit Men's Casual Shirt.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Black, White Dress</h4></a>
                                                                <p class="pro-detail">White Cotton Regular Fabric Fit Dress</p>
                                                                <div class="product-price"><span>$38.00</span>
                                                                    <del>$45.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/02.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter11"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter11">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/02.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men's Jacket</h4></a>
                                                                                        <div class="product-price"><span>$96.00</span>
                                                                                            <del>$35.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Womens Tank Top High Neck Cotton Top Stylish Women Top..</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men's Jacket</h4></a>
                                                                <p class="pro-detail">Regular Flare Fit men's white Top</p>
                                                                <div class="product-price"><span>$96.00</span>
                                                                    <del>$35.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-danger">sale</div><img class="img-fluid" src="../assets/images/ecommerce/01.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter12"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter12">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/01.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Women's Top</h4></a>
                                                                                        <div class="product-price"><span>$70.00</span>
                                                                                            <del>$45.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Women's Top</h4></a>
                                                                <p class="pro-detail">Regular Flare Fit Women's white Top</p>
                                                                <div class="product-price"><span>$70.00</span>
                                                                    <del>$45.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-danger">sale</div><img class="img-fluid" src="../assets/images/ecommerce/08.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter13"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter13">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/08.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men's Formal Shirt</h4></a>
                                                                                        <div class="product-price"><span>$80.00</span>
                                                                                            <del>$100.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men's Formal Shirt</h4></a>
                                                                <p class="pro-detail">Gray Denim Regular Men's Denim Shirt.</p>
                                                                <div class="product-price"><span>$80.00</span>
                                                                    <del>$100.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/07.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter14"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter14">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/07.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Men Formal Wear</h4></a>
                                                                                        <div class="product-price"><span>$55.00</span>
                                                                                            <del>$60.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Ravaiyaa - Attitude is everything Cotton Women's Dresses One Top Button T-Shirt.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Men Formal Wear</h4></a>
                                                                <p class="pro-detail">Men's Business Formal Suit Wear.</p>
                                                                <div class="product-price"><span>$55.00</span>
                                                                    <del>$60.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div class="ribbon ribbon-success ribbon-right">50%</div><img class="img-fluid" src="../assets/images/ecommerce/06.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter15"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter15">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/06.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Red Blazer For Winter</h4></a>
                                                                                        <div class="product-price"><span>$38.00</span>
                                                                                            <del>$45.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Red Blazer For Winter</h4></a>
                                                                <p class="pro-detail">Womens's Red Winter Collection Blazer.</p>
                                                                <div class="product-price"><span>$38.00</span>
                                                                    <del>$45.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-3 col-sm-6">
                                                    <div class="card">
                                                        <div class="product-box">
                                                            <div class="product-img">
                                                                <div></div><img class="img-fluid" src="../assets/images/ecommerce/05.jpg" alt=""/>
                                                                    <div class="product-hover">
                                                                        <ul>
                                                                            <li><a href="cart.html"><i class="icon-shopping-cart"></i></a></li>
                                                                            <li><a data-bs-toggle="modal" data-bs-target="#exampleModalCenter16"><i class="icon-eye"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                            </div>
                                                            <div class="product-modal modal fade" id="exampleModalCenter16">
                                                                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <div class="product-box row">
                                                                                <div class="product-img col-lg-6"><img class="img-fluid" src="../assets/images/ecommerce/05.jpg" alt=""/></div>
                                                                                <div class="col-lg-6 text-start">
                                                                                    <div class="product-details"><a href="product-page.html">
                                                                                        <h4>Black, White Dress.</h4></a>
                                                                                        <div class="product-price"><span>$45.00</span>
                                                                                            <del>$35.00</del>
                                                                                        </div>
                                                                                        <div class="product-view">
                                                                                            <h6 class="f-w-600">Product Details</h6>
                                                                                            <p class="mb-0">Rock Paper Scissors Women Tank Top High Neck Cotton Top Stylish Women Top..</p>
                                                                                        </div>
                                                                                        <div class="product-size">
                                                                                            <ul>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">M</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">L</button>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <button class="btn" type="button">Xl</button>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="product-qnty">
                                                                                            <h6 class="f-w-600">Quantity</h6>
                                                                                            <fieldset>
                                                                                                <div class="touchspin-wrapper">
                                                                                                    <button class="decrement-touchspin btn-touchspin touchspin-primary"><i class="fa fa-minus"> </i></button>
                                                                                                    <input class="input-touchspin spin-outline-primary" type="number" value="5"/>
                                                                                                        <button class="increment-touchspin btn-touchspin touchspin-primary"><i class="fa fa-plus"> </i></button>
                                                                                                </div>
                                                                                            </fieldset>
                                                                                            <div class="addcart-btn"><a class="btn btn-primary me-2" href="cart.html">Add to Cart</a><a class="btn btn-primary" href="product-page.html">View Details</a></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="product-details"><a href="product-page.html">
                                                                <h4>Black, White Dress.</h4></a>
                                                                <p class="pro-detail">Women's Black &amp; White Collection Dress.</p>
                                                                <div class="product-price"><span>$45.00</span>
                                                                    <del>$35.00</del>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-6 footer-copyright">
                                            <p class="mb-0">Copyright 2024 © Nextluk by Ndongo Josepha.</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="float-end mb-0">Hand crafted &amp; made with
                                                <svg class="svg-color footer-icon">
                                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#footer-heart"></use>
                                                </svg>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
}
