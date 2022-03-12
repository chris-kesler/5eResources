// =========================================================================================
// Populating the page TITLE
// 
// The page TITLE can include a table of details for spells or monster statblocks
// If title_library does not have a table_row library, the table of details is hidden and only the TITLE path is populated
// =========================================================================================
$(function populatePageTitle() {

	var path_array = window.location.pathname.split("/");
	var page_name = path_array.pop();

	page_args = readArgs();
	
	if (page_name !== "entry-page.html") {
		document.getElementById("populated-title-table-thead").innerHTML += titleCase(page_name.replaceAll('-', ' ').replaceAll('.html', ''));
	} else if (page_name === "entry-page.html" && page_args != undefined) {
		document.getElementById("populated-title-table-thead").innerHTML += titleCase(page_args.replaceAll('-', ' ').replaceAll('.html', ''));
	} else {
		document.getElementById("populated-title-table-thead").innerHTML += "Hmm, can't seem to read the filename for some reason";

	}
});