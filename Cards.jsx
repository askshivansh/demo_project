import React from "react";

function Cards(props){
    return(
        <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" />
            <div className="card_info">
                <h3 className="card_title">{props.sname}</h3>
                <p className="card_price">{props.price}</p>
            </div>
        </div>
    </div>
    )
}

export default Cards