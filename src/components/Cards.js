import React from 'react';
import Card from './Card';
import './estilos.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const cards = [

{
	id: 3,
	title: 'Projects',
	image: image3,
	url: '#',
	text: 'Press "Go" to see more Projects'
},

];

const Cards = () => {
	return (
<div className="container">
<div className="row">

{
	cards.map(card =>(
                      <div className="col-md-4 mx-auto" key={card.id}>
                      <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                      </div>
		     )       )
}

</div>
</div>
);
}

export default Cards;