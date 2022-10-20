var clicked = false


function form_saved(x) {

    x.addEventListener("click", function() {
        var inputs = document.getElementById("form_pat").getElementsByTagName("input");

        clicked = true;
        togglePopup('saved_alert')

        setTimeout(function() {
            togglePopup('saved_alert');
        }, 2000);
        //alert("Correctly saved")
        });
    }


function saveChanges() {

    var field = document.getElementById("form_pat");
    var save_btn = document.getElementById("save_btn");
    var save_btn_popup = document.getElementById("save_btn_popup");


    form_saved(save_btn)
    form_saved(save_btn_popup)

    //eventually try "onblur" instead "focusout"
    field.addEventListener("focusout", function(e) {
        var inputs = document.getElementById("form_pat").getElementsByTagName("input");

        if (clicked == true) {
        } else {
            if (!field.contains(e.relatedTarget)) {
                togglePopup('save_form');
                }
            };
        });


    field.addEventListener("change", function() {
        clicked = false;
        //alert(clicked)
        });


}

saveChanges()



