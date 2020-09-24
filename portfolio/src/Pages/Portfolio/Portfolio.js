import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import burger from "./assets/burger.png"
// import codequiz from "./assets/codequiz.png"
// import coview19 from "./assets/coview19.png"
// import employeesummary from "./assets/employeesummary.png"
// import notetaker from "./assets/notetaker.png"
// import pokemon from "./assets/pokemon.png"

import { Container, Row, Col } from 'reactstrap';
import "./Portfolio.css"
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';

const Home = () => {
  return (
    <>
   <h1 className='title'>My Projects</h1>
    <Row xs="3" className= 'padding'>
       <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={burger} alt="burgerapp" /> */}
        <CardBody>
          <CardTitle className='title'>Sensify</CardTitle>
          <hr/>
          <CardSubtitle><p className='title'>Link to <a href="https://daniellehillman.github.io/Sensify/">Application</a></p></CardSubtitle>
          <CardSubtitle><p className='title'>Link to <a href="https://github.com/daniellehillman/Sensify">Github URL</a></p></CardSubtitle>
    
{/*     
          <hr/>
          <CardText>This is my first group project, Sensify</CardText> */}
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={codequiz} alt="codequiz" /> */}
        <CardBody>
          <CardTitle className= 'title'>Code Quiz</CardTitle>
          <hr/>
          <CardSubtitle><p className='title'>Link to <a href="https://daniellehillman.github.io/codequiz/">Application</a></p></CardSubtitle>
          <CardSubtitle><p className='title'>Link to <a href="https://github.com/daniellehillman/codequiz">Github URL</a></p></CardSubtitle>
      
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={coview19} alt="coview19" /> */}
        <CardBody>
          <CardTitle className='title'>Coview19</CardTitle>
          <hr/>
          <CardSubtitle> <p className='title'>Link to <a href="https://sleepy-forest-03534.herokuapp.com/">Application</a></p></CardSubtitle>
          <CardSubtitle> <p className='title'> Link to <a href="https://github.com/mattjavier/coview-19">Github URL</a></p></CardSubtitle>
      
        
          
        </CardBody>
      </Card>
      </Col>

      </Row>
<br></br>
      <Row xs="3" className= 'title'>
       <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={employeesummary} alt="employeesummary" /> */}
        <CardBody>
          <CardTitle className= 'title'>Work Day Schedule</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://daniellehillman.github.io/workdayschedule/">Application</a></p></CardSubtitle>
          <CardSubtitle> <p className='title'> Link to <a href="https://github.com/daniellehillman/workdayschedule">Github URL</a></p></CardSubtitle>
        
          {/* <hr/>
          <CardText>Text Here.</CardText> */}
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={notetaker} alt="notetaker" /> */}
        <CardBody>
          <CardTitle className= 'title'>Weather Dashboard</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://daniellehillman.github.io/weatherdashboard/">Application</a></p></CardSubtitle>
          <CardSubtitle> <p className='title'> Link to <a href="https://github.com/daniellehillman/weatherdashboard">Github URL</a></p></CardSubtitle>
      
          {/* <hr/>
          <CardText>Text Here</CardText> */}
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={pokemon} alt="pokemon" /> */}
        <CardBody>
          <CardTitle className= 'title'>Burger</CardTitle>
          <hr/>


          <CardSubtitle><p>Link to <a href="https://github.com/daniellehillman/burger">Application</a></p></CardSubtitle>
          <CardSubtitle> <p className='title'> Link to <a href="https://github.com/daniellehillman/burger">Github URL</a></p></CardSubtitle>
        
          {/* <hr/>
          <CardText><p>Text Here</p></CardText> */}
          
        </CardBody>
      </Card>
      </Col>

      </Row>
    </>
  )
}

export default Home