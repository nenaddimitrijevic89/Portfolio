$('#menu').click(() => {
  $('#menuBurger').toggleClass('inactive')
  $('#menuClose').toggleClass('inactive')
  $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

$('.project').hover(
  function () {
    $('.project h5').addClass('inactive')
    $(this).find('h5').removeClass('inactive').addClass('absolute').hide().fadeIn(200)
  },
  function () {
    $(this).find("h5").hide().addClass('inactive').removeClass('absolute')
  }
)

setInterval((function () { $('#developer').fadeIn(2500).fadeOut(1000) }), 1000);