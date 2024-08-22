import React from 'react'

export default function Salonadmin() {
    
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
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">AccountType</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="b-b-tertiary">
                                        <th scope="row">1</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/1.jpg")} alt="profile" />Ram Jacob</td>
                                        <td>Wolfe</td>
                                        <td>RamJacob@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-danger">Suspended</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="b-b-success">
                                        <th scope="row">2</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/2.jpg")} alt="profile" />John Deo</td>
                                        <td>Gummer</td>
                                        <td>JohnDeo@twitter	</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-primary">Pending</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="b-b-warning">
                                        <th scope="row">3</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/3.jpg")} alt="profile" />Elana John</td>
                                        <td>Cazale	</td>
                                        <td>ElanaJohn@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-danger">Suspended</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="b-b-info">
                                        <th scope="row">4</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/4.jpg")} alt="" />Meryl Streep</td>
                                        <td>Roberts</td>
                                        <td>MerylStreep@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="b-b-danger">
                                        <th scope="row">5</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/5.jpg")} alt="" />Emma Stone</td>
                                        <td>Stone</td>
                                        <td>EmmaStone@twitter	</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-primary">Pending</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr class="b-b-secondary">
                                        <th scope="row">6</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/6.jpg")} alt="" />Eliana Jons</td>
                                        <td>Jons</td>
                                        <td>ElianaJons@twitter		</td>
                                        <td>Admin</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/7.jpg")} alt="" />Ram Jacob</td>
                                        <td>Ottandy</td>
                                        <td>ElianaJons@twitter		</td>
                                        <td>Admin</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>
                                        <div style={{position:'relative',display:'inline-block'}}>
                                            <div style={{cursor:'pointer',fontSize:'24px',padding:'0 5px'}}>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                                <div style={{display:'inline-block',width:'5px',height:'5px',backgroundColor:'#333',borderRadius:'50%',margin:'0 2px'}}></div>
                                            </div>
                                            <div style={{display:'none', position:'absolute', top:'100%',right:'0',backgroundColor:'#fff',border:'1px solid #ddd',boxShadow:'0 2px 5px rgba(0 0 0 0.1)',listStyleType:'none',margin:'0', padding:'8px 0', minWidth:'120px',zIndex:'1' }}>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Activate</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Suspended</div>
                                                <div style={{padding:'8px 16px', cursor:'pointer'}}>Reactivate</div>
                                            </div>
                                        </div>
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
