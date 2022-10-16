import React from "react";

const Slot=(pros)=>{

    let x = pros.x;
    let y = pros.y;
    let z = pros.z;

    if(x === y && z === y){
        return(
            <>
                <div className="slpot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is Matching</h1>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="slpot_inner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is Not Matching</h1>
                </div>
            </>
        )
    }
}

export default Slot;