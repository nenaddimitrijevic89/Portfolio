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

$('.contact__icon').hover(
  function () {
    $(this).addClass('animate__animated animate__heartBeat')
  },
  function () {
    $(this).removeClass('animate__animated animate__heartBeat')
  }
)

$('.circle').hover(
  function () {
    $(this).removeClass('animate__jackInTheBox').addClass('animate__heartBeat')
  },
  function () {
    $(this).removeClass('animate__heartBeat')
  }
)

setInterval((function () { $('#developer').fadeIn(2500).fadeOut(1000) }), 1000);