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

