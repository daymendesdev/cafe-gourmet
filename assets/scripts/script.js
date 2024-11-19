function toggleMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./icons/menu.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./icons/close.svg";
    }
}