import React from 'react'
import MinExplore from './MinExplore'

const Explore = () => {
  return (
    <div>
        <main>
            <div className="container">
                <div className="row mt-md-5">
                    <div className="col-md-6 mt-5 pt-md-4">
                        <h1 className='fs-xxxlarge'>Explore your next <span className='text-color'>Vacation</span></h1>
                        <p className='mt-3'>Explore different tourist centers available in Ekiti State and choose the destination for your next vacation</p>
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
                            <img src="../../../assets/erin-ayo.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Erin Ayonigba River</h5>
                                    <p class="card-text">The Erin Ayonigba River in Erinjiyan Ekiti, Ekiti West Local Government Area of Ekiti State, is home to an unusual speciesof fish. The river is said to cure any ailments. The river contains fish and other creatures that are thought to be the children of the river goddess, and therefore can not be killed. </p>
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
                            <a href="/orole-hills" class="btn btn-bg text-white mt-lg-4">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/osunta.png" class="card-img-top" alt="..."/>
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
                        <img src="../../../assets/oni-river.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Oni River</h5>
                            <p class="card-text">Oni RIver is located in Efon Alaaye, in Efon Local Government. This river is believed to have therapeutic powers which make people throng the place to bath and get healed. Some fetch the water to drink for healing and deliverance from every form of satanic bondage.</p>
                            <a href="/" class="btn btn-bg text-white mt-md-4">Learn More</a>
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