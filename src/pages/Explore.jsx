import React from 'react'
import MinExplore from '../components/MinExplore'

const Explore = () => {
  return (
    <div>
        <main style={{
      backgroundImage: "url('../../../assets/background.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
            <div className="container pt-md-5">
                <div className="row ">
                    <div className="col-md-6 mt-5 pt-md-4">
                        <h1 className='fs-xxxlarge'>Explore your <br /> next  <span className='text-color'>Vacation</span></h1>
                        <p className='mt-3'>Explore different tourist centers available in Ekiti State and choose the destination for your next vacation</p>

                        <a href="/tour">
                          <button class="btn btn-bg text-white fs-small py-2 px-4" >Get a Tour Guide</button>
                  	    </a>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="card border-0 ">
                        <img src="../../../assets/water-1.png" alt=".." className='' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <MinExplore />
        {/* continuation on more places to explore */}

         <section className="" id='explore'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div class="card shadow-lg border-0 mb-4" >
                            <img src="../../../assets/erin-ayo3.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Erin Ayonigba River</h5>
                                    <p class="card-text">The Erin Ayonigba River in erijiyan Ekiti, Ekiti West Local Government Area of Ekiti State, is home to an unusual speciesof fish. The river is said to cure any ailments. The river contains fish and other creatures that are thought to be the children of the river goddess, and therefore can not be killed. </p>
                                    <a href="/erin-river" class="btn btn-bg text-white">Learn More</a>
                                </div>
                            </div> 
                         </div>

                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/orile-hill.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Orole Hills</h5>
                            <p class="card-text">Oroole Hill is located in Ikere Ekiti in Ikere local government area of Ekiti State. The hill is reputed to be the highest in the Ondo/Ekiti axis, The Hill stands like an egg half – buried in the soil it is worshipped as a goddess of prosperity. The site is ideal for climbing, sight – seeing and picnicking.</p>
                            <a href="/orole-hills" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/babalola.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Babalola Cenotaph </h5>
                            <p class="card-text">Babalola Cenotaph (Religious Tourism) at Efon Alaaye in Ekiti State is not only popular because of the number of praying mountains where many Christian faithful go for spiritual incubation, and special prayer, but it has also become a tourist centre where the Christ Apostolic Church members go to pray.</p>
                            <a href="/babalola" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/ureje1.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title mt-lg-2">Ureje Dam</h5>
                            <p class="card-text">Ureje Dam is a significant water reservoir located in Ado Ekiti, the capital city of Ekiti State. It serves as a key source of water supply and irrigation for both the city and its surrounding areas. The dam plays a vital role in supporting agricultural activities, providing potable water, and contributing to the overall development of the region.</p>
                            <a href="/ureje" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                </div>   
            </div>
        </section>
    </div>
  )
}

export default Explore