import React from 'react'
import Main from '../components/Main'
import MinExplore from '../components/MinExplore'

const Home = () => {
  return (
    <div>
        {/* picture carousel */}
       <Main />

        {/* choose your destination */}
        <MinExplore />

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
                        <div className="card border-0 shadow-lg mb-2">
                            <img src="../../../assets/check-mark.png" alt="..." className='w-25 mx-auto pt-2'/>
                            <h4>Verified</h4>
                            <p className='px-5'>Our tour guides are verified by the Ekiti State Government</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border-0 shadow-lg mb-2">
                                <img src="../../../assets/3d-map.png" alt="..." className='w-25 mx-auto pt-3'/>
                                <h4>Lot of Choices </h4>
                                <p className='px-5'>We work with different tourist centers all over Ekiti State</p>
                            </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card border-0 shadow-lg mb-2">
                                <img src="../../../assets/tour-guide.png" alt="..." className='w-50 mx-auto pt-2'/>
                                <h4>Tour Guides </h4>
                                <p className='px-5'>We work with the best tour guides to give you the experience</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home