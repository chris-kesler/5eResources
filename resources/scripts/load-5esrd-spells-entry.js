
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
			$(table_row).appendTo("#page-title-table tbody");

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
						<i>${result.school} <a href='https://www.deviantart.com/dryoshiyahu/art/Schools-of-Magic-811154835' target='_blank'>(image source)</a></i>
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


				headingsArray = ["Standard Mechanics", "Upcast Mechanics", "Material Components"];

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

					if (i == 0) {
						document.getElementById("page-description-div").innerHTML += `<p>${result.desc[0]}</p>`
					} else if (i == 1) {
						if (result.desc[1] == undefined && result.level == 0) {
							document.getElementById("page-description-div").innerHTML += `<p>(This cantrip does not scale with your character level)</p>`
						} else if (result.desc[1] == undefined && result.level > 0) {
							document.getElementById("page-description-div").innerHTML += `<p>(This spell does not function differently if cast using a higher level spell slot)</p>`
						} else {
							document.getElementById("page-description-div").innerHTML += `<p>${result.desc[1]}</p>`
						}
					} else if (i == 2) {
					document.getElementById("page-description-div").innerHTML += `<p>${result.material}</p>`

				}


				}

		});
	
}

getResults(`/api/spells/${page_args}`);


