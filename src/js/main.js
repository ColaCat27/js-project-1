import slider from './modules/slider.js';
import modal from './modules/modals.js';
import forms from './modules/forms.js';
import tabs from './modules/tabs.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};

    modal();
    tabs();
    forms();
});