import React from 'react';
import './IDENTIFICATION.css'
import perfil from '../assets/perfil.png'
import code from '../assets/code.png'

const Hero = () => {
	return (
  <div class="card-bodi col-md-4 mx-auto">
    <h5 class="title"><img className="img rounded-5" src={perfil} alt=""/> IDENTIFICATION CARD</h5>
    <p class="card-subtitle mb-2 text-muted">Ulises Andres Marin Quinteros</p>
    <p class="card-subtitle mb-2 text-muted">Full Stack Developer</p>
    <p class="card-subtitle mb-2 text-muted">20/12/2001</p>
    <p class="card-text"></p>
    <a href="#" class="card-link">About</a>
    <img className="code rounded-5 align-left" src={code} alt=""/>
  </div>


		);
}

export default Hero;

