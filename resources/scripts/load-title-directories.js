// =========================================================================================
// Populating the page TITLE
// 
// The page TITLE can include a table of details for spells or monster statblocks
// If title_library does not have a table_row library, the table of details is hidden and only the TITLE path is populated
// =========================================================================================
$(function loadTitleDirectories() {
	var path_array = window.location.pathname.split("/");

	var filepath = "";
	for (let i = 1; i < path_array.length - 1; i++) {
		filepath += "/" + path_array[i];
		document.getElementById("common-populated-title-thead").innerHTML += "<a href='" + filepath + ".html'>" + titleCase(path_array[i].replaceAll('-', ' ').replace('.html', '')) + "</a> > ";
	}

});