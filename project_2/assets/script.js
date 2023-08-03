// dark mode

const menuOpenIcon = document.querySelector('.menu_icon');
const menuCloseIcon = document.querySelector('.close_icon')
const mobileMenu = document.querySelector('.mobile_menu');
menuOpenIcon.onclick = function(){
    mobileMenu.classList.add('open');
};
menuCloseIcon.onclick = function(){
    mobileMenu.classList.remove('open');
};

window.addEventListener('scroll',()=>{
    mobileMenu.classList.remove('open',window.screenY > 0);
})