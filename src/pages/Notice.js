import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Form, InputGroup, Accordion, Card } from 'react-bootstrap';
import '../App.css';


const Event = () => {


    return(
        <>
        {/* <div className='clickNav'>
            {/* 회사정보
            <Link to={'/community/notice'}>notice board</Link>
            <Link to={'/community/event'}>evnet</Link>
            <Outlet></Outlet>
        </div> */}
        <Routes>
            <Route path='/' element={
                <>
                <div id='customer'>
                    <div className='container'>
                        <h2>고객센터</h2>
                        <div className='search'>
                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="무엇을 도와드릴까요?"
                                aria-label="무엇을 도와드릴까요?"
                                aria-describedby="basic-addon2"
                                />
                                {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
                                <InputGroup.Text id="basic-addon2"><i className='xi-search'></i></InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <div id='customerQna'>
                    <div className='qnaWrap'>
                        <div className='qnaTit'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>빠른 지원</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">클릭 한 번으로 자주 묻는 질문에 대한 답변을 확인할 수 있습니다.</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='accGroup'>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>배송 및 주문</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>주문을 취소하서나 주문 내용을 변경할 수 있나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>나이키의 배송옵션은 어떻게 되나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>주문 및 배송 상황은 어떻게 조회할 수 있나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>결제 방법에는 어떤 것이 있나요?</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>반품 및 환불</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>나이키의 반품정책은 어떻게 되나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>온라인으로 구매한 나이키 제품의 반품은 어떻게 진행해야하나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>나이키의 환불 절차는 어떻게 되나요?</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>나이키 멤버십</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>나이키 멤버가 되면 어떤 혜택을 받나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>프로모션 코드는 무엇이며, 어떻게 사용하나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>NRC와 NTC 안내</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>SNKRS</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>Draw는 어떻게 응모하나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>SNKRS와 나이키 온라인에서의 구매방법이 다른가요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>SNKRS 결제 방법은 어떻게 되나요?</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>제품 정보</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>나이키의 A/S 절차는 어떻게 진행되나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>나이키 제품의 사이즈 정보는 어떻게 알 수 있나요?</Link>
                                            </li>
                                            <li>
                                                <Link to="#" className='qnas'>나이키 신발을 재활용할 수 있나요?</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>공지</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>
                                                <Link to="#" className='qnas'>공지사항 및 고객알림</Link>
                                            </li>
                                            <li>
                                                <Link to="#" >나이키 로그인에 문제가 있으신가요?</Link>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
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