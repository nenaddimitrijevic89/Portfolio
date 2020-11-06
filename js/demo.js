$('#menu').click(() => {
    $('#menuBurger').toggleClass('inactive')
    $('#menuClose').toggleClass('inactive')
    $('#menuList').toggleClass('hidden').hide().fadeIn(800);
})

let a = [1,2,3,4,5,6,7,9,10],
  count = 10,
  missing = [];

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}

console.log(missing)
