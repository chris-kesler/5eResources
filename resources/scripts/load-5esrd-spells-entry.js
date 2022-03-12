// Reading the page Arguments
page_args = readArgs();

// The function that pulls data from the dnd5e api
const getResults = (id) => {
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
				higher_level: data.higher_level,
				material: data.material
			}


// =========================================================================================
// Populating the page TITLE table
// =========================================================================================

			// Table Row #1: Labels
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
			$(table_row).appendTo("#populated-title-table tbody");

			// Table Row #2: Values
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
			$(table_row).appendTo("#populated-title-table tbody");

			// Table Row #3: Labels
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
			$(table_row).appendTo("#populated-title-table tbody");

			// Table Row #4: Values
			table_row = `
			<tr>
				<td>
					www.dnd5eapi.co
				</td>
				<td>
					${result.duration}
				</td>
				<td>
					${result.school}
				</td>
			`
			if(result.attack == undefined && result.save != undefined) {

				table_row += `
					<td>
						${result.save.dc_type.name}
					</td>
				`
			} else if (result.attack != undefined && result.save == undefined) {

				table_row += `
					<td>
						${titleCase(result.attack)}
					</td>
				`
			} else {
				table_row += `
					<td>
						NA
					</td>
				`
			}
			
			if(result.damage != undefined) {
				table_row += `
					<td>
						${result.damage.damage_type.name}
					</td>
				</tr>
				`
			} else {
				table_row += `
					<td>
						NA
					</td>
				</tr>
				`
			}
			$(table_row).appendTo("#populated-title-table tbody");

// =========================================================================================
// Populating the page ATTRIBUTES table
// =========================================================================================
			// Table Row #1: Rehosted Art
			table_row = `
				<tr>
					<th colspan='2'>
						<img id='page-attributes-table-image' alt='${result.name}' target='blank' src='/resources/images/${result.school}.png' style='display:block'>
					</th>
				</tr>
			`
			$(table_row).appendTo("#page-attributes-table tbody");
					

			// Table Row #2: Linked Art
			table_row = `
				<tr>
					<th colspan='2'>
						<i>${result.school} <a href='https://www.deviantart.com/dryoshiyahu/art/Schools-of-Magic-811154835' target='_blank'>(image source)</a></i>
					</th>
				</tr>
			`
			$(table_row).appendTo("#page-attributes-table tbody");


// =========================================================================================
// Populating the page DESCRIPTION and NAVLIST
// 
// The DESCRIPTION div can hold any number of headings and paragraphs
// The NAVLIST is updated with links to the DESCRIPTION headings as they are populated
// =========================================================================================

				// Populating the page title in the floating nav table
				var table_row = `<tr><th><a href='#populated-title-table'>${result.name}</a></th></tr>`
				$(table_row).appendTo("#page-navlist-table tbody");


				headingsArray = ["Standard Mechanics", "Upcast Mechanics", "Material Components"];

				for (let i = 0; i < headingsArray.length; i++) {

					if (i == 0) {
						document.getElementById("blended-description-div").innerHTML += "<div id='" + headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h3>" + headingsArray[i] + ": </h3></div>";

						table_row = `
							<tr>
								<td>
									<a style='margin-left: 10px' href='#${headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``)}'>${headingsArray[i]}</a>
								</td>
							</tr>
						`
						$(table_row).appendTo("#page-navlist-table tbody");

						for (let z = 0; z < result.desc.length; z++) {
							document.getElementById("blended-description-div").innerHTML += `<p>${result.desc[z]}</p>`;
						}

					} else if (i == 1 && !jQuery.isEmptyObject(result.higher_level)) {
						document.getElementById("blended-description-div").innerHTML += "<div id='" + headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h3>" + headingsArray[i] + ": </h3></div>";

						table_row = `
							<tr>
								<td>
									<a style='margin-left: 10px' href='#${headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``)}'>${headingsArray[i]}</a>
								</td>
							</tr>
						`
						$(table_row).appendTo("#page-navlist-table tbody");

						document.getElementById("blended-description-div").innerHTML += `<p>${result.higher_level}</p>`;
					} else if (i == 2 && result.material != undefined) {
						document.getElementById("blended-description-div").innerHTML += "<div id='" + headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``) + "'><h3>" + headingsArray[i] + ": </h3></div>";

						table_row = `
							<tr>
								<td>
									<a style='margin-left: 10px' href='#${headingsArray[i].toLowerCase().replace(/\s/g, '-').replace(`'`, ``)}'>${headingsArray[i]}</a>
								</td>
							</tr>
						`
						$(table_row).appendTo("#page-navlist-table tbody");

						document.getElementById("blended-description-div").innerHTML += `<p>${result.material}</p>`
					}
				}
		});
}

getResults(`/api/spells/${page_args}`);


