$('#menu').click(() => {
  $('#menuBurger').toggleClass('inactive')
  $('#menuClose').toggleClass('inactive')
  $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

$('.project').hover(
  function () {
    $(this).find('h5').removeClass('inactive').addClass('absolute').hide().fadeIn(400)
  },
  function () {
    $(this).find("h5").hide().removeClass('absolute').addClass('inactive')
  }
)

if(!!false)
console.log("a")
// console.log("b")
// console.log("c")