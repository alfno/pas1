import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import DeleteButton from "./deleteButton";

function Card({nama, deskripsi,tempat, foto,rating,  onDelete, id}) {
    return (
        <div className='card'>
            <hr />
            <CardImage foto={foto} />
            <CardBody nama={nama} 
                deskripsi={deskripsi} 
                tempat={tempat}
                rating={rating} />
            <DeleteButton 
                onDelete={onDelete} 
                id={id} 
            />
            
        </div>
    )
}

export default Card