import React from 'react';

const Card = ({title, imageSource, url, text}) => {
	return (

<div className="card rounded-5 text-center text-light animate__animated animate__flipInX animate__delay: 3s;">
<div>
<img className="foto rounded-5" src={imageSource} alt=""/>
</div>
<h5 className="card-title">{title}</h5>
<p className="card-text text-secondary">{text}</p>
<a href={url} className="btn btn-secondary rounded-5 bg-dark" target="_blank">Go</a>
</div>

		);
}

export default Card;