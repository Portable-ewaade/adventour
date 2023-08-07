import React from 'react'

const TourGuide = () => {
  return (

        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <h1 className='fs-xxlarge mt-3'>Explore with our <br className='d-none d-md-block' />experienced</h1>
                        <h1><span className='fs-xxxlarge text-color'>Tour Guides</span></h1>
                    </div>
                    <div className="col-md-5">
                        <img src="../../../assets/holiday.png" className='img-fluid' alt="..."/>
                    </div>
                </div>
            </div>
        <section className="mt-5 pt-4 mb-2">
            <div className="container">
                <div className="text-center">
                    <h4 className='text-color'>Choose your Tour Guide</h4>
                    <p className='fs-5'>We have certified and experienced, friendly and knowledgeable tour<br /> 
                    guide here to lead you on an unforgettable journey through the <br/>
                    wonders of our destination.</p>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div class="card shadow-lg mb-4" >
                            <img src="../../../assets/racheal.png" class="card-img-top img-fluid" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Adeleke Adekemi Racheal</h5>
                                    <p class="card-text">Hello, explorers! I'm Adekemi, your passionate tour guide to the wonders of Ekiti State. With eight years of experience guiding visitors through the diverse tourist centers of this region, I am committed to providing you with an immersive and unforgettable experience during your journey.</p>
                                    <a href="/racheal" class="btn btn-bg text-white" >View Profile</a>
                                </div>
                            </div> 
                        </div>

                    <div className="col-md-6">
                        <div class="card shadow-lg mb-4">
                            <img src="../../../assets/segun.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Oladapo Segun Samuel</h5>
                                    <p class="card-text">Hello! I'm Oladapo, a passionate tour guide dedicated to showcasing the natural beauty and wonder of the tourist centers in Ekiti State. With five years of experience, I aim to provide an immersive and educational experience for visitors, unraveling the secrets of this uniquie geoligical phenomenon.</p>
                                    <a href="/segun" class="btn btn-bg text-white">View Profile</a>
                                </div>
                        </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg mb-4">
                        <img src="../../../assets/gbekele.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Oluwatogbekele Obaniyi </h5>
                            <p class="card-text">Hello, travelers! I'm Oluwatogbekele, your dedicated tour guide for the enchanting tourist centers of Ekiti State. With five years of experience exploring these hidden gems, I am passionate about sharing the rich cultural heritage, natural beauty, and historical significance of this vibrant state.</p>
                            <a href="/gbekele" class="btn btn-bg text-white">View Profile</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg mb-4">
                        <img src="../../../assets/kehinde.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Kehind Adetule</h5>
                            <p class="card-text">Hi explorers! I'm Kehinde, your seasoned tour guide for the captivating tourist centers of Ekiti State. With five years of experience showcasing the beauty and cultrual richness of this region, I'm passionate about creating memorable and immersive experiences for travelers from all walks of life.</p>
                            <a href="/kehinde" class="btn btn-bg text-white">View Profile</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg mb-4">
                        <img src="../../../assets/fisayo.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Fisayo Oso</h5>
                            <p class="card-text">Hello, fellow travelers! I'm Fisayo, your dedicated tour guide for the enchanting tourist centers of Ekiti State. With 5 years of experiences, my passion for sharing the beauty and cultural heritage of this region knows no bounds. Join me on a journey of discovery, where history, nature, and warm hospitality converge.</p>
                            <a href="/fisayo" class="btn btn-bg text-white">View Profile</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg mb-4">
                        <img src="../../../assets/valentine.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Valentine Ogunduyile</h5>
                            <p class="card-text">Hello, explorers! I'm Valentine, your passionate tour guide to the wonders of Ekiti State. With eight years of experience guiding visitors through the diverse tourist centers of this region, I am committed to providing you with an immersive and unforgettable experience during your journey.</p>
                            <a href="/valentine" class="btn btn-bg text-white">View Profile</a>
                        </div>
                    </div> 
                    </div> 
                </div>   
            </div>
        </section>
    </div>

  )
}

export default TourGuide