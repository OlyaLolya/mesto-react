import React, {useContext} from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__photo" alt="фото в профиле" src={currentUser.avatar}/>
                    <div onClick={onEditAvatar} className="profile__avatar-overlay"/>
                </div>
                <div className="profile__intro">
                    <div className="profile__name-and-button">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button"/>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button"/>
            </section>

            <section className="cards">
                {cards.map(card => (
                    <Card
                        onCardLike={onCardLike}
                        key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                        onDeleteCard={onCardDelete}/>
                ))}
            </section>
        </main>
    )
}

export default Main;
