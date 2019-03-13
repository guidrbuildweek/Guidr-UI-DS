let MenuBtn = document.querySelector('.menuToggle');
let Nav = document.querySelector('.navBar');


MenuBtn.addEventListener('click', () => {
    toggle();
});


function toggle() {
    Nav.classList.toggle('navBar')
}

