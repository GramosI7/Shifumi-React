import React from "react";

const PlayerCard = (props) => {
    //destruturation du props;
    const {color, symbol} = props;
    //variable qui contient du css et qui sera transmis a la div via un "style";
    const style = {
        backgroundColor: color,
        //rajoute une image par dessus le backgroundColor;
        backgroundImage: `url(./img/${symbol}.png)`
    }
    return (
        <div style={style} className="player-card">
            {symbol}
        </div>
    )
}

export default PlayerCard;