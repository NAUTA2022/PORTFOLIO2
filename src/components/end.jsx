import React from 'react';
import './estilos.css'
import image1 from '../assets/instagram.png'
import image2 from '../assets/correo.png'
import image3 from '../assets/telefono.png'
import image4 from '../assets/github.png'

const End = () => {
	return (
<div class="todo" align="center">

<p align="center">
All rights reserved.
</p>
<div class="final02">
<p align="center">
© 2022 Ulises Marin
</p>
</div>
<a href="https://www.instagram.com/uli.a.marin/">
<img className="mfoto rounded-5 align-left" src={image1} alt=""/>
</a>

<a href="mailto:andresquinteros2017@gmail.com">
<img className="mfoto rounded-5 align-left" src={image2} alt=""/>
</a>

<a href="https://api.whatsapp.com/qr/ZRRUTMZLWKXPM1?autoload=1&app_absent=0">
<img className="mfoto rounded-5 align-left" src={image3} alt=""/>
</a>

<a href="https://github.com/NAUTA2022">
<img className="mfoto rounded-5 align-left" src={image4} alt=""/>
</a>
</div>

		);
}

export default End;
