import React from 'react';
import face from './Img/portfolio face pic complete.png';


const Hero = () => {
    return (
        <div className='hero-container'>
           <div className='face-container'>
           <img className = "face" src={face} alt= ''/>
           </div>

           <div className='me-container'>
           <h1 className='me-title'>Creative</h1>
           <h2 className='me-title2'>Full Stack Developer</h2>
           <p className='me-description'>I'm a passionate and dedicated web developer,
                always seeking new challenges and opportunities to 
                expand my knowledge and skills in the field. </p>
            </div>

        </div>
    );
}

export default Hero;
