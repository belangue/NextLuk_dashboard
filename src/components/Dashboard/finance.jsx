import React from 'react'

const finance = () => {
  return (


      <div>
        <div class="tap-top">
          <svg class="feather">
            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-up"></use>
          </svg>
        </div>
        <div class="loader-wrapper">
          <div class="loader"></div>
        </div>
        <div class="page-wrapper compact-wrapper" id="pageWrapper">
          <div class="page-header row">
            <div class="logo-wrapper d-flex align-items-center col-auto"><a href="index.html"><img class="for-light" src="../assets/images/logo/logo.png" alt="logo"/><img class="for-dark" src="../assets/images/logo/dark-logo.png" alt="logo"/></a><a class="close-btn" href="javascript:void(0)">
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
                            <div class="flex-shrink-0 border-primary"><img src="../assets/images/dashboard2/product/1.png" alt=""/></div>
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
                        <h3>Ecommerce Dashboard</h3>
                      </div>
                      <div class="col-sm-6">
                        <nav>
                          <ol class="breadcrumb justify-content-sm-end align-items-center">
                            <li class="breadcrumb-item"> <a href="index.html">
                              <svg class="svg-color">
                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                              </svg></a></li>
                            <li class="breadcrumb-item">Dashboard</li>
                            <li class="breadcrumb-item active">Ecommerce Dashboard</li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div class="container-fluid ecommerce-dashboard">
                    <div class="row">
                      <div class="col-xl-9">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="card progress-items">
                              <div class="card-header pb-0">
                                <div class="d-flex justify-content-between">
                                  <div>
                                    <div class="d-flex gap-2">
                                      <h5 class="f-18 font-light">Total Sale</h5>
                                      <div class="badge align-items-center d-flex badge-light-danger">
                                        <svg class="feather me-1 pt-0 stroke-danger">
                                          <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-up-right"></use>
                                        </svg><span class="f-w-500">3.4%</span>
                                      </div>
                                    </div>
                                    <h3 class="f-26 f-w-600 mt-3">$ 12,463</h3>
                                  </div>
                                  <div class="flex-shrink-0 bg-light-primary">
                                    <svg class="svg-w-23 fill-primary">
                                      <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Product-discount"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body progress-card pt-0">
                                <div>
                                  <p class="f-w-500">20% since Last Month</p>
                                </div>
                                <div class="order-chart">
                                  <div class="chart" id="sale-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="card progress-items">
                              <div class="card-header pb-0">
                                <div class="d-flex justify-content-between">
                                  <div>
                                    <div class="d-flex gap-2">
                                      <h5 class="f-18 font-light">New Orders</h5>
                                      <div class="badge align-items-center d-flex badge-light-success">
                                        <svg class="feather me-1 pt-0 stroke-success">
                                          <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-down-right"></use>
                                        </svg><span class="f-w-500">4.5%</span>
                                      </div>
                                    </div>
                                    <h3 class="f-26 f-w-600 mt-3">$ 51,325</h3>
                                  </div>
                                  <div class="flex-shrink-0 bg-light-secondary">
                                    <svg class="svg-w-30 fill-secondary">
                                      <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#order-product"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body progress-card pt-0">
                                <div>
                                  <p class="f-w-500">14% since Last Month</p>
                                </div>
                                <div class="order-chart">
                                  <div class="chart" id="order-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="card progress-items">
                              <div class="card-header pb-0">
                                <div class="d-flex justify-content-between">
                                  <div>
                                    <div class="d-flex gap-2">
                                      <h5 class="f-18 font-light">Order Delivery</h5>
                                      <div class="badge align-items-center d-flex badge-light-danger">
                                        <svg class="feather me-1 pt-0 stroke-danger">
                                          <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#arrow-up-right"></use>
                                        </svg><span class="f-w-500">2.3%</span>
                                      </div>
                                    </div>
                                    <h3 class="f-26 f-w-600 mt-3">$ 32,587</h3>
                                  </div>
                                  <div class="flex-shrink-0 bg-light-tertiary">
                                    <svg class="svg-w-31 fill-tertiary">
                                      <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#delivery-van"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body progress-card pt-0">
                                <div>
                                  <p class="f-w-500">10% since Last Month</p>
                                </div>
                                <div class="order-chart">
                                  <div class="chart" id="delivery-chart"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-xl-7">
                            <div class="card">
                              <div class="card-header pb-0">
                                <h4>Top Selling Products</h4>
                                <div class="dropdown icon-dropdown">
                                  <button class="btn dropdown-toggle" id="userdropdown08" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown08"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                                </div>
                              </div>
                              <div class="card-body selling-table checkbox-checked">
                                <div class="table-responsive">
                                  <table class="table" id="sell-product">
                                    <thead>
                                      <tr>
                                        <th class="form-check">
                                          <input class="form-check-input" type="checkbox" />
                                        </th>
                                        <th>Product Name</th>
                                        <th>Order Id</th>
                                        <th>Email</th>
                                        <th>Stock</th>
                                        <th>Amount </th>
                                        <th>Payment</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <input class="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                          <div class="d-flex align-items-center gap-2">
                                            <div class="flex-shrink-0"><img class="img-30 b-r-10" src="../assets/images/dashboard2/order/watch.png" alt="" /></div>
                                            <div class="flex-grow-1"> <a href="product.html">
                                              <h6 class="f-w-500">Mi Watch Revolve</h6><span class="font-light f-w-400 f-13">10 April 2024</span></a></div>
                                          </div>
                                        </td>
                                        <td>#787669</td>
                                        <td><span class="font-light">Zahid@gmail.com</span></td>
                                        <td>2637</td>
                                        <td>$30.00</td>
                                        <td>
                                          <button class="btn edge-btn f-13 w-100 btn-light-primary">Done</button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <input class="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                          <div class="d-flex align-items-center gap-2">
                                            <div class="flex-shrink-0"><img class="img-30 b-r-10" src="../assets/images/dashboard2/order/flower.png" alt="" /></div>
                                            <div class="flex-grow-1"> <a href="product.html">
                                              <h6 class="f-w-500">Tree Stylish Pot</h6><span class="font-light f-w-400 f-13">16 June 2024</span></a></div>
                                          </div>
                                        </td>
                                        <td>#749U8F</td>
                                        <td><span class="font-light">Anna12@gmail.com</span></td>
                                        <td>6237</td>
                                        <td>$20.00</td>
                                        <td>
                                          <button class="btn edge-btn f-13 w-100 btn-light-tertiary">Pending</button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <input class="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                          <div class="d-flex align-items-center gap-2">
                                            <div class="flex-shrink-0"><img class="img-30 b-r-10" src="../assets/images/dashboard2/order/bench.png" alt="" /></div>
                                            <div class="flex-grow-1"> <a href="product.html">
                                              <h6 class="f-w-500">Wood Chair Dark</h6><span class="font-light f-w-400 f-13">23 May 2024</span></a></div>
                                          </div>
                                        </td>
                                        <td>#509478</td>
                                        <td><span class="font-light">Laura@gmail.com</span></td>
                                        <td>3237</td>
                                        <td>$12.00</td>
                                        <td>
                                          <button class="btn edge-btn f-13 w-100 btn-light-primary">Done</button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <input class="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                          <div class="d-flex align-items-center gap-2">
                                            <div class="flex-shrink-0"><img class="img-30 b-r-10" src="../assets/images/dashboard2/order/shoes.png" alt="" /></div>
                                            <div class="flex-grow-1"> <a href="product.html">
                                              <h6 class="f-w-500">Sneakers For Men</h6><span class="font-light f-w-400 f-13">12 April 2024</span></a></div>
                                          </div>
                                        </td>
                                        <td>#738445</td>
                                        <td><span class="font-light">Rache87@gmail.com</span></td>
                                        <td>3746</td>
                                        <td>$62.00</td>
                                        <td>
                                          <button class="btn edge-btn f-13 w-100 btn-light-tertiary">Pending</button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-xl-5">
                            <div class="card">
                              <div class="card-header">
                                <h4>Category Overview</h4>
                                <div class="dropdown icon-dropdown">
                                  <button class="btn dropdown-toggle" id="userdropdown03" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown03"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                                </div>
                              </div>
                              <div class="card-body category">
                                <div class="row">
                                  <div class="col-xl-6 col-6">
                                    <ul>
                                      <li class="d-flex align-items-center bg-light card-hover">
                                        <div class="flex-shrink-0">
                                          <div class="circle-dot-primary"> <span></span></div>
                                        </div>
                                        <div class="flex-grow-1">
                                          <h6 class="f-w-500">Men & Women  Fashion</h6><span class="f-13 font-light">13.5k Products Sold</span>
                                        </div>
                                      </li>
                                      <li class="d-flex align-items-center bg-light card-hover">
                                        <div class="flex-shrink-0">
                                          <div class="circle-dot-secondary"> <span></span></div>
                                        </div>
                                        <div class="flex-grow-1">
                                          <h6 class="f-w-500">Home Furniture</h6><span class="f-13 font-light">10.3k Products Sold</span>
                                        </div>
                                      </li>
                                      <li class="d-flex align-items-center bg-light card-hover">
                                        <div class="flex-shrink-0">
                                          <div class="circle-dot-tertiary"> <span></span></div>
                                        </div>
                                        <div class="flex-grow-1">
                                          <h6 class="f-w-500">Mobiles & Computers</h6><span class="f-13 font-light">22.4k Products Sold</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="col-xl-6 col-6">
                                    <div class="category-chart" id="category"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-3">
                        <div class="card">
                          <div class="card-header pb-0">
                            <h4>Manage Order</h4>
                            <div class="dropdown icon-dropdown">
                              <button class="btn dropdown-toggle" id="userdropdown01" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown01"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                            </div>
                          </div>
                          <div class="card-body manage-order">
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/2.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Elle Amberson</h6><span class="f-13">Elle34@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$254.23</h6><span class="f-w-500">564 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/5.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Anna Catmire</h6><span class="f-13">anna12@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$658.32</h6><span class="f-w-500">654 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/9.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Laura Dagson</h6><span class="f-13">laura@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$352.95</h6><span class="f-w-500">347 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/8.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Rachel Green</h6><span class="f-13">Rache87@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$852.65</h6><span class="f-w-500">254 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/13.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Fran Loain</h6><span class="f-13">fran34@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$359.95</h6><span class="f-w-500">349 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex gap-2 align-items-center">
                                      <div class="flex-shrink-0"> <img class="img-fluid img-42 b-r-10" src="../assets/images/avatar/7.jpg" alt="" /></div>
                                      <div class="flex-grow-1"> <a href="user-profile.html">
                                        <h6 class="f-w-500">Loie Fenter</h6><span class="f-13">loie234@gmail.com</span></a></div>
                                    </div>
                                  </td>
                                  <td>
                                    <div class="d-block text-end">
                                      <h6 class="f-w-500">$358.94</h6><span class="f-w-500">584 Sale</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="card sales-summary">
                          <div class="card-header">
                            <h4>Sales Summary</h4>
                            <div class="dropdown icon-dropdown">
                              <button class="btn dropdown-toggle" id="userdropdown07" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown07"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="current-sale-container order-container">
                              <div class="overview-wrapper" id="orderoverview"></div>
                              <div class="back-bar-container">
                                <div id="order-bar"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-3">
                        <div class="card product-offer">
                          <div class="card-header">
                            <h4>Product Offer</h4>
                            <div class="dropdown icon-dropdown">
                              <button class="btn dropdown-toggle" id="userdropdown04" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown04"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="swiper mySwiper">
                              <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                  <div class="item text-center"><img class="img-fluid" src="../assets/images/dashboard2/headphone.png" alt="" /><img class="product-gif img-fluid" src="../assets/images/gif/new.gif" alt="" />
                                    <div class="product-content">
                                      <h4><a class="f-18" href="product.html">Wireless Apple Airpods</a></h4>
                                      <h5 class="font-primary f-w-600 f-16 mt-1">$130.00</h5>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="item text-center"><img class="img-fluid" src="../assets/images/dashboard2/9.png" alt="" /><img class="product-gif img-fluid" src="../assets/images/gif/new.gif" alt="" />
                                    <div class="product-content">
                                      <h4><a class="f-18" href="product.html">Wireless Apple Airpods</a></h4>
                                      <h5 class="font-primary f-w-600 f-16 mt-1">$130.00</h5>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-slide">
                                  <div class="item text-center"><img class="img-fluid" src="../assets/images/dashboard2/7.png" alt="" /><img class="product-gif img-fluid" src="../assets/images/gif/new.gif" alt="" />
                                    <div class="product-content">
                                      <h4><a class="f-18" href="product.html">Wireless Apple Airpods</a></h4>
                                      <h5 class="font-primary f-w-600 f-16 mt-1">$130.00</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="swiper-pagination">           </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-3">
                        <div class="card sale-progress">
                          <div class="card-header pb-0">
                            <h4>Sale Progress</h4>
                            <div class="card-header-right">
                              <ul class="list-unstyled card-option">
                                <li><i class="icon-more-alt"></i></li>
                                <li><i class="view-html fa fa-code"></i></li>
                                <li><i class="icofont icofont-maximize full-card"></i></li>
                                <li><i class="icofont icofont-minus minimize-card"></i></li>
                                <li><i class="icofont icofont-refresh reload-card"></i></li>
                                <li><i class="icofont icofont-error close-card"></i></li>
                              </ul>
                            </div>
                            <p class="desc mb-0 mt-1"><span></span><code></code><span></span></p>
                          </div>
                          <div class="card-body">
                            <ul>
                              <li class="d-flex gap-3 bg-light-primary">
                                <div class="flex-shrink-0 border-primary"><img src="../assets/images/dashboard2/product/1.png" alt="" /></div>
                                <div class="flex-grow-1">
                                  <h5>Mobiles , Computers</h5><span>50% Best Offer</span>
                                  <div class="progress progress-striped-primary">
                                    <div class="progress-bar" style="width: 55%" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div><span class="badge f-14 b-r-0 bg-light-primary">
                                  <svg class="svg-w-20 stroke-primary">
                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                  </svg><span class="f-w-500">4.5%</span></span>
                              </li>
                              <li class="d-flex gap-3 bg-light-secondary">
                                <div class="flex-shrink-0 border-secondary"><img src="../assets/images/dashboard2/product/2.png" alt="" /></div>
                                <div class="flex-grow-1">
                                  <h5>Home , Kitchen</h5><span>Combo Offer</span>
                                  <div class="progress progress-striped-secondary">
                                    <div class="progress-bar" style="width: 55%" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div><span class="badge f-14 b-r-0 bg-light-secondary">
                                  <svg class="svg-w-20 stroke-secondary">
                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                  </svg><span class="f-w-500">2.4%</span></span>
                              </li>
                              <li class="d-flex gap-3 bg-light-tertiary">
                                <div class="flex-shrink-0 border-tertiary"><img src="../assets/images/dashboard2/product/3.png" alt="" /></div>
                                <div class="flex-grow-1">
                                  <h5>Beauty , Health</h5><span>Weekend sale</span>
                                  <div class="progress progress-striped-tertiary">
                                    <div class="progress-bar" style="width: 55%" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div><span class="badge f-14 b-r-0 bg-light-tertiary">
                                  <svg class="svg-w-20 stroke-tertiary">
                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#right-3"></use>
                                  </svg><span class="f-w-500">3.5%</span></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-xl-4">
                        <div class="card">
                          <div class="card-header pb-0">
                            <h4>Best Sellers</h4>
                            <div class="dropdown icon-dropdown">
                              <button class="btn dropdown-toggle" id="userdropdown02" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown02"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                            </div>
                          </div>
                          <div class="card-body pt-0 seller-table">
                            <div class="table-responsive">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>Client Name</th>
                                    <th>Price</th>
                                    <th>Product</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0"><img class="b-r-10" src="../assets/images/avatar/6.jpg" alt="" /></div>
                                        <div class="flex-grow-1"> <a href="user-profile.html">
                                          <h6 class="f-w-500">John Keter</h6><span class="f-w-400 f-13">06 Aug 2024</span></a></div>
                                      </div>
                                    </td>
                                    <td>$76.00</td>
                                    <td>Brand Shoes</td>
                                    <td>$54,653</td>
                                    <td> <a class="btn edge-btn f-12 w-100 btn-light-primary">Sold</a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0"><img class="b-r-10" src="../assets/images/user/8.jpg" alt="" /></div>
                                        <div class="flex-grow-1"> <a href="user-profile.html">
                                          <h6 class="f-w-500">Harry Venter</h6><span class="f-w-400 f-13">09 June 2024</span></a></div>
                                      </div>
                                    </td>
                                    <td>$65.00</td>
                                    <td>Headphone</td>
                                    <td>$65,412</td>
                                    <td> <a class="btn edge-btn f-12 w-100 btn-light-tertiary">Out of stock</a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0"><img class="b-r-10" src="../assets/images/user/15.jpg" alt="" /></div>
                                        <div class="flex-grow-1"> <a href="user-profile.html">
                                          <h6 class="f-w-500">Loadin Deo</h6><span class="f-w-400 f-13">23 May 2024</span></a></div>
                                      </div>
                                    </td>
                                    <td>$95.00</td>
                                    <td>Cell Phone</td>
                                    <td>$32,012</td>
                                    <td> <a class="btn edge-btn f-12 w-100 btn-light-secondary">Sell</a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0"><img class="b-r-10" src="../assets/images/user/14.jpg" alt="" /></div>
                                        <div class="flex-grow-1"> <a href="user-profile.html">
                                          <h6 class="f-w-500">Horen Hors</h6><span class="f-w-400 f-13">17 Jan 2024</span></a></div>
                                      </div>
                                    </td>
                                    <td>$34.00</td>
                                    <td>Fashion</td>
                                    <td>$75,152</td>
                                    <td> <a class="btn edge-btn f-12 w-100 btn-light-tertiary">Sold</a></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="d-flex align-items-center gap-2">
                                        <div class="flex-shrink-0"><img class="b-r-10" src="../assets/images/avatar/9.jpg" alt="" /></div>
                                        <div class="flex-grow-1"> <a href="user-profile.html">
                                          <h6 class="f-w-500">Fenter Jessy</h6><span class="f-w-400 f-13">04 Aug 2024</span></a></div>
                                      </div>
                                    </td>
                                    <td>$34.00</td>
                                    <td>Bookshop</td>
                                    <td>$12,152</td>
                                    <td> <a class="btn edge-btn f-12 w-100 btn-light-secondary">Sell</a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-4">
                        <div class="card">
                          <div class="card-body discount-product">
                            <div class="row">
                              <div class="col-6">
                                <h4 class="discount-title">Add Product</h4>
                                <div class="main-box border-primary mx-auto">
                                  <svg class="svg-w-24 fill-primary">
                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#shopping-bag"></use>
                                  </svg>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                  <h4 class="discount-content font-light f-w-500">Create a new Product</h4>
                                  <div class="bg-light-primary rounded">
                                    <svg class="feather">
                                      <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <h4 class="discount-title">Add Discount</h4>
                                <div class="main-box border-secondary mx-auto">
                                  <svg class="svg-w-24 fill-secondary">
                                    <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Product-discount"></use>
                                  </svg>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                  <h4 class="discount-content font-light f-w-500">Apply a new Discount</h4>
                                  <div class="bg-light-secondary rounded">
                                    <svg class="feather">
                                      <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="card track-order">
                            <div class="card-body">
                              <h4>Your order has already been sent.</h4>
                              <p class="font-light f-14">Use this tracking number to keep track of your order.</p>
                              <h5>5435987456325894</h5><a class="btn btn-primary" href="javascript:void(0)">Check Your Order Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-xl-4">
                        <div class="card">
                          <div class="card-header pb-0">
                            <h4>Sales By Product</h4>
                            <div class="dropdown icon-dropdown">
                              <button class="btn dropdown-toggle" id="userdropdown06" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="icon-more-alt"></i></button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="userdropdown06"><a class="dropdown-item" href="#">Weekly</a><a class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">Yearly</a></div>
                            </div>
                          </div>
                          <div class="card-body sale-product pt-0">
                            <div class="row">
                              <div class="col-5">
                                <h5 class="f-w-500 mb-1 mt-2">Current YTD</h5>
                                <h6 class="font-light">Feb 2, 2024 to Jan 23,</h6>
                              </div>
                              <div class="col-7">
                                <select class="form-select" aria-label="Default select example">
                                  <option selected="">Current YTD</option>
                                  <option value="1">Current MTD</option>
                                  <option value="2">YTD earning</option>
                                  <option value="3">YTD Net Pay</option>
                                  <option value="4">MTD Earning</option>
                                </select>
                              </div>
                            </div>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Amount</th>
                                  <th>%Sold</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Rocks</td>
                                  <td>$5.874</td>
                                  <td>28.63%</td>
                                  <td>
                                    <div class="progress-showcase">
                                      <div class="progress sm-progress-bar progress-border-primary">
                                        <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Trimming</td>
                                  <td>$2.256</td>
                                  <td>24.75%</td>
                                  <td>
                                    <div class="progress-showcase">
                                      <div class="progress sm-progress-bar progress-border-secondary">
                                        <div class="progress-bar" role="progressbar" style="width: 30%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Maintenance</td>
                                  <td>$1.954</td>
                                  <td>35.35%</td>
                                  <td>
                                    <div class="progress-showcase">
                                      <div class="progress sm-progress-bar progress-border-tertiary">
                                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Pest Control</td>
                                  <td>$4.158</td>
                                  <td>15.63%</td>
                                  <td>
                                    <div class="progress-showcase">
                                      <div class="progress sm-progress-bar progress-border-primary">
                                        <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Installation</td>
                                  <td>$9.861</td>
                                  <td>95.98%</td>
                                  <td>
                                    <div class="progress-showcase">
                                      <div class="progress sm-progress-bar progress-border-secondary">
                                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                              <tfoot class="bg-light">
                                <tr>
                                  <th>Total</th>
                                  <th class="font-dark f-w-800">$9,978</th>
                                  <th> </th>
                                  <th></th>
                                </tr>
                              </tfoot>
                            </table>
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
                        <p class="mb-0">Copyright 2024 © by Ndongo Josepha.</p>
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
            <script src="../assets/js/vendors/jquery/dist/jquery.min.js"></script>
            <script src="../assets/js/vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../assets/js/config.js"></script>
            <script src="../assets/js/sidebar.js"></script>
            <script src="../assets/js/vendors/apexcharts/dist/apexcharts.min.js"></script>
            <script src="../assets/js/vendors/simple-datatables/dist/umd/simple-datatables.js"></script>
            <script src="../assets/js/dashboard/dashboard-2.js"></script>
            <script src="../assets/js/scrollbar/simplebar.js"></script>
            <script src="../assets/js/scrollbar/custom.js"></script>
            <script src="../assets/js/vendors/swiper/swiper-bundle.min.js"></script>
            <script src="../assets/js/theme-customizer/customizer.js"></script>
            <script src="../assets/js/script.js"></script>


          </div>
          )
}

          export default finance