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
          <CardTitle>Burger App</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/burger">Github URL</a></p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://whispering-retreat-82332.herokuapp.com/" target="_blank" role="button">Deployed Site</a></CardSubtitle>
          <hr/>
          <CardText>If you love burgers, you can list all the burgers you want to try on this app and then click on Devour it! to keep a list of burgers you tried.  Use of MySQL databases to get, put, post and delete entries into the database and render into the frontend.  Also deployed on Heroku.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={codequiz} alt="codequiz" /> */}
        <CardBody>
          <CardTitle>Code Quiz</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/codequiz2">Github URL</a>.</p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://brianra2nil.github.io/codequiz2/" target="_blank" role="button">Deployed site</a></CardSubtitle>
          <hr/>
          <CardText>When users start the quiz, their score is recorded and displayed.  There is a timer that will bring you back to the start if time runs out.  Users lose points for incorrect answers.  Top score and username is recorded through local storage.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={coview19} alt="coview19" /> */}
        <CardBody>
          <CardTitle>Coview19</CardTitle>
          <hr/>
          <CardSubtitle> <p>Link to <a href="https://github.com/mattjavier/coview-19">Github URL</a></p></CardSubtitle>
          <hr/>
          {/* <CardSubtitle><a class="btn btn-primary btn-sm" href="https://sleepy-forest-03534.herokuapp.com/" target="_blank" role="button">Deployed site</a></CardSubtitle> */}
          <hr/>
          <CardText><p>Text Here.</p>
        <p>Text Here</p></CardText>
          
        </CardBody>
      </Card>
      </Col>

      </Row>
<br></br>
      <Row xs="3" className= 'padding'>
       <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={employeesummary} alt="employeesummary" /> */}
        <CardBody>
          <CardTitle>Employee Summary</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/employeesummary">Github URL</a></p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://drive.google.com/file/d/1DgVWX5phd9eE-12su9Lj-BvVGqQP5hNP/view" target="_blank" role="button">Video Demonstration</a></CardSubtitle>
          <hr/>
          <CardText>Text Here.</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={notetaker} alt="notetaker" /> */}
        <CardBody>
          <CardTitle>Text Here</CardTitle>
          <hr/>
          <CardSubtitle><p>Link to <a href="https://github.com/brianra2nil/notetaker">Github URL</a>.</p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://stormy-peak-85156.herokuapp.com/" target="_blank" role="button">Deployed site</a></CardSubtitle>
          <hr/>
          <CardText>Text Here</CardText>
          
        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={pokemon} alt="pokemon" /> */}
        <CardBody>
          <CardTitle>Pokemon App</CardTitle>
          <hr/>
          <CardSubtitle> <p>Link to <a href="https://github.com/Kalynbsimms/pokeProject">Github URL</a></p></CardSubtitle>
          <hr/>
          <CardSubtitle><a class="btn btn-primary btn-sm" href="https://kalynbsimms.github.io/pokeProject/" target="_blank" role="button">Deployed site</a></CardSubtitle>
          <hr/>
          <CardText><p>Text Here</p></CardText>
          
        </CardBody>
      </Card>
      </Col>

      </Row>
    </>
  )
}

export default Home