const forms = () => {

    function bindForms(formSelector, inputPhoneSelector) {
        const allForms = document.querySelectorAll(formSelector),
        inputs = document.querySelectorAll(inputPhoneSelector);

        function sendData() {
            const message = {
                loading: 'Загрузка...',
                error: 'Ошибка, повторите ещё раз',
                success: 'Спасибо, скоро мы с вами свяжемся'
            };
    
            allForms.forEach(item => {
                item.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const div = document.createElement('div');
                    div.classList.add('result');
    
                    const formData = new FormData(item);
                    div.textContent = message.loading;
                    item.append(div);
    
                    postData('/assets/server.php', formData)
                    .then(res => {
                        div.textContent = message.success;
                    })
                    .catch(e => {
                        div.textContent = message.error;
                    })
                    .finally(() => {
                        setTimeout(() => {
                            div.remove();
                        }, 4000);
                    })
                })
            });
    
    
            async function postData(url, data) {
                let res;
                if (data) {
                        res = await fetch(url, {
                        method: 'POST',
                        body: data
                    });
                }
                return res;
            };
        };
    
        function validation() {
            inputs.forEach(item => {
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/\D/, '');
                });
            });
        };
    
        validation();
        sendData();
    }

    bindForms('form', '[name=user_phone]');
};

export default forms;