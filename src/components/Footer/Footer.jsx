import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    // <section>
    //     <div className='container-fluid footer'>
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-3 col-sm-2">
    //                     <img src="../../../assets/adventour.png" className='img-fluid' alt="logo" />
    //                 </div>
    //             <div className='col-6 mt-5'>
    //                     <div className='col-md-2 menu text-white'>
    //                         <h4><a href="#" className='nav-link'>Home</a></h4>
                        
    //                         <p className="li2t"><a href="/" className='nav-link'>Testimonial</a></p>
    //                         <p><a href="/"className='nav-link'>Destination</a></p>
                        
    //                     </div>
    //                     <div className='col-md-2 menu text-white'>
    //                         <h4><a href="#" className='nav-link'>About Us</a></h4>
                        
    //                         <p><a href="/tour" className='nav-link'>Tour Guide</a></p>
    //                         <p><a href="#" className='nav-link'>Gallery</a></p>
    //                         <p className="li2t"><a href="#" className='nav-link'>Events</a></p>
    //                         <p><a href="#"className='nav-link'>Articles</a></p>
    //                     </div>
    //                     <div class="w-100 d-none d-block"></div>
    //                     <div className='col-md-2 menu text-white'>
    //                         <h4><a href="#" className='nav-link'>Our Team</a></h4>
    //                         <p className="li2t"><a href="#" className='nav-link'>Subscribe</a></p>
    //                         <p><a href="#" className='nav-link'>Contact Us</a></p>
    //                         <p><a href="/vreview" className='nav-link'>Leave a review</a></p>
    //                     </div>
    //                     <div className='col-md-2'>
    //                         <h4><a href="#" className='nav-link text-white'>Follow Us On</a></h4>
    //                     <div className="socialmedias">
    //                         <a href="/" className="fa-brands fa-facebook" style={{color: '#fff'}}></a>
    //                         <a href="/" className="fa-brands fa-instagram" style={{color: '#fff'}}></a>
    //                         <a href="/" className="fa-brands fa-twitter" style={{color: '#fff'}}></a>
    //                         <a href="/" className="fa-brands fa-linkedin" style={{color: '#fff'}}></a>
    //                         <a href="/" className="fa-brands fa-whatsapp" style={{color: '#fff'}}></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div>
    //                 <hr class="border border-white border-2 "></hr>
    //                 <h6 className='rightreserved'>&copy; Adventour, 2023. All Rights Reserved</h6>
    //             </div>
    //         </div>

    //         </div>
    //     </div>
    // </section>



    <section>
        <div className='container-fluid footer'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-3 text-center'>
                        <img src="../../../assets/adventour.png" className="img-fluid col-6" alt="logo" />
                    </div>
                    <div className='col-6 col-md-2 menu text-white'>
                        <h4><a href="#" className='nav-link'>Home</a></h4>
                        
                            <p><a href="/" className='nav-link'>Testimonial</a></p>
                            <p><a href="/"className='nav-link'>Destination</a></p>
                        
                    </div>
                    <div className='col-6 col-md-2 menu text-white'>
                        <h4><a href="#" className='nav-link'>About Us</a></h4>
                        
                            <p><a href="/tour" className='nav-link'>Tour Guide</a></p>
                            <p><a href="#" className='nav-link'>Gallery</a></p>
                            <p><a href="#" className='nav-link'>Events</a></p>
                            <p><a href="#"className='nav-link'>Articles</a></p>
                    </div>
                    <div class="w-100 d-none d-block"></div>
                    <div className='col-6 col-md-2 menu text-white'>
                        <h4><a href="#" className='nav-link'>Our Team</a></h4>
                            <p><a href="#" className='nav-link'>Subscribe</a></p>
                            <p><a href="#" className='nav-link'>Contact Us</a></p>
                            <p><a href="/vreview" className='nav-link'>Leave a review</a></p>
                    </div>
                    <div className='col-6 col-md-3'>
                        <h4><a href="#" className='nav-link text-white'>Follow Us On</a></h4>
                        <div className="socialmedias">
                            <a href="/" className="fa-brands fa-facebook" style={{color: '#fff'}}></a>
                            <a href="/" className="fa-brands fa-instagram" style={{color: '#fff'}}></a>
                            <a href="/" className="fa-brands fa-twitter" style={{color: '#fff'}}></a>
                            <a href="/" className="fa-brands fa-linkedin" style={{color: '#fff'}}></a>
                            <a href="/" className="fa-brands fa-whatsapp" style={{color: '#fff'}}></a>
                        </div>
                    </div>
                </div>
                    <hr class="border border-white border-2 "></hr>
                    <h6 className='rightreserved'>&copy; Adventour, 2023. All Rights Reserved</h6>
            </div>
        </div>
    </section>
  )
}
export default Footer