import React from "react";

function PopupWithForm({isOpen, onClose, name, submitText, title, children, onSubmit}) {
    return (
        <section className={isOpen ? 'popup popup_opened' : 'popup'} id={`popup__${name}`}>
            <div className="popup__container">
                <button onClick={onClose} type="button" className="popup__icon-close popup__icon-close-edit-form"/>
                <form onSubmit={onSubmit} className={`form ${name}-form`} name={`${name}-form`} noValidate>
                    <h2 className="form__header">{title}</h2>
                    {children}
                    <input type="submit"
                           className={`form__button ${name}-form__submit-button`}
                           value={submitText}/>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;