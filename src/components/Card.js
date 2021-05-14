import React, {useContext} from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onDeleteCard, onCardLike }) {
    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    function handleClick() {
        onCardClick(card);
    }
    function handleCardLike (){
        onCardLike(card)
    }
    function handleDeleteClick (){
        onDeleteCard(card)
    }
    return (
        <div className="card">
            <button type="button" onClick={handleDeleteClick} className={`card__icon-delete ${isOwn ? 'card__icon-delete_visible' : 'card__icon-delete_hidden'}`}/>
            <img className="card__image" onClick={handleClick} alt={card.name} src={card.link}/>
            <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                    <button type="button" onClick={handleCardLike} className={`card__icon-like ${isLiked ? 'card__icon-like_active': ''}`}/>
                    <p className="card__count-likes">{card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;