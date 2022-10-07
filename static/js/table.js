// substitute myArray with the uploaded info
// check the href in the function buildTable(data)

	var myArray = [
	    {'termindatum': '07.10.2022', 'uhrzeit': '08:00', 'name':'Michael', 'age':'30', 'birthdate':'11/10/1989', 'termin': 'sprechstunde'},
	    {'termindatum': '07.10.2022', 'uhrzeit': '08:15', 'name':'Mila', 'age':'32', 'birthdate':'10/1/1989', 'termin': 'stationär'},
	    {'termindatum': '07.10.2022', 'uhrzeit': '08:30', 'name':'Paul', 'age':'29', 'birthdate':'14/10/1990', 'termin': 'stationär'},
	    {'termindatum': '06.11.2022', 'uhrzeit': '08:45', 'name':'Dennis', 'age':'25', 'birthdate':'29/11/1993', 'termin': 'sprechstunde'},
	    {'termindatum': '08.10.2022', 'uhrzeit': '09:00', 'name':'Tim', 'age':'27', 'birthdate':'12/3/1991', 'termin': 'OP'},
	    {'termindatum': '07.10.2022', 'uhrzeit': '08:15', 'name':'Erik', 'age':'24', 'birthdate':'31/10/1995', 'termin': 'sprechstunde'},
	]


// Create Table

	buildTable(myArray)
    buildTableHead(myArray)

    function buildTableHead(data) {
        var tablehead = document.getElementById('tableHead')
        var ar = Object.keys(data[0])

        tablehead.innerHTML = ''
        var th = ''

        for (var i = 0; i < ar.length; i++){
			var row = `<th data-column="${ar[i]}" data-order="desc">${ar[i].charAt(0).toUpperCase()+ar[i].slice(1)} &#9650</th>`
		    th += row
        }

		tablehead.innerHTML = `<tr>${th}</tr>`
	}

	function buildTable(data){
		var table = document.getElementById('tableBody')
		var ar = Object.keys(data[0])
		console.log(data[0][ar[0]])

		table.innerHTML = ''

		for (var i = 0; i < data.length; i++){
		    var rows = ''
		    for (var e = 0; e < ar.length; e++){
		        var row = `<td>${data[i][ar[e]]}</td>`
					rows += row

					section = `<tr data-href="/pythonProject/static/patient.html">
		                    ${rows}
		              </tr>`
		    }

            table.innerHTML += section
		}
	}


//sort table columns
    	$('th').on('click', function(){
		var column = $(this).data('column')
		var order = $(this).data('order')
		var text = $(this).html()
		text = text.substring(0, text.length - 1)

		if(order == 'desc'){
			$(this).data('order', "asc")
			myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
			text += '&#9660'

		}else{
			$(this).data('order', "desc")
			myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
			text += '&#9650'

		}
		$(this).html(text)
		buildTable(myArray)
	})



//link rows of a table
$(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", function () {
        window.location.href = this.dataset.href;
    });
});