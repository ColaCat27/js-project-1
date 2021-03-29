const modals = () => {

    function bindModal(triggersSelector, modalSelector, btnCloseSelector, overlay = true) {
        const triggers = document.querySelectorAll(triggersSelector),
        modal = document.querySelector(modalSelector),
        btnClose = document.querySelector(btnCloseSelector);

        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
                });
        });

        btnClose.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target) {
                modal.style.display = 'none';
                document.body.style.overflow = '';

            }
        });

        if (overlay) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
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

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close', true);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    // showModalByTime('.popup', 60000);
}

export default modals;