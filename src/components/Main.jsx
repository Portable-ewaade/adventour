import React from 'react'

const Main = () => {
  return (
    <div  style={{
      backgroundImage: "url('../../../assets/background.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    >
         <main className='container'>
            <div className="row">
                <div className='col-md-6 p-md-5 mb-md-5'>
                      <div className="pt-md-5 pt-3 mt-4">
                      <h1 className='fs-xxxlarge'>Experience the <br className='d-none d-md-block'/>  beauty of <br className='d-none d-md-block'/>  <span className='text-color'>Ekiti State</span></h1>
                      <h6 className='lead'>Welcome to the fountain of knowledge. <br className='d-none' /> Discover the best places to enjoy your vacation and explore the beauty of nature with us</h6>
                      </div>
                       
                    <a href="/explore">
                         <button class="btn btn-bg text-white fw-medium py-2 mt-3 px-4" >Explore</button>
                     </a>
                  </div>
                     <div className='col-md-6'>
                    <div className="pt-5 mt-4">
                      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../assets/Property1.png" class="d-block w-100 h-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/Property2.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/Property3.png" class="d-block w-100" alt="..."/>
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
                      </div>
                    </div>
            </div>
        </main>
    </div>
  )
}

export default Main