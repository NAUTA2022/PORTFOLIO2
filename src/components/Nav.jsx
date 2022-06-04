import React from 'react';
import './estilos.css'



const Nav = () => {
	return (


<nav>
  <ul class="menu" >
    <li class="item"><a href="index.html">Home </a></li>
    <li class="item"><a href="about.html">About </a></li>
    <li class="item"><a href="https://www.linkedin.com/in/ulises-marin/">LinkedIn </a></li>
    <li class="item"><a href="projects.html">Projects </a></li>
    <li class="item"><a href="formulario.html">Contact</a></li>
    <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
  </ul>
</nav>
		);
}

export default Nav;