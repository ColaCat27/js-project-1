const changeModalState = (state) => {
    function takeState(event, element) {
        const elems = document.querySelectorAll(element);
        elems.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state.form = i;
                        break;
                    case 'INPUT':
                        if (item.id === 'width') {
                            state.width = item.value;
                        } else if (item.id === 'height') {
                            state.height = item.value;
                        } else if (item.classList.contains('checkbox')) {
                            if (i === 0) {
                                state.profile = 'Холодное';
                            } else {
                                state.profile = 'Теплое';
                            }
                            elems.forEach((box, j) => {
                                box.checked = false;
                                if (j === i) {
                                    box.checked = true;
                                } 
                             });
                        }
                        break;
                    case 'SELECT':
                        state.type = item.value;
                        break;
                }
                console.log(state);
            });
        })
    }
    takeState('click', '.balcon_icons_img');
    takeState('input', '#width');
    takeState('input', '#height');
    takeState('click', '#view_type');
    takeState('click', '.checkbox');
};

export default changeModalState;