import React from 'react'

export default function chat() {
    return (
        <div class="page-wrapper compact-wrapper" id="pageWrapper">
            <div class="page-header row">
                <div class="logo-wrapper d-flex align-items-center col-auto"><a href="index.html"><img class="for-light" src="../assets/images/logo/logo.png" alt="l/ogo" /><img class="for-dark" src="../assets/images/logo/dark-logo.png" alt="l/ogo" /></a><a class="close-btn" href="javascript:void(0)">
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
                                <input class="form-control" type="text" placeholder="Search anything..." />
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
                                    <input type="text" placeholder="Search here..." />
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
                                            <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/10.jpg" alt="" /></div>
                                        </li>
                                        <li class="d-flex align-items-center b-l-secondary">
                                            <div class="flex-grow-1"> <span>12:47 am</span><a href="private-chat.html">
                                                <h5>James created changelog page</h5></a>
                                                <h6>Susan Connor</h6>
                                            </div>
                                            <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/4.jpg" alt="" /></div>
                                        </li>
                                        <li class="d-flex align-items-center b-l-tertiary">
                                            <div class="flex-grow-1"> <span>06:10 pm</span><a href="private-chat.html">
                                                <h5>Polly edited Contact page</h5></a>
                                                <h6>Roger Lum</h6>
                                            </div>
                                            <div class="flex-shrink-0"> <img class="b-r-15 img-40" src="../assets/images/avatar/1.jpg" alt="" /></div>
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
                                                    <input class="form-control" type="text" placeholder="Search Bookmark..." /><span class="input-group-text">
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
                                            <div class="flex-shrink-0 border-primary"><img src="../assets/images/dashboard2/product/1.png" alt="" /></div>
                                            <div class="touchpin-details"><a href="cart.html">
                                                <h5>Apple Computers</h5></a><span>$2600.00</span>
                                                <div class="touchspin-wrapper">
                                                    <button class="decrement-touchspin btn-touchspin">
                                                        <svg class="svg-color">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                        </svg>
                                                    </button>
                                                    <input class="form-control input-touchspin bg-light-primary" type="number" value="5" />
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
                                            <div class="flex-shrink-0 border-secondary"><img src="../assets/images/dashboard2/product/2.png" alt="" /></div>
                                            <div class="touchpin-details"><a href="cart.html">
                                                <h5>Microwave</h5></a><span>$1450.45</span>
                                                <div class="touchspin-wrapper">
                                                    <button class="decrement-touchspin btn-touchspin">
                                                        <svg class="svg-color">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                        </svg>
                                                    </button>
                                                    <input class="form-control input-touchspin bg-light-secondary" type="number" value="5" />
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
                                            <div class="flex-shrink-0 border-tertiary"><img src="../assets/images/dashboard2/product/3.png" alt="" /></div>
                                            <div class="touchpin-details"><a href="cart.html">
                                                <h5>Mackup Kit</h5></a><span>$300.45</span>
                                                <div class="touchspin-wrapper">
                                                    <button class="decrement-touchspin btn-touchspin">
                                                        <svg class="svg-color">
                                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#minus"></use>
                                                        </svg>
                                                    </button>
                                                    <input class="form-control input-touchspin bg-light-tertiary" type="number" value="5" />
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
                                <div class="d-flex align-items-center"><img src="../assets/images/profile.png" alt="" />
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
                                <h3>Private Chat</h3>
                            </div>
                            <div class="col-sm-6">
                                <nav>
                                    <ol class="breadcrumb justify-content-sm-end align-items-center">
                                        <li class="breadcrumb-item"> <a href="index.html">
                                            <svg class="svg-color">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                                            </svg></a></li>
                                        <li class="breadcrumb-item">Chat</li>
                                        <li class="breadcrumb-item active">Private Chat</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row g-0">
                            <div class="col-xxl-3 col-xl-4 col-md-5 box-col-5">
                                <div class="left-sidebar-wrapper card">
                                    <div class="left-sidebar-chat">
                                        <div class="input-group"><span class="input-group-text">
                                            <svg class="feather text-gray">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#search"></use>
                                            </svg></span>
                                            <input class="form-control" type="text" placeholder="Search here.." />
                                        </div>
                                    </div>
                                    <div class="advance-options">
                                        <ul class="nav border-tab" id="chat-options-tab" role="tablist">
                                            <li class="nav-item"><a class="nav-link active" id="chats-tab" data-bs-toggle="tab" href="#chats" role="tab" aria-controls="chats" aria-selected="true">Chats</a></li>
                                            <li class="nav-item"><a class="nav-link" id="contacts-tab" data-bs-toggle="tab" href="#contacts" role="tab" aria-controls="contacts" aria-selected="false">Contacts</a></li>
                                        </ul>
                                        <div class="tab-content" id="chat-options-tabContent">
                                            <div class="tab-pane fade show active" id="chats" role="tabpanel" aria-labelledby="chats-tab">
                                                <div class="common-space">
                                                    <p>Recent chats</p>
                                                    <div class="header-top"><a class="btn badge-light-primary f-w-500" href="#!"><i class="fa fa-plus"></i></a></div>
                                                </div>
                                                <ul class="chats-user">
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/1.jpg" alt="u/ser" />
                                                                <div class="status bg-success"></div>
                                                            </div>
                                                            <div> <span>Cameron Williamson</span>
                                                                <p>Hey, How are you?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>2 min </p>
                                                            <div class="badge badge-light-success">15</div>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/2.jpg" alt="u/ser" />
                                                                <div class="status bg-success"></div>
                                                            </div>
                                                            <div> <span>Esther Howard</span>
                                                                <p>Thanks for reply</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>7:30 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/3.jpg" alt="u/ser" />
                                                                <div class="status bg-success"></div>
                                                            </div>
                                                            <div> <span>Jane Cooper</span>
                                                                <p>Hey, What's up?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>1:10 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/4.jpg" alt="u/ser" />
                                                                <div class="status bg-success"></div>
                                                            </div>
                                                            <div> <span>Ronald Richards</span>
                                                                <p>I'm ready</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>13:10 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/5.jpg" alt="u/ser" />
                                                                <div class="status bg-warning"></div>
                                                            </div>
                                                            <div> <span>Darlene Robertson</span>
                                                                <p>Hey, How are you?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>1:30 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/6.jpg" alt="u/ser" />
                                                                <div class="status bg-warning"></div>
                                                            </div>
                                                            <div> <span>Darrell Steward</span>
                                                                <p>What's going on?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>2:10 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/7.jpg" alt="u/ser" />
                                                                <div class="status bg-success"></div>
                                                            </div>
                                                            <div> <span>Theresa Webb</span>
                                                                <p>What's up?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>1:50 AM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/8.jpg" alt="u/ser" />
                                                                <div class="status bg-warning"></div>
                                                            </div>
                                                            <div> <span>Floyd Miles</span>
                                                                <p>Are you sure?</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>5:14 PM</p>
                                                        </div>
                                                    </li>
                                                    <li class="common-space">
                                                        <div class="chat-time">
                                                            <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/9.jpg" alt="u/ser" />
                                                                <div class="status bg-warning"></div>
                                                            </div>
                                                            <div> <span>Annette Black</span>
                                                                <p>Thanks</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p>1:50 PM</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                                                <div class="common-space">
                                                    <p>Contacts</p>
                                                    <div class="header-top"><a class="btn badge-light-primary f-w-500" href="#!"><i class="fa fa-plus"></i></a></div>
                                                </div>
                                                <div class="search-contacts">
                                                    <input class="form-control" type="text" placeholder="Name and phone number" /><i class="fa-solid fa-magnifying-glass"></i>
                                                    <svg class="feather">
                                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#mic"></use>
                                                    </svg>
                                                </div>
                                                <div class="contact-wrapper">
                                                    <p>A </p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/1.jpg" alt="u/ser" />
                                                                <div> <span>Andres Williamson</span>
                                                                    <p>191-900-5689</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>B</p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/2.jpg" alt="u/ser" />
                                                                <div> <span>Britlin Weed</span>
                                                                    <p>698-781-5581</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time">
                                                                <div class="custom-name bg-light-secondary">
                                                                    <p class="font-secondary f-w-500">BD</p>
                                                                </div>
                                                                <div> <span>Brendra Dixit</span>
                                                                    <p>589-789-2563</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>C </p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/3.jpg" alt="user" />
                                                                <div> <span>Cody Fisher</span>
                                                                    <p>983-333-4545</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time">
                                                                <div class="position-relative custom-name bg-light-success">
                                                                    <p class="font-success f-w-500">CE</p>
                                                                </div>
                                                                <div> <span>Clifford Evans</span>
                                                                    <p>321-456-7878</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"> </i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites  </a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time">
                                                                <div class="custom-name bg-light-warning">
                                                                    <p class="font-warning f-w-500">CW </p>
                                                                </div>
                                                                <div> <span>Cameron Williamson</span>
                                                                    <p>369-852-7417</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>D</p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/4.jpg" alt="user" />
                                                                <div> <span>Darlene Robertson</span>
                                                                    <p>231-279-1001</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/5.jpg" alt="user" />
                                                                <div> <span>Dianne Russell</span>
                                                                    <p>569-789-1002</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"> </i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/6.jpg" alt="user" />
                                                                <div> <span>Darrell Steward</span>
                                                                    <p>200-300-1030</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>E </p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/7.jpg" alt="user" />
                                                                <div> <span>Emily Collins</span>
                                                                    <p>100-555-7032</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>F </p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time"><img class="img-fluid rounded-circle" src="../assets/images/avatar/8.jpg" alt="user" />
                                                                <div> <span>Fiona Cooper</span>
                                                                    <p>362-778-1919</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                        <li class="common-space">
                                                            <div class="chat-time">
                                                                <div class="custom-name bg-light-danger">
                                                                    <p class="font-danger f-w-500">FG</p>
                                                                </div>
                                                                <div> <span>Freya Grayson</span>
                                                                    <p>589-789-2563</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites</a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p>G</p>
                                                    <ul class="border-0">
                                                        <li class="common-space">
                                                            <div class="chat-time">
                                                                <div class="custom-name bg-light-warning">
                                                                    <p class="font-warning f-w-500">GE</p>
                                                                </div>
                                                                <div> <span>Gabriel Evans</span>
                                                                    <p>963-147-5024</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-edit"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"> </i>
                                                                <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                                    Send messages</a><a class="dropdown-item" href="#!">
                                                                        Add to favorites   </a></div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-9 col-xl-8 col-md-7 box-col-7">
                                <div class="card right-sidebar-chat">
                                    <div class="right-sidebar-title">
                                        <div class="common-space">
                                            <div class="chat-time">
                                                <div class="active-profile"><img class="img-fluid rounded-circle" src="../assets/images/avatar/1.jpg" alt="user" />
                                                    <div class="status bg-success"></div>
                                                </div>
                                                <div> <span>Darrell Steward</span>
                                                    <p>Online </p>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <div class="contact-edit chat-alert"><i class="icon-info-alt"></i></div>
                                                <div class="contact-edit chat-alert"><i class="fa-solid fa-bars dropdown-toggle" role="menu" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                    <div class="dropdown-menu dropdown-menu-end"><a class="dropdown-item" href="#!">View details</a><a class="dropdown-item" href="#!">
                                                        Send messages</a><a class="dropdown-item" href="#!">
                                                            Add to favorites</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-sidebar-Chats">
                                        <div class="msger">
                                            <div class="msger-chat">
                                                <div class="msg left-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Theresa Webb</div>
                                                            <div class="msg-info-time">01:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">Hey, I'm looking to redesign my website. Can you help me? &#x1F604;</div>
                                                    </div>
                                                </div>
                                                <div class="msg right-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Darrell Steward</div>
                                                            <div class="msg-info-time">12:14 PM</div>
                                                        </div>
                                                        <div class="msg-text"> Absolutely! I'd be happy to assist you.</div>
                                                    </div>
                                                </div>
                                                <div class="msg right-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Darrell Steward</div>
                                                            <div class="msg-info-time">12:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">What kind of design aesthetic are you aiming for?</div>
                                                    </div>
                                                </div>
                                                <div class="msg left-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Theresa Webb</div>
                                                            <div class="msg-info-time">01:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">I want a clean and modern look with a focus on user experience.</div>
                                                    </div>
                                                </div>
                                                <div class="msg right-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Darrell Steward</div>
                                                            <div class="msg-info-time">12:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">Great!  Do you have any specific color schemes in mind?</div>
                                                    </div>
                                                </div>
                                                <div class="msg left-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Theresa Webb</div>
                                                            <div class="msg-info-time">01:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">I'm thinking of using a combination of blues and grays.</div>
                                                    </div>
                                                </div>
                                                <div class="msg right-msg">
                                                    <div class="msg-img"></div>
                                                    <div class="msg-bubble">
                                                        <div class="msg-info">
                                                            <div class="msg-info-name">Darrell Steward</div>
                                                            <div class="msg-info-time">12:14 PM</div>
                                                        </div>
                                                        <div class="msg-text">Excellent choice! Those colors can definitely create a professional.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form class="msger-inputarea">
                                                <div class="dropdown-form dropdown-toggle" role="main" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-plus"></i>
                                                    <div class="chat-icon dropdown-menu dropdown-menu-start">
                                                        <div class="dropdown-item mb-2">
                                                            <svg class="feather">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#camera"></use>
                                                            </svg>
                                                        </div>
                                                        <div class="dropdown-item">
                                                            <svg class="feather">
                                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#paperclip"></use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input class="msger-input two uk-textarea" type="text" placeholder="Type Message here.." />
                                                <div class="open-emoji">
                                                    <div class="second-btn uk-button"></div>
                                                </div>
                                                <button class="msger-send-btn" type="submit"><i class="fa fa-location-arrow"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 footer-copyright">
                                <p class="mb-0">Copyright 2024 © Edmin Template by pixelstrap.</p>
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
                </footer>
            </div>
        </div>
    )
}
