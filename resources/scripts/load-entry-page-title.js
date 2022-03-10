// A function that capitalizes the first letter of each word in a string
function titleCase(str) {
var split_string = str.toLowerCase().split(' ');
for (var i = 0; i < split_string.length; i++) {
	split_string[i] = split_string[i].charAt(0).toUpperCase() + split_string[i].substring(1);
}
return split_string.join(' ');
}

// The function that populates all page data into preset elements
$(function populatePageTitle() {

// =========================================================================================
// Populating the page TITLE
// 
// The page TITLE can include a table of details for spells or monster statblocks
// If title_library does not have a table_row library, the table of details is hidden and only the TITLE path is populated
// =========================================================================================
	var page_array = window.location.pathname.split("/");

	var page_array_length = page_array.length;

	if (page_array.length == 5) {
		var page_title = page_array.pop();
		var page_category = page_array.pop();
		var page_directory = page_array.pop();
		var page_subsite = page_array.pop();
		var page_site = page_array.pop();
	} else if (page_array.length == 4) {
		var page_title = page_array.pop();
		var page_directory = page_array.pop();
		var page_subsite = page_array.pop();
		var page_site = page_array.pop();
	} else if (page_array.length == 3) {
		var page_title = page_array.pop();
		var page_subsite = page_array.pop();
		var page_site = page_array.pop();
	} else if (page_array.length == 2) {
		var page_title = page_array.pop();
		var page_site = page_array.pop();
	} else if (page_array.length == 1) {
		var page_title = page_array.pop();
	} 

	var titleCompleted = false;
	if (page_subsite != undefined) {
		document.getElementById("page-title-path").innerHTML = "<a href='/" + page_subsite + ".html'>" + titleCase(page_subsite.replaceAll('-', ' ').replaceAll('.html', '')) + "</a>";
	} 
	if (page_directory != undefined && !titleCompleted) {
		document.getElementById("page-title-path").innerHTML += " > <a href='/" + page_subsite + "/" + page_directory + ".html'>" + titleCase(page_directory.replaceAll('-', ' ').replaceAll('.html', '')) + "</a>";
	}
	if (page_category != undefined && !titleCompleted) {
		document.getElementById("page-title-path").innerHTML += " > <a href='/" + page_subsite + "/" + page_directory + "/" + page_category + ".html'>" + titleCase(page_category.replaceAll('-', ' ').replaceAll('.html', '')) + "</a>";
	}
});