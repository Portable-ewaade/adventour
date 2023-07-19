import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <section>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4><a href="#">Home</a></h4>
                        
                            <p className="list"><a href="#" className='nav-link'>Testimonial</a></p>
                            <p className="list"><a href="#">Destination</a></p>
                        
                    </div>
                    <div className='col-md-3'>
                        <h4><a href="#">About Us</a></h4>
                        
                            <p className="list"><a href="#">Tour Guide</a></p>
                            <p className="list"><a href="#">Gallery</a></p>
                            <p className="list"><a href="#">Events</a></p>
                            <p className="list"><a href="#">Articles</a></p>
                        
                    </div>
                    <div className='col-md-3'>
                        <h4><a href="#">Our Team</a></h4>
                        
                            <p className="list"><a href="#">Subscribe</a></p>
                            <p className="list"><a href="#">Contact Us</a></p>
                            <p className="list"><a href="#">Leave a review</a></p>
                        
                    </div>
                    <div className='col-md-3'>
                        <h4><a href="#">Follow Us On</a></h4>
                        <div className="socialmedias">
                            <a href="#" className="fa-brands fa-facebook" style={{color: '#3B5998'}}></a>
                            <a href="#" className="fa-brands fa-instagram" style={{color: '#ef6d35'}}></a>
                            <a href="#" className="fa-brands fa-twitter" style={{color: '#43a2eb'}}></a>
                            <a href="#" className="fa-brands fa-linkedin" style={{color: '#007bb5'}}></a>
                            <a href="#" className="fa-brands fa-whatsapp" style={{color: '#019615'}}></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footercontent">
                <div className="footerrow">
                    <div className="footer-col">
                        <h4><a href="#">Home</a></h4>
                        
                            <p className="list"><a href="#">Testimonial</a></p>
                            <p className="list"><a href="#">Destination</a></p>
                        
                    </div>
                    <div className="footer-col">
                        <h4><a href="#">About Us</a></h4>
                        
                            <p className="list"><a href="#">Tour Guide</a></p>
                            <p className="list"><a href="#">Gallery</a></p>
                            <p className="list"><a href="#">Events</a></p>
                            <p className="list"><a href="#">Articles</a></p>
                        
                    </div>
                    <div className="footer-col">
                        <h4><a href="#">Our Team</a></h4>
                        
                            <p className="list"><a href="#">Subscribe</a></p>
                            <p className="list"><a href="#">Contact Us</a></p>
                            <p className="list"><a href="#">Leave a review</a></p>
                        
                    </div>
                    <div className="footer-col">
                        <h4><a href="#">Follow Us On</a></h4>
                        <div className="socialmedias">
                            <a href="#" className="fa-brands fa-facebook" style={{color: '#3B5998'}}></a>
                            <a href="#" className="fa-brands fa-instagram" style={{color: '#ef6d35'}}></a>
                            <a href="#" className="fa-brands fa-twitter" style={{color: '#43a2eb'}}></a>
                            <a href="#" className="fa-brands fa-linkedin" style={{color: '#007bb5'}}></a>
                            <a href="#" className="fa-brands fa-whatsapp" style={{color: '#019615'}}></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer