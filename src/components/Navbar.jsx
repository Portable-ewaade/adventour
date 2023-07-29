import React from 'react'

const Navbar = () => {
  return (
    <div>
           <div className="nav-bg">
         <div className='container '>
     <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../../../assets/logo.png" alt="logo image"  className='img-fluid col-6' />
        </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-md-5 mb-2 mb-lg-0 fs-medium fw-medium ">
                    <li class="nav-item mx-md-4 ">
                    <a class="nav-link  active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item mx-md-4 ">
                    <a class="nav-link text-black" href="/aboutus">About</a>
                    </li>
                    <li class="nav-item mx-md-4 ">
                    <a class="nav-link " href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item mx-md-4 ">
                    <a class="nav-link text-black " href="/tour">Tourguides</a>
                    </li>
                    <li class="nav-item mx-md-4 ">
                    <a class="nav-link text-black " href="/review">Review</a>
                    </li>
                </ul>
                
                <a href="/explore">
                    <button class="btn btn-bg text-white fw-medium py-2 px-4" >Explore</button>
                </a>
            </div>
        </div>
    </nav>
    </div>
    </div>
    </div>
   
  )
}

export default Navbar