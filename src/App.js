import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, Carousel, Card, CardGroup } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';
import './App.css';
import img_01 from './banner.webp';
import data from './data.js';
import List from './Component/List.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import Community from './pages/Community.js';
import Event from './pages/Event.js';
import Notice from './pages/Notice.js';
// import axios from 'axios';

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
                <Nav.Link onClick={()=>{navigate('/detail/0')}} className='navText'>Shoes</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/about')}} className='navText'>Product List</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/community')}} className='navText'>Community</Nav.Link>

                {/* <Nav.Link onClick={()=>{navigate('/community/notice')}} className='navText'>notice</Nav.Link>
                <Nav.Link onClick={()=>{navigate('/community/event')}} className='navText'>event</Nav.Link> */}

                {/* <Nav.Link onClick={()=>{navigate('/about/location')}} className='navText'>Location</Nav.Link> */}
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

          {/* 상품 광고 부분 */}
          <div id='shoesCards'>
            <div className='shoesBanner'></div>
            <Card id='shoesGroup'>
              <Card.Body className='shoesText'>
                <Card.Title className='shoesTit01'>신제품: 머큐리얼 XXV</Card.Title>
                <Card.Title className='shoesTit02'>25년간의 경이로운 스피드</Card.Title>
                  <Card.Text className='shoesSubTit'>
                    축구 역사장 가장 빠른 스피드를 위해 설계된 머큐리얼 XXV를 만나 보세요.
                  </Card.Text>
              </Card.Body>

              <Card.Body className='shoesBtns'>
                <Card.Link href="#" className='btns'>구매하기</Card.Link>
              </Card.Body>
            </Card>
          </div>


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

          {/* 상품 목록 부분 */}
          {/* <div className="container">
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
          } */}
        
        {/* 나이키 옷 부분 */}
        <div id='clothesGroup'>
          <h2>Apparel Essentials</h2>
          <CardGroup>
            <Card className='proGroup'>
              <Card.Img className='clothesImg01' variant="top"/>
              <Card.Body className='clothesCard'>
                <Card.Title className='clothesTit'>재킷 & 베스트</Card.Title>
              </Card.Body>
            </Card>
            <Card className='proGroup'>
              <Card.Img className='clothesImg02' variant="top"/>
              <Card.Body className='clothesCard'>
                <Card.Title className='clothesTit'>후디 & 크루</Card.Title>
              </Card.Body>
            </Card>
            <Card className='proGroup'>
              <Card.Img className='clothesImg03' variant="top"/>
              <Card.Body className='clothesCard'>
                <Card.Title className='clothesTit'>팬츠 & 타이츠</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>

        {/* 나이키 커뮤니티 부분 */}
        <div id='nikeComu'>
          <h2>나이키 커뮤니티와 함께 하기</h2>
            <CardGroup>
              <Card className='widthImg'>
                <Card.Img className='nikeImg1' variant="top"/>
                <Card.Body className='nikeCard'>
                  <Card.Title className='nikeTit'>나이키 앱</Card.Title>
                  <Card.Text className='nikeSubTit'>
                    원하는 것을 누구보다 빠르게,<br/>
                    새로운 영감으로 매일을 새롭게, 상상만 했던 경험을 현실로.<br/>
                    여러분의 매일을 나이키 앱에서 바꿔 보세요.
                  </Card.Text>
                  <Card.Link href="#" className='nikeBtn'>자세히 보기</Card.Link>
                </Card.Body>
              </Card>
              <Card className='widthImg'>
                <Card.Img className='nikeImg2' variant="top"/>
                <Card.Body className='nikeCard'>
                  <Card.Title className='nikeTit'>나이키 트레이닝 클럽(NTC)</Card.Title>
                  <Card.Text className='nikeSubTit'>
                    NTC 앱으로 개인 맞춤형 트레이닝 가이들를 만나 보세요.<br/>
                    운동, 마음가짐, 영양, 수면 등 몸과<br/>
                    마음을 위한 전문가 팀도 함께 제공됩니다.
                  </Card.Text>
                  <Card.Link href="#" className='nikeBtn'>자세히 보기</Card.Link>
                </Card.Body>
              </Card>
              <Card className='widthImg'>
                <Card.Img className='nikeImg3' variant="top"/>
                <Card.Body className='nikeCard'>
                  <Card.Title className='nikeTit'>나이키 런 크럽(NRC)</Card.Title>
                  <Card.Text className='nikeSubTit'>
                    NRC 앱과 함께 언제 어디서든 러닝을 시작해 보세요.<br/>
                    전문 러닝 코치들의 오디오 가이드 런으로<br/>
                    올바른 러닝 루틴을 만들 수 있습니다.<br/>
                  </Card.Text>
                  <Card.Link href="#" className='nikeBtn'>자세히 보기</Card.Link>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          </>
        } />
        
        {/* <Route path='/detail' element={<Detail items={items}/>} /> 프롭스 */}
        {/* <Route path='*' element={<div>404에러 페이지입니다.</div>} /> */}
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>게시판</div>} /> {/* 소메뉴들 */}
          <Route path='location' element={<div>이벤트</div>} />
        </Route>
        <Route path='/detail/:id' element={<Detail items={items} />} />
        {/* <Route path='/' element={<Detail items={items} />} /> */}
        <Route path='/community'element={<Community />}>
          <Route path='notice' element={<Notice/>} />
          <Route path='event' element={<Event/>} />
        </Route>
      </Routes>
      
      {/* 푸터 부분 */}
      <footer id='footer'>
        <div className='footerWrap'>
          <div className='footerInfo01 d-flex flex-row bd-highlight mb-3'>
            <div className='info d-flex flex-row bd-highlight mb-3'>
              <ul className='d-flex newInfo'>
                <li className='p-2 bd-highlight'>
                  <ul className='d-flex flex-column col01'>
                    <li><strong><Link to="#" className='infoMa_Tit'>새로운 소식</Link></strong></li>
                    <li><strong><Link to="#" className='infoMa_Tit'>멤버가입</Link></strong></li>
                    <li><strong><Link to="#" className='infoMa_Tit'>매장안내</Link></strong></li>
                    <li><strong><Link to="#" className='infoMa_Tit'>나이키 저널</Link></strong></li>
                  </ul>
                </li>
                <li className='p-2 bd-highlight'>
                  <ul className='d-flex flex-column col01'>
                    <li><strong><Link to="#" className='infoMa_Tit'>도움말</Link></strong></li>
                    <li><Link to="#" className='infoSub_Tit'>로그인 안내</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>주문배송조회</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>반품 정책</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>결제 방법</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>공지사항</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>문의하기</Link></li>
                  </ul>
                </li>
                <li className='p-2 bd-highlight'>
                  <ul className='d-flex flex-column col01'>
                    <li><strong><Link to="#" className='infoMa_Tit'>ABOUT NIKE</Link></strong></li>
                    <li><Link to="#" className='infoSub_Tit'>소식</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>채용</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>투자자</Link></li>
                    <li><Link to="#" className='infoSub_Tit'>지속가능성</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='sns'>
              <ul className='d-flex snsFlex'>
                <li>
                  <Link to="#">
                  <svg class="social-link-icon" width="30px" fill="#7e7e7e" height="30px" viewBox="0 0 24 24">
                    <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6 9.28v.4c0 1.387-.333 2.72-1 4a8.186 8.186 0 0 1-2.84 3.12c-1.333.853-2.827 1.28-4.48 1.28a8.535 8.535 0 0 1-4.56-1.28h.72c1.387 0 2.613-.427 3.68-1.28-.64 0-1.213-.2-1.72-.6-.507-.4-.867-.92-1.08-1.56l.56.16c.373 0 .64-.053.8-.16a2.67 2.67 0 0 1-1.72-1 2.913 2.913 0 0 1-.68-1.88c.427.267.88.4 1.36.4-.907-.533-1.36-1.36-1.36-2.48 0-.533.133-1.04.4-1.52.8.96 1.72 1.707 2.76 2.24a8.133 8.133 0 0 0 3.4.88c-.107-.16-.16-.4-.16-.72 0-.8.293-1.493.88-2.08s1.28-.88 2.08-.88 1.547.293 2.24.88c.48-.107 1.12-.347 1.92-.72-.213.747-.64 1.28-1.28 1.6H18c.747-.16 1.28-.32 1.6-.48-.533.693-1.067 1.253-1.6 1.68z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                  <svg class="social-link-icon" width="30px" fill="#7e7e7e" height="30px" viewBox="0 0 24 24">
                    <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm3.12 12h-2v7.2H10.4V12H8.64V9.52h1.76V8c0-1.12.187-1.92.56-2.4.427-.587 1.2-.88 2.32-.88h2V7.2h-1.2c-.427 0-.693.067-.8.2-.107.133-.16.387-.16.76v1.2h2.16L15.12 12z"></path>
                  </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <svg class="social-link-icon" width="30px" fill="#7e7e7e" height="30px" viewBox="0 0 24 24">
                    <path d="M11.28 17.6a.604.604 0 0 1-.2.24.43.43 0 0 1-.24.08c-.08 0-.133-.027-.16-.08a.557.557 0 0 1-.04-.24v-2.96h-.72v3.28a1 1 0 0 0 .12.52c.08.133.2.2.36.2.16 0 .307-.053.44-.16.133-.107.28-.24.44-.4v.48H12v-3.92h-.72v2.96zM6.96 14v-.8H9.6v.8h-.88v4.56h-.88V14h-.88zm4.96-4.72c-.107 0-.2-.04-.28-.12a.384.384 0 0 1-.12-.28v-2.4c0-.053.027-.107.08-.16.053-.053.147-.08.28-.08.133 0 .24.027.32.08a.27.27 0 0 1 .12.24v2.32c0 .107-.04.2-.12.28a.384.384 0 0 1-.28.12zm2 8.32c0-.64.027-1.307.08-2 0-.107-.04-.2-.12-.28-.08-.08-.16-.12-.24-.12h-.12l-.24.16v2.4l.24.16.16.08c.107 0 .173-.027.2-.08.027-.053.04-.16.04-.32zm.08-3.04c.213 0 .387.08.52.24.133.16.2.4.2.72v2.24c0 .267-.053.48-.16.64a.422.422 0 0 1-.44.2 2.1 2.1 0 0 1-.48-.12.506.506 0 0 1-.28-.24v.32h-.8V13.2h.8v1.76c.107-.107.213-.2.32-.28a.532.532 0 0 1 .32-.12zm3.92 5.12c.267-.213.427-.907.48-2.08.053-.587.107-1.147.16-1.68 0-.48-.053-1.013-.16-1.6-.107-1.173-.28-1.893-.52-2.16-.24-.267-1.267-.453-3.08-.56l-2.64-.08-2.72.08c-1.813.107-2.84.293-3.08.56-.24.267-.413.987-.52 2.16a16.07 16.07 0 0 0-.08 1.6c0 .533.027 1.093.08 1.68.107 1.173.28 1.88.52 2.12.24.24 1.267.44 3.08.6l2.72.08 2.64-.08c1.813-.16 2.853-.347 3.12-.56v-.08zM8.4 4h-.96l1.12 3.6v2.24h.96v-2.4L10.64 4h-.96l-.56 2.32h-.08L8.4 4zm2.32 2.56V8.8c0 .373.107.667.32.88.213.213.507.32.88.32s.667-.107.88-.32c.213-.213.32-.507.32-.88V6.56c0-.32-.107-.587-.32-.8-.213-.213-.507-.32-.88-.32s-.667.107-.88.32c-.213.213-.32.48-.32.8zm3.12-.96v3.6a1 1 0 0 0 .12.52c.08.133.213.2.4.2.187 0 .36-.04.52-.12.16-.08.32-.2.48-.36v.48h.88V5.6h-.88v3.2a.523.523 0 0 1-.24.24.645.645 0 0 1-.28.08c-.08 0-.133-.013-.16-.04-.027-.027-.04-.093-.04-.2V5.52h-.8v.08zM12 0c2.187 0 4.2.533 6.04 1.6a11.793 11.793 0 0 1 4.36 4.36C23.467 7.8 24 9.813 24 12s-.533 4.2-1.6 6.04a11.793 11.793 0 0 1-4.36 4.36C16.2 23.467 14.187 24 12 24s-4.2-.533-6.04-1.6a11.793 11.793 0 0 1-4.36-4.36C.533 16.2 0 14.187 0 12s.533-4.2 1.6-6.04A11.793 11.793 0 0 1 5.96 1.6C7.8.533 9.813 0 12 0zm4.56 16.08l-.08-.4c0-.16-.027-.28-.08-.36a.27.27 0 0 0-.24-.12.27.27 0 0 0-.24.12c-.053.08-.08.2-.08.36v.4h.72zm-.32-1.52c.32 0 .573.093.76.28.187.187.28.467.28.84v.96h-1.44v.8c0 .16.027.28.08.36.053.08.147.12.28.12.133 0 .227-.04.28-.12.053-.08.08-.227.08-.44v-.16h.72v.24c0 .373-.093.667-.28.88-.187.213-.453.32-.8.32-.347 0-.613-.107-.8-.32-.187-.213-.28-.507-.28-.88v-1.76c0-.32.107-.587.32-.8.213-.213.48-.32.8-.32z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                  <svg class="social-link-icon" width="30px" fill="#7e7e7e" height="30px" viewBox="0 0 24 24">
                    <path d="M16 12.48a4.723 4.723 0 0 1-.56 1.48 3.93 3.93 0 0 1-1.04 1.16 3.428 3.428 0 0 1-1.92.68 3.628 3.628 0 0 1-1.96-.48 3.414 3.414 0 0 1-1.4-1.48c-.48-.96-.587-1.973-.32-3.04H7.68l.08 5.52c0 .107.04.213.12.32.08.107.173.16.28.16h8.32c.107 0 .213-.053.32-.16.107-.107.16-.213.16-.32V10.8h-1.12c.16.533.213 1.093.16 1.68zm-3.68 2c.64 0 1.2-.24 1.68-.72s.72-1.053.72-1.72a2.56 2.56 0 0 0-.68-1.76c-.453-.507-1.013-.76-1.68-.76s-1.24.24-1.72.72-.72 1.053-.72 1.72.227 1.253.68 1.76c.453.507 1 .76 1.64.76h.08zm4.16-7.6h-1.12c-.107 0-.213.053-.32.16-.107.107-.16.213-.16.32v1.36c.107.213.267.32.48.32h1.12c.16 0 .28-.053.36-.16a.532.532 0 0 0 .12-.32v-1.2c0-.107-.053-.213-.16-.32-.107-.107-.213-.16-.32-.16zM12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm6.24 16.88l-.08.08v.08a.926.926 0 0 1-.28.68 1.3 1.3 0 0 1-.68.36H7.52a.871.871 0 0 1-.68-.32 1.536 1.536 0 0 1-.36-.72l-.08-.16.08-9.84c0-.267.093-.507.28-.72.187-.213.413-.347.68-.4h9.68a1.3 1.3 0 0 1 .68.36 1.3 1.3 0 0 1 .36.68l.08 9.92z"></path>
                  </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footerInfo02'>
            <div className='footerUtill'>
              <ul className='d-flex justify-content-between'>
                <li>
                  <ul className='d-flex flex-row info01'>
                    <li className='kr'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="18px" height="15px" fill="none">
                        <path fill="currentColor" fill-rule="evenodd" d="M4.5 9.001a7.5 7.5 0 1115 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 01-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 01-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 01-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" clip-rule="evenodd"></path>
                      </svg>
                      <strong>대한민국</strong>
                    </li>
                    <li>© 2023 Nike, Inc. All Rights Reserved</li>
                  </ul>
                </li>
                <li>
                  <ul className='d-flex flex-row info02'>
                    <li><Link to="#" className='foNav'>이용약관</Link></li>
                    <li><strong><Link to="#" className='foNav2'>개인정보처리방침</Link></strong></li>
                    <li><Link to="#" className='foNav'>위치 기반 서비스 약관</Link></li>
                    <li><Link to="#" className='foNav'>영상정보처리기기 운영 방침</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='footerInfo03'>
              <ul className='d-flex flex-row mb-2 callGroup'>
                <li className=''>
                  <ul className='d-flex flex-column justify-content-start nikeInfo'>
                    <li className=''>(유)나이키코리아 대표 Kimberlee Lynn Chang Mendes, 킴벌리 린 창 멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층 |<br/>
                      통신판매업신고번호 2011-서울강남-03461 | 등록번호 220-88-09068 <strong>사업자 정보 확인</strong></li>
                    <li className=''>
                    고객센터 전화 문의 <strong>080-022-0182</strong> FAX 02-6744-5880 | 이메일 <strong>service@nike.co.kr</strong> | 호스팅서비스사업자 (유)나이키코리아
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className='d-flex flex-column mb-2 nikeInfo'>
                    <li>현금 등으로 결제 시 안전 거래를 위해 나이키 쇼핑몰에서 가입하신 한국결제네트웍스 유한회사의 구매안전<br/> 서비스 (<strong>결제대금예치</strong>)</li>
                    <li>콘텐츠산업진흥법에 의한 콘텐츠 보호 안내 <strong>자세히 보기</strong></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
