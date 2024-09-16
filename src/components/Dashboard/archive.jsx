import React, { useState } from 'react'
const Data = [
    { id: 1, SalonName: 'John', location: 'Yaounde', HairdresserNumber:'4', HairdresserDetail: 'Admin', status: 'Pending' },
    { id: 2, SalonName: 'Jane', location: 'S', HairdresserNumber: '6', HairdresserDetail: 'User', status: 'Inactive' },
    { id: 3, SalonName: 'Fina', location: 'dora', HairdresserNumber:'3', HairdresserDetail: 'user', status: 'Suspended' },
    { id: 4, SalonName: 'John', location: 'Doe', HairdresserNumber:'6', HairdresserDetail: 'Admin', status: 'Active' },
    { id: 5, SalonName: 'William', location: 'Brown', HairdresserNumber: '7', HairdresserDetail: 'Admin', status: 'Active' },
    { id: 6, SalonName: 'Olivia', location: 'Jones', HairdresserNumber: '5', HairdresserDetail: 'Premium', status: 'Active' },
    { id: 7, SalonName: 'France', location: 'Wilson', HairdresserNumber:'3',  HairdresserDetail: 'Basic', status: 'Inactive' },
    { id: 8, SalonName: 'Noah', location: 'Miller', HairdresserNumber:'8', HairdresserDetail: 'Premium', status: 'Active' },
    { id: 9, SalonName: 'Ava', location: 'Taylor', HairdresserNumber: '4', HairdresserDetail: 'Basic', status: 'Inactive' },
    { id: 10, SalonName: 'Isabella', location: 'Moore', HairdresserNumber: '2', HairdresserDetail: 'Admin', status: 'Active' },
];
const statusClassName = {
    "Inactive": "badge badge-light-danger",
    "Suspended": "badge badge-light-primary",
    "Active": "badge badge-light-success",
    "Pending": "badge badge-light-info",
}

export default function Salonadmin() {
    const [userList, setuserList] = useState(Data)
    return (
        <div class="container-fluid table-space basic_table">
            <div class="container-fluid">
                <div class="row page-title">
                    <div class="col-sm-6">
                        <h3>SalonAdmin</h3>
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
                            <table class="table">
                                <thead>
                                    <tr class="b-b-primary">
                                        <th scope="col">Id</th>
                                        <th scope="col">SalonName</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">HairdresserNumber</th>
                                        <th scope="col">HairdresserDetail</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((row) => (
                                        <tr className='b-b-jojo' key={row.id}>
                                            <th>{row.id}</th>
                                            <td><img class="img-30 me-2" src={require(`../../assets/images/avatar/${row.id}.jpg`)} alt="profile" />{row.SalonName}</td>
                                            <td>{row.location}</td>
                                            <center><td>{row.HairdresserNumber}</td></center>
                                            <td>
                                            <div style={{fontSize:'50px',color:'pink', display:'flex', justifyContent:'center',marginRight:'40px'}}>
                                                    <span style={{margin:2}}>.</span>
                                                    <span style={{margin:2}}>.</span>
                                                    <span style={{margin:2}}>.</span>
                                                </div>
                                            </td>
                                            <td> <span class={statusClassName[row.status]}>{row.status}</span></td>
                                            <td>
                                                {/* <div class="text-center col-12 col-sm-6 col-md-12"> */}
                                                <button class="btn m-1 btn-info btn-outline-info" type="button" data-bs-toggle="tooltip" title="btn btn-outline-info">Edit</button>
                                                {/* </div> */}
                                                <button class="btn m-1 btn-info btn-outline-info" type="button" data-bs-toggle="tooltip" title="btn btn-outline-info">Delete</button>
                                                {/* </div> */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
