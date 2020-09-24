// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import {button} from 'reactstrap'
import "./style.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar color="#AF9783" expand="md" >
          <h2>Danielle Hillman</h2>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink ><Link className="link name" to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link name" to="/portfolio">Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className="link name" to="/contact">Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </div>
    
    < footer class="footer">
      <hr/>
    <p>Danielle Hillman | (714)335-7372 |  hillm108@mail.chapman.edu</p>
  </footer>
     </Router>
  )
}


export default App;

