import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';

const Event = () => {


    return(
        <>
        {/* <div className='clickNav'>
            회사정보
            <Link to={'/community/notice'}>notice board</Link>
            <Link to={'/community/event'}>evnet</Link>
            <Outlet></Outlet>
        </div> */}
        <Routes>
            <Route path='/' element={
                <>
                <div>여기는 이벤트</div>
                
                </>
            }>
            </Route>
        </Routes>
        </>

    )
}
export default Event;