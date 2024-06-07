import React from "react";

function CardBody({nama, deskripsi, tempat, rating}) {
    return (
        <div className="card-body">
            <p>Nama : {nama}</p>
            <p>deskripsi : {deskripsi}</p>
            <p>tempat : {tempat}</p>
            <p>rating : {rating}</p>

        </div>
    )
}

export default CardBody