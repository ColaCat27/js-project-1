const modals = () => {

    function bindModal(triggersSelector, modalSelector, btnCloseSelector, overlay = true, allModalSelector) {
        const triggers = document.querySelectorAll(triggersSelector),
        modal = document.querySelector(modalSelector),
        btnClose = document.querySelector(btnCloseSelector),
        allModals = document.querySelectorAll(allModalSelector),
        scroll = calcScroll();

        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target) {
                    allModals.forEach(elem => {
                        elem.style.display = 'none';
                    })
                    console.log(scroll);
                    document.body.style.marginRight = `${scroll}px`;
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
                });
        });

        btnClose.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target) {
                allModals.forEach(item => {
                    document.body.style.marginRight = `0px`;
                    item.style.display = 'none';
                    document.body.style.overflow = '';
                })
            }
        });

        if (overlay) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    allModals.forEach(item => {
                        document.body.style.marginRight = `0px`;
                        item.style.display = 'none';
                        document.body.style.overflow = '';
                    })
                }
            })
        }
    }

    function showModalByTime(selector, time) {
        const modal = document.querySelector(selector);
        setTimeout(() => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time)
    }


    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', true, '[data-modal]');
    bindModal('.phone_link', '.popup', '.popup .popup_close', true, '[data-modal]');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false, '[data-modal]');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, '[data-modal]');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, '[data-modal]');
    // showModalByTime('.popup', 60000);
}

export default modals;