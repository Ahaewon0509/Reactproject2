import React from "react";

const List = (props) => {
    return(
        <div className="col-md-4">
            <img className='item-img' src={process.env.PUBLIC_URL + '/img/img0'+props.i+'.webp'} />
            <h4>{props.items.title}</h4>
            <p>{props.items.content}</p>
        </div>
    );
};

export default List;