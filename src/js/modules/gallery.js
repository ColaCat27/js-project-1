const gallery = (triggerSelector) => {
    const trigger = document.querySelectorAll(triggerSelector);

    function showPhoto(href) {
        const div = document.createElement('div'),
        img = document.createElement('img');

        div.style.cssText = 'position: fixed; width: 100%; height: 100%; top: 0; left: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.9)';
        img.src = href;

        div.append(img);
        document.body.append(div);

        div.addEventListener('click', (e) => {
            if (e.target === div) {
                div.remove();
                document.body.style.overflow = '';
            }
        });
    }


    trigger.forEach(item => {
       const button = item.parentElement;
       button.addEventListener('click', (e) => {
           e.preventDefault();
           const link = button.getAttribute('href');
            showPhoto(link);
            document.body.style.overflow = 'hidden';
       })
    });
};

export default gallery;