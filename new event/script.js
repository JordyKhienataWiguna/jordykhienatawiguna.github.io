// Dark Mode
let btn = document.getElementById('btn');
let btnText = document.getElementById('btnText');
let btnIcon = document.getElementById('btnIcon');

btn.onclick = function () {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.toggle('dark-theme')) {
    btnIcon.src = '../Asset/images/sun.png';
    btnText.innerHTML = 'Light';
  } else {
    btnIcon.src = '/Asset/images/moon.png';
    btnText.innerHTML = 'Dark';
  }
};
