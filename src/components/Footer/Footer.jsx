import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <section>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row mt-2'>
                    <div className='col-12 col-md-3 text-center'>
                        <img src="../../../assets/adventour.png" className="img-fluid col-6" alt="logo" />
                    </div>
                    <hr className='border border-white border-2 d-md-none d-block'/>
                    <div className='col-6 col-md-2 menu text-white'>
                        <h4><a href="/" className='nav-link'>Home</a></h4>
                        
                        <p><a href="/" className='nav-link'>Testimonial</a></p>
                        <p><a href="/explore"className='nav-link'>Destination</a></p>
                        
                    </div>
                    <div className='col-6 col-md-2 menu text-white'>
                        <h4><a href="/aboutus" className='nav-link'>About Us</a></h4>
                        
                        <p><a href="/tour" className='nav-link'>Tour Guide</a></p>
                        <p><a href="/gallery" className='nav-link'>Gallery</a></p>
                        <p><a href="#" className='nav-link'>Events</a></p>
                        <p><a href="#"className='nav-link'>Articles</a></p>
                    </div>
                    <div class="w-100 d-none d-block mt-5"></div>
                    <hr className='border border-white border-2 d-md-none d-block'/>
                    <div className='col-6 col-md-2 menu text-white'>

                        <h4><a href="/tour" className='nav-link'>Our Team</a></h4>
                            <p><a href="/#subscribe" className='nav-link'>Subscribe</a></p>
                            <p><a href="#" className='nav-link'>Contact Us</a></p>
                            <p><a href="/review" className='nav-link'>Leave a review</a></p>
                    </div>
                    <div className='col-6 col-md-3'>
                        <h4><a href="#" className='nav-link text-white'>Follow Us On</a></h4>
                        <div className="socialmedias">
                            <a href="/" className='smedia'> <i className="fa-brands fa-facebook"></i>   Facebook</a>
                            <a href="/" className='smedia'><i className="fa-brands fa-instagram"></i>   Instagram</a>
                            <a href="/" className='smedia'><i className="fa-brands fa-twitter"></i>   Twitter</a>
                            <a href="/" className='smedia'><i className="fa-brands fa-linkedin"></i>   LinkedIn</a>
                        </div>
                    </div>
                </div>
                <hr className='border border-white border-2 d-md-none d-block' />
                <div className="container mt-3">
                    <div className="col-6 text-white">
                        <h5 className='fw-normal'>For questioning and <br className='d-none d-md-block'/>booking, please contact:</h5>
                        <h5 className='fw-normal'>E-mail : info@adventour.com</h5>
                        
                    </div>
                </div>
            </div>
            <div>
                <hr class="border border-white border-2 "></hr>
                <h6 className='rightreserved'>&copy; Adventour, 2023. All Rights Reserved</h6>
            </div>
        </div>
    </section>
  )
}

export default Footer