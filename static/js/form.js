//$('input[type="radio"]').change(function(){
//    if($(this).is(":checked")) {
//        $(this).parent('label').addClass("checked");
//    } else {
//        $(this).parent('label').removeClass("checked");
//    }
//});




function saveChanges() {
var field = document.getElementById("form_pat");
var save_btn = document.getElementById("save_btn");
var save_btn_popup = document.getElementById("save_btn_popup");
var clicked = false
var clicked_field = false

//document.addEventListener("click", function() {
//    multiSelectUpdate();
//})


function form_saved(x) {
x.addEventListener("click", function() {
    clicked = true;
    alert("Correctly saved");
})

}

form_saved(save_btn)


//onblur
field.addEventListener("focusout", function(e) {

    if (clicked == true) {

    } else {
        console.log(e.relatedTarget);
        if (!field.contains(e.relatedTarget)) {
        togglePopup('save_form');
        form_saved(save_btn_popup);
        }
};
});

}

saveChanges()


