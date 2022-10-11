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
			var row = `<th data-column="${ar[i]}" data-order="desc">${ar[i].charAt(0).toUpperCase()+ar[i].slice(1)}</th>` //&#9650
		    th += row
        }

		tablehead.innerHTML = `<tr>${th}</tr>`
	}

	function buildTable(data){
		var table = document.getElementById('tableBody')
		var ar = Object.keys(data[0])


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

/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});




//link rows of a table
$(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", function () {
        window.location.href = this.dataset.href;
    });
});




//sort table columns ALTERNATIV
    	//$('th').on('click', function(){
		//var column = $(this).data('column')
		//var order = $(this).data('order')
		//var text = $(this).html()
		//text = text.substring(0, text.length - 1)

		//if(order == 'desc'){
		//	$(this).data('order', "asc")
		//	myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
		//	text += '&#9660'

		//}else{
		//	$(this).data('order', "desc")
		//	myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
		//	text += '&#9650'

		//}
		//$(this).html(text)
		//buildTable(myArray)
	//})