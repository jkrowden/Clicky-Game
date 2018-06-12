import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Clicky Game</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://jrowden.herokuapp.com">Portfolio</a>
      </li>
    </ul>

  </div>
</nav>

)

export default Navbar;