import React from 'react';
import PopupWithForm from "./PopupWithForm";

function DeletePopup({onClose, isOpen, onSubmit, isLoading}) {
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit()
    }

    return (
        <PopupWithForm
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}
            title={'Вы уверены?'}
            submitText={isLoading ? 'Удаляем...' : 'Да'}
            name={'delete'}
        />
    )
}

export default DeletePopup;