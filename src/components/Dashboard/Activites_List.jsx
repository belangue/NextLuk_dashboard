import React from 'react'

export default function Activites_List() {
    return (
        <div>
            <div class="container-fluid">
                <div class="row page-title">
                    <div class="col-sm-6">
                        <h3>Activities Lists</h3>
                    </div>
                    <div class="col-sm-6">
                        <nav>
                            <ol class="breadcrumb justify-content-sm-end align-items-center">
                                <li class="breadcrumb-item"> 
                                <a href="dashboard">
                                    <svg class="svg-color">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Home"></use>
                                    </svg>
                                </a></li>
                                <li class="breadcrumb-item">Project</li>
                                <li class="breadcrumb-item">/</li>
                                <li class="breadcrumb-item active">Project List</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Container-fluid starts--> */}
            <div class="container-fluid">
                <div class="row project-cards">
                    <div class="col-md-12 project-list">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                                        <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="true">
                                            <svg class="feather">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#target"></use>
                                            </svg>All</a></li>
                                        <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false">
                                            <svg class="feather">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#info"></use>
                                            </svg>Doing</a></li>
                                        <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false">
                                            <svg class="feather">
                                                <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#check-circle"></use>
                                            </svg>Done</a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 d-md-block d-none">
                                    <div class="form-group mb-0 me-0"> </div><a class="btn btn-primary d-flex align-items-center" href="projectcreate.html">
                                        <svg class="feather">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus-square"></use>
                                        </svg>Create New Project </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="tab-content" id="top-tabContent">
                                    <div class="tab-pane fade show active" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                                        <div class="row">
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Cutting-Edge Design </h5>
                                                    <div class="d-flex mb-2 align-items-center">
                                                        <img class="img-20 me-1 rounded-circle" src="../assets/images/user/4.jpg" 
                                                        alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Themeforest, australia</p>
                                                    </div>
                                                    <p>Responsive Layout: The design is responsive and tablets, and mobile devices</p>
                                                    <div class="row details">
                                                        <div class="col-6"> <span>Issues </span></div>
                                                        <div class="col-6 font-danger">12    </div>
                                                        <div class="col-6"><span>Resolved</span></div>
                                                        <div class="col-6 font-danger">5</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">7</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src={require("../../assets/images/user/3.jpg")} alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src={require("../../assets/images/user/5.jpg")} alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+10 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">70% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Customization Options</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Consistency and Branding: The design maintains consistency , color scheme, and typography. </p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">24</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">24</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/2.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Mobile-Friendly</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/4.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia </p>
                                                    </div>
                                                    <p>Error Handling and Feedback: The design incorporates  and feedback mechanisms.</p>
                                                    <div class="row details">
                                                        <div class="col-6"> <span>Issues </span></div>
                                                        <div class="col-6 font-success">40</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">20</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/4.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+2 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100%</p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Universal admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Customization Options: Depending on It is designed to be responsive options.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">24</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">24</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"> <img class="img-30 rounded-circle" src="../assets/images/user/6.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                                        <div class="row">
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Endless admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Themeforest, australia</p>
                                                    </div>
                                                    <p>The design incorporates clear It focuses on simplicity error handling mechanisms.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">12 </div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">5</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">7</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/6.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+10 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">70% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Data Visualization</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Customization Options: Depending   It strives to create an interface requirements, options.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">24</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">24</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/6.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/8.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Poco admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/4.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>  Poco admin design embraces  uses ample white space a clean and minimalistic visual style.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">22</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">88</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">20</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/6.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/7.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+2 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Universal admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Attention is given to  visual style and layout across different sections readability to enhance the user experience.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">29</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">88</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Forms and Inputs</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Themeforest, australia</p>
                                                    </div>
                                                    <p>Admin design pays attention to  incorporating these principles form design and input elements. </p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">12 </div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">5</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">7</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/2.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/3.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+10 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">70% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-danger"><span class="badge badge-danger">Doing</span>
                                                    <h5 class="f-w-500 mb-2">Poco admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Poco admin includes a user-friendly  elements like dropdowns system  of a sidebar menu.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-danger">28</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-danger">9</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-danger">26</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/8.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+2 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-danger" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-danger progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                        <div class="row">
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Iconography</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title="" />
                                                        <p class="font-light">Themeforest, australia</p>
                                                    </div>
                                                    <p>The design incorporates clear  highlight important elements  error and feedback mechanisms.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">12 </div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">5</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">7</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+10 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">70% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Universal admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title="" />
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Attention is given to readability follows a modular approach to enhance the user experience.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">66</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">20</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title="" /></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Poco admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/8.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>The grid system allows for and utilizes a grid system arrangement of elements.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">40</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">93</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">20</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/10.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/7.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+2 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Universal admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/7.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Admin design recognizes streamlined and uncluttered user importance of accessibility</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues   </span></div>
                                                        <div class="col-6 font-success">71</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">10</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/4.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+3 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Consistency and Modularity</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Themeforest, australia</p>
                                                    </div>
                                                    <p> Consistency and Branding: The design appropriate font sizes focusing  and typography.</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">12 </div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">5</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">7</div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/11.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+10 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">70% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "70%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xxl-4 col-md-6">
                                                <div class="project-box font-dark bg-light-success"><span class="badge badge-success">Done</span>
                                                    <h5 class="f-w-500 mb-2">Poco admin Design</h5>
                                                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/>
                                                        <p class="font-light">Envato, australia</p>
                                                    </div>
                                                    <p>Responsive Layout: The design is responsive and tablets, and mobile devices</p>
                                                    <div class="row details">
                                                        <div class="col-6"><span>Issues </span></div>
                                                        <div class="col-6 font-success">40</div>
                                                        <div class="col-6"> <span>Resolved</span></div>
                                                        <div class="col-6 font-success">40</div>
                                                        <div class="col-6"> <span>Comment</span></div>
                                                        <div class="col-6 font-success">20 </div>
                                                    </div>
                                                    <div class="customers">
                                                        <ul>
                                                            <li class="d-inline-block"> <img class="img-30 rounded-circle" src="../assets/images/user/9.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/5.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block"><img class="img-30 rounded-circle" src="../assets/images/user/1.jpg" alt="" data-original-title="" title=""/></li>
                                                            <li class="d-inline-block ms-2">
                                                                <p class="f-12">+2 More</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="project-status mt-4">
                                                        <div class="d-flex align-items-center gap-1 mb-2">
                                                            <p class="mb-0">100% </p><span>Done</span>
                                                        </div>
                                                        <div class="progress bg-light-success" style={{height: "5px"}}>
                                                            <div class="progress-bar-animated bg-success progress-bar-striped" role="progressbar" style={{width: "100%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
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
                </div>
            </div>
        </div>
    )
}
