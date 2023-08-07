import React from 'react'

const EroDam = () => {
  return (
        <div>
            <div style={{
                backgroundImage: "url('../../../assets/background.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}> 
                 <div className="container pt-md-5">
                <div className="row mt-md-">
                    <div className="col-md-6 mt-5 p-2 pt-md-5">
                            <h1 className='fs-larger'>Welcome to <br />  <span className='text-color'>Ero Dam</span></h1>
                            <p>Welcome to Ero dam. A spectacle cascading down rocky hills from a great height to form a flowing pool of spring water amidst natural forest vegetation. </p>

                            <a href="/tour">
                          <button class="btn btn-bg text-white fs-small py-2 px-4 mb-4" >Get a Tour Guide</button>
                  	    </a>
                        </div>
    
                        <div className="col-md-6 mt-md-5">
                           <div className="card border-0">
                           <img src="../../../assets/ero-1.png" alt="..." className='border-0'/>
                           </div>
                        </div>
                </div>
              </div>
            </div>
              
                <article className='p-3 p-md-5'>
                    <h4>History</h4>
                    <p> Ero dam and lake are man-made tourist attractions in the State. This dam is located at Ikun Ekiti in Moba Local Government of the State. The lake covers some kilometers. In fact, it was initially designed to cover only five kilometres but eventually it covered eleven kilometres. This dam supplies three Local Governments drinkable water and the Local Governments that benefit from this are: Oye, Ido-Osi and Moba itself. This is to say that the dam supplies over one hundred towns and villages in the state with pipe borne water.According to experts, the dam is capable of supplying Ekiti State as a whole potable water. The indigenes of the town and neighbours and even Hausas fish on this Ero lake. Local canoes, boats and modern flying boats are made use of by these fishermen. This dam encourages the people to practise irrigation (system of farming) in their environments.
                     </p>

                </article>
    
                <div>
                <div className="container mx-auto img-fluid">
                   <div className="text-center esa">
                   <img src="../../../assets/ero-2.png" alt="..." className='esa-img mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                   </div>
                </div>
    
                <div className="p-3 p-md-5">
                    <h4>Overview</h4>
                    <p>Ero dam, based on its size and multiple features, is also a big tourist centre. The Dam according to experts is the biggest and longest in the whole of South West Nigeria and one of the biggest in Nigeria. The dam if maximally put to use can also serve as one of the biggest irrigation projects in Nigeria, thereby providing thousands of job opportunities for our teaming youth population in agriculture.</p>
    
                    <p>The dam with its lake, serenity and other potentials is naturally suitable and endowed for tourism purposes. It will not be an exaggeration to say that if properly harnessed, Ero dam could be one of the biggest tourism adventures in Nigeria, attracting quality visitors from within and outside the country. Thus, Ero Dam can be applied as a very good solution to combat youth unemployment in our state deriving its force from tourism. Today, and beyond the provision of portable water, The government also has the potential and capacity to woo global investors to develop a five star tourist centre at Ero dam at Ikun Ekiti.</p>

                 </div>
             </div>
                <div className="">
                    <div className="container mx-auto img-fluid mt-3">
                    <div className="text-center">
                    <img src="../../../assets/ero-dam.png" alt="..." className='mb-4 mx-auto img-fluid'  style={{width: "65rem", height: "auto"}}/>
                    </div>
                    <div className="text-center">
                    <img src="../../../assets/ero-3.png" alt="..." className='mb-4 mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                    </div>
                    <div className="text-center">
                    <img src="../../../assets/ero-4.png" alt="..." className='mb-4 mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                    </div>
                    </div>
                
                <div className="p-3 px-md-5 mb-3">
                    <h4>Other tourists centers close to Ero Water Dam</h4>
                    <ol>
                        <li> Oni River</li>
                        <li>Ikogosi Warm Spring</li> 
                        <li>Arinta Waterfall </li> 
                    
                    </ol>
                    <h6>Do you enjoy what you read? Are you ready to explore and book any of our tourguides ? If yes, Click <a href="/tour"><span className='text-color'>here</span></a></h6>
    
                 </div>
             </div>
        </div>
   
  )
}

export default EroDam