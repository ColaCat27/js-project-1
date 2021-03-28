import slider from './modules/slider.js';
import modal from './modules/modals.js';
import forms from './modules/forms.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modal('.phone_link', '.popup', '.popup .popup_close');
    forms('form', '[name=user_phone]');
});