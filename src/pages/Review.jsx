import React from 'react'
// import './Review.css'

const ValReview = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mt-5'>
            <h1 className='fw-bold display-3'>Drop your<br/>comments and<br/>suggestions</h1>
          </div>
          <div className='col-md-6'>
            <img src='../../../assets/dating-app.png' className='img-fluid' alt='...'/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='text-center'>
          <h1 className='display-4 fw-semibold'>Get in Touch</h1>
          <article className='mb-3'>
            <h6 className='fs-3'>We would love to hear from you! If you have any comments or suggestions about<br />our website or our tour guides, please don't hesitate to get in touch. We are always<br/>looking for ways to improve and make your travel experience even better.</h6>
          </article>
        </div>
        <div className='mt-5'>
          <form action='/reviews.php' autoComplete='on' className='pt-5'>
            <div class="col-md-6">
              <label for="inputFullname" class="form-label fs-3 fw-semibold">Full Name</label>
              <input type="text" class="form-control border-3" id="fullName" placeholder="Input your first name" style={{height: '60px'}} required/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputemail" class="form-label fs-3 fw-semibold">E-mail Address</label>
              <input type="email" class="form-control border-3" id="emailAddress" placeholder="Input your e-mail" style={{height: '60px'}} required/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputlocation" class="form-label fs-3 fw-semibold">Location</label>
              <input type="text" class="form-control border-3" id="location" placeholder="Input your location" style={{height: '60px'}} />
           </div>
           <div className='col-md-6 mt-3'>
            <label for='inputphonenumber' className='form-label fs-3 fw-semibold'>Phone Number</label>
           <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">+234</span>
              <input type="number" min={11} class="form-control border-3" id="phoneNumber" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" style={{height: '60px'}}/>
            </div>
            </div>
            <div class="col-md-6 mt-3">
              <label for="inputlocation" class="form-label fs-3 fw-semibold">Tourist Center you visited</label>
              <input type="text" class="form-control border-3" id="touristCenterVisited" placeholder="Your answer" style={{height: '60px'}}/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputreview" class="form-label fs-3 fw-semibold">Review</label>
              <textarea class="form-control border-3" id="review" rows="10" required></textarea>
            </div>
           <div className='mt-3 mb-3'>          
              <button type="submit" class="btn btn-danger w-auto">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <div className="socialmedia mt-5 mb-5">
                <h4>Social Media</h4>
                <a href="/" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                <a href="/" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValReview
