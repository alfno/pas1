import React from "react";
import Card from "./Card";

function CardList({dataFavorite, onDelete}){
    return (
        <div className='card-list'>
            {dataFavorite.map((Favorite) => (
                <Card 
                    {...Favorite} 
                    key={Favorite.id}
                    onDelete={onDelete}
                    id={Favorite.id}
                />
            ))}
        </div>
    )
}

export default CardList