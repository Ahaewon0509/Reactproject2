import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import img_01 from './banner.webp';
import data from './data.js';
import List from './Component/List.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';


function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/member')}}>member</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about/location')}}>location</Nav.Link>
            {/* <Nav.Link onClick={()=>{navigate('-1')}}>이전</Nav.Link>
            <Nav.Link onClick={()=>{navigate('1')}}>다음</Nav.Link> */}
            {/* <Nav.Link onClick={()=>{navigate('2')}}>앞으로 두번 이동</Nav.Link>
            <Nav.Link onClick={()=>{navigate('-2')}}>이전으로 두번 이동</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      {/* Routes가 반드시 Route를 감싸야 함 */}
      <Routes> 
        <Route path='/' element={
          <>
          <div className='main_banner' style={{backgroundImage : 'url('+ img_01 +')'}}></div>
          <div className="container">
            <div className="row">
              {
                items.map(function(pram, i){
                  return(
                    <List items={items[i]} i={i}/>
                  )
                })
              }
            </div>
          </div>
          </>
        } />
        <Route path='/detail' element={<Detail/>} />
        <Route path='*' element={<div>404에러 페이지입니다.</div>} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버들</div>} /> {/* 소메뉴들 */}
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
      </Routes>
        
    </div>
  );
}

export default App;
