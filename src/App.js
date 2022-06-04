import React from 'react';
import './App.css';
import Hero from './components/hero';
import Acordeon from './components/acordeon';
import Cards from './components/Cards';
import Nav from './components/Nav';
import End from './components/end';


const App = () => {
return (
  <div className="App">
        <div className="container">

                <div className="row">
                     <Nav/>
                </div>

                <div className="row">
                   <Hero />
                   </div>
                

                <div className="text">
                <p>SCROLL FOR MORE</p>
                <p className="p1">👇</p>
                </div>

                <div className="row">
                     <Acordeon />
                </div>

                <div className="text">
                <a href="#" target="_blank">
                <p className="p2">📄</p>
                <p className="btn btn-secondary rounded-5 bg-dark">Download CV</p></a>
                </div>

                <div className="row">
                     <Cards/>
                </div>     

                <div className="row">
                     <End/>
                </div>            
                </div>
       
  </div>
  );

}

export default App;
