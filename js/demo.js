$('#menu').click(() => {
  $('#menuBurger').toggleClass('inactive')
  $('#menuClose').toggleClass('inactive')
  $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

$('.project').hover(
  function () {
    $(this).find('h5').removeClass('inactive')
  },
  function () {
    $(this).find("h5").addClass('inactive')
  }
)

let a = [1, 2, 3, 4, 5, 6, 9, 10],
  count = 10,
  missing = [];

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}

console.log(missing)
