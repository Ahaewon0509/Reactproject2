import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import img_01 from './banner.webp';
import data from './data.js';
import List from './Component/List.js';


function App() {

  let [items, setItems] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main_banner' style={{backgroundImage : 'url('+ img_01 +')'}}></div>
      
      <div className="container">
        <div className="row">
          <List items={items[0]} i={1}/>
          <List items={items[1]} i={2}/>
          <List items={items[2]} i={3}/>
        </div>
      </div>
    </div>
  );
}

export default App;
