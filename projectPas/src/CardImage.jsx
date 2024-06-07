import React from "react";

function CardImage({foto}) {
    return (
        <div className='card-image'>
            <img src={foto} alt="foto" /> 
        </div>
        
    )
}

export default CardImage