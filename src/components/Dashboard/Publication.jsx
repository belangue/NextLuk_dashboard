import React,  { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Publication() {
    const loaderData = useLoaderData()
    console.log(loaderData);
    const [publicationList, setPublicationList] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [newPublication, setNewPublication] = useState({
        firstName: "",
        lastName: "",
        email: "",
        accountType: "",
    });
    const openModal = () => {
        setIsOpen(!isOpen)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPublication(prevState => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = publicationList.length + 1;
        const createdPublication = {
            id: newId,
            ...newPublication,
            status: 'Pending'
        };
        setPublicationList(prevList => [...prevList, createdPublication]);
        closeModal();
    };
    console.log(publicationList);
   
    return (
        <div class="container-fluid">
            <div class="card gallery-grid">
                <div class="card-header pb-0">
                    <h4>Hairdresser publication</h4>
                    <p class="desc mb-0 mt-1"><span></span><code></code><span></span></p>
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
                            <div className="flex-grow-1 text-end">
                <form className="d-inline-flex">
                    <button onClick={openModal} className="btn btn-primary plus-square">
                        <svg className="feather stroke-white ">
                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus-square"></use>
                        </svg>Add post
                    </button>
                </form>
            </div>
            <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={newPublication.firstName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={newPublication.lastName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={newPublication.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="accountType" className="form-label">Account Type</label>
                                    <select className="form-select" id="accountType" name="accountType" value={newPublication.accountType} onChange={handleInputChange} required>
                                        <option value="">Select account type</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Hairdresser">Hairdresser</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Add User</button>
                                </div>
                            </form>
                        </div>
                        </div>

                    </div>
                </div>
                <div class="my-gallery card-body row gallery-with-description mb-0" itemscope="">
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/1.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/1.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/2.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/2.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/3.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/3.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/4.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/4.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/5.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/5.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/6.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/6.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/7.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/7.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/8.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/8.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/9.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/9.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/10.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/10.jpg")} alt="Demo image 1"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/11.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/11.jpg")} alt="Demo img"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="my-gallery pswp-gallery">
                            <div class="pswp-gallery__item"><a href="../assets/images/big-lightgallery/12.jpg" data-pswp-width="1669" data-pswp-height="2500" target="_blank"><img src={require("../../assets/images/lightgallery/12.jpg")} alt="Demo image3"/>
                                <div class="caption">
                                    <h4>Bohemian braids</h4>
                                    <p style={{fontWeight:'bold'}}>600$</p>
                                </div></a>
                                <div style={{padding:'10px', display:'flex',justifyContent:'flex-end',gap:'3px'}}class="pswp-caption-content">
                                    <button style={{borderRadius:'10px', backgroundColor:'transparent',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'pink',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div className="modal-content" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '80%',
                        maxWidth: '500px'
                    }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Add New User</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={newPublication.firstName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={newPublication.lastName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={newPublication.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="accountType" className="form-label">Account Type</label>
                                    <select className="form-select" id="accountType" name="accountType" value={newPublication.accountType} onChange={handleInputChange} required>
                                        <option value="">Select account type</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Hairdresser">Hairdresser</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div> 
    )
}
