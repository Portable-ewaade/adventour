import React from 'react'

const Navbar = () => {
  return (
    <div className="nav-bg">
         <div className='container '>
     <nav class="navbar navbar-expand-lg text-black pt-2">
        <div class="container-fluid ">
        <a class="navbar-brand fs-2 mr-5 text-black" href="/">Ekiti Tour Web</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2  mb-lg-0 fs-medium fw-medium ">
                    <li class="nav-item mx-2 ">
                    <a class="nav-link text-black active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item mx-2 ">
                    <a class="nav-link text-black" href="/">About</a>
                    </li>
                    <li class="nav-item mx-2 ">
                    <a class="nav-link text-black" href="/gallery">Gallery</a>
                    </li>
                    <li class="nav-item mx-2 ">
                    <a class="nav-link text-black " href="/">Tourguides</a>
                    </li>
                    <li class="nav-item mx-2 ">
                    <a class="nav-link text-black " href="/">Review</a>
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
  )
}

export default Navbar