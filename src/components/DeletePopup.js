import React from 'react';
import PopupWithForm from "./PopupWithForm";

function DeletePopup({onClose, isOpen, onSubmit, submitText}){
    function handleSubmit(e){
        e.preventDefault();
        onSubmit()
    }
    return(
        <PopupWithForm onClose={onClose}
                       isOpen={isOpen}
                       onSubmit={handleSubmit}
                       title={'Вы уверены?'}
                       submitText={submitText}
                       name={'delete'}
        />
    )
}

export default DeletePopup;