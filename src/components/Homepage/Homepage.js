import React, { useState } from 'react';
import './Homepage.css'
import Typing from '../Typing/typing';
import bitmoji from '../../assets/bitmoji-3.png'

function HomepageLinks({done}) {
    const about = <a className ='link' href='#'>About Me</a>
    const resume = <a className ='link' href='#'>Resume</a>
    const projects = <a className ='link' href='#'>Projects</a>
    const contact = <a className ='link' href='#'>Contact</a>

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
        "Speaking of..", "This site is built by yours truly.",
        "Check out more by clicking one of the options below."
      ]
    
    const [done, setDone] = useState(false);
    return(
        <div className='homepageItems'>
            <div className='textContainer'>
                <Typing text={homepageText} setDone = {setDone} done={done} />
                <HomepageLinks className='HomepageButtons' done={done} />
            </div>
            <img src={bitmoji} className='bitmoji' />
        </div>
    );
    
};

export default Homepage