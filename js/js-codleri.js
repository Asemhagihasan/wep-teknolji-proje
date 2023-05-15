const burgerBtn = document.querySelector('.burgerBtn')
const burgerBtnIcon = document.querySelector('.burgerBtn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

burgerBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    burgerBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}