import React from "react";
import {FaArrowRight} from "react-icons/fa";

const Notice=()=>{
    return(
            <>
                <div className="notice_div">
                    <p>Free Delivery on orders above Rs. 1000,  DON’T MISS <span className="spec_btn">SHOP NOW <FaArrowRight /></span></p>
                </div>

                <div className="bread_div">
                    <p>Home / Category Sports / <span className="specbread"> Football Shirt</span></p>
                </div>
            </>

          )
}

export default Notice;