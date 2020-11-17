$('#menu').click(() => {
  $('#menuBurger').toggleClass('inactive')
  $('#menuClose').toggleClass('inactive')
  $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

$('.project').hover(
  function () {
    $('project h5').addClass('inactive')
    $(this).find('h5').removeClass('inactive').addClass('absolute').hide().fadeIn(400)
  },
  function () {
    $(this).find("h5").hide().addClass('inactive').removeClass('absolute')
  }
)