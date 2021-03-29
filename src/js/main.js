import slider from './modules/slider.js';
import modal from './modules/modals.js';
import forms from './modules/forms.js';
import tabs from './modules/tabs.js';
import changeModalState from './modules/changeModalState.js';
import validate from './modules/validate.js';
import timer from './modules/timer.js';
import gallery from './modules/gallery.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2021-04-23';

    changeModalState(modalState);
    modal();
    tabs();
    forms(modalState);
    validate();
    timer('.container1', deadline);
    gallery('.preview');
});