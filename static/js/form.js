$('input[type="radio"]').change(function(){
    if($(this).is(":checked")) {
        $(this).parent('label').addClass("checked");
    } else {
        $(this).parent('label').removeClass("checked");
    }
});