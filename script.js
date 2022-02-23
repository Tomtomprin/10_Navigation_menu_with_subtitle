const ClassOpenbtn = document.querySelector('.openbtn');
const ClassNavigation = document.querySelector('.navigation');

function ClickOpenbtn() {
    ClassOpenbtn.classList.toggle('active');
    ClassNavigation.classList.toggle('panelactive');
}
ClassOpenbtn.onclick = ClickOpenbtn;