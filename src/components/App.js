import React, {useEffect, useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import {api} from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {CardsContext} from "../contexts/CardsContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeletePopup from "./DeletePopup";
import loading from '../images/oval.svg';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({name: 'Загрузка...', avatar: loading})
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    function handleDeleteCardClick(card) {
        setIsDeletePopupOpen(true)
        setCurrentCard(card);
    }
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsDeletePopupOpen(false);
        setIsCardPopupOpen(false)
        setCurrentCard({})
    }

    function handleCardClick(card) {
        setIsCardPopupOpen(true);
        setSelectedCard({
            link: card.link,
            name: card.name,
        })
    }

    function handleUpdateUser(user) {
        setIsLoading(true);
        api.setUserInfo(user)
            .then(newUserInfo => {
                setCurrentUser(newUserInfo);
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }

    function handleUpdateAvatar(avatarUrl) {
        setIsLoading(true);
        api.changeAvatar(avatarUrl)
            .then(res => {
                setCurrentUser(res)
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete() {
        setIsLoading(true);
        api.deleteCard(currentCard._id)
            .then(() => {
                let cardsArr = cards.filter(function (item) {
                    return (item._id !== currentCard._id)
                })
                setCards(cardsArr)
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            });
    }

    function handleAddPlaceSubmit(card) {
        setIsLoading(true);
        api.addNewCard(card)
            .then(newCard => {
                setCards([newCard, ...cards]);
            })
            .then(() => {
                closeAllPopups();
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        api.getUserInfo()
            .then(user => {
                setCurrentUser(user)
            }).catch(err => {
            console.log(err)
        })
        api.getInitialCards()
            .then(initialCards => {
                setCards(initialCards)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>
                <div className="page">
                    <Header/>
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleDeleteCardClick}
                    />
                    <Footer/>
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isLoading={isLoading}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        isLoading={isLoading}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onSubmit={handleAddPlaceSubmit}
                        isLoading={isLoading}
                    />
                    <DeletePopup
                        isOpen={isDeletePopupOpen}
                        onClose={closeAllPopups}
                        onSubmit={handleCardDelete}
                        isLoading={isLoading}
                    />
                    <ImagePopup
                        isOpen={isCardPopupOpen}
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </div>
            </CardsContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
