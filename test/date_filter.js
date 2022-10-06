var curday = function(sp){
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //As January is 0.
var yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (yyyy+sp+mm+sp+dd);
};

window.onload = function dtFunction() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   document.getElementById("datetoday").value = curday('-');
}


let next_day = document.querySelector('.next-day');

next_day.onclick = function () {
   var date = new Date(document.getElementById("datetoday").value);
       date.setDate(date.getDate() + 1);
       document.getElementById("datetoday").valueAsDate = date;
}

let prev_day = document.querySelector('.prev-day');

prev_day.onclick = function () {
   var date = new Date(document.getElementById("datetoday").value);
       date.setDate(date.getDate() - 1);
       document.getElementById("datetoday").valueAsDate = date;
}






