import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onSubmit, isLoading}) {
    const [cardName, setCardName] = useState('');
    const [cardLink, setCardLink] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({name: cardName, link: cardLink})
        setCardName('');
        setCardLink('');
    }

    function handleChangeCardName(e) {
        setCardName(e.target.value)
    }

    function handleChangeCardLink(e) {
        setCardLink(e.target.value)
    }

    return (
        <PopupWithForm
            title={'Новое место'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            submitText={isLoading ? 'Добавляем...' : 'Добавить'}
            name={'add-card'}>
            <fieldset className="form__profile-info">
                <input
                    className="form__input form__input_card_heading"
                    type="text" placeholder="Название"
                    name="name"
                    value={cardName || ''}
                    onChange={handleChangeCardName}
                    id="card-head-input"
                    required
                    minLength="2"
                    maxLength="30"/>
                <span className="form__error card-head-input-error"/>
                <input
                    className="form__input form__input_card_link"
                    type="url"
                    value={cardLink || ''}
                    onChange={handleChangeCardLink}
                    placeholder="Ссылка на картинку"
                    name="link"
                    id="card-link-input"
                    required/>
                <span className="form__error card-link-input-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup;