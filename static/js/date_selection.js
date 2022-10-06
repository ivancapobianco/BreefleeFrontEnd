var curday = function(sp){
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //As January is 0.
var yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (yyyy+sp+mm+sp+dd);
};


//show the current date by loading the page
window.onload = function dtFunction() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   document.getElementById("datetoday").value = curday('-');
}


//get a day forward
let next_day = document.querySelector('.next-day');

next_day.onclick = function () {
   var date = new Date(document.getElementById("datetoday").value);
       date.setDate(date.getDate() + 1);
       document.getElementById("datetoday").valueAsDate = date;
}


//get a day back
let prev_day = document.querySelector('.prev-day');

prev_day.onclick = function () {
   var date = new Date(document.getElementById("datetoday").value);
       date.setDate(date.getDate() - 1);
       document.getElementById("datetoday").valueAsDate = date;
}


//set the date of Today
let today_date = document.querySelector('.today-date');

today_date.onclick = function () {
       document.getElementById("datetoday").value = curday('-');
}









