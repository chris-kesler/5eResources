const getResults = (id) => {
	fetch(`https://www.dnd5eapi.co${id}`)
		.then(response => response.json())
		.then((data) => {

			// Looping through the JSON data 
			$.each(data.results, function(i, f) {
				fetch(`https://www.dnd5eapi.co${f.url}`)
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
							source: f.url
						}


						var table_row = `
						<tr>
							<td>
								${result.name}
							</td>
							<td>
								Level: ${result.level}
							</td>
							<td>
								<img class='directory-page-dynamic-table-entry-image' src=/resources/images/${result.school}.png><br>
								${result.school}
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
							<td>
								${result.duration}
							</td>
							`

						if (result.attack != undefined) {
							table_row += `
							<td>
								${result.attack}
							</td>
						`
						} else if (result.save != undefined) {
							table_row += `
							<td>
								${result.save.dc_type.name}
							</td>
							`
						} else {
							table_row += `
							<td>
								NA
							</td>
							`
						}

						if (result.damage != undefined) {
							table_row += `
							<td>
								${result.damage.damage_type.name}
							</td>
						`
						} else {
							table_row += `
							<td>
								NA
							</td>
							`
						}

						if (result.higher_level.length != 0) {
							table_row += `
							<td>
								True
							</td>
						`
						} else {
							table_row += `
							<td>
								False
							</td>
							`
						}
						table_row += `
							<td>
							`

						for (let z = 0; z < result.classes.length; z++) {
							table_row += `
							${result.classes[z].name}, 
							`
						}
						table_row += `
							</td>
							<td>
								${result.source}
							</td>
						</tr>
						`
						$(table_row).appendTo("#directory-page-dynamic-table-content tbody");


						// tableRow = `
						// <tr>
						// 	<th>
						// 	Name
						// 	</th>
						// 	<th>
						// 	Level
						// 	</th>
						// 	<th>
						// 	Casting Time
						// 	</th>
						// 	<th>
						// 	Range/Area
						// 	</th>
						// 	<th>
						// 	Components
						// 	</th>
						// </tr>`
						// $(tableRow).appendTo("#directory-page-dynamic-table-content tbody");

						// tableRow = `
						// <tr>
						// 	<td>
						// 	${result.name}
						// 	</td>
						// 	<td>
						// 	${result.level}
						// 	</td>
						// 	<td>
						// 	${result.casting_time}
						// 	</td>
						// 	<td>
						// 	${result.range}
						// 	</td>
						// 	<td>
						// 	${result.components}
						// 	</td>
						// </tr>`
						// $(tableRow).appendTo("#directory-page-dynamic-table-content tbody");

						// tableRow = `
						// <tr>
						// 	<th>
						// 	Source
						// 	</th>
						// 	<th>
						// 	Duration
						// 	</th>
						// 	<th>
						// 	School
						// 	</th>
						// 	<th>
						// 	Attack/Save
						// 	</th>
						// 	<th>
						// 	Damage/Effect
						// 	</th>
						// </tr>`
						// $(tableRow).appendTo("#directory-page-dynamic-table-content tbody");

						// if(result.damage_effect != undefined) {
						// 	tableRow = `
						// 	<tr>
						// 	<td>
						// 		${result.source}
						// 	</td>
						// 	<td>
						// 		${result.duration}
						// 	</td>
						// 	<td>
						// 		${result.school}
						// 	</td>
						// 	<td>
						// 		${result.attack}
						// 	</td>
						// 	<td>
						// 		${result.damage_effect.damage_type.name}
						// 	</td>
						// 	</tr><tr><td><td></tr>`
						// 	$(tableRow).appendTo("#directory-page-dynamic-table-content tbody");
						// } else {
						// 	tableRow = `
						// 	<tr>
						// 	<td>
						// 		${result.source}
						// 	</td>
						// 	<td>
						// 		${result.duration}
						// 	</td>
						// 	<td>
						// 		${result.school}
						// 	</td>
						// 	<td>
						// 		${result.attack}
						// 	</td>
						// 	<td>
						// 		undefined
						// 	</td>
						// 	</tr><tr class='empty-row'><td><td></tr>`
						// 	$(tableRow).appendTo("#directory-page-dynamic-table-content tbody");
						// }
					});
			});
		});
}

function CallApiSearchEngine() {
	var query = document.getElementById('5e-srd-api-searchbox').value;
	// document.getElementById('page-description-div').innerHTML = query;
	$('#directory-page-dynamic-table-content tr').remove();
	getResults(`/api/spells/?name=${query}`);
}

getResults("/api/spells/");
