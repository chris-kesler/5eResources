// A function that populates the list entries
$(function readJSON() {

	// Reading the name of this file
	var page = window.location.pathname.split("/").pop();

	// Setting variables based on file name
	var title = "---";
	var entry_type = "---"
	if (page.includes("spells")) {
		var title = "Spells";
		var entry_type = "School";
	} else if (page.includes("superpowers")) {
		var title = "Superpowers";
		var entry_type = "Science";
	} else if (page.includes("technologies")) {
		var title = "Technologies";
		var entry_type = "Type";
	}

	// Populating the Include Filters using the script to allow for dynamic changes in the future
	document.getElementById("include-filters").innerHTML = 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude0' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Name. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude1' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Level. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude2' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by " + entry_type + ". . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude3' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Casting Time. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude4' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Range/Area. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude5' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Components. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude6' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Duration. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude7' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Attack/Save. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude8' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Damage/Effect. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude9' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Overchargeable. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude10' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Classes. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputInclude11' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Include by Source. . .'>";

	// Populating the Exclude Filters 
	document.getElementById("exclude-filters").innerHTML = 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude0' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Name. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude1' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Level. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude2' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by School. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude3' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Casting Time. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude4' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Range/Area. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude5' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Components. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude6' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Duration. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude7' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Attack/Save. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude8' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Damage/Effect. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude9' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Overchargeable. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude10' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Classes. . .'>" + 
		"<input type='text' id='directory-page-dynamic-table-query-inputExclude11' class='directory-page-dynamic-table-query-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Source. . .'>";

	// Populating table header, which includes buttons to sort the entries in ascending and descending order based on column selected
	document.getElementById("directory-page-dynamic-table-header").innerHTML = 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(0)'>Name</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(1)'>Level</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(2)'>" + entry_type + "</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(3)'>Casting Time</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(4)'>Range/Area</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(5)'>Components</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(6)'>Duration</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(7)'>Attack/Save</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(8)'>Damage/Effect</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(9)'>Overchargeable</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(10)'>Classes</button></th>" + 
		"<th><button class='directory-page-dynamic-table-sort-button' onclick='sortTable(11)'>Source</button></th>";
});
