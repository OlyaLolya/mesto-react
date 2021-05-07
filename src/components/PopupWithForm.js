import React from "react";
import '../index.css';

function PopupWithForm (props) {
    return(
        <section className={props.isOpen?'popup popup_opened':'popup'} id={`popup__${props.name}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__icon-close popup__icon-close-edit-form"/>
                <form className={`form ${props.name}-form`} name={`profile-${props.name}-form`} noValidate>
                    <h2 className="form__header">{props.title}</h2>
                    {props.children}
                    <input type="submit" className={`form__button ${props.name}-form__submit-button`} value="Сохранить"/>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;