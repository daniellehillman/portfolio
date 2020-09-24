import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Contact.css"
// import burger from "./assets/burger.png"
// import codequiz from "./assets/codequiz.png"
// import coview19 from "./assets/coview19.png"
// import employeesummary from "./assets/employeesummary.png"
// import notetaker from "./assets/notetaker.png"
// import pokemon from "./assets/pokemon.png"
import profilepic from "./Assets/profilepic.jpg"

import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';

const Contact = () => {
  return (
    <>
      <h1 className='title'>Contact Me</h1>
    <Row xs="2" className='padding'>
       <Col >
      <Card className='title'>
        {/* <CardImg className="img-fluid" top width="100%" src={burger} alt="burgerapp" /> */}
        <CardBody>
          <CardTitle>My Information</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/daniellehillman">Github URL</a></p></CardSubtitle>
          {/* <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://whispering-retreat-82332.herokuapp.com/" target="_blank" role="button">Deployed Site</a></CardSubtitle> */}
          <hr/>
          <CardText>Danielle Hillman</CardText>
          <CardText>Yorba Linda, CA</CardText>
          <CardText>(714) 335-7372 </CardText>
          <CardText>hillm108@mail.chapman.edu</CardText>
          
        </CardBody>
      </Card>
      </Col>

      {/* <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={codequiz} alt="codequiz" /> */}
        {/* <CardBody>
          <CardTitle>Code Quiz</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/codequiz2">Github URL</a>.</p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://brianra2nil.github.io/codequiz2/" target="_blank" role="button">Deployed site</a></CardSubtitle>
          <hr/>
          <CardText>When users start the quiz, their score is recorded and displayed.  There is a timer that will bring you back to the start if time runs out.  Users lose points for incorrect answers.  Top score and username is recorded through local storage.</CardText>
          
        </CardBody> */}
      {/* </Card>
      </Col> */} 

      <Col >
      <Card >
        <CardImg className="img-fluid" top width="100%" src={profilepic} alt="coview19" />
        
          {/* <CardTitle>Coview19</CardTitle>
          <hr/>
          <CardSubtitle> <p>Link to <a href="https://github.com/mattjavier/coview-19">Github URL</a></p></CardSubtitle>
          <hr/>
          {/* <CardSubtitle><a class="btn btn-primary btn-sm" href="https://sleepy-forest-03534.herokuapp.com/" target="_blank" role="button">Deployed site</a></CardSubtitle> */}
          {/* <hr/>
          <CardText><p>Text Here.</p>
        <p>Text Here</p></CardText> */}
           
    
      </Card>
      </Col>

      </Row>
<br></br>
    
   
    </>
  )
}

export default Contact