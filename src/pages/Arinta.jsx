import React from 'react'

const Arinta = () => {
  return (   
      <main>
        <div style={{
      backgroundImage: "url('../../../assets/background.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}> 
    <div className="container pt-md-5" >
            <div className="row pt-md-5 ">
                <div className="col-md-6 mt-5 ">
                        <h1 className='fs-xxxlarge'>Welcome to <br />  <span className='text-color'>Arinta Waterfall</span></h1>
                        <p className='mt-3'>Welcome to Arinta Waterfall, A spectacle cascading down rocky hills from a great height to form a flowing pool of spring water amidst natural forest vegetation.  </p>

                        <a href="/tour">
                          <button class="btn btn-bg text-white fs-small py-2 px-4 mb-4" >Get a Tour Guide</button>
                  	    </a>
                    </div>

                    <div className="col-md-6 ">
                       <div className="card border-0">
                       <img src="../../../assets/arinta.png" alt="" className='border-0'/>
                       </div>
                    </div>
            </div>
          </div></div>
          
            <article className='p-3 p-md-5'>
                <h4>History</h4>
                <p>A foremost tourist destination in Ekiti West Local Government Area of Ekiti State, Arinta Waterfalls is a natural wonder to behold in the ancient city of Ipole Iloro.
                </p>

                 <p>The Arinta community harbouring the waterfalls, Ipole Iloro is a rural settlement surrounded by undulating mountains, thick evergreen forest and flowing rivers. The waterfall is a favourable destination for holidaymakers and local tourism. According to the Oba (king), the Olupole of Ipole Iloro, Oba Babatola Oladele, the waterfall has been in existence before Oba Alapa-Ajalorun, one of the grandchildren of Oduduwa, founded the town in the 14th century. The waterfall influenced the decision to settle in Ipole Iloro as it is a good source of water for domestic use and drinking.
                 </p>
                
            </article>

            <div className="">
            <div className="container mx-auto img-fluid">
               <div className="text-center">
               <img src="../../../assets/rush-water.png" alt="..." className='mx-auto img-fluid'/>
               </div>
            </div>

            <div className="p-3 p-md-5">
                <h4>Overview</h4>
                <p>This resort center is naturally endowed with thick and evergreen forest. The Arinta waterfalls are a wonder spectacle to behold, cascading down rocky hills from a great height to form a flowing pool of spring water amidst natural forest vegetation. They are located in Ipole-Iloro Ekiti and are a popular tourist site that draws local and foreign tourists to the State. “Arinta… ever wet ever flowing, the obsession of Ipole people, ever plunging ever splashing” The steep slopes of the overawing ridge, panoramas of a beautiful valley trapped between two ridges meet the eyes. 
                </p>

                <p>The landscape features a sprawling expanse of plush vegetation set with a patchwork of rust-brown ‘tabs’ at a distance, and a sky-line bedecked with gently undulating ridge tops on the other side. The noon-day sun energized the vendural flavor of the valley below, casting it in a harmonious romance of bright and dark shades of leaf green. The tarred road descends down the other side of the ridge to meet the sleepy enclave of Ipole-Iloro. A small stream meets the road at the village entrance. It is called Oluwa stream, and being highly-revered by the people, it is said that the water can cure any kind of diseases.
                </p>

             </div>
            </div>
            <div className="">
            <div className="container mx-auto img-fluid">
               <div className="text-center">
               <img src="../../../assets/view-5.png" alt="..." className='mx-auto img-fluid'/>
               </div>
            </div>

            <div className="p-3 p-md-5">
                <h4>Facilities</h4>

                <p> The site is ideal for relaxation, picnics and religious retreats. </p>

               <p> The Arinta Waterfall is yet to be opened up and developed. A restaurant/bar, gate house/revenue office and guest house are planned for the place.</p>
             </div>

             <div className="container mx-auto img-fluid mt-3">
               <div className="text-center">
               <img src="../../../assets/view-6.png" alt="..." 
               className='mb-4 mx-auto img-fluid'/>
               </div>
               <div className="text-center">
               <img src="../../../assets/view-7.png" alt="..." className='mb-4 mx-auto img-fluid'/>
               </div>
               <div className="text-center">
               <img src="../../../assets/ikogosi-4.png" alt="..." className='mb-4 mx-auto img-fluid'/>
               </div>
               <div className="text-center">
               <img src="../../../assets/rush-water.png" alt="..." className='mb-4 mx-auto img-fluid'/>
               </div>
               <div className="text-center">
               <img src="../../../assets/view-8.png" alt="..." className='mb-4 mx-auto img-fluid'/>
               </div>
               <div className="text-center">
               <img src="../../../assets/ikogosi-4.png" alt="..." className='mb-4 mx-auto img-fluid'/>
               </div>
            </div>

            <div className="p-3 px-md-5 pt-md-5">
                <h4>Tips to know</h4>

                <ol>
                    <li>Entry Fee: There is typically an entry fee to access the Arinta Waterfall. The fee may vary for Nigerian citizens, foreign visitors, and children. The cost is usually nominal.
                    </li>
                    <li>Visiting Hours: Arinta Waterfall is generally open to visitors during daylight hours. It is recommended to visit during the day to fully appreciate the natural beauty and explore the surroundings.
                    </li> 
                    <li>Bring along food, drinks, snacks as there is no restaurant around; change of clothing: shower cap and swimming gears.
                    </li> 
                </ol>

             </div>
            <div className="p-3 px-md-5 mb-3">
                <h4>Other tourists centers close to Arinta Waterfall</h4>
                <ol>
                    <li>Esa Cave</li>
                    <li>Ikogosi Warm Spring </li> 
                    <li>Fajuyi Memorial Park </li>
                    <li>Ero Water Dam</li> 
                </ol>
                <h6>Do you enjoy what you read? Are u ready to explore with us? If yes, Click <a href="/tour"><span className='text-color'>here</span></a></h6>

             </div>
           </div>
      </main>
   
  )
}
export default Arinta