import React from 'react';
import './homepage.css';
import bitmoji from '../../assets/bitmoji-3.png';
import { useSpring, animated } from 'react-spring';


function HomepageLinks() {
    const about = <a className ='link' href='/about'>About Me</a>
    const resume = <a className ='link' href='/resume'>Resume</a>
    const projects = <a className ='link' href='/projects'>Projects</a>
    const contact = <a className ='link' href='/contact'>Contact</a>


    return(
        <div className='linkContainer'>
            {about}
            {resume}
            {projects}
            {contact}
        </div>
    );

   
};
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(4000px) rotateX(${x}deg) rotateY(${y}deg) scale(1)`

function Homepage() {
    
      
    const text = "Hi I'm Nayeon! \n I make cool stuff with codes. \n Including this site! \n Check out more by \n clicking one of the options below."
    const [props, setProps] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50}}))
    return(
        <div className='homeContainer'>
                <animated.div className='homepageItems' onMouseMove={({clientX: x, clientY: y}) => setProps({xys: calc(x,y)})} 
                onMouseLeave={() => setProps({xys: [0, 0, 1]})} 
                style={{transform: props.xys.to(trans)}}>
                    <div className='textContainer'>
                        <div className='whiteBox'/>
                        <p className='text'>{text}</p>
                        <HomepageLinks className='HomepageButtons'  />
                    </div>
                    <img src={bitmoji} className='bitmoji' />
                </animated.div>
        </div>
        
    );
    
};

export default Homepage