import React from "react";
import RelatedProductsData from "./RelatedProductsData";
import Cards from "./Cards";

const RelatedProducts=()=>{
    return(

        <>
        <div className="main_related">
            <h1>Related Products</h1>
        </div>
        {RelatedProductsData.map((val, index) => {
                    console.log(index)
                    return (
                        <Cards
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        sname = {val.sname}
                        link = {val.links}
                        price = {val.price}
                        />
                    )
                })}
        
        </>
        )
}

export default RelatedProducts;