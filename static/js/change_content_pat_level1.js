document.querySelectorAll('.centralColChange')
  .forEach(e => e.addEventListener('click', _ => changeCentral(e.dataset.id_central)))


function changeCentral(n) {
  let panels = document.querySelectorAll('.central')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')

  let button_panels = document.querySelectorAll('.button input, div.event')
  button_panels.forEach(p => p.classList.remove('active'))
  button_panels[n - 1].classList.add('active')
}