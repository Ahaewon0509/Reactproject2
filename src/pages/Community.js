import React from 'react';
import { Link, Outlet, Routes, Route } from "react-router-dom";
import '../App.css';

const Community = () => {

    return(
        <>
        <Routes>
            <Route path='/' element={
                <>
                <div className='comTit'>
                    <h2>나이키에 대해 궁금한 점은?</h2>
                    <p>클릭 한 번으로 고객센터, 이벤트를 확인할 수 있습니다.</p>
                </div>
                </>
            }>
            </Route>
        </Routes>
        <div className='clickNav'>
            {/* 회사정보  */}
            <ul>
                <li><Link to={'/community/notice'} className='navClickBtn'>고객센터</Link></li>
                <li><Link to={'/community/event'} className='navClickBtn'>사이즈 가이드</Link></li>
            </ul>
            <Outlet></Outlet>
        </div>
        {/* <Routes>
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
                </div>
                </>
            }>
            </Route>
        </Routes> */}
        </>

    )
}
export default Community;