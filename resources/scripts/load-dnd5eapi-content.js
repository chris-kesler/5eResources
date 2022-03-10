
page_args = readArgs();

// document.getElementById('page-title-path').innerHTML = page_args;
const getResults = (id) => {
	// document.getElementById('page-title-path').innerHTML = `https://www.dnd5eapi.co${id}`;

	fetch(`https://www.dnd5eapi.co${id}`)
		.then(response => response.json())
		.then((data) => {
			const result = {
				index: data.index,
				name: data.name,
				level: data.level,
				school: data.school.name,
				casting_time: data.casting_time,
				range: data.range,
				components: data.components,
				duration: data.duration,
				attack: data.attack_type,
				save: data.dc,
				damage: data.damage,
				higher_level: data.higher_level,
				classes: data.classes,
				desc: data.desc,
				material: data.material
			}


// =========================================================================================
// Populating the page TITLE table
// =========================================================================================

			var table_row = `
			<tr>
				<th>
					Name
				</th>
				<th>
					Level
				</th>
				<th>
					Casting Time
				</th>
				<th>
					Range/Area
				</th>
				<th>
					Components
				</th>
			</tr>
			`
			$(table_row).appendTo("#page-title-table tbody");

			table_row = `
			<tr>
				<td>
					${result.name}
				</td>
				<td>
					${result.level}
				</td>
				<td>
					${result.casting_time}
				</td>
				<td>
					${result.range}
				</td>
				<td>
					${result.components}
				</td>
			</tr>
			`
			$(table_row).appendTo("#page-title-table tbody");

			table_row = `
			<tr>
				<th>
					Source
				</th>
				<th>
					Duration
				</th>
				<th>
					School
				</th>
				<th>
					Attack/Save
				</th>
				<th>
					Damage/Effect
				</th>
			</tr>
			`
			$(table_row).appendTo("#page-title-table tbody");

			if(result.damage_effect != undefined) {
				table_row = `
				<tr>
					<td>
						${result.source}
					</td>
					<td>
						${result.duration}
					</td>
					<td>
						${result.school}
					</td>
					<td>
						${result.attack}
					</td>
					<td>
						${result.damage_effect.damage_type.name}
					</td>
				</tr>
				`
				$(table_row).appendTo("#page-title-table tbody");
			} else {
				table_row = `
				<tr>
					<td>
						${result.source}
					</td>
					<td>
						${result.duration}
					</td>
					<td>
						${result.school}
					</td>
					<td>
						${result.attack}
					</td>
					<td>
						undefined
					</td>
				</tr>
				`
				$(table_row).appendTo("#page-title-table tbody");
			}

// =========================================================================================
// Populating the page ATTRIBUTES table
// =========================================================================================
			// Table Row #1:  Rehosted Art
			table_row = `
				<tr>
					<th colspan='2'>
						<img id='page-attributes-table-image' alt='${result.name}' target='blank' src='/resources/images/${result.school}.png' style='display:block'>
					</th>
				</tr>
			`
			$(table_row).appendTo("#page-attributes-table tbody");
					

			// Table Row #2:  Linked Art
			table_row = `
				<tr>
					<th colspan='2'>
						<i>${result.school} <a href='' target='blank'>(image source)</a></i>
					</th>
				</tr>
			`
			$(table_row).appendTo("#page-attributes-table tbody");


// =========================================================================================
// Populating the page DESCRIPTION and NAVLIST
// 
// The DESCRIPTION div can any number of headings and paragraphs
// The NAVLIST is updated with links to the DESCRIPTION headings as they are populated
// =========================================================================================

				// Populating the page title in the floating nav table
				var table_row = `<tr><th><a href='#page-title-table'>${result.name}</a></th></tr>`
				$(table_row).appendTo("#page-navlist-table tbody");


				headingsArray = ["Flavor Description", "Standard Mechanics", "Overcharge Mechanics", "Material Components"];

				for (let i = 0; i < headingsArray.length; i++) {
					document.getElementById("page-description-div").innerHTML += "<div id='" + headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h3>" + headingsArray[i] + ": </h3></div>";

					table_row = `
						<tr>
							<td>
								<a style='margin-left: 10px' href='#${headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``)}'>${headingsArray[i]}</a>
							</td>
						</tr>
					`
					$(table_row).appendTo("#page-navlist-table tbody");

					if (i == 1) {
						document.getElementById("page-description-div").innerHTML += `<p>${result.desc[0]}</p>`
					} else if (i == 2) {
						document.getElementById("page-description-div").innerHTML += `<p>${result.desc[1]}</p>`
					} else if (i == 3) {
					document.getElementById("page-description-div").innerHTML += `<p>${result.material}</p>`

				}


				}

				
	// 						// Populating the page heading in the floating nav table

	// 						// Populating Heading Content
	// 						if (f.description_library[x].content != undefined && f.description_library[x].content !== "") {
	// 							document.getElementById("page-description-div").innerHTML += "<p>" + f.description_library[x].content + "</p>";
	// 						}

	// 						// If Sublibrary Exists
	// 						if (f.description_library[x].sublibrary != undefined) {

	// 							// Looping through all Sublibrary entries
	// 							for (var w = 0; f.description_library[x].sublibrary.length > w; w++) {

	// 								// Populating Subheading and Subcontent
	// 								if (f.description_library[x].sublibrary[w].subheading != undefined && f.description_library[x].sublibrary[w].subcontent != undefined && f.description_library[x].sublibrary[w].subheading !== "" && f.description_library[x].sublibrary[w].subcontent !== "") {
	// 									document.getElementById("page-description-div").innerHTML += "<div id='" + f.description_library[x].sublibrary[w].subheading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h4>&#8226;  " + f.description_library[x].sublibrary[w].subheading + "</h4></div><p>" + f.description_library[x].sublibrary[w].subcontent + "</p>";

	// 									// Populating the page heading in the floating nav table
	// 									var table_row = "<tr><td><a style='margin-left: 20px' href='#" + f.description_library[x].sublibrary[w].subheading.toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'>&#8226;  " + f.description_library[x].sublibrary[w].subheading + "</a></td></tr>";
	// 									$(table_row).appendTo("#page-navlist-table tbody");

	// 								}
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	});
	// });

		});
	
}

getResults(`/api/spells/${page_args}`);


