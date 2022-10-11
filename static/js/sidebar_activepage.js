const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.navigation ul li a').forEach(link => {

    if (link.href.includes(`${activePage}`)) {
    link.parentElement.classList.add('activelinknav');
    link.parentElement.querySelector(".title").classList.add('active');
  }

   else if (link.href == "http://localhost:63342/pythonProject/static/000") {
    link.parentElement.classList.add('passive');
   }

   else {
   }
});




