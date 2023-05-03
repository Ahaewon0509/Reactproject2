import React, { useState } from 'react';
import data from '../data.js';
import List from '../Component/List.js';
import axios from 'axios';
import { Routes, Route, Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';

const About = () => {
    let [items, setItems] = useState(data);
    let count = 0;

    return(
        <>
        {/* <div className='clickNav'>
            {/* 회사정보 
            <Link to={'/about/notice'}>notice board</Link>
            <Link to={'/about/event'}>evnet</Link>
            <Outlet></Outlet>
        </div> */}
        <div className='filter'>
            <ul>
                <li>필터 숨기기<i className='xi-tune'></i></li>
                <li>정렬 기준 :<i className='xi-angle-down-min'></i></li>
            </ul>
        </div>
        <div id='productList'>
            <div className='listMav'>
                <h4>남성, 여성 신발(11)</h4>
                <div className='subMenu1'>
                    <ul>
                        <li><Link to="#" className='ulNav'>샌들 & 슬리퍼</Link></li>
                        <li><Link to="#" className='ulNav'>트레이닝 및 짐</Link></li>
                        <li><Link to="#" className='ulNav'>라이프 스타일</Link></li>
                        <li><Link to="#" className='ulNav'>축구</Link></li>
                        <li><Link to="#" className='ulNav'>러닝</Link></li>
                    </ul>
                </div>

                <div className='subMenu2'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>성별(1)</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><Link to="#" className='subN1'>남성</Link></li>
                                <li><Link to="#" className='subN1'>여성</Link></li>
                                <li><Link to="#" className='subN1'>유니섹스</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>신발 높이</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><Link to="#" className='subN1'>로우 탑</Link></li>
                                <li><Link to="#" className='subN1'>미드 탑</Link></li>
                                <li><Link to="#" className='subN1'>하이 탑</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>착용감</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><Link to="#" className='subN1'>자유로움 & 유연성</Link></li>
                                <li><Link to="#" className='subN1'>내추럴 모션 & 중립</Link></li>
                                <li><Link to="#" className='subN1'>부드러움 & 안정감</Link></li>
                                <li><Link to="#" className='subN1'>추진력 & 경량</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>가격대</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><Link to="#" className='subN1'>0 - 50,000원</Link></li>
                                <li><Link to="#" className='subN1'>50,000 - 100,000원</Link></li>
                                <li><Link to="#" className='subN1'>100,000 - 150,000원</Link></li>
                                <li><Link to="#" className='subN1'>150,000 - 200,000원</Link></li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
            </div>
            <Routes>
                <Route path='/' element={
                    <>
                    <div id='aboutProduct'>
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
                        {/* {
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
                    </div>
                    </>
                }>
                </Route>
            </Routes>
        </div>
        <div className='number'>
            <ul>
                <li><i className='xi-angle-left-min'></i></li>
                <li><Link to="#" className='num'>1</Link></li>
                <li><i className='xi-angle-right-min'></i></li>
            </ul>
        </div>
        </>
    )
}
export default About;