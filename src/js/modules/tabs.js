const tabs = () => {

    function bindTabs(triggerSelector, contentSelector, activeClass, inline = false) {
        const triggers = document.querySelectorAll(triggerSelector),
        contents = document.querySelectorAll(contentSelector);
        
        triggers.forEach((item, i) => {
            item.addEventListener('click', () => {
                toggleTabs(item);
                openContent(i);
            });
        });

        function toggleTabs(elem) {
            triggers.forEach(item => {
                item.classList.remove(activeClass);
            })
            if(activeClass) {
                elem.classList.add(activeClass);
            }
        }

        function openContent(index = 0) {
            contents.forEach(item => {
                item.style.display = 'none';
            });
            if (inline) {
                contents[index].style.display = 'inline-block';
            } else {
                contents[index].style.display = 'block';
            }
        };
        openContent();
    }

    bindTabs('.glazing_block', '.glazing_content');
    bindTabs('.balcon_icons_img', '.big_img img', 'do_image_more', true);
    bindTabs('.decoration_item div', '.decoration_content > .row > div', 'after_click');

};

export default tabs;