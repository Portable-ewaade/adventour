import React from 'react'

const TourSegun = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                <h1 className='fs-xxxlarge'>Meet Our<br/><span className='text-color'>Tour Guides</span></h1>
                </div>
                <div className="col-md-6">
                    <img src="../../../assets/segun.png" className='img-fluid rounded-3' alt="..."/>
                </div>
            </div>
        </div>
        <div className='p-3 p-md-5'>
            <h6 className='fs-3 fw-light'><strong>Name:</strong> Oladapo Segun Samuel</h6>
            <h6 className='fs-3 fw-light'><strong>Language:</strong> English, Yoruba</h6>
            <h6 className='fs-3 fw-light'><strong>Location:</strong> Ado-Ekiti, Ekiti State, Nigeria</h6>
            <h6 className='fs-3 fw-light'><strong>Years of experience:</strong> 5 years.</h6>
        </div>
        <article className='p-3 p-md-5'>
            <div>
                <h4>About Me:</h4>
                <p>Hello! I'm Oladapo, a passionate tour guide dedicated to showcasing the natural beauty and wonder of the tourist centers in Ekiti State. With years of experience, I aim to provide an immersive and educational experience for visitors, unraveling the secrets of this unique geological phenomenon.</p>
            </div>

            <div className='mt-5'>
                <h4>Specialties:</h4>
                <ul>
                    <li><p>Geological Marvels: Learn about the captivating geological phenomenon of different tourists centers in Ekiti state. I'll share the latest scientific findings and the fascinating theories behind this unique occurrence.</p></li>
                    <li><p>Local Culture: Immerse yourself in the rich cultural heritage of Ekiti State as we explore the significance of the tourist centers to the state at large. Discover the myths, legends, and rituals associated with this sacred sites.</p></li>
                    <li><p></p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>Services Offered:</h4>
                <ul>
                    <li><p>Guided Tours: Join me on a group tour where I'll lead you through the enchanting landscapes, sharing interesting stories and historical facts about Ekiti state.</p></li>
                    <li><p>Private Tours: Enjoy a personalized experience catered to your interests and pace. Whether you're a solo traveler, a couple, or a family, I'll ensure your visit is tailored to your preferences.</p></li>
                    <li><p>Photography Sessions: As a photography enthusiast, I can guide you to the best viewpoints and help you capture stunning images of the springs and its surroundings.</p></li>
                </ul>
            </div>
            <div className='mt-5' >
                <h4>Tour Highlights</h4>
                <ul>
                    <li><p>Witness the Phenomenon: Experience the awe-inspiring sight of the merging warm and cold springs, and feel the stark temperature difference on your skin.</p></li>
                    <li><p>Cultural Insights: Listen to captivating stories and local legends, gaining a deeper appreciation for the cultural significance of the tourist centers.</p></li>
                    <li><p>Nature Walks: Take a leisurely stroll through the lush landscapes surrounding the springs, connecting with nature and enjoying the serenity of the area.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>Contact Information</h4>
                <p>Email: oladaposegun@gmail.com</p>
                <p>Phone: +2349031607439</p>
            </div>

            <div className='mt-5'>
            <div className="socialmedia">
                <h5>Social Media</h5>
                    <a href="https://www.facebook.com/oladseg" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                    <a href="https://www.instagram.com/masteroladseg" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                    <a href="https://www.twitter.com/masteroladseg" className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                    <a href="https://www.linkedin.com/in/masteroladseg" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                    <a href="wa.me/2349031607439" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
                </div>
            </div>
        </article>

    </div>

  )
}

export default TourSegun