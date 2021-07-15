import React, { useState } from 'react';
import './homepage.css'
import Typing from '../Typing/typing';
import bitmoji from '../../assets/bitmoji-3.png'

function HomepageLinks({done}) {
    const about = <a className ='link' href='/about'>About Me</a>
    const resume = <a className ='link' href='/resume'>Resume</a>
    const projects = <a className ='link' href='/projects'>Projects</a>
    const contact = <a className ='link' href='/contact'>Contact</a>

    if (done) {
        return(
            <div className='linkContainer'>
                {about}
                {resume}
                {projects}
                {contact}
            </div>
        );
    }
    return null;
};

// function EmojiRain() {
//     const emoji = require('emoji-dictionary');
//     return(
//         <div className='falldownContainer'>
//             <span>{emoji.getUnicode('dna')}</span>
//         </div>
//     );
// }

function Homepage() {
    
    const homepageText = [
        "Hi I'm Nayeon!", "I make cool stuff with codes.",
        "Including this site!",
        "Check out more by",
        "clicking one of the options below."
      ]
    
    const [done, setDone] = useState(false);
    return(
        <div className='homeContainer'>
            <div className='homepageItems'>
                <div className='textContainer'>
                    <div className='whiteBox'/>
                    <Typing text={homepageText} setDone = {setDone} done={done} />
                    <HomepageLinks className='HomepageButtons' done={done} />
                </div>
                <img src={bitmoji} className='bitmoji' />
            </div>
        </div>
        
    );
    
};

export default Homepage