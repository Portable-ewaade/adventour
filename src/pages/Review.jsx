import React from 'react'
// import './Review.css'

const ValReview = () => {
  return (
    <div>
      <section style={{
            backgroundImage: "url('../../../assets/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
             <div className='container mb-5'>
            <div className='row'>
                <div className='col-md-6 ps-md-5 mt-md-5'>
                    <h1 className='fs-xxxlarge ps-lg-5 pt-md-3 pt-4 mt-md-5'>Drop your review <br className='d-none d-md-block'/> <span className='text-color'>and feedback</span></h1>
                    
                </div>
                <div className='col-md-6 mt-md-5 mt-4'>
                      <img src='../../../assets/dating-app.png' className='img-fluid' alt='...'/>
                </div>
            </div>
             </div>
        </section>
      
      <div className="container ">
        <div className='text-center '>
          <article className='mb-3'>
            <h1>Get in Touch</h1>
            <p className='fs-5'>We would love to hear from you! If you have any comments or suggestions about <br className='d-none d-md-block'/>our website or our tour guides, please don't hesitate to get in touch. We are always <br className='d-none d-md-block'/>looking for ways to improve and make your travel experience even better.</p>
          </article>
        </div>
        <div className='mt-5'>
          <form action='/reviews.php' autoComplete='on' className='pt-5 '>
            <div class="col-md-6">
              <label for="inputFullname" class="form-label fs-3">Full Name</label>
              <input type="text" class="form-control border-1" id="fullName" placeholder="Input your first name" style={{height: '60px'}} required/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputemail" class="form-label fs-3">Email Address</label>
              <input type="email" class="form-control border-1" id="emailAddress" placeholder="Input your e-mail" style={{height: '60px'}} required/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputlocation" class="form-label fs-3">Location</label>
              <input type="text" class="form-control border-1" id="location" placeholder="Input your location" style={{height: '60px'}} />
           </div>
           <div className='col-md-6 mt-3'>
            <label for='inputphonenumber' className='form-label fs-3'>Phone Number</label>
           <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">+234</span>
              <input type="number" min={11} class="form-control border-1" id="phoneNumber" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" style={{height: '60px'}}/>
            </div>
            </div>
            <div class="col-md-6 mt-3">
              <label for="inputlocation" class="form-label fs-3">Tourist Center you visited</label>
              <input type="text" class="form-control border-1" id="touristCenterVisited" placeholder="Your answer" style={{height: '60px'}}/>
           </div>
           <div class="col-md-6 mt-3">
              <label for="inputreview" class="form-label fs-3">Review</label>
              <textarea class="form-control border-1" id="review" rows="10" required></textarea>
            </div>
           <div className='mt-3 mb-3'>          
              <button type="submit" class="btn btn-danger w-auto">Submit</button>
            </div>
          </form>
        </div>
        <div>
          {/* <div className="socialmedia mt-5 mb-5">
                <h4>Social Media</h4>
                <a href="/" className="fa-brands fa-facebook" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-instagram" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-twitter" style={{color: '#3c3c3c'}}></a>
                <a href="/" className="fa-brands fa-linkedin" style={{color: '#464500'}}></a>
                <a href="/" className="fa-brands fa-whatsapp" style={{color: '#464500'}}></a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ValReview




// import { useState } from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const Review = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('mario');
//     const [isPending, setIsPending] = useState(false);
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author}

//         setIsPending(true)

//         fetch('https://documenter.getpostman.com/view/27418776/2s946o399t', {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log('new blog added')
//             setIsPending(false);        
//             history.go(-1)
//             history.push('/');
//         });

//     }

//     return (
//         <div className="review">
//             <h2>Add a New Blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label> Blog title:</label>
//                 <input 
//                 type="text"
//                 required
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label> Blog body:</label>
//                 <textarea
//                 required
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//                 ></textarea>
                
//                 <label> Blog author:</label>
//                 <select value={author} onChange={(e) => setAuthor(e.target.value)}>
//                     <option value="mario">mario</option>
//                     <option value="yoshi">yoshi</option>
//                 </select>
//                 { !isPending && <button>Add Blog</button>}
//                 { isPending && <button disabled>Adding blog...</button>}
                
//             </form>
//         </div>
//      );
// }
 
// export default Review





// import React, { useState } from 'react';
// import axios from 'axios';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     locationVisited: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
//       const response = await axios.post('https://documenter.getpostman.com/view/27418776/2s946o399t', formData);
//       console.log(response.data); // Log the response from the backend if needed

//       setSubmitted(true);
//     } catch (error) {
//       console.error(error);
//       // Handle error scenario if required
//     }
//   };

//   return (
//     <section className="pt-2">
//       <div className="container">
//         <div className="text-center">
//           <h5 className="text-color mt-5">What our tourists say</h5>
//           <h2 className="mb-4">Feedback from our various tourists</h2>
//         </div>
//         <div className="position-relative">
//           <div className="pt-5 mt-4">
//             {submitted ? (
//               <div className="alert alert-success text-center" role="alert">
//                 Thank you for your review!
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="fullName" className="form-label">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="locationVisited" className="form-label">
//                     Location Visited
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="locationVisited"
//                     name="locationVisited"
//                     value={formData.locationVisited}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="message" className="form-label">
//                     Message
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </form>
//             )}
//           </div>
//           <div className="circle position-absolute mt-5 top-0 start-50 translate-middle">
//             <h2 className="pt-4 fs-xxxlarge">SO</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeedbackForm;
