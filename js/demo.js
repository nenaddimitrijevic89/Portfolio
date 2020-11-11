$('#menu').click(() => {
  $('#menuBurger').toggleClass('inactive')
  $('#menuClose').toggleClass('inactive')
  $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

$('.project').hover(
  function () {
    $(this).find('h5').removeClass('inactive').addClass('absolute')
  },
  function () {
    $(this).find("h5").addClass('inactive').removeClass('absolute')
  }
)