import React from 'react'

const TourRacheal = () => {
  return (
    <div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <h1 className='fw-bold display-3'>Meet Our<br/><strong className='text-color'>Tour Guides</strong></h1>
                </div>
                <div className="col-md-6">
                    <img src="../../../assets/racheal.png" className='img-fluid rounded-3' alt="..."/>
                </div>
            </div>
        </div>
        <div className='p-3 p-md-5'>
            <h6 className='fs-3 fw-light'>Name: Adeleke Adekemi Racheal</h6>
            <h6 className='fs-3 fw-light'>Languages: English, Yoruba</h6>
            <h6 className='fs-3 fw-light'>Location: Ikogosi, Ekiti State, Nigeria</h6>
            <h6 className='fs-3 fw-light'>Years of Experience: 5 years.</h6>
        </div>
    
        <article className='m-3 p-md-5 fs-medium'>
            <div>
                <h3>About Me:</h3>
                <p>Hello, explorers! I'm Adekemi, your passionate tour guide to the wonders of Ekiti State. With eight years of experience guiding visitors through the diverse tourist centers of this region, I am committed to providing you with an immersive and unforgettable experience during your journey.</p>
            </div>
            <div className='mt-5'>
                <h3>Specialties:</h3>
                <ul>
                    <li><p>Nature and Adventure: As a nature enthusiast, I'll lead you through the enchanting forests, awe-inspiring waterfalls, and scenic landscapes that make Ekiti State a haven for adventurers and nature loves alike.</p></li>
                    <li><p>Cultural Immersion: Immerse yourself in the vibrant culture of Ekiti as we visit traditional villages, attend local festivals, and interact with warm and welcoming communities.</p></li>
                    <li><p>Historical Insights: Discover the historical significance of Ekiti through visits to ancient landmarks, historical sites, and museums that offer glimpses into the region's storied past.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h3>Services Offered:</h3>
                <ul>
                    <li><p>Guided Tours: Join a group tour led by me, where I will share intriguing stories, geological knowledge, and cultural insights while exploring the enchanting surroundings of Ikogosi Warm Spring.</p></li>
                    <li><p>Private Tours: Enjoy a personalized tour tailored to your interests, allowing you to explore at your own pace while receiving undivided attention and in-depth explanations.</p></li>
                    <li><p>Educational Programs: Perfect for schools and educational institutions, these programs provide students with an interactive and informative experience, combining geology, culture, and environmental awareness.</p></li>
                </ul>
            </div>
            <div className='mt-5'>
                <h3>Tourist Center Covered</h3>
                <ol>
                    <li><p>Arinta Waterfalls: Trek through the picturesque forests to witness the impressive cascade of Arinta Waterfalls, a perfect spot for nature lovers and hikers.</p></li>
                    <li><p>Ikogosi Warm Spring: Experience the fascinating convergence of warm and cold springs, and explore the tranquil surroundings of this geological wonder.</p></li>
                    <li><p>Olosunta Hills: Hike to the summit of Olosunta Hills, where panoramic views of the landscape reward your efforts.</p></li>
                </ol>
            </div>
            <div className='mt-5'>
                <h3>Contact Information</h3>
                <p>E-mail: adekemiracheal97@gmail.com</p>
                <p>Phone: +2348167095747</p>
            </div>

            <div className='mt-5'>
            <div className="socialmedia">
            <h3>Social Media</h3>
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

export default TourRacheal