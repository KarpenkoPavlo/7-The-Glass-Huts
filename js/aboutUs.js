/* ContactUs start*/

// Якщо натискаємо на 'contact us' то в коді нижче:
// overlay - це блок на всю сторінку сірого кольору який стане видимим
// contactUs__container - це блок з формами який стає видимим
function contactUs() {
    let contactUs__container = document.querySelector('.contactUs__container');
    let overlay = document.querySelector('.overlay');

    if(contactUs__container.style.display = 'none') {
        contactUs__container.style.display = 'block';
        overlay.style.display = 'block';
    } 
}
// Якщо натискаємо на 'SEND' то в коді нижче:
// overlay - стане не видимим
// contactUs__container - стане не видимим
function aboutButtHide() {
    let contactUs__container = document.querySelector('.contactUs__container');
    let overlay = document.querySelector('.overlay');

    if(contactUs__container.style.display = 'block') {
        contactUs__container.style.display = 'none';
        overlay.style.display = 'none';
    }
}
// Це можливість закрити блок з формами кнопкой Escape = Esc
document.addEventListener('keydown', (event) => {
    if(event.code == 'Escape') {
        aboutButtHide();
    }
})


/* ContactUs end*/