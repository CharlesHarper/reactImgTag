//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Imgcom from './component/ImgComponent/Imgcom.js';

//render your react application
ReactDOM.render(
    <Imgcom 
        src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/b3/65/f8/b365f8f5-bf3e-30a3-e8f5-014b7dc190d4/logo_gsa_ios_color-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/246x0w.jpg"
        width ="500px" 
        height = "200px"
        onClick = {()=>alert("hello") }
        className ="btn btn-danger"/>,
    document.querySelector('#app')
);