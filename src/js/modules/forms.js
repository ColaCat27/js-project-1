const forms = (state) => {

    function bindForms(formSelector) {
        const allForms = document.querySelectorAll(formSelector);

        function sendData() {
            const message = {
                loading: 'Загрузка...',
                error: 'Ошибка, повторите ещё раз',
                success: 'Спасибо, скоро мы с вами свяжемся'
            };
    
            allForms.forEach(item => {
                item.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const formData = new FormData(item);

                    if (state) {
                        for (let key in state) {
                            formData.append(key, state[key]);
                        }
                        console.log(formData);
                    }

                    const div = document.createElement('div');
                    div.classList.add('result');
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
        sendData();
    }

    bindForms('form');
        
    function validation(selector) {
        const inputs = document.querySelectorAll(selector);
        inputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
    };

    validation('[name=user_phone]');
    validation('#width');
    validation('#height');
};

export default forms;