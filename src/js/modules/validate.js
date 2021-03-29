const validate = () => {
    
    function validation(selector, buttonSelector) {
        const inputs = document.querySelectorAll(selector);

        inputs.forEach(item => {

            if (inputs.type === 'text') {
                const button = item.parentElement.querySelector(buttonSelector);
                button.setAttribute('disabled', 'disabled');
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/\D/, '');
                    const allInputs = item.parentElement.querySelectorAll('.form-control');
                    allInputs.forEach(input => {
                        if (input.value.length <= 2) {
                            button.setAttribute('disabled', 'disabled');
                        }  else {
                            button.removeAttribute('disabled');
                        }
                    })
                });
            } else {
                const button = item.parentElement.parentElement.querySelector(buttonSelector);
                button.setAttribute('disabled', 'disabled');
                item.addEventListener('click', () => {
                   button.removeAttribute('disabled'); 
                });
            }
        });


    };

validation('[name=user_phone]', '.button');
validation('#width', '.button');
validation('#height', '.button');
validation('input[type=checkbox]', '.button');
};

export default validate;