import React, {useState} from 'react';
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

function toggle(effect, enableEffect, setProps) {
    if (effect){
        setProps({xys: [0, 0, 1]})
        enableEffect(!effect)
    }
    else{
        enableEffect(!effect)
    }
}
function Homepage() {
    
    const [effect, enableEffect] = useState(false);
      
    const text = "Hi I'm Nayeon! \n I make cool stuff with codes. \n Including this site! \n Check out the pages below for more."
    const [props, setProps] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50}}))
    
    return(
        <div className='homeContainer' onClick={()=>{toggle(effect, enableEffect, setProps)}}>
            <animated.div className='homepageItems'  onMouseMove={effect ? ({clientX: x, clientY: y}) => setProps({xys: calc(x,y)}): null} 
                onMouseLeave={effect ? () => setProps({xys: [0, 0, 1]}) : null} 
                style={{transform: props.xys.to(trans)}}>
                    <div className='textContainer'>
                        <div className='whiteBox'/>
                        <p className='text'>{text}</p>
                        <HomepageLinks className='HomepageButtons'  />
                        
                    </div>
                    <img src={bitmoji} className='bitmoji' alt="icon" />
            </animated.div>
            <p className='animationText'>PC animations can be enabled/disabled by clicking</p>
        </div>
        
    );
    
};



export default Homepage