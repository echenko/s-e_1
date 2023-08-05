const menu = document.querySelector('.main-container');

menu.addEventListener('click', close);


function close () {
    document.getElementById("check-menu").checked = false;
}