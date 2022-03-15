// This function sorts the entries in ascending or descending order based on the column selected and number of clicks applied
function sortTable(n) {

	// Defining variables to be used
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("dynamic-index");
	switching = true;

	// Set the sorting direction to ascending:
	dir = "asc";
	// A loop that will continue until no switching has been done
	while (switching) {

		// Switching is not complete
		switching = false;
		rows = table.rows;

		// Loop through all table rows besides the header
		for (i = 1; i < (rows.length - 1); i++) {

		// Ensure that switching is false
		shouldSwitch = false;

		// Reading two elements to compare from this row and the following row
		x = rows[i].getElementsByTagName("TD")[n];
		y = rows[i + 1].getElementsByTagName("TD")[n];

		// Checking whether we are comparing string characters or converting to integers
		if (/\d/.test(parseInt(x.innerHTML.toLowerCase().replace(/\D/g,'')))) {
			var xcompare = parseInt(x.innerHTML.toLowerCase().replace(/\D/g,''));
			var ycompare = parseInt(y.innerHTML.toLowerCase().replace(/\D/g,''));
		} else {
			var xcompare = x.innerHTML.toLowerCase();
			var ycompare = y.innerHTML.toLowerCase();
		}

		// Perform comparisons and switch entries based on direction of sort
		if (dir == "asc") {
			
			// If comparison returns true, entries should be switched
			if (xcompare > ycompare) {
				shouldSwitch = true;
				break;
			}
		} else if (dir == "desc") {
			
			// If comparison returns true, entries should be switched
			if (xcompare < ycompare) {
				shouldSwitch = true;
				break;
			}
		}
		}

		// After breaking from the previous loop, we check to see if this entry is marked for switching
		if (shouldSwitch) {
		
		// Performing the switch, setting switching to true, and incrementing the switch counter
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		switchcount ++;
		} else {
		// If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
		if (switchcount == 0 && dir == "asc") {
			dir = "desc";
			switching = true;
		}
		}
	}
}
