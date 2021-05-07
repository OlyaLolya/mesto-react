import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
    const [isCardPopupOpen, setIsCardPopupOpen]=React.useState(false);
    const [selectedCard, setSelectedCard]=React.useState({});
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsCardPopupOpen(false)
    }
    function handleCardClick(card) {
        setIsCardPopupOpen(true);
        setSelectedCard({
            link: card.link,
            name: card.name,
        })
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm title={'Редактировать профиль'}
                           isOpen={isEditProfilePopupOpen}
                           onClose={closeAllPopups}
                           name={'edit'}>
                <fieldset className="form__profile-info">
                    <input className="form__input form__input_data_heading" type="text" placeholder="Имя"
                           name="name" id="name-input" required minLength="2" maxLength="40"/>
                    <span className="form__error name-input-error"/>
                    <input className="form__input form__input_data_description" type="text"
                           placeholder="О себе"
                           name="about" id="job-input" required minLength="2" maxLength="200"/>
                    <span className="form__error job-input-error"/>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm title={'Новое место'}
                           isOpen={isAddPlacePopupOpen}
                           onClose={closeAllPopups}
                           name={'add'}>
                <fieldset className="form__profile-info">
                    <input className="form__input form__input_card_heading" type="text" placeholder="Название"
                           name="name" id="card-head-input" required minLength="2" maxLength="30"/>
                    <span className="form__error card-head-input-error"/>
                    <input className="form__input form__input_card_link" type="url"
                           placeholder="Ссылка на картинку"
                           name="link" id="card-link-input" required/>
                    <span className="form__error card-link-input-error"/>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm title={'Обновить аватар'}
                           isOpen={isEditAvatarPopupOpen}
                           onClose={closeAllPopups}
                           name={'avatar'}>
                <fieldset className="form__profile-info">
                    <input className="form__input form__input_avatar_url" type="url"
                           placeholder="Ссылка на аватар"
                           name="avatar" id="avatar-url-input" required/>
                    <span className="form__error avatar-url-input-error"/>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm title={'Вы уверены?'} name={'delete'}/>
            <ImagePopup isOpen={isCardPopupOpen}
                        card={selectedCard}
                        onClose={closeAllPopups}
            />
           {/*
            <section className="popup " id="popup__delete">
                <div className="popup__container">
                    <button type="button" className="popup__icon-close popup__icon-close-delete-form"/>
                    <form className="form delete-form" name="delete-form" noValidate>
                        <h2 className="form__header">Вы уверены?</h2>
                        <input type="submit" className="form__button" value="Да"/>
                    </form>
                </div>
            </section>*/}
        </div>
);
}

export default App;
