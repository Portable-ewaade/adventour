import React from 'react'

const TourValentine = () => {
  return (
    <div>
        <section  style={{
            backgroundImage: "url('../../../assets/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
             <div className='container pt-md-5 mb-5'>
            <div className='row mt-md-3'>
                <div className='col-md-6 ps-md-5 mt-md-5'>
                    <h1 className='fs-xxxlarge ps-lg-5 pt-md-3 pt-4 mt-md-5'>Meet Our <br /> <span className='text-color'>Tour Guide</span></h1>
                    
                </div>
                <div className='col-md-6 mt-md-0 mt-4'>
                    <img src="../../../assets/valentine.png" className='img-fluid rounded-3' alt="..."/>
                </div>
            </div>
             </div>
        </section>
        
        <div className='p-3 p-md-5'>
            <h6 className='fs-5 fw-light'><strong className='fw-semibold'>Name:</strong> Valentine Ogunduyile</h6>
            <h6 className='fs-5 fw-light'><strong className='fw-semibold'>Language:</strong> English, Yoruba</h6>
            <h6 className='fs-5 fw-light'><strong className='fw-semibold'>Location:</strong> Ado, Ekiti State, Nigeria</h6>
            <h6 className='fs-5 fw-light'><strong className='fw-semibold'>Years of experience:</strong> 5 years.</h6>
        </div>
        <article className='m-3 p-md-5'>
            <div>
                <h4>About Me:</h4>
                <p>Hi explorers! I'm Valentine, your seasoned tour guide for the captivating tourist centers of Ekiti State. With five years of experience showcasing the beauty and cultural richness of this region, I'm passionate about creating memorable and immersive experiences for travelers from all walks of life.</p>
            </div>
            <div className='mt-5'>
                <h4>Specialties:</h4>
                <ul>
                    <li><p>Guided Tours: Experience the camaraderie of group tours as we explore multiple tourist centers together, offering insights and answering your questions along the way.</p></li>
                    <li><p>Private Tours: Enjoy a personalized experience tailored to your interests, pace, and schedule, making your visit to Ekiti's tourist centers truly unique.</p></li>
                    <li><p>School Excursions: Delight in educational and engaging trips for students, where history, culture, and nature come alive in a fun and interactive way.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>Services Offered:</h4>
                <ul>
                    <li><p>Guided Tours: Join me on group tours, where we'll explore multiple tourist centers in Ekiti State. Enjoy an enriching journey filled with fascinating stories and camaraderie with other travelers.</p></li>
                    <li><p>Private Tours: Tailored to your interests and preferences, experience a personalized tour designed to focus on the aspects of Ekiti that intrigue you the most.</p></li>
                    <li><p>Family Adventures: Share memorable experiences with your family as we embark on child-friendly tours that cater to the interests of both kids and adults.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h4>Tour Center Covered</h4>
                <ol>
                    <li><p>Ikogosi Warm Spring: Witness the mesmerizing meeting of warm and cold springs, set amidst picturesque landscapes and a serene valley.</p></li>
                    <li><p>Arinta Waterfalls: Trek through the lush forests to marvel at the cascading beauty of Arinta Waterfalls, an oasis of tranquility.</p></li>
                    <li><p>Ekiti State Pavilion: Discover the art and craft exhibitions, cultural performances, and events that celebrate Ekiti's artistic talents and creativity.</p></li>
                </ol>
            </div>
            <div className='mt-5'>
                <h4>Contact Information</h4>
                <p>Email: duyile.valentine@gmail.com</p>
                <p>Phone: +2349030733560</p>
            </div>

            <div className='mt-5'>
            <div className="socialmedia">
                <h5>Social Media</h5>
                    <a href="https://www.facebook.com/duyile.valentine" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                    <a href="https://https://www.instagram.com/duyilevalentine" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                    <a href="https://twitter.com/ValentineDuyile?t=RwG7UOzy0cY7f2YQtf-3yg&s=08" className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                    <a href="https://www.linkedin.com/in/valentine-ogunduyile-1b5b9223a" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                    <a href="https://wa.me/qr/XVINOGD2643FF1" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
                </div>
            </div>
        </article>
        
    </div>
  )
}

export default TourValentine