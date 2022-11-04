import React, {useState} from 'react';
import bg from '../../assets/toronto.jpg';
import resumepdf from '../../assets/resume.pdf';
import './home.css';
function HomepageLinks() {
    const resume = 
        <a className ='pageLink' href={resumepdf} target="_blank">
            <div className='linkdiv'>
                <p className='fas fa-file pageIcon'/>
                <p>Resume</p>
            </div>
        </a>
    const github = 
        <a className ='pageLink'  href='//www.github.com/hyunnaye/'>
            <div className='linkdiv'>
                <p className='fab fa-github-square pageIcon'/>
                <p>GitHub</p>
            </div>
        </a>
    const linkedIn = 
        <a className ='pageLink' href='//www.linkedin.com/in/nayeonhyun'>
            <div className='linkdiv'>
                <p className='fab fa-linkedin pageIcon'/>
                <p>LinkedIn</p>
            </div>
        </a>
    const email = 
        <a className ='pageLink'  href='mailto:nayeon01@hotmail.com'>
            <div className='linkdiv'>
                <p className='fas fa-envelope-square pageIcon'/>
                <p>Email</p>
            </div>
        </a>
    return(
        <div className='linkContainer'>
            {resume}
            {email}
            {linkedIn}
            {github}
        </div>
    );
};

function Home() {
    return(
        <div className='homeContainer'>
            <div className='imageContainer'>
                <img src={bg} className='bg'/> {/* Image credit: @scottwebb on Unsplash */}
            </div>
            <div className='header'>
                <h1 className='title'>Nayeon Hyun</h1>
                <h4 className='position'>Software Developer</h4>
                <HomepageLinks />
            </div>
        </div>
    );
};

export default Home;