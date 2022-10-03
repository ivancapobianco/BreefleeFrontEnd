document.querySelectorAll('.menu_navigation nav ul a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))


function change(n) {
  let panels = document.querySelectorAll('.showcontent')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')

  let button_panels = document.querySelectorAll('.menu_navigation nav a')
  button_panels.forEach(p => p.classList.remove('active'))
  button_panels[n - 1].classList.add('active')
}