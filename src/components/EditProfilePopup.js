import React, {useContext, useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser , submitText}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser.about, currentUser.name]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm title={'Редактировать профиль'}
                       isOpen={isOpen}
                       onClose={onClose}
                       onSubmit={handleSubmit}
                       submitText={submitText}
                       name={'profile-edit'}>
            <fieldset className="form__profile-info">
                <input className="form__input form__input_data_heading"
                       type="text"
                       value={name || ''}
                       onChange={handleChangeName}
                       placeholder="Имя"
                       name="name"
                       id="name-input"
                       required
                       minLength="2"
                       maxLength="40"/>
                <span className="form__error name-input-error"/>
                <input className="form__input form__input_data_description"
                       type="text"
                       value={description || ''}
                       onChange={handleChangeDescription}
                       placeholder="О себе"
                       name="about"
                       id="job-input"
                       required minLength="2"
                       maxLength="200"/>
                <span className="form__error job-input-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;