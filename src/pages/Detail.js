import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {

    let {id} = useParams();
// App.js에 있는 :id의 정보를 가지고 오는 것
// 작명했던 이름을 그대로 가지고 와야 정보를 가지고 올 수 있음
// 
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/img/img0'+props.items[id].id+'.webp'} />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.items[id].title}</h4>
                    <p>{props.items[id].content}</p>
                    <p>{props.items[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;