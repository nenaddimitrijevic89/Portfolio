$('#menu').click(() => {
    $('#menuBurger').toggleClass('inactive')
    $('#menuClose').toggleClass('inactive')
    $('#menuList').toggleClass('hidden').fadeOut(0).fadeIn(800);
})