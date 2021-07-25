import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import {Container, Row, Col, Card, Collapse} from 'react-bootstrap';
import './experience.css';
import cookout from '../../assets/cookout.png';
import neurotechuoft from '../../assets/neurotechuoft.jpg';
import uoftlaw from '../../assets/uoftlaw.jpg';
import cause from '../../assets/cause.jpeg';
import woodsworth from '../../assets/woodsworth.jpeg';
import wrisc from '../../assets/wrisc.png';
import uoft from '../../assets/uoft.png';


const Position = (props) => {
    return(
        <div className='h-100'>
            <Card style={{ width: '80%'}} className='card h-100'>
                <Card.Img variant="top" src={props.img}/>
                <Card.Body className='cardBody h-100'>
                    <Card.Title className='cardTitle'>{props.title}</Card.Title>
                    <Card.Text className='cardCompany'>{props.company}</Card.Text>
                    <Card.Text className='cardDuration'>{props.duration}</Card.Text>
                    <Card.Text style = {{height: props.height}}className='cardDescription h-100'>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const TechExperience = (props) => {
    return(
    <>
        <div className={props.techExp ? 'dropdown' : 'dropdown border border-1 border-secondary'}  onClick={() => props.setTechExp(!props.techExp )}>
            <h2 className='header'>Technical Experience</h2>
            <i className={props.techExp  ? "fas arrow fa-chevron-up" : "fas arrow fa-chevron-down"}></i>
        </div>
        <Collapse in={props.techExp } style={{width: '100%'}}>
            <Container>
                <Row className='row' style={{minHeight: 646}}>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Frontend Web Developer' img={neurotechuoft} company='Neurotech UofT' duration='July 2021 - Present'
                        description='Sole front-end web developer for NeurotechUofT. Use of ReactJS and Bootstrap.' height='240px' /> 
                    </Col>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Mobile App Developer' img={cookout} company='Cookout' duration='May 2021 - Present'
                        description='1 of 3 app developers for a startup company, Cookout.
                        Languages used: React Native for front-end, Java and
                        Springboot for backend' />
                    </Col>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Project Lead' img={uoftlaw} duration='May 2020 - Present' company='University of Toronto Faculty of Law'
                        description='Solely created a digital signage system that is used to
                        display information all throughout the Law campus.
                        This project required skills of Drupal 8, CSS, JavaScript,
                        Bootstrap, Git, and compiling with Sass.' />
                    </Col>
                </Row>
            </Container>
        </Collapse>
    </>
    );
}

const NonTechExperience = (props) => {
    return(
    <>
        <div className={props.nonTechExp ? 'dropdown' : 'dropdown border border-1 border-secondary'} onClick={() => props.setNonTechExp(!props.nonTechExp)}>
            <h2 className='header'>Non-Technical Experience</h2>
            <i className={props.nonTechExp  ? "fas arrow fa-chevron-up" : "fas arrow fa-chevron-down"} ></i>
        </div>
        <Collapse in={props.nonTechExp } style={{width: '100%'}}>
            <Container>
                <Row className='row' style={{minHeight: 847}}>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Vice President of Public Relations' img={wrisc} company='WRiSC UofT' duration='May 2020 - May 2021'
                        description="Woodsworth Racialized Students' Collective (WRISC) is a club that strives to advocate for racialized students in UofT Woodsworth College. 
                        As the VP of Public Relations, completed tasks like promoting 
                        racial advocacy through social media posts, news, and photos during events.

                        WRiSC received WCSA’s Club of the Year award during the time of this position." /> 
                    </Col>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Orientation Leader' img={woodsworth} duration='Sep 2020 - Sep 2020' company='University of Toronto - Woodsworth College'
                        description="Created a welcoming and inclusive environment for first year students by facillitating activities and games during Orientation Week.
                        Ensured that incoming students' comfort and safety were the highest priority and acted as a role model" />
                    </Col>
                    <Col  xs={12} md={4} className='col'>
                        <Position title='Tutor' img={cause} company='CAUSE Tutoring' duration='Nov 2019 - Apr 2019'
                        description='Mathematics and Reading Tutor at CAUSE; a non-profit organization whom aim to enhance access to education among the homeless, 
                        vulnerable, and at-risk population in downtown Ottawa and Toronto.' />
                    </Col>
                </Row>
            </Container>
        </Collapse>
    </>
    );
}

const Skills = (props) => {
    return(
    <>
        <div className={props.skills ? 'dropdown border-top border-1 border-secondary' : 'dropdown border border-1 border-secondary'}  onClick={() => props.setSkills(!props.skills)}>
            <h2 className='header'>Skills</h2>
            <i className={props.skills  ? "fas arrow fa-chevron-up" : "fas arrow fa-chevron-down"}></i>
        </div>
        <Collapse in={props.skills } style={{width: '100%'}}>
            <Container>
                <Row className='row rowSkill' >
                    <Col  xs={12} md={4} className='col colSkill'>
                             <h5 className='h5'>Python</h5>
                             <h5 className='h5'>C</h5>
                             <h5 className='h5'>Bootstrap</h5>
                             <h5 className='h5'>HTML</h5>
                    </Col>
                    <Col  xs={12} md={4} className='col colSkill'>
                            <h5 className='h5'>Java</h5>
                            <h5 className='h5'>React/React Native</h5>
                            <h5 className='h5'>Git</h5>
                            <h5 className='h5'>CSS</h5>
                         
                    </Col>
                    <Col  xs={12} md={4} className='col colSkill'>
                            <h5 className='h5'>Object Oriented Programming (OOP)</h5>
                            <h5 className='h5'>Drupal</h5>
                            <h5 className='h5'>UI/UX Design with Figma and Adobe XD</h5>
                    </Col>
                </Row>
            </Container>
        </Collapse>
    </>
    );
}
const Education = (props) => {
    return(
    <>
        <div className={props.education ? 'dropdown' : 'dropdown border border-1 border-secondary'} onClick={() => props.setEducation(!props.education)}>
            <h2 className='header'>Education</h2>
            <i className={props.education  ? "fas arrow fa-chevron-up" : "fas arrow fa-chevron-down"} ></i>
        </div>
        <Collapse in={props.education} className='educationCollapse'>
            <Container>
                <Row className='row' >
                    <Col  xs={12} lg={4} className='col'>
                        <img src={uoft} alt='uoft logo' className='uoftLogo'/>
                    </Col>
                    <Col  xs={12} lg={7} className='col educationDesc'>
                        <h4 className='educationH4'>University of Toronto</h4>
                        <h4 className='educationH4'>Honours Bachelor of Science</h4>
                        <h4 className='educationH4'>Bioinformatics and Computational Biology Specialist</h4>
                        <h5 className='educationH5'>Sep 2019 - May 2024</h5>
                    </Col>
                </Row>
            </Container>
        </Collapse>
    </>
    );
}
const Experience = () => {
    const [education, setEducation] = useState(false);
    const [skills, setSkills] = useState(false);
    const [techExp, setTechExp] = useState(false);
    const [nonTechExp, setNonTechExp] = useState(false);
    return(
        <div className='pageContainer' style={{position: 'relative'}}>
            <div  style={{position: 'sticky', top: 0, zIndex: 5}}>
                <Navbar />
                
            </div>
            <h1 className='title'>Skills and Experiences</h1>
            <div className='dropdownContainer'>
                <Education education={education} setEducation={setEducation}/>
                <Skills skills={skills} setSkills={setSkills}/>
                <TechExperience techExp={techExp} setTechExp={setTechExp}/>
                <NonTechExperience nonTechExp={nonTechExp} setNonTechExp={setNonTechExp}/>
            </div>
        </div>
    );
};

export default Experience;