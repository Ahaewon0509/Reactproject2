import React from 'react';
import { Link, Outlet } from "react-router-dom";
import '../App.css';

const Community = () => {

    return(
        <>
        <div className='clickNav'>
            {/* 회사정보  */}
            <Link to={'/community/notice'}>notice board</Link>
            <Link to={'/community/event'}>evnet</Link>
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