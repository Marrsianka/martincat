function openWindow() {
    let window = document.querySelector('.window');
    window.classList.add('window-show');
}

function openWindow2() {
    let window = document.querySelector('.window2');
    window.classList.add('window-show');
}

function closeWindow() {
    let window = document.querySelector('.window-show');
    window.classList.remove('window-show');
}

function openHamburger() {
    let hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.add('hamburger-menu-open');
}

function closeHamburger() {
    let hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.remove('hamburger-menu-open');
}