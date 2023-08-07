import React from 'react'

const Ureje = () => {
  return (
    <div>
        <div style={{
                backgroundImage: "url('../../../assets/background.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} >  

            <div className="container pt-md-5">
             <div className="row pt-5 pt-md-0">
            <div className="col-md-6 mt-md-5 pt-md-5 p-md-5">
                    <h1 className='pt-mt-5 fs-xxxlarge'>Welcome to <br /> <span className='text-color'> Ureje Dam</span></h1>
                    <p>Welcome to Ureje Dam, A key source of water supply and irrigation for both the city and its surrounding areas.  </p>

                    <a href="/tour">
                          <button class="btn btn-bg text-white fs-small py-2 px-4 mb-4" >Get a Tour Guide</button>
                  	    </a>
                </div>

                <div className="col-md-6 mt-md-5">
                    <div className="card border-0">
                    <img src="../../../assets/ureje1.png" alt="..." className=''/>
                    </div>
                </div>
        </div>
            </div> 
            </div>
        
        <article className='p-3 p-md-5'>
            <h4>History</h4>
            <p>The Ureje Dam was constructed as part of a water supply and irrigation project to meet the growing needs of Ado Ekiti, the capital city of Ekiti State. The project aimed to address the challenges of water scarcity and provide a sustainable source of clean and potable water for both residential and agricultural use. In addition to its utilitarian functions, the Ureje Dam also became a spot for recreation and relaxation. The tranquil surroundings of the dam's reservoir attracted visitors seeking a respite from the urban environment. The presence of the dam, however, might have implications for the local ecosystem, and responsible management is essential to minimize any negative environmental impacts.
            </p>
    
        </article>

            <div>
                <div className="container mx-auto img-fluid">
                    <div className="text-center esa">
                    <img src="../../../assets/ureje2.png" alt="..." className='esa-img mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                 </div>
            </div>

        <div className="p-3 p-md-5">
            <h4>Overview</h4>
            <p>The Ureje Dam is a significant water reservoir located in Ado Ekiti, the capital city of Ekiti State, Nigeria. It serves as a key source of water supply and irrigation for both the city and its surrounding areas. The dam plays a vital role in supporting agricultural activities, providing potable water, and contributing to the overall development of the region. Apart from its utilitarian functions, Ureje Dam also attracts visitors for recreational purposes. The serene environment around the dam offers a peaceful spot for picnics, relaxation, and enjoying the natural beauty of the area. Ureje Dam not only serves as a critical infrastructure for the region's development but also adds to the scenic beauty of Ado Ekiti. It's a symbol of the interplay between human needs, technological solutions, and nature's resources in fostering sustainable growth.</p>
            </div>
            </div>
        <div className="">
            <div className="container mx-auto img-fluid mt-3">
            <div className="text-center">
            <img src="../../../assets/ureje1.png" alt="..." className='mb-4 mx-auto img-fluid'  style={{width: "65rem", height: "auto"}}/>
            </div>
            <div className="text-center">
            <img src="../../../assets/ureje3.png" alt="..." className='mb-4 mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
            </div>
            <div className="text-center">
            <img src="../../../assets/ureje4.png" alt="..." className='mb-4 mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
            </div>
            </div>
        
            </div>
            
            <div className="p-3 px-md-5 mb-3">
            <h4>Other tourists centers close to Ureje Dam</h4>
            <ol>
                <li>Ikogosi Warm Spring </li>
                <li>Fajuyi Memorial Park</li>  
            </ol>
            <h6>Do you enjoy what you read? Are you ready to explore and book any of our tourguides ? If yes, Click <a href="/tour"><span className='text-color'>here</span></a></h6>
            </div>
        </div>
  )
}

export default Ureje