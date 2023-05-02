import React, { useState } from 'react';
import data from '../data.js';
import List from '../Component/List.js';
import axios from 'axios';
import { Routes, Route} from "react-router-dom";
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
        </Routes>
            
        </>
    )
}
export default About;