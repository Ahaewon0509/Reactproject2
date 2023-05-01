import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, Carousel, Card, CardGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import img_01 from './banner.webp';
import data from './data.js';
import List from './Component/List.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

      {/* <Box>
        <RedBtn bg="#ff0000">버튼</RedBtn>
        <RedBtn bg="#ccc">버튼</RedBtn>
      </Box> */}
      <div className='utillMenu'>
        <ul>
          <li><a href="#">매장 찾기</a></li>
          <li><a href="#">고객센터</a></li>
          <li><a href="#">가입하기</a></li>
          <li><a href="#">로그인</a></li>
        </ul>
      </div>
      <Navbar variant="light" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" onClick={()=>{navigate('/')}}>
            <div className='logo'>
              <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="100%" height="100%" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
            </div>
            {/* Navbar */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll'/>
            <Navbar.Collapse id="navbarScroll">
              
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '120px' }} navbarScroll>
                <Nav.Link onClick={()=>{navigate('/')}} className='navText'>Main</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/detail/0')}} className='navText'>Detail</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/about')}} className='navText'>About</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/about/member')}} className='navText'>Member</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/about/location')}} className='navText'>Location</Nav.Link>
                {/* <Nav.Link onClick={()=>{navigate('-1')}}>이전</Nav.Link>
                <Nav.Link onClick={()=>{navigate('1')}}>다음</Nav.Link> */}
                {/* <Nav.Link onClick={()=>{navigate('2')}}>앞으로 두번 이동</Nav.Link>
                <Nav.Link onClick={()=>{navigate('-2')}}>이전으로 두번 이동</Nav.Link> */}
              </Nav>

              {/* 검색창 */}
              <div id='searchForm'>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="검색"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">
                  <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
                      </path>
                      </svg>
                  </Button>
                </Form>
              </div>

              <div className='likeIcon'>
                <ul>
                  <li>
                    <a aria-label="즐겨찾기" title="즐겨찾기" data-var="favoritesLink" data-type="click_navShortcut" data-path="favorites" href="#" class="pre-btn-header ripple mr3-sm d-sm-h d-lg-ib" data-pre="ILink">
                      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a data-var="anchor" title="장바구니 아이템: 0" aria-label="장바구니 아이템: 0" rel="nofollow" data-type="click_navCart" data-path="cart" href="#" class="icon-btn ripple d-sm-b" data-pre="ILink">
                      <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                        <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* 이벤트 작은 배너 */}
      <Carousel variant="dark">
      <Carousel.Item>
        <div className='bannerTit'>
            <ul>
              <li>
                <h4>멤버즈데이즈 (5/1~5/7) 안내</h4>
                <a href="#">자세히 보기</a>
                </li>
            </ul>
        </div>
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <div className='bannerTit'>
          <ul>
            <li>
              <h4>반품 및 환불 지연 안내</h4>
              <a href="#">자세히 보기</a>
              </li>
          </ul>
        </div>
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      {/* Routes가 반드시 Route를 감싸야 함 */}
      <Routes> 
        <Route path='/' element={
          <>
          {/* 메인 배너 */}
          <div className='main_banner'></div>
          {/* <div className='main_banner' style={{backgroundImage : 'url('+ img_01 +')'}}></div> */}
          
          {/* 이벤트 텍스트 부분 */}
          <Card id='cardGroup'>
            <Card.Body>
              <Card.Title className='cardTit01'>05.01(월) - 05.07(일)</Card.Title>
              <Card.Title className='cardTit02'>MENBER DAYS</Card.Title>
                <Card.Text className='cardSubTit'>
                  나이키닷컴, 나이키 앱 그리고 매장에서 7일간 진행되는 멤버데이즈에 여러분을 초대합니다.<br/>
                  오직 나이키 멤버만을 위한 다양한 혜택으로 온 가족이 함께 스포츠를 즐겨보세요.
                </Card.Text>
                <Card.Text className='cardSubTit'>
                  멤버데이즈 혜택 및 이벤트 정보는 마케팅 수신에 동의한 멤버를 대상으로 제공됩니다.<br/>
                  나이키 앱을 다운로드하고 앱에서만 만날 수 있는 전용 혜택도 놓치지 마세요.
                </Card.Text>
            </Card.Body>

            <Card.Body className='linkBtns'>
              <Card.Link href="#" className='btns01'>자세히 보기</Card.Link>
              <Card.Link href="#" className='btns02'>멤버 가입 & 마케팅 수신동의</Card.Link>
            </Card.Body>
          </Card>

          {/* 상품 슬라이드 부분 */}
          <div id='productContainer'>
            <div className='row'>
              <div className='itemSlide'>
                <h3>Best Product</h3>
                <>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={15}
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/0')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[0].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[0].title}</h4>
                            <h5>{items[0].price}원</h5>
                          </div>
                          <p>{items[0].content}</p>
                        </div>

                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/1')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[1].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[1].title}</h4>
                            <h5>{items[1].price}원</h5>
                          </div>
                          <p>{items[1].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/2')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[2].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[2].title}</h4>
                            <h5>{items[2].price}원</h5>
                          </div>
                          <p>{items[2].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/3')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[3].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[3].title}</h4>
                            <h5>{items[3].price}원</h5>
                          </div>
                          <p>{items[3].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/4')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[4].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[4].title}</h4>
                            <h5>{items[4].price}원</h5>
                          </div>
                          <p>{items[4].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/5')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[5].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[5].title}</h4>
                            <h5>{items[5].price}원</h5>
                          </div>
                          <p>{items[5].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/6')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[6].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[6].title}</h4>
                            <h5>{items[6].price}원</h5>
                          </div>
                          <p>{items[6].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='product' onClick={()=>{navigate('/detail/7')}}>
                      <div className='pro_cont'>
                        <img className='proImgs' src={process.env.PUBLIC_URL + items[7].url} alt=""/>
                        <div className='titGroup'>
                          <div className='itemTit'>
                            <h4>{items[7].title}</h4>
                            <h5>{items[7].price}원</h5>
                          </div>
                          <p>{items[7].content}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </>
              </div>
            </div>
          </div>

          
          
          {/* 상품 배너 부분 */}
          <div className='productBanner'>
            <h2>Trending Now</h2>
            <CardGroup>
              <Card>
                <Card.Img variant="top" className='productImg' />
                  <Card.Body>
                    <Card.Title>에어 포스 1</Card.Title>
                    <Card.Link href="#" className='okBtn'>구매하기</Card.Link>
                  </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" className='productImg2' />
                  <Card.Body>
                    <Card.Title>나이키 덩크</Card.Title>
                    <Card.Link href="#" className='okBtn'>구매하기</Card.Link>
                  </Card.Body>
              </Card>
            </CardGroup>
          </div>

        
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
        {/* <Route path='*' element={<div>404에러 페이지입니다.</div>} /> */}
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버들</div>} /> {/* 소메뉴들 */}
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='/detail/:id' element={<Detail items={items} />} />
        {/* <Route path='/' element={<Detail items={items} />} /> */}
      </Routes>
        {/* 나이키 커뮤니티 부분 */}
        <div id='nikeComu'>
          <h3>나이키 커뮤니티와 함께 하기</h3>
            <CardGroup>
              <Card className='widthImg'>
                <Card.Img className='nikeImg1' variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className='widthImg'>
                <Card.Img className='nikeImg2' variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className='widthImg'>
                <Card.Img className='nikeImg3' variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>

    </div>
  );
}

export default App;
