import React from 'react';
import './estilos.css'

const Acordeon = () => {
	return (
           <div class="accordion col-md-4 align-center mx-auto" id="accordionExample">

  <div class="accordion-item rounded-5">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Personal information
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p><strong>Name:</strong> Ulises Andres Marin Quinteros.</p><p><strong>Age:</strong> 20.</p><p><strong>Nationality:</strong> Argentina.</p><p><strong>Date of Birth:</strong> 20/12/2001.</p>
      </div>
    </div>
  </div>

  <div class="accordion-item rounded-5">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Educational information
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p><strong>High school:</strong> Escuela Normal Superior Dr. Alejandro Carbo.</p>
        <p><strong>Bootcamp:</strong> Henry - Full Stack Developer.</p>
      </div>
    </div>
  </div>


  <div class="accordion-item rounded-5">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Skills
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p><strong>Programming:</strong> HTML, JAVASCRIPT, CSS, REACT.JS, REACT-REDUX, BOOTSTRAP, CHACRA UI, NODE.JS, MySQL, BABYLON.JS.</p>
        <p><strong>Design:</strong> Photoshop, Krita, Blender 3D.</p>
      </div>
    </div>
  </div>

   <div class="accordion-item rounded-5">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        About me
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>I'm a Full stack developer specializing in Front-end.</p>
        <p>I have serious passion for UI effects, animations and</p> <p>creating intuitive, dynamic user experiences.</p>
        <a href="#" className="btn btn-secondary rounded-5 bg-dark" target="_blank">Know more</a>

      </div>
    </div>
  </div>


</div>
		);
}

export default Acordeon;