import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
      <Link to={'/'}>
    <a class="navbar-brand bg-white" href="#">QUIZAPP</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <Link to={'/CreateQuestion'} >
                    <a class="nav-link bg-white" href="#">Create Quiz</a>
                    </Link> 

          <Link to={'/editQuestion'} >          
        <a class="nav-link bg-white" href="#">Edit Quiz</a>
        </Link> 
 
      </div>
    </div>
  </div>
</nav>
        </>
    )
}


export default Navbar;