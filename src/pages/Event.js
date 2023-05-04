import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Card, CardGroup  } from 'react-bootstrap';
import '../App.css';

const Event = () => {


    return(
        <>
        <Routes>
            <Route path='/' element={
                <>
                <div id='flex'>
                    <div id='styleGroup'>
                        <div className='container'>
                            <div className='stCards'>
                                <Card>
                                    <Card.Body className='cardUl'>
                                        <Card.Title>나이키 제품의 사이즈 정보는 어떻게 알 수 있나요?</Card.Title>
                                        <ul>
                                            <li>좋은 퍼포먼스를 내기 위해서는 착용하는 옷과 장비의 알맞은 사이즈가 중요합니다.</li>
                                            <li>최상의 퍼포먼스를 내실 수 있도록 나이키에서 도와드리겠습니다.</li>
                                            <li>어떤 사이즈의 옷과 신발을 선택해야 할지 모르신다면 아래의 버튼을 통해 알아보세요. 남성, 여성, 남녀 공유,
                                            아동 제품을 비롯하여 아시아 사이즈, US 사이즈 등 모든 제품의 사이즈를 안내해 드리고 있습니다.</li>
                                            <li>더블어 각 제품 페이지에서도 링크를 통해 알아보실 수 있습니다.</li>
                                        </ul>
                                        <Card.Link href="#" className='sizeBtn'>나이키 사이즈 차트</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='stCards'>
                                <Card>
                                    <Card.Body>
                                        <Card.Text className='cardUl'>
                                            만약 구매하신 제품의 사이즈가 맞지 않으실 경우, 나이키의 <strong>무료반품 서비스</strong>를
                                            통해 손쉽게 환불하실 수 있는 점 잊지 말아주세요.
                                        </Card.Text>
                                        <Card.Link href="#" className='sizeBtn'>쇼핑하기</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='stCardImg'>
                                <Card>
                                    <Card.Img src="/img/size_banner.jpg" alt="Card image"/>
                                </Card>
                            </div>
                        </div>

                        <div className='iconGroup'>
                            <CardGroup>
                                <Card className='icons'>
                                    <Card.Img variant="top" className='imgs' src="/img/icon/phone.png"/>
                                    <Card.Body className='iconInfo'>
                                    <Card.Title>제품 및 주문</Card.Title>
                                    <Card.Text>
                                        <ul className='ulGroup'>
                                            <li>080-022-0182</li>
                                            <li>9:00~20:00</li>
                                            <li>월요일~일요일</li>
                                        </ul>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='icons'>
                                    <Card.Img variant="top" className='imgs' src="/img/icon/chat.png"/>
                                    <Card.Body className='iconInfo'>
                                    <Card.Title>제품 및 주문</Card.Title>
                                    <Card.Text>
                                        <ul className='ulGroup'>
                                            <li>나이키와 채팅하기</li>
                                            <li>9:00~20:00</li>
                                            <li>월요일~일요일</li>
                                        </ul>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='icons'>
                                    <Card.Img variant="top" className='imgs' src="/img/icon/phone.png"/>
                                    <Card.Body className='iconInfo'>
                                    <Card.Title>A/S 서비스</Card.Title>
                                    <Card.Text>
                                        <ul className='ulGroup'>
                                            <li>080-022-0182</li>
                                            <li>9:00~12:00, 13:00~18:00</li>
                                            <li>월요일~금요일(공휴일 제외)</li>
                                        </ul>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className='icons'>
                                    <Card.Img variant="top" className='imgs' src="/img/icon/store.png"/>
                                    <Card.Body className='iconInfo'>
                                    <Card.Title>매장 찾기</Card.Title>
                                    <Card.Text>
                                        가까운 나이키 리테일 매장 찾기
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>

                    </div>

                    <div className='likeGroup'>
                            <div className='lickCard'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>더 나은 서비스 제공을 위해 고객님의 의견을 알려주세요.</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">이 페이지가 도움이 되셨나요?</Card.Subtitle>
                                        <Card.Text>
                                            <ul className='likebtn'>
                                                <li>
                                                    <ul className='goodBtn'>
                                                        <li><Link to="#" className='likeIconBtn1'></Link></li>
                                                        <li><Link to="#" className='likeIconTxt'>예</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className='goodBtn'>
                                                        <li><Link to="#" className='likeIconBtn2'></Link></li>
                                                        <li><Link to="#" className='likeIconTxt'>아니요</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='lickCard'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>관련 내용</Card.Title>
                                        <Card.Text>
                                            <ul className='infoFlex'>
                                                <li><Link to="#" className='howInfo'>나이키의 반품정책은 어떻게 되나요?</Link></li>
                                                <li><Link to="#" className='howInfo'>나이키 신발 사이즈도 알 수 있나요?</Link></li>
                                                <li><Link to="#" className='howInfo'>나에게 맞는 골키퍼 사이즈를 어떻게 찾을 수 있나요?</Link></li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </>
            }>
            </Route>
        </Routes>
        </>

    )
}
export default Event;
