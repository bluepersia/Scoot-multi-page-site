const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavBtn = document.querySelector('.btn-mobile-nav');

let isNavOpen = false;

closeNav();


function toggleNav() {
    if (!isNavOpen)
        openNav();
    else
        closeNav();
}

function openNav() {
    isNavOpen = true;

    mobileNavOverlay.style.display = 'initial';

    setTimeout(() => mobileNavOverlay.classList.add('open'), 16);

    mobileNavBtn.src = '/assets/icons/close.svg';
}

function closeNav() {
    isNavOpen = false;

    mobileNavOverlay.classList.remove('open');

    mobileNavBtn.src = '/assets/icons/hamburger.svg';
}



mobileNavBtn.addEventListener('click', toggleNav);

mobileNavOverlay.addEventListener('transitionend', (e) => !isNavOpen ? mobileNavOverlay.style.display = 'none' : '');