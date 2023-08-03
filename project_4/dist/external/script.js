const menuOpenIcon = document.querySelector('.menu_icon i');
const mobileMenu = document.querySelector('.mobile_menu');
menuOpenIcon.onclick = function(){
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    menuOpenIcon.classList = isOpen ? "bx bx-x text-4xl text-white cursor-pointer" : "bx bx-menu text-4xl text-white cursor-pointer";
};
