import React from 'react'
import Main from '../components/Main'
import MinExplore from '../components/MinExplore'
import './Home.css'

const Home = () => {
   
  return (
    <div>
        {/* picture carousel */}
        <div>
            <Main />
        </div>

        {/* choose your destination */}
        <div>
            <MinExplore />
        </div>

        {/* Gallery section */}

        <section id="gallery" className='mt-md-5 pt-2'>
            <div className="container text-center">
                <h5 className="text-color">Gallery</h5>
                <h2 className='mb-4'>Explore beautiful scenes of our tourist centers</h2>
            </div>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="cards-wrapper">
                    <div class="card picture-card">
                        <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                    </div>
                    <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/ikogosi-1.png" class="card-img-top" alt="..."/>
                    </div>
                    <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/hill-1.png" class="card-img-top" alt="..."/>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/falling-water.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/olosunta1.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/esa-cave.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/hill-2.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/ikogosi-pool.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/oni-river.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/fajuyi-4.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/ikogosi-4.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/olosunta3.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/erin-ayo.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/babalola.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/ero-dam.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/ikogosi-3.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/erin-ayo-2.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/hill-2.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="cards-wrapper">
                        <div class="card picture-card">
                        <img src="../../../assets/arinta.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/babalola-2.png" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card picture-card d-none d-md-block">
                        <img src="../../../assets/erin-ayo-3.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container text-center mt-3">
               <a href="/gallery" class="btn btn-bg text-white">View More</a>
            </div>
        </section>

        {/* what we serve you */}
        <section id="whatWeServe" className='mt-4 pt-2'>
            <div className="container">
                <div className="text-center">
                    <h5 className='text-color mt-5'>Services</h5>
                    <h2 className='mb-4'>What we serve you</h2>
                </div>

                <div className="row text-center mt-3 mb-5">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg mb-2 px-5" style={{height: "12rem"}}>
                            <img src="../../../assets/check-mark.png" alt="..." className='w-25 mx-auto pt-2 mb-2'/>
                            <h4>Verified</h4>
                            <p className='mb-lg-4'>Our tour guides are verified by the Ekiti State Government</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg mb-2 px-5" style={{height: "12rem"}}>
                                <img src="../../../assets/3d-map.png" alt="..." className='w-25 mx-auto pt-3 mb-2'/>
                                <h4>Lot of Choices </h4>
                                <p className=''>We work with different tourist centers all over Ekiti State</p>
                            </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-0 shadow-lg mb-2 px-5" style={{height: "12rem"}}>
                                <img src="../../../assets/tour-guide.png" alt="..." className='w-50 mx-auto pt-2'/>
                                <h4>Tour Guides </h4>
                                <p className=''>We work with the best tour guides to give you the experience</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
         {/* feedback */}
         <section className="pt-2  ">
        <div className="container ">
                <div className="text-center ">
                    <h5 className='text-color mt-5'>What our tourists say</h5>
                    <h2 className='mb-4'>Feedback from our various tourists</h2>
                </div>
                <div className=''>
                    <div className="pt-5 mt-4 ">
                        <div id="carouselExampleAutoplayingcard" class="carousel slide " data-bs-ride="carousel">
                            <div class="carousel-inner overflow-none ">
                                <div class="carousel-item active text-center ">
                                    <div className="wrap position relative">
                                    <div className="card ms-auto feedback-bg text-white border-0 p-md-4 py-5" >
                                    <p className='pt-md-5 pt-4'>My experience at Arinta Waterfall was an unforgettable and amazing one. With the help of the tour guide, I was able to get to the waterfall with ease. Getting there, He made my tour experience a memorable one.</p>
                                    
                                    <h6>Samuel Oladimeji</h6>
                                    <h6>Ado-Ekiti</h6>
                                    
                                    </div>
                                    <div className="circle position-absolute  top-0 start-50 translate-middle">
                                        <h2 className='pt-4 fs-xxxlarge'>SO</h2>
                                    </div>
                                    </div>
                                </div>
                                <div class="carousel-item active text-center">
                                    <div className="card feedback-bg text-white border-0 p-md-4 py-5">
                                    <p className='pt-md-5 pt-4'>I recently visited the Ikogosi Warm Spring and I used the tour guide service and I must commend that it was a memorable one. The guide was extremely knowledgeable and passionate about the history and culture of the Spring. </p>
                                    <h6>Rhoda Ayomide</h6>
                                    <h6>EKSU student</h6>

                                    <div className="circle position-absolute  top-0 start-50 translate-middle">
                                        <h2 className='pt-4 fs-xxxlarge'>RA</h2>
                                    </div>
                                    </div>
                                </div>
                                <div class="carousel-item text-center">
                                    <div className="card feedback-bg text-white border-0 p-md-4 py-5">
                                        <p className='pt-md-5 pt-4'>My husband and I went on a vacation to Arinta Waterfalls. We used the tour guide service. From the moment we were picked up from our hotel, our tour guide went above and beyond to ensure our tour experience was an interesting one. He was always willing to answer our questions and making the tour not only informative but also incredibly fun.</p>
                                        <h6>Dorcas Adeleke</h6>
                                        <h6>Ondo State</h6>

                                    <div className="circle position-absolute  top-0 start-50 translate-middle ">
                                        <h2 className='pt-4 fs-xxxlarge'>DA</h2>
                                    </div>
                                    </div>
                                </div>
                                                              
                            </div>
                            
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplayingcard" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplayingcard" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                            </div>
                    </div>
                      
                    {/* <div className="circle position-absolute mt-5 top-0 start-50 translate-middle">
                      <h2 className='pt-4 fs-xxxlarge'>SO</h2>
                     </div> */}
                </div>
            </div>
            
        </section>
        
            {/* newsletter */}
        <div id='subscribe' className='container-fluid mt-5' style={{
            background: "url('../../../assets/typing.jpg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '450px',
            
        }}>
            <div className='row' style={{background: 'rgba(0,0,0,.5)', height: '450px'}}>
                <div className='text-center mt-5'>
                    <div className='text-center mt-5'>
                        <h1 className="text-white fw-bold display-5">Subscribe to our Newsletter</h1>
                        <p class="text-white fs-large">Get updates on new information and update.</p>
                    </div>           
                </div>
                <div className='row'>
                    <div className='col-md-7 mx-auto'>
                        
                            <section id="newsletter" className='text-center'>
                                <div class="input-group mx-auto">
                                    <input type="email" class="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" style={{
                                        background: 'none',
                                        height: '70px',
                                        color: 'white'
                                    }}/>
                                    <button class="btn btn-outline-secondary red" type="button" id="button-addon2" style={{
                                        background: 'rgb(200, 70, 70)',
                                        color: '#fff',
                                        width: 'auto'}}>Submit</button>
                                </div>
                            </section>  
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
// https://documenter.getpostman.com/view/27418776/2s946o399t
export default Home