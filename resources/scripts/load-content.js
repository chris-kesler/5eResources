
// The function that populates all page data into preset elements
$(function populatePageData() {


	var path_array = window.location.pathname.split("/");

	// Reading data from our JSON file
	$.getJSON(`/${path_array[1]}/${path_array[2]}.json`, function(data) {

		// Looping through the JSON data 
		$.each(data.entries, function(i, f) {

			page_args = readArgs();

			// Finding the entry that matches this file's args
			if (f.entry_name.toLowerCase().replace(/\s/g, '-').replace("'", "") == page_args) {

				// If Title Library Exists
				if (f.title_library != undefined) {
					for (var x = 0; f.title_library.length > x; x++) {
						if (f.title_library[x].table_row != undefined) {
							var table_row1 = "<tr>";
							var table_row2 = "<tr>";
							for (var y = 0; f.title_library[x].table_row.length > y; y++) {
								if (f.title_library[x].table_row[y].heading != undefined && f.title_library[x].table_row[y].content != undefined && f.title_library[x].table_row[y].heading !== "" && f.title_library[x].table_row[y].content !== "") {
									table_row1 += "<th style='width: 15vw'>" + f.title_library[x].table_row[y].heading + "</th>";
									table_row2 += "<td style='width: 15vw'>" + f.title_library[x].table_row[y].content + "</td>";
								}
							}
							table_row += "</tr>";
							if (!table_row1.includes("<tr></tr>") && !table_row2.includes("<tr></tr>")) {
								$(table_row1).appendTo("#common-populated-title tbody");
								$(table_row2).appendTo("#common-populated-title tbody");
							}
						}
					}
				}


// =========================================================================================
// Populating the page ATTRIBUTES
// 
// The ATTRIBUTES table can include a table of details for wiki entries such as monsters or planescapes
// If attribute_library does not have a additional entries, the table of details is hidden and only the ATTRIBUTE image is populated
// =========================================================================================

				// If Attribute Library Exists
				if (f.attribute_library != undefined) {
					if (f.attribute_library[0] != undefined) {
						
						// Table Row #1:  Rehosted Art
						if (f.attribute_library[0].img_rehosted != undefined && f.attribute_library[0].img_rehosted_source != undefined && f.attribute_library[0].img_rehosted !== "" && f.attribute_library[0].img_rehosted_source !== "") {
							var table_row = "<tr><th colspan='2'><img id='cc-populated-attributes-image' alt='" + f.entry_name + "' target='blank' src='" + f.attribute_library[0].img_rehosted + "' onclick='window.open(`" + f.attribute_library[0].img_rehosted_source + "`)' style='display:block'></th></tr>";
						} else {
							var table_row = "<tr><th colspan='2'><img id='cc-populated-attributes-image' alt='" + f.entry_name + "' target='blank' src='/resources/images/WikiPlaceholder.png' onclick='window.open(this.src)'></th></tr>";
						}
						$(table_row).appendTo("#cc-populated-attributes tbody");
						

						// Table Row #2:  Linked Art
						if (f.attribute_library[0].img_linked != undefined && f.attribute_library[0].img_linked_source != undefined && f.attribute_library[0].img_linked !== "" && f.attribute_library[0].img_linked_source !== "") { 
							var table_row = "<tr><th colspan='2'><i><a href='" + f.attribute_library[0].img_linked + "' target='_blank'>Additional Art</a> and <a href='" + f.attribute_library[0].img_linked_source + "' target='blank'>(source)</a></i></th></tr>";
						} else {
							var table_row = "<tr><th colspan='2'><i>No Additional Art Available</a></i></th></tr>";
						}
						$(table_row).appendTo("#cc-populated-attributes tbody");


						// If the library contains data for a wiki wtyle table
						if (f.attribute_library[1] != undefined) {
							
							// Table Row #3:  Entry Name
							var table_row = "<tr><th colspan='2'>" + f.entry_name + "</th></tr>";
							$(table_row).appendTo("#cc-populated-attributes tbody");

							// Table Row #4:  Species 
							if (f.attribute_library[0].species != undefined && f.attribute_library[0].species !== "") {
								var table_row = "<tr><th colspan='2'>(" + f.attribute_library[0].species + ")</th></tr>";
							} else {
								var table_row = "<tr><th colspan='2'>(Unknown Species)</th></tr>";
							}
							$(table_row).appendTo("#cc-populated-attributes tbody");


							// Table Row(s) #5-n:  Attribute Details
							for (var z = 0; f.attribute_library.length > z; z++) {
								if (f.attribute_library[z].heading != undefined && f.attribute_library[z].sublibrary !== "") {
									var table_row = "<tr><th colspan='2'>" + f.attribute_library[z].heading + "</th></tr>";
									$(table_row).appendTo("#cc-populated-attributes tbody");
									for (var y = 0; f.attribute_library[z].sublibrary.length > y; y++) {
										if (f.attribute_library[z].sublibrary[y].subheading != undefined && f.attribute_library[z].sublibrary[y].subcontent != undefined && f.attribute_library[z].sublibrary[y].subheading !== "" && f.attribute_library[z].sublibrary[y].subcontent !== "") {
											var table_row = "<tr><td>" + f.attribute_library[z].sublibrary[y].subheading + "</td><td>" + f.attribute_library[z].sublibrary[y].subcontent + "</td></tr>";
											$(table_row).appendTo("#cc-populated-attributes tbody");
										}
									}
								}
							}
						} 
					} else {
						// Table Row #1:  Rehosted Art
						var table_row = "<tr><th colspan='2'><img id='cc-populated-attributes-image' alt='" + f.entry_name + "' target='blank' src='/resources/images/WikiPlaceholder.png' onclick='window.open(this.src)'></th></tr>";
						$(table_row).appendTo("#cc-populated-attributes tbody");
						
						// Table Row #2:  Linked Art
						var table_row = "<tr><th colspan='2'><i>No Additional Art Available</a></i></th></tr>";
						$(table_row).appendTo("#cc-populated-attributes tbody");
					}
				} else {
					// Table Row #1:  Rehosted Art
					var table_row = "<tr><th colspan='2'><img id='cc-populated-attributes-image' alt='" + f.entry_name + "' target='blank' src='/resources/images/WikiPlaceholder.png' onclick='window.open(this.src)'></th></tr>";
					$(table_row).appendTo("#cc-populated-attributes tbody");
					
					// Table Row #2:  Linked Art
					var table_row = "<tr><th colspan='2'><i>No Additional Art Available</a></i></th></tr>";
					$(table_row).appendTo("#cc-populated-attributes tbody");
				}


// =========================================================================================
// Populating the page DESCRIPTION and NAVLIST
// 
// The DESCRIPTION div can any number of headings and paragraphs
// The NAVLIST is updated with links to the DESCRIPTION headings as they are populated
// =========================================================================================

				// Populating the page title in the floating nav table
				var table_row = "<tr><th><a href='#common-populated-title'>" + f.entry_name + "</a></th></tr>";
				$(table_row).appendTo("#common-populated-navlist-table tbody");

				// If Description Library Exists
				if (f.description_library != undefined) {

					// Populating Description Overview underneath title table with no heading
					if (f.description_library[0].overview != undefined && f.description_library[0].overview !== "") {
						document.getElementById("common-fixed-description").innerHTML = "<p>" + f.description_library[0].overview + "</p>";
					}

					// Looping through all Library entries
					for (var x = 0; f.description_library.length > x; x++) {

						// Determining if Heading should be shown
						if (f.description_library[x].content != undefined && f.description_library[x].content !== "") {
							var showHeading = true;
						} else if (f.description_library[x].sublibrary != undefined) {
							for (var w = 0; f.description_library[x].sublibrary.length > w; w++) {
								if (f.description_library[x].sublibrary[w].subheading != undefined && f.description_library[x].sublibrary[w].subcontent != undefined && f.description_library[x].sublibrary[w].subheading !== "" && f.description_library[x].sublibrary[w].subcontent !== "") {
									var showHeading = true;
								}
							}
						} else {
							var showHeading = false;
						}

						// Populating Heading
						if (f.description_library[x].heading != undefined && f.description_library[x].heading !== "" && showHeading) {
							document.getElementById("common-fixed-description").innerHTML += "<div id='" + f.description_library[x].heading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h3>" + f.description_library[x].heading + "</h3></div>";

							// Populating the page heading in the floating nav table
							var table_row = "<tr><td><a style='margin-left: 10px' href='#" + f.description_library[x].heading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'>" + f.description_library[x].heading + "</a></td></tr>";
							$(table_row).appendTo("#common-populated-navlist-table tbody");

							// Populating Heading Content
							if (f.description_library[x].content != undefined && f.description_library[x].content !== "") {
								document.getElementById("common-fixed-description").innerHTML += "<p>" + f.description_library[x].content + "</p>";
							}

							// If Sublibrary Exists
							if (f.description_library[x].sublibrary != undefined) {

								// Looping through all Sublibrary entries
								for (var w = 0; f.description_library[x].sublibrary.length > w; w++) {

									// Populating Subheading and Subcontent
									if (f.description_library[x].sublibrary[w].subheading != undefined && f.description_library[x].sublibrary[w].subcontent != undefined && f.description_library[x].sublibrary[w].subheading !== "" && f.description_library[x].sublibrary[w].subcontent !== "") {
										document.getElementById("common-fixed-description").innerHTML += "<div id='" + f.description_library[x].sublibrary[w].subheading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h4>&#8226;  " + f.description_library[x].sublibrary[w].subheading + "</h4></div><p>" + f.description_library[x].sublibrary[w].subcontent + "</p>";

										// Populating the page heading in the floating nav table
										var table_row = "<tr><td><a style='margin-left: 20px' href='#" + f.description_library[x].sublibrary[w].subheading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'>&#8226;  " + f.description_library[x].sublibrary[w].subheading + "</a></td></tr>";
										$(table_row).appendTo("#common-populated-navlist-table tbody");

									}
								}
							}
						}
					}
				}
			}
		});
	});
});