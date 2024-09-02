import React from 'react'

export default function Publication() {
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
                            <div class="flex-grow-1 text-end">
                                <form class="d-inline-flex">
                                    <button class="btn btn-primary plus-square">
                                        <svg class="feather stroke-white ">
                                            <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus-square"></use>
                                        </svg>Add post
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
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
                                    <button style={{borderRadius:'10px', backgroundColor:'blue',height:'24px',width:'60px'}}>update</button>
                                    <button style={{borderRadius:'10px', backgroundColor:'red',height:'24px',width:'60px'}}>delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
