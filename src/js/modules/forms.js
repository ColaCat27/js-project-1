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
                            document.querySelectorAll('[data-modal]').forEach(item => {
                                item.style.display = "none";
                            })
                            div.remove();
                        }, 2000);
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
};

export default forms;