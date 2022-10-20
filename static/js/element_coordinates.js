
//finds the y coordinate of an element identified by CSS-class and
//sets the height of the element to 100vh - y

function el_height_coordinates(x) {

    //var element = document.getElementById(x);
    var element = document.querySelector(x)
    var rect = element.getBoundingClientRect();

    console.log(rect.top, rect.bottom, rect.y)

    var height = 'calc(100vh - ' + rect.y.toString() + 'px - 10px)'

    element.style.setProperty(`height`, height);
}

//el_height_coordinates("documents_list")
el_height_coordinates('.central.active .content')
el_height_coordinates('.vtl')
el_height_coordinates('.tasks-list')
//el_height_coordinates('.hometable div')
el_height_coordinates('.table_body')


//similar to that before, it sets the height of a CSS-variable (thought for pseudo elements)
// to scrollHeight of an element
//(measurement of the height of an element's content including content not visible on the screen due to overflow)

function pseudo_el_height_coordinates(x, css_var) {

    var element = document.querySelector(x)
    //var rect = element.getBoundingClientRect();

    var height = element.scrollHeight.toString() + 'px'

    element.style.setProperty(css_var, height);
}

pseudo_el_height_coordinates('.vtl', '--height_documents_line')

