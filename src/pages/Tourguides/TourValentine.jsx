import React from 'react'

const TourValentine = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                <h1 className='fs-xxxlarge'>Meet Our<br/><span className='text-color'>Tour Guides</span></h1>
                </div>
                <div className="col-md-6">
                    <img src="../../../assets/valentine.png" className='img-fluid rounded-3' alt="..."/>
                </div>
            </div>
        </div>
        <div className='p-3 p-md-5'>
            <h6 className='fs-3 fw-light'><strong>Name:</strong> Valentine Ogunduyile</h6>
            <h6 className='fs-3 fw-light'><strong>Language:</strong> English, Yoruba</h6>
            <h6 className='fs-3 fw-light'><strong>Location:</strong> Ado-Ekiti, Ekiti State, Nigeria</h6>
            <h6 className='fs-3 fw-light'><strong>Years of experience:</strong> 5 years.</h6>
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
                    <a href="/" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                    <a href="/" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                    <a href="/" className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                    <a href="/" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                    <a href="/" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
                </div>
            </div>
        </article>
        
    </div>
  )
}

export default TourValentine