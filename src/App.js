import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import img_01 from './banner.webp';
import data from './data.js';
import List from './Component/List.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import axios from 'axios';

let RedBtn = styled.button`
  background-color : ${props=>props.bg};
  color : ${props=>props.bg == 'red' ? '#fff' : '#000'};
  // 배경색이 레드면 컬러가 화이트, 아니면 블랙
  padding : 10px;
`

let Box = styled.div`
  background-color : #333;
  padding : 30px;
`

// class App extends React.Comment{
//   CommentDidMount(){
//     // 마운트 될때 코드 실행
//   }
//   CommentDidUpdate(){
//     //업데이트 될때 코드 실행
//   }
//   CommentWillUnMount(){
//     // 언마운트 될때 코드 실행
//   }
// }

let count = 0;

function App() {

  let [items, setItems] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Box>
        <RedBtn bg="#ff0000">버튼</RedBtn>
        <RedBtn bg="#ccc">버튼</RedBtn>
      </Box>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>detail</Nav.Link>
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

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>

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
          {
            count < 1 ? 
            <button onClick={()=>{
              count = count + 1;
              axios.get('https://6c3fac62-d531-4787-a6d9-e01d76badde1.mock.pstmn.io/productList')
              .then((result)=>{
                let copyItem = [...items, ...result.data];
                setItems(copyItem);
              }).catch(()=>{
                console.log("통신실패")
              })
            }}>MORE</button> : null
          }

          </>
        } />
        {/* <Route path='/detail' element={<Detail items={items}/>} /> 프롭스 */}
        <Route path='*' element={<div>404에러 페이지입니다.</div>} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버들</div>} /> {/* 소메뉴들 */}
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='/detail/:id' element={<Detail items={items} />} />


      </Routes>
        
    </div>
  );
}

export default App;
