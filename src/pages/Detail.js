/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-modal';
import Card from 'react-bootstrap/Card';


const Detail = (props) => {

    let {id} = useParams();
    // App.js에 있는 :id의 정보를 가지고 오는 것
    // 작명했던 이름을 그대로 가지고 와야 정보를 가지고 올 수 있음
    
    let [alerts, setAlerts] = useState(true);
    let [num, setNum] = useState(0);
    // 자꾸 변동될 것 
    
    // 3초후 없어지는 타이머
    useEffect(()=>{
        setTimeout(function(){
            setAlerts(false);
        },3000)
        // return()=>{
        //     // 여기에다가도 코드를 짤 수 있음(이걸 클린업 function(펑션)이라고 함)
        //     // 클린업 펑션은 컴포넌트 없어질때 사용됨
        // }
    },[]);
    // ,[스테이트~, 변수] : 마운트, 업데이트 둘 다 동시에 실행
    // 코드 한번만 실행할거면 [] 비워둬야 함


    // 문자를 적으면 경고창 뜨는 것
    useEffect(()=>{
        // isNaN 으로 숫자인지 문자인지 구별하기 위해 쓴 것
        if(isNaN(num) == true){
            alert('숫자를 입력하세요');
        }
    },[num])
    // [] 여기에 값이 없으면 마운트 될 때만 실행됨 
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="container">
            {
                alerts == true ? <div className="alert alert-warning">3초 이후 사라짐</div> : null
            }
            <div className="proWrap">
                <div className="row produFlex">
                    <div className="col-md-6 proIndex">
                        <img className="image" src={process.env.PUBLIC_URL + '/img/item0'+props.items[id].id+'.webp'} alt="" />
                    </div>
                    <div className="col-md-6 proIndex2">
                        <h4 className="pt-5">{props.items[id].title}</h4>
                        <p className="proType">{props.items[id].content}</p>
                        <p className="proTypePrice">{props.items[id].price}원</p>
                        <div id="size">
                            <h4>사이즈 선택</h4>
                            <div className="sizeClick">
                                <ul>
                                    <li>
                                        <ul className="sizeGroup">
                                            <li><Link to="#" className="sizeBtn">220</Link></li>
                                            <li><Link to="#" className="sizeBtn">225</Link></li>
                                            <li><Link to="#" className="sizeBtn">230</Link></li>
                                            <li><Link to="#" className="sizeBtn">235</Link></li>
                                            <li><Link to="#" className="sizeBtn">240</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="sizeGroup">
                                            <li><Link to="#" className="sizeBtn">245</Link></li>
                                            <li><Link to="#" className="sizeBtn">250</Link></li>
                                            <li><Link to="#" className="sizeBtn">255</Link></li>
                                            <li><Link to="#" className="sizeBtn">260</Link></li>
                                            <li><Link to="#" className="sizeBtn">265</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="sizeGroup">
                                            <li><Link to="#" className="sizeBtn">270</Link></li>
                                            <li><Link to="#" className="sizeBtn">275</Link></li>
                                            <li><Link to="#" className="sizeBtn">280</Link></li>
                                            <li><Link to="#" className="sizeBtn">285</Link></li>
                                            <li><Link to="#" className="sizeBtn">290</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="sizeGroup">
                                            <li><Link to="#" className="sizeBtn">295</Link></li>
                                            <li><Link to="#" className="sizeBtn">300</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <p>수량 <input type="text" onChange={(e)=>{setNum(e.target.value)}}/></p> */}
                        {/* 유저가 가지고 온 값을 가지고 와야 하니깐 e.target.value 쓴 거임 */}
                        <div id="orderBtn">
                            <ul>
                                <li><button type="button" class="btn btn-primary buyBtn">장바구니</button></li>
                                <li><button className="btn btn-danger buyBtn2">바로구매</button></li>
                            </ul>
                        </div>
                        <div id="plusInfo">
                            <p className="pInfo">{props.items[id].productInfo}</p>
                            <ul>
                                <li>{props.items[id].productColor1}</li>
                                <li>{props.items[id].productColor2}</li>
                            </ul>
                        </div>

                        {/* 상품 상세 정보 팝업 */}
                        <div id="modalPop">
                            <button onClick={()=> setModalIsOpen(true)}>상품 상세 정보 보기</button>
                            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                <div className="infoGroup">
                                    <h2>{props.items[id].productTitle00}</h2>
                                    <p>{props.items[id].productInfo}</p>
                                </div>
                                <div className="infoGroup">
                                    <h2>{props.items[id].productTitle01}</h2>
                                    <p>{props.items[id].productGood01}</p>
                                </div>
                                <div className="infoGroup">
                                    <h2>{props.items[id].productTitle02}</h2>
                                    <p>{props.items[id].productGood02}</p>
                                </div>
                                <div className="infoGroup">
                                    <h2>{props.items[id].productTitle03}</h2>
                                    <ul>
                                        <li><p>{props.items[id].proInfo01}</p></li>
                                        <li><p>{props.items[id].proInfo02}</p></li>
                                        <li><p>{props.items[id].proInfo03}</p></li>
                                        <li><p>{props.items[id].proInfo04}</p></li>
                                    </ul>
                                </div>
                                <div className="infoGroup">
                                    <h2>{props.items[id].historyTit}</h2>
                                    <p>{props.items[id].history}</p>
                                </div>
                            {/* <div className="closeBtn">
                                <p className="xi-close"></p>
                            </div> */}
                            </Modal>

                        </div>
                        <div id="accInfo">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>사이즈 & 팁</Accordion.Header>
                                    <Accordion.Body className="sizeBody">
                                    • 정사이즈보다 작게 나온 제품으로,<br/> &nbsp;&nbsp;반 사이즈 크게 주문하는 것을 추천드립니다.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>무료 배송 및 반품</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="boxGroup">
                                            <ul>
                                                <li>
                                                    <p>일반 배송</p>
                                                    <ul>
                                                        <li>• 배송지역: 전국 (일부 지역 제외)</li>
                                                        <li>• 배송비: 무료배송</li>
                                                        <li>• 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.</li>
                                                        <li>일반 배송 <strong>자세히 알아보기</strong></li>
                                                        <li>반품 <strong>자세히 알아보기</strong></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <p>오늘도착 서비스</p>
                                                    <ul>
                                                        <li>• 이용시간: 낮 12시까지 결제 시, 당일 도착 (일요일, 공휴일 제외)</li>
                                                        <li>• 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시 수지구∙기흥구, 부천시 중동∙상동∙심곡동</li>
                                                        <li>• 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.</li>
                                                        <li>서비스비용: 5,000원 <strong>자세히 알아보기</strong></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <p>A/S 안내 </p>
                                                    <ul>
                                                        <li>• 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아 고객센터(<strong>080-022-0182</strong>)에서 유선으로만 접수 가능합니다.</li>
                                                        <li>• 배송비: 무료배송</li>
                                                        <li><strong>자세히 알아보기</strong></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    </div>
                </div>
                {/* 상품 상세페이지 */}
                <div id="proImgInfo">
                    <h2>Product Information</h2>
                    <div className="cardGroup">
                        <Card>
                            <Card.Img variant="top" src={props.items[id].infoImg01} />
                            <Card.Body>
                            <Card.Title>{props.items[id].infoImgTit01}</Card.Title>
                            <Card.Text>{props.items[id].infoImgTitSub01}</Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Img variant="top" src={props.items[id].infoImg02} />
                            <Card.Body>
                            <Card.Title>{props.items[id].infoImgTit02}</Card.Title>
                            <Card.Text>{props.items[id].infoImgTitSub02}</Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Img variant="top" src={props.items[id].infoImg03} />
                            <Card.Body>
                            <Card.Title>{props.items[id].infoImgTit03}</Card.Title>
                            <Card.Text>{props.items[id].infoImgTitSub03}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>



        </div>
    );
};

export default Detail;