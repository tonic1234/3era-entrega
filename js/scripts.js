const menuMobileBtn = document.getElementById('menuMobileBtn')
const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn')
const menuMobile = document.getElementById('menuMobile')


menuMobileBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('menuMobileC');
});
closeMobileMenuBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('menuMobileC');
});
