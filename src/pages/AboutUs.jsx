import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <section className='pt-md-5'  style={{
            backgroundImage: "url('../../../assets/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
             <div className='container pt-md-5 mb-5'>
            <div className='row pt-md-5'>
                <div className='col-md-6 ps-md-5'>
                    <h1 className='fs-xxxlarge ps-lg-5 pt-md-3 pt-4'>Welcome to <br /> <span className='text-color'>Adventour</span></h1>
                    <h6 className='mt-3 lead ps-md-5 '>Your gateway to unforgettable <br/>adventure</h6>
                    
                </div>
                <div className='col-md-6 mt-md-0 mt-4'>
                    <img src='../../../assets/about.png' className='card-img-top' alt='...'/>
                </div>
            </div>
             </div>
        </section>
       
        <div className='container pt-md-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="../../../assets/fajuyi-view.png" className="img-fluid" alt="fajuyi view" />
                </div>
                <div className='col-md-6 mt-3'>
                    <p>At <strong className='text-color'>AdvenTour</strong>, we believe that travel is a transformative experience. Our passion for exploration, culture, and connecting with people drives us to curate exceptional travel experiences for adventurers like you. we believe that travel is not just about visiting new places; it's about embracing new cultures, creating lasting memories, and fostering meaningful connections.</p>
                    <p>With a passion for wanderlust and a commitment to excellence, we curate unforgettable travel experiences that leave a lasting imprint on your heart and soul.</p>
                </div>
            </div>
        </div>
        <div className='container pt-md-5'>
            <div className='row'>
                <div className='col-md-6 mt-3 mt-md-5'>
                    <p>Our mission is to unlock the Ekiti State wonders for you, empowering you to embark on extraordinary journeys filled with discovery, adventure, and personal growth.</p>
                    <p>Our experienced and knowledgeable tour guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Ekiti State.</p>
                </div>
                <div className='col-md-6 mb-3'>
                <img src="../../../assets/ikogosi.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
        <div className='container mb-5 pt-md-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src="../../../assets/arinta.png" className="img-fluid" alt="" />
                </div>
                <div className='col-md-6 mt-3'>
                    <p>Thank you for considering <strong className='text-color'>AdvenTour</strong> as your travel companion. Whether you seek adventure, cultural immersion, or a peaceful retreat, we are here to turn your travel dreams into reality. Join us on this exciting voyage of exploration, and together, let's create unforgettable memories that will last a lifetime.</p>
                    <p>Let's embark on an unforgettable journey through the picturesque tourist centers of Ekiti State. We look forward to guiding you as we create lasting memories and a deeper appreciation for the beauty and heritage of this region.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs