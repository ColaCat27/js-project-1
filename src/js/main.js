import slider from './modules/slider.js';
import modal from './modules/modals.js';
import forms from './modules/forms.js';
import tabs from './modules/tabs.js';
import changeModalState from './modules/changeModalState.js';
import validate from './modules/validate.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    changeModalState(modalState);
    modal();
    tabs();
    forms(modalState);
    validate();
});