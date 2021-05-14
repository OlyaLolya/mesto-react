import React, {useContext, useEffect, useRef} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, submitText}) {
    const currentUser = useContext(CurrentUserContext);
    const avatarRef = useRef('')
    useEffect(() => {
        avatarRef.current.value = currentUser.avatar
    }, [currentUser.avatar]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value)
    }

    return (
        <PopupWithForm title={'Обновить аватар'}
                       isOpen={isOpen}
                       onSubmit={handleSubmit}
                       onClose={onClose}
                       submitText={submitText}
                       name={'avatar-edit'}>
            <fieldset className="form__profile-info">
                <input className="form__input form__input_avatar_url" type="url"
                       placeholder="Ссылка на аватар"
                       ref={avatarRef}
                       name="avatar" id="avatar-url-input" required/>
                <span className="form__error avatar-url-input-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;