import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Home.css"
// import burger from "./assets/burger.png"
// import codequiz from "./assets/codequiz.png"
// import coview19 from "./assets/coview19.png"
// import employeesummary from "./assets/employeesummary.png"
// import notetaker from "./assets/notetaker.png"
// import pokemon from "./assets/pokemon.png"

import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Alert } from 'reactstrap';

const Home = () => {
  return (
    <>
    <h1 className='title'>About Me</h1>
    <div className= 'padding'>
   <Card >
        {/* <CardImg className="img-fluid" top width="100%" src={pokemon} alt="pokemon" /> */}
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle> <p>Hello! I am Danielle Hillman, a recent college graduate from Chapman University.

Currently, I am an aspiring Web Developer and enrolled in UCI's Coding Bootcamp for Full Stack Web Development.</p></CardSubtitle>
          <hr/>
          <h3 class='title'>Some things that I love:</h3>
          <p class='title'>my family & friends</p>
          <p class='title'>coffee shops</p>
          <p class='title'>traveling</p>
          <p class='title'>health & wellness</p>
        
          <hr/>
          <h3 className="title">Experience</h3>
          <CardText>
          <p> 


Pacific Western Bank -
Financial Planning and Analysis Intern -
June 2019-August 2019
</p>

<p>

Amaryllis Apparel -
Marketing Intern - 
February 2020-May 2020

</p>

<p>
Chapman University -
B.S. in Business Administration & B.A. in Strategic and Corporate Communication -
2016-2020
</p>
</CardText>
          
        </CardBody>
      </Card>

      </div>
   
    </>
  )
}

export default Home