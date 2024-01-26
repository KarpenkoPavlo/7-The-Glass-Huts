function contactUs() {
    let contactUs__container = document.querySelector('.contactUs__container');
    let overlay = document.querySelector('.overlay');
    let wrapper = document.querySelector('.wrapper');

    if(contactUs__container.style.display = 'none') {
        contactUs__container.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('no-scroll');
        wrapper.style.marginRight = '8px';
    } 
}

function aboutButtHide() {
    let contactUs__container = document.querySelector('.contactUs__container');
    let overlay = document.querySelector('.overlay');
    let wrapper = document.querySelector('.wrapper');

    if(contactUs__container.style.display = 'block') {
        contactUs__container.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
        wrapper.style.marginRight = '-8px';
    }
}