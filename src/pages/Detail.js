/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

    return (
        <div className="container">
            {
                alerts == true ? <div className="alert alert-warning">3초 이후 사라짐</div> : null
            }
                <div className="row">
                    <div className="col-md-6">
                        <img src={process.env.PUBLIC_URL + '/img/item0'+props.items[id].id+'.webp'} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.items[id].title}</h4>
                        <p>{props.items[id].content}</p>
                        <p>{props.items[id].price}원</p>
                        <p>수량 <input type="text" onChange={(e)=>{setNum(e.target.value)}}/></p>
                        {/* 유저가 가지고 온 값을 가지고 와야 하니깐 e.target.value 쓴 거임 */}
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
        </div>
    );
};

export default Detail;