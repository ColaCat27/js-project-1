const modals = (triggersSelector, modalSelector, btnCloseSelector, overlay = true) => {
    const triggers = document.querySelectorAll(triggersSelector),
          modal = document.querySelector(modalSelector),
          btnClose = document.querySelector(btnCloseSelector);

    function openModal() {
        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
             });
        });
    };

    function closeModal() {
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
            });

        };
    };
    
    openModal();
    closeModal();
}

export default modals;