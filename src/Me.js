import React from "react";

const Me = (props) => {
    // console.log("from me: ",props.myGame);
    return (
        <div>
            <img onClick={props.function} value={props.function(props.element)} src={`./img/${props.myGame}.png`} alt=""/>
        </div>
    )
}

export default Me;