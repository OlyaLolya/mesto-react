import React from "react";

function ImagePopup({isOpen, onClose, card}){
    return(
        <section className={`popup ${isOpen ? "popup_opened" : ""}`} id="popup__photo">
            <div className="popup__container">
                <button type="button" onClick={onClose} className="popup__icon-close popup__icon-close-photo"/>
                <img className="popup__photo" alt={card.name} src={card.link}/>
                <p className="popup__description">{card.name}</p>
            </div>
        </section>
    )
}

export default ImagePopup;