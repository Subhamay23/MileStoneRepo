const menuOpenIcon = document.querySelector('#menu_bar i');
const mobileMenu = document.querySelector('#mobile_menu');
menuOpenIcon.onclick = function(){
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    menuOpenIcon.classList = isOpen ? "bx bx-x text-5xl text-black" : "bx bx-menu text-5xl text-black";
    isOpen ? document.querySelector('body').classList.add('overflow-hidden') : document.querySelector('body').classList.remove('overflow-hidden');
};
