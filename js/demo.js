const menuBurger = document.querySelector('#menuBurger');
const menuClose = document.querySelector('#menuClose');
const menuList = document.querySelector('#menuList');
const menu = document.querySelector('#menu')

menu.addEventListener('click', ()=>{
    if(menuBurger.className === 'fa fa-bars'){
        menuBurger.className = 'fa fa-bars inactive';
        menuClose.className = 'fa fa-close';
        menuList.className='';
    }else{
        menuBurger.className = 'fa fa-bars';
        menuClose.className = 'fa fa-close inactive';
        menuList.className='hidden';
    }
    
})