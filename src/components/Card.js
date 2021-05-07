import React from "react";
import '../index.css';

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <div className="card">
            <button type="button" className="card__icon-delete"/>
            <img className="card__image" onClick={handleClick} alt={card.name} src={card.link}/>
            <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" className="card__icon-like"/>
                    <p className="card__count-likes">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;