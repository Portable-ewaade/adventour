import React from 'react'

const TourFisayo = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <h1 className='fs-xxxlarge'>Meet Our<br/><span className='text-color'>Tour Guides</span></h1>
                </div>
                <div className="col-md-6">
                    <img src="../../../assets/fisayo.png" className='img-fluid rounded-5' alt="..."/>
                </div>
            </div>
        </div>
        
        <div className='p-3 p-md-5'>
            <h6 className='fs-3 fw-light'><strong>Name:</strong> Fisayo Oso</h6>
            <h6 className='fs-3 fw-light'><strong>Language:</strong> English, Yoruba</h6>
            <h6 className='fs-3 fw-light'><strong>Location:</strong> Ekiti State, Nigeria</h6>
            <h6 className='fs-3 fw-light'><strong>Years of experience:</strong> 5 years.</h6>
        </div>
        <article className='m-3 p-md-5'>
            <div>
                <h4>About Me:</h4>
                <p>Hello, fellow travelers! I'm Fisayo, your dedicated tour guide for the enchanting tourist centers of Ekiti State. With over a decade of experience, my passion for sharing the beauty and cultural heritage of this region knows no bounds. Join me on a journey of discovery, where history, nature, and warm hospitality converge.</p>
            </div>
            <div className='mt-5'>
                <h4>Specialties:</h4>
                <ul>
                    <li><p>Natural Wonders: From cascading waterfalls to lush forests and serene lakes, I'll guide you through Ekiti's mesmerizing natural wonders, providing insights into the unique ecology and biodiversity of the area.</p></li>
                    <li><p>Cultural Immersion: Immerse yourself in the rich cultural tapestry of Ekiti as we visit traditional villages, partake in local festivals, and witness vibrant dance and music performances.</p></li>
                    <li><p>Historical Exploration: Uncover the fascinating history of Ekiti State through visits to ancient landmarks, historical sites, and museums, where I'll narrate the tales of the region's past.</p></li>
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
                <p>Email: fisayooso@gmail.com</p>
                <p>Phone: +2348111319649</p>
            </div>

            <div className='mt-5'>
            <div className="socialmedia">
            <h5>Social Media</h5>
                <a href="https://www.facebook.com/fisayo.oso?mibextid=ZbWKwL" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                <a href="www.instagram.com/carolinecouture_ng/" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                <a href=" " className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                <a href="https://www.linkedin.com/in/fisayo-oso-356ab116a" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                <a href=" " className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
            </div>
            </div>
        </article>
        
    </div>
  )
}

export default TourFisayo