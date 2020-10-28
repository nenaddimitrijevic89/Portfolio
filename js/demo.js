const menuBurger = document.querySelector('#menuBurger');
const menuClose = document.querySelector('#menuClose');
const menuList = document.querySelector('#menuList');
const menu = document.querySelector('.menu')

menu.addEventListener('click', ()=>{
    if(menuBurger.className === 'hidden'){
        menuBurger.className = 'fa fa-bars visible';
        menuClose.className = 'fa fa-close hidden';
    }
    if(menuClose.className==='hidden'){
        menuBurger.className = 'fa fa-bars hidden';
        menuClose.className = 'fa fa-close visible';
    }
    
})