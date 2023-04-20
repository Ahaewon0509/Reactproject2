import React from "react";
import { useNavigate } from "react-router-dom";
// navigate를 쓰려면 이렇게 임포트를 하고 사용하면 됨

const List = (props) => {

    let navigate = useNavigate();
    // navigate를 임포트 시켜야 onClick을 쓸 수 있음
    return(
        <div className="col-md-4" onClick={()=>{navigate('/detail/'+props.i)}}>
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/img0'+props.i+'.webp'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default List;