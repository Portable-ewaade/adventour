import React from 'react'

const Babalola = () => {
  return (
        <div>
            <div style={{
                backgroundImage: "url('../../../assets/background.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container pt-md-5">
            <div className="row pt-5 mt-md-0">
                <div className="col-md-6 mt-md-5 pt-md-5 p-md-5">
                        <h1 className='pt-mt-5 fs-xxxlarge'>Welcome to <br /> <span className='text-color'> Babalola Cenotaph</span></h1>
                        <p>Welcome to Babaola Cenotaph A place where the legendary christian leader Apostle Joseph Ayo Babalola was buried. </p>

                        <a href="/tour">
                          <button class="btn btn-bg text-white fs-small py-2 px-4 mb-4" >Get a Tour Guide</button>
                  	    </a>
                    </div>
                    <div className="col-md-6 mt-md-5">
                        <div className="card border-0">
                        <img src="../../../assets/babalola.png" alt="..." className=''/>
                        </div>
                    </div>
            </div>
            </div>
            </div>
            
            <article className='p-3 p-md-5'>
                <h4>History</h4>
                <p>Babalola Cenotaph which is located at Efon-Alaaye Ekiti in Ekiti state is where the revered and legendary Christian leader, Apostle Joseph Ayo Babalola was buried. Known for his spiritual teachings and healing abilities, Apostle Babalola is considered a spiritual pioneer in Nigeria. It is believed that he spent time in meditation and prayer on this mountain, which has made it a sacred site for pilgrims and devotees alike.
                </p>
                <p>Beyond its historical importance, Babalola Mountain offers breathtaking views and natural beauty. The lush greenery and diverse flora of the region make it an excellent destination for nature lovers and hikers. As you ascend the slopes, you'll be greeted with panoramic vistas of the surrounding landscapes, providing an excellent opportunity for photographers to capture the essence of Ekiti's beauty.
                </p>
                
            </article>
    
                <div>
                    <div className="container mx-auto img-fluid">
                        <div className="text-center esa">
                        <img src="../../../assets/babalola-3.png" alt="..." className='esa-img mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                     </div>
                </div>
    
            <div className="p-3 p-md-5">
                <h4>Overview</h4>
                <p>Babalola Cenotaph (Religious Tourism) at Efon – Alaaye in Ekiti State is not only popular because of the number of praying mountains where many Christian faithful go for spiritual incubation, and special prayer, but it has also become a tourist centre where the Christ Apostolic Church, C.A.C members go to either pray at the grave of the LATE AYO BABALOLA the founder of the church or sleep in the catacomb believing that the spirit of their late leader would solve their problem. </p>
    
                <p>Many of them bring kegs of water to the grave with the belief that the power of their founder is still potent and could still perform miracles as he did when alive. People from within and outside the country visit the church in their numbers for healing and to solve their problems through his power as he did when alive. The grave of Apostolic Ayo Babalola and his father David Rotimi have become a source of power, healing and miracles in Efon Alaaye, Ekiti State.</p>
    
                </div>
                </div>
            <div className="">
                <div className="container mx-auto img-fluid mt-3">
                <div className="text-center">
                <img src="../../../assets/babalola-1.png" alt="..." className='mb-4 mx-auto img-fluid'  style={{width: "65rem", height: "auto"}}/>
                </div>
                <div className="text-center">
                <img src="../../../assets/babalola-2.png" alt="..." className='mb-4 mx-auto img-fluid' style={{width: "65rem", height: "auto"}}/>
                </div>
                </div>

                </div>
            
    
                <div className="p-3 px-md-5 mb-3">
                <h4>Other tourists centers close to Babalola Cenotaph</h4>
                <ol>
                    <li> Oni River</li>
                    <li>Ikogosi Warm Spring</li> 
                    <li>Arinta Waterfall  </li>
                </ol>
                <h6>Do you enjoy what you read? Are you ready to explore and book any of our tourguides ? If yes, Click <a href="/tour"><span className='text-color'>here</span></a></h6>
                </div>
            </div>
      )
    }

export default Babalola