
document.addEventListener('DOMContentLoaded', (event) => {
    const demoBtn = document.querySelector('.box__btn')
    const modal = document.querySelector('.modal-container')
    const modalCancelBtn = document.querySelector('.modal__cancel')
    const modalResetBtn = document.querySelector('.modal__reset-btn')
    const modalLoginBtn = document.querySelector('.modal__login-btn')
    const modalRegistrationBtn = document.querySelector('.modal__registration-btn')
    const modalCheckbox = document.querySelector('.modal__checkbox')

    const modalForm = document.querySelector('.modal__form')

    const inputLogin = document.querySelector('.input-login')
    const inputPassword = document.querySelector('.input-password')

    const notif = document.querySelector('.notification')
    const notifText = document.querySelector('.notification__text')

    demoBtn.addEventListener('click', function () {
        modal.classList.add('modal-active')
    })

    modalCancelBtn.addEventListener('click', function () {
        modal.classList.remove('modal-active')
    })

    modalForm.onsubmit = function (event) {
        event.preventDefault();
        console.log("Form submitted");
        if (!inputLogin.value && !inputPassword.value) {
            notification('Введите логин и пароль')
        } else if (!inputLogin.value) {
            notification('Введите логин')
        } else if (!inputPassword.value) {
            notification('Введите пароль')
        } else {
            notification(`Добро пожаловать ${inputLogin.value}`)
            modal.classList.remove('modal-active')
            inputLogin.value = ''
            inputPassword.value = ''
        }
    }

    const notification = function (message) {
        notifText.textContent = message
        notif.classList.add('notification-active')
        setTimeout(() => {
            notif.classList.remove('notification-active')
        }, 2000)
    }

});