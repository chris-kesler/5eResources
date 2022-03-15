// A function that populates the list entries
$(function readJSON() {

	// Reading the name of this file
	var page = window.location.pathname.split("/").pop();

	// Setting variables based on file name
	var title = "---";
	var entry_type = "---"
	if (page.includes("boons")) {
		var title = "Boons";
		var entry_type = "School";
	} else if (page.includes("enhancements")) {
		var title = "Enhancements";
		var entry_type = "Type";
	} else if (page.includes("techniques")) {
		var title = "Techniques";
		var entry_type = "Discipline";
	}

	// Populating the Include Filters using the script to allow for dynamic changes in the future
	document.getElementById("include-filters").innerHTML = 
		"<input type='text' id='dynamic-index-inputInclude0' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Name. . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude1' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Level. . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude2' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by " + entry_type + ". . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude7' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Attack/Save. . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude8' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Damage/Effect. . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude10' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Classes. . .'>" + 
		"<input type='text' id='dynamic-index-inputInclude11' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Include by Source. . .'>";

	// Populating the Exclude Filters 
	document.getElementById("exclude-filters").innerHTML = 
		"<input type='text' id='dynamic-index-inputExclude0' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Name. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude1' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Level. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude2' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by School. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude7' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Attack/Save. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude8' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Damage/Effect. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude10' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Classes. . .'>" + 
		"<input type='text' id='dynamic-index-inputExclude11' class='dynamic-index-input' onkeyup='FilterTableFunction()' placeholder='Exclude by Source. . .'>";

	// Populating table header, which includes buttons to sort the entries in ascending and descending order based on column selected
	document.getElementById("dynamic-index-thead").innerHTML = 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(0)'>Name</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(1)'>Level</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(2)'>" + entry_type + "</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(3)'>Attack/Save</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(4)'>Damage/Effect</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(5)'>Classes</button></th>" + 
		"<th><button class='dynamic-index-button-sort' onclick='sortTable(6)'>Source</button></th>";
});
