import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './projects.css';
import techConference from '../../assets/techconference.jpg';
import proteinmaster from '../../assets/proteinmaster.PNG';
import portfolio from '../../assets/portfolio.PNG';


const Project = (props) => {
    return(
        <div className='h-100'>
            <Card className='card h-100'>
                <Card.Img variant="top" src={props.img}/>
                <Card.Body className='cardBody1 h-100'>
                    <Card.Text className='cardTitle'>{props.title }</Card.Text>
                    <Card.Text style = {{height: props.height}}className='cardDescription '>{props.description}</Card.Text>
                    <Card.Text style = {{fontWeight: 'bold'}}>{props.description1}</Card.Text>
                    <Card.Text >{props.description2}</Card.Text>
                    <Card.Text>
                     <a className={props.demo ? "far fa-play-circle cardLink" : "noshow"} href={props.demoLink}> </a>
                     <a className="fab fa-github cardLink" href={props.githubLink}> </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

const ProteinMaster =() => {
    const functions = ['Find matching pairs for both DNA and RNA sequences', 'DNA to RNA sequence (Transciption)', 'RNA to DNA sequence (Reverse Transciption)', 'DNA to protein sequence (Translation)', 'Global Sequence Alignment for all 3 types of sequences' ]
    const description = "This is a python project that plays around with DNA, RNA, and protein sequences!" 

    return(
        <Project title='Protein Synthesis Master' description={description} description1='Currently Available Functions'
        description2={<ul>{functions.map(item => (
            <li>{item}</li> ))}
            </ul>} img={proteinmaster} demo={true} githubLink = 'https://github.com/hyunnaye/Protein-master' demoLink = 'https://user-images.githubusercontent.com/61166764/124352718-177b3b80-dc3d-11eb-98f9-b3b6754d3c00.mp4'
        />
    )
}
const TechConferenceSystem =() => {
    const functions = ['Attendees can register and cancel their spots for events','Organizers and Admin accounts can create, delete, and modify events', 'Organizers can add/remove speakers in events', 'Message system where users can message other users', 'Speakers can view their talks and message all attendees' ]
    const description = "This is a event managing program created with Java and Object Oriented Programming. There are 4 different types of users: Admin, Organizer, Speaker, and Attendee whom all have different access to functionalities. Data is saved into JSON files after program closes which will be retrieved next time the program is ran. More information is available on GitHub." 

    return(
        <Project title='Tech Conference System' description={description} description1='Some of the Available Functions'
        description2={<ul>{functions.map(item => (
            <li>{item}</li> ))}
            </ul>} img={techConference} demo={false} githubLink = 'https://github.com/bawamohit/Tech-Conference-System'
        />
    )
}
const Portfolio = () => {
    const description = "My personal website showcasing my experiences and projects. This website is created with React, Bootstrap and CSS." 

    return(
        <Project title='Personal Website' description={description}
        img={portfolio} demo={false} githubLink = 'https://github.com/hyunnaye/portfolio-website'
        />
    )
}
const Projects = () => {
    return(
        <div className='pageContainer' style={{position: 'relative'}}>
            <div  style={{position: 'sticky', top: 0, zIndex: 5}}>
                <Navbar />
                
            </div>
            <h1 className='title'>Projects</h1>
            
            <Container>
                <Row className='row' >
                    <Col  xs={12} md={12} className='col'>
                        <Portfolio />
                    </Col>
                    <Col  xs={12} md={12} className='col'>
                        <ProteinMaster />
                    </Col>
                    <Col  xs={12} md={12} className='col'>
                        <TechConferenceSystem />
                    </Col>     
                </Row>
            </Container>
        </div>
    );
};

export default Projects;