function navToggle() {
  let btn = document.getElementById('menuBtn');
  let nav = document.getElementById('menu');

  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
}