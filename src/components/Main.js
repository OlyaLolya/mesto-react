import React from "react";
import '../index.css';
import {api} from '../utils/Api.js'
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = React.useState('Загрузка...');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(userData => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
    }, [])
    React.useEffect(() => {
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards.map(info => (
                    <Card key={info._id} card={info} onCardClick={onCardClick} />
                )))
            })
    }, [])
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__photo" alt="фото в профиле" src={userAvatar}/>
                    <div onClick={onEditAvatar} className="profile__avatar-overlay"/>
                </div>
                <div className="profile__intro">
                    <div className="profile__name-and-button">
                        <h1 className="profile__name">{userName}</h1>
                        <button onClick={onEditProfile} type="button" className="profile__edit-button"/>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button"/>
            </section>

            <section className="cards">
                {cards}
            </section>
        </main>
    )
}

export default Main;
