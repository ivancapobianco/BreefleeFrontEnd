//change the condition as needed
const condition = "admin"

let submit_button = document.querySelector('.submit_button');
const form = document.querySelector("#loginform");
let progress = document.querySelector('.progress');
let input_box = document.querySelectorAll('.input_box input');
let loginerror = document.querySelector('.loginerror');


//checks the username and password
function check_login () {
            var user_id = document.getElementById("userid").value;
            var user_psw = document.getElementById("psswid").value;

        if (user_id == condition && user_psw == condition) {
            id_psw = true;
            }
        else {
            id_psw = false;
            }
        return id_psw
}



//loading animation
function id_psw_true() {
    progress.style.display = "flex";
    submit_button.style.display = "none";
    input_box.forEach(i => {i.disabled = true;});
            };


//raise error message changing css
function id_psw_false() {
    loginerror.style.display = "flex";
};



form.addEventListener("submit", function (event) {

            check_login();

            if(id_psw == true) {
                id_psw_true();
                }
            else {
                id_psw_false();
                event.preventDefault();
            }

});


//refresh page when a link points to this page
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted ||
                         ( typeof window.performance != "undefined" &&
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});



function show_password() {
  var x = document.getElementById("psswid");
  var eyes = document.querySelectorAll('.pssweye_icon');

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  eyes.forEach(eye => {
            if (eye.style.display == 'none') {
             eye.style.removeProperty(`display`, `none`);
            } else {
             eye.style.setProperty(`display`, `none`);
            }

        })

}