import React from 'react'

export default function Appointment() {
    return (
        <div>
            <div class="container-fluid">
                <div class="row page-title">
                    <div class="col-sm-6">
                        <h3>Users</h3>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header d-md-block">
                        <div class="d-md-flex d-sm-block align-items-center">
                            <form class="search-form mb-0">
                                <div class="input-group"><span class="input-group-text pe-0">
                                    <svg class="search-bg svg-color">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                    </svg></span>
                                    <input class="form-control" type="text" placeholder="Search anything..." />
                                </div>
                            </form>
                            <div class="flex-grow-1 text-end">
                                <form class="d-inline-flex">
                                    <button class="btn btn-primary plus-square">
                                        <svg class="feather stroke-white ">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus-square"></use>
                                        </svg>Add users
                                    </button>
                                    <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                                        <input id="upfile" type="file" onchange="sub(this)" />
                                    </div>
                                    <button class="btn btn-outline-primary ms-2 upload">
                                        <svg class="feather stroke-primary">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#upload"></use>
                                        </svg>Upload document
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div class="card-body file-manager">
                        <div class="table-responsive">
                            <table class="table align-middle mb-0 bg-white">
                                <thead class="bg-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Position</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                                    alt=""
                                                    style={{width: '45px', height: '45px'}}
                                                    class="rounded-circle"
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">John Doe</p>
                                                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Software engineer</p>
                                            <p class="text-muted mb-0">IT department</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-success rounded-pill d-inline">Active</span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                                    class="rounded-circle"
                                                    alt=""
                                                    style={{width: '45px', height: '45px'}}
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">Alex Ray</p>
                                                    <p class="text-muted mb-0">alex.ray@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Consultant</p>
                                            <p class="text-muted mb-0">Finance</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-primary rounded-pill d-inline"
                                            >Onboarding</span
                                            >
                                        </td>
                                        <td>Junior</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img
                                                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                                    class="rounded-circle"
                                                    alt=""
                                                    style={{width: '45px', height: '45px'}}
                                                />
                                                <div class="ms-3">
                                                    <p class="fw-bold mb-1">Kate Hunington</p>
                                                    <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="fw-normal mb-1">Designer</p>
                                            <p class="text-muted mb-0">UI/UX</p>
                                        </td>
                                        <td>
                                            <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
                                        </td>
                                        <td>Senior</td>
                                        <td>
                                            <button
                                                type="button"
                                                class="btn btn-link btn-rounded btn-sm fw-bold"
                                                data-mdb-ripple-color="dark"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



