function saveChanges() {
    var field = document.getElementById("form_pat");
    var save_btn = document.getElementById("save_btn");
    var save_btn_popup = document.getElementById("save_btn_popup");
    var clicked = false
    var clicked_field = false
    var clicked_save_popup = false


    function form_saved(x) {
    x.addEventListener("click", function() {
        clicked = true;
        clicked_save_popup = true;

        togglePopup('saved_alert')

        setTimeout(function() {
            togglePopup('saved_alert');
        }, 1000);

        //alert("Correctly saved")

        });
    }

    form_saved(save_btn)
    form_saved(save_btn_popup)

    //eventually try "onblur" instead "focusout"
    field.addEventListener("focusout", function(e) {

        if (clicked == true) {

        } else {

            if (!field.contains(e.relatedTarget)) {
            //console.log(e.relatedTarget);
                togglePopup('save_form');
                //form_saved(save_btn_popup)
                }
            };
        });
}

saveChanges()


