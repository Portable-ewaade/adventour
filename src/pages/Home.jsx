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

        <section id="gallery" className='mt-4 pt-2'>
            <div className="container">
                <div className="text-center">
                    <h5 className='text-color mt-5'>Gallery</h5>
                    <h3 className='mb-4'>Explore beautiful scenes of our tourist centers</h3>
                </div>

                    <div id="carouselGallery" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="../../../assets/fajuyi.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="../../../assets/osunta.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="../../../assets/ikogosi.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselGallery" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselGallery" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>  
                    </div>

               {/* <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div class="card" style={{width: "18rem"}}>
                            <img src="../../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        </div>
                    </div>
               </div> */}
            </div>
        </section>

        {/* what we serve you */}
        <section id="whatWeServe" className='mt-4 pt-2'>
            <div className="container">
                <div className="text-center">
                    <h5 className='text-color mt-5'>Services</h5>
                    <h2>What we serve you</h2>
                </div>

                <div className="row text-center mt-3 mb-5">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <img src="../../../assets/check-mark.png" alt="..." className='w-25 mx-auto pt-2'/>
                            <h4>Verified</h4>
                            <p className='px-5'>Our tour guides are verified by the Ekiti State Government</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0">
                                <img src="../../../assets/3d-map.png" alt="..." className='w-25 mx-auto pt-3'/>
                                <h4>Lot of Choices </h4>
                                <p className='px-5'>We work with different tourist centers all over Ekiti State</p>
                            </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-0">
                                <img src="../../../assets/tour-guide.png" alt="..." className='w-50 mx-auto pt-2'/>
                                <h4>Tour Guides </h4>
                                <p className='px-5'>We work with the best tour guides to give you the experience</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>

    <div className='container-fluid' style={{
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
                    {/* <div> */}
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
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Home