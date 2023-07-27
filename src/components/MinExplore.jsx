import React from 'react'

const MinExplore = () => {
  return (
    <div>
        <section className="mt-4 pt-4 mb-2">
            <div className="container">
                <div className="text-center">
                    <h4 className='text-color'>Choose your destination</h4>
                    <h3>Explore the Best Destination <br /> for your Vacation</h3>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div class="card shadow-lg border-0 mb-4" >
                            <img src="../../../assets/arinta.png" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Arinta Waterfall</h5>
                                    <p class="card-text">Arinta Waterfalls is located at Ipole Iloro, Ekiti State. It is a few minutes to Ikogosi Warm Spring and not more than 2 hours and not less than 1 hour 30 minutes from Ado Ekiti. Arinta Waterfalls consist of seven different cascades. Everyone that goes to Arinta Waterfalls gets to the first layer.</p>
                                    <a href="/arinta" class="btn btn-bg text-white">Learn More</a>
                                </div>
                            </div> 
                         </div>

                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/fajuyi.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Fajuyi Memorial Park</h5>
                            <p class="card-text">The Fajuyi Memorial Park is situated in Ado-Ekiti, the state capital of Ekiti State. It was built in memory of the late Colonel Adekunle Fajuyi, the former military governor of the Western Region, who was killed alongside General Agunyi Ironsi during the first military coup in Nigeria. </p>
                            <a href="/fajuyi" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/osunta.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Olosunta Hill</h5>
                            <p class="card-text">The Olosunta Hills are located in Ikere – Ekiti Local Government Area of Ekiti State. They are sacred hills, worshipped every year for 9 days, the festival draws tourists from far and wide. The Olusonta rock is unlike other rocks that tourist troop for relaxation.</p>
                            <a href="/olosunta" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/ikogosi.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ikogosi Warm Spring</h5>
                            <p class="card-text">Ikogosi is a small quiet town in Ekiti West Local Government area of Ekiti State, which has been catapulted to national and international limelight because of the presence of warm andcold springs flowing side by side in the town. The spring is known as the “Ikogosi Warm Spring”.</p>
                            <a href="/ikogosi" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4">
                        <img src="../../../assets/esa-cave.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Esa Cave</h5>
                            <p class="card-text">The cave is located at a distance of about 6 kilometers away from Iyin Ekiti in Irepodun/ Ifelodun Local Government Area of Ekiti State This is about 3 kilometers away from Ado-Ekiti,the state capital. The Cave still maintains its natural look while evidence of long use still exists.</p>
                            <a href="/esacave" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-6">
                    <div class="card shadow-lg border-0 mb-4"
                >
                        <img src="../../../assets/ero-dam.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ero Water Dam</h5>
                            <p class="card-text">Ero dam and lake are man-made tourist attractions in the State. This dam is located at Ikun Ekiti in Moba Local Government of the State. The lake covers some kilometers. In fact, it was initially designed to cover only five kilometres but eventually it covered eleven kilometres.</p>
                            <a href="/ero-dam" class="btn btn-bg text-white">Learn More</a>
                        </div>
                    </div> 
                    </div> 
                </div>   
            </div>
        </section>
    </div>
  )
}

export default MinExplore