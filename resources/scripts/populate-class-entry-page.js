$(function processUser() {
	var parameters = location.search.substring(1).split("&");

	var temp = parameters[0].split("=");
	page_args = unescape(temp[1]);
	// document.getElementById("populated-title-table-thead").innerHTML = page_args;
});

$(function populatePageData() {


	// Reading data from our JSON file
	$.getJSON(`/caped-crusaders/classes.json`, function(data) {

		// Looping through the JSON data 
		$.each(data.entries, function(i, f) {
			if (f.name_str.toLowerCase().replace(/\s/g, '-').replace("'", "") == page_args) {

				document.getElementById("class-page-image").src = "/resources/images/" + f.name_str + ".png";
				document.getElementById("class-page-image").alt = f.class_img_credit;
				document.getElementById("page-image-credit").innerHTML = f.class_img_credit;
				document.getElementById("class-blended-description-div").innerHTML = f.description_long_str;
				document.getElementById("class-features-intro").innerHTML = "As a "  + f.name_str + ", you gain the following Class Features.";
				document.getElementById("hit-dice").innerHTML = "<b>Hit Dice:</b>  1d" + f.hit_die_int + " per " + f.name_str + " level";
				document.getElementById("hit-points-at-1st-level").innerHTML = "<b>Hit Points at 1st level:</b>  " + f.hit_die_int + " your Constitution modifier";
				document.getElementById("hit-points-at-higher-levels").innerHTML = "<b>Hit Points at higher levels:</b>  1d" + f.hit_die_int + " (or " + f.hit_die_average_int + ") + your Constitution modifier per " + f.name_str + " level after 1st";

				document.getElementById("proficiencies-armor").innerHTML = "<b>Armor:</b>  " + f.proficiencies_armor;
				document.getElementById("proficiencies-weapons").innerHTML = "<b>Weapons:</b>  " + f.proficiencies_weapons;
				document.getElementById("proficiencies-tools").innerHTML = "<b>Tools:</b>  " + f.proficiencies_tools;
				document.getElementById("proficiencies-saving-throws").innerHTML = "<b>Saving Throws:</b>  " + f.proficiencies_saves;
				document.getElementById("proficiencies-skills").innerHTML = "<b>Skills:</b>  " + f.proficiencies_skills;

				document.getElementById("equipment-armor").innerHTML = "<b>Armor:</b>  " + f.equipment_armor;
				document.getElementById("equipment-weapons").innerHTML = "<b>Weapons:</b>  " + f.equipment_weapons;
				document.getElementById("equipment-tools").innerHTML = "<b>Tools:</b>  " + f.equipment_tools;
				document.getElementById("equipment-packs").innerHTML = "<b>Packs:</b>  " + f.equipment_packs;
				document.getElementById("starting-wealth").innerHTML = "<td>" + f.name_str + "</td><td>" + f.equipment_variant + "</td>";
				document.getElementById("populated-title-table-title").innerHTML = "The " + f.name_str + " Table";
				var prof = 2;
				let j = 0;
				for (let i = 0; i < 20; i++) {
					var links = "---";
					for (let k = 0; k < f.class_feats.length; k++) {
						if (f.class_feats[k].level == (i+1)) {
							if (links.includes("href")) {
								links += ", <a href='#" + f.class_feats[k].name_str.replace(/\s+/g, '') + "'>" 
								+ f.class_feats[k].name_str + "</a>";  
							} else {
								links = "<a href='#" + f.class_feats[k].name_str.replace(/\s+/g, '') + "'>" 
								+ f.class_feats[k].name_str + "</a>";
							}
						} 
					}
					if ( (i+2)/f.sustainables_known_denominator < 0.35 ) {
						var sustainables = "---";
					} else {
						var sustainables = Math.ceil((i+2)/f.sustainables_known_denominator);
					}
					if ( (i+1)/f.consumables_max_per_level_denominator < 0.3 ) {
						var consumables_known = "---";
						var consumables_points = "---";
						var consumables_max = "---";
					} else {
						var consumables_known = Math.ceil((i+1)*f.consumables_known_per_level);
						var consumables_points = Math.ceil((i+1)*f.consumables_points_per_level);
						var consumables_max = Math.min(Math.ceil((i+1)/f.consumables_max_per_level_denominator), 9)
					}
					var table_row = "<tr>" + "<td>" + (i+1) + "</td>" + "<td>" + prof + "</td>" + "<td>" + links + "</td>" + "<td>" + sustainables + "</td>" + "<td>" + consumables_known + "</td>" + "<td>" + consumables_points + "</td>" + "<td>" + consumables_max + "</td>" + "</tr>"
					j = j + 2;
					$(table_row).appendTo("#level-table tbody");
					if ((i+1) == 4 || (i+1) == 8 || (i+1) == 12 || (i+1) == 16) {
						prof++;
					}
				}
				for (let i = 0; i < f.class_feats.length; i++) {
					if (document.getElementById("populated-title-table-features").innerHTML.indexOf(f.class_feats[i].name_str) > 0) {} 
					else {
						document.getElementById("populated-title-table-features").innerHTML += "<hr><h3 id='" 
						+ f.class_feats[i].name_str.replace(/\s+/g, '') + "'>" 
						+ f.class_feats[i].name_str + "</h3><h4><i><b><a href='#level-table'>" + f.name_str 
						+ "</a>:</b>  level " + f.class_feats[i].level + "</i></h4><p>" 
						+ f.class_feats[i].mechanics_str + "</p>";
					}
				}
				// Subclasses
				document.getElementById("subclass-tech-name").innerHTML = "Subclass:  The " + f.subclass_tech_name;
				document.getElementById("subclass-tech-image").src = "/resources/images/" + f.name_str + "-" + f.subclass_tech_name + ".png";
				document.getElementById("subclass-tech-image").alt = f.subclass_tech_img_credit;
				document.getElementById("subclass-tech-image-credit").innerHTML = f.subclass_tech_img_credit;
				document.getElementById("subclass-tech-description").innerHTML = f.subclass_tech_description;
				for (let i = 0; i < f.subclass_tech_feats.length; i++) {
					if (document.getElementById("subclass-tech-feats").innerHTML.indexOf(f.subclass_tech_feats[i].name_str) > 0) {} 
					else {
						document.getElementById("subclass-tech-feats").innerHTML += "<hr><h3 id='" 
						+ f.subclass_tech_feats[i].name_str.replace(/\s+/g, '') + "'>" 
						+ f.subclass_tech_feats[i].name_str + "</h3><h4><i><b><a href='#subclass-tech-name'>" + f.subclass_tech_name 
						+ "</a>:</b>  level " + f.subclass_tech_feats[i].level + "</i></h4><p>" 
						+ f.subclass_tech_feats[i].mechanics_str + "</p>";
					}
				}
				document.getElementById("subclass-power-name").innerHTML = "Subclass:  The " + f.subclass_power_name;
				document.getElementById("subclass-power-image").src = "/resources/images/" + f.name_str + "-" + f.subclass_power_name + ".png";
				document.getElementById("subclass-power-image").alt = f.subclass_power_img_credit;
				document.getElementById("subclass-power-image-credit").innerHTML = f.subclass_power_img_credit;
				document.getElementById("subclass-power-description").innerHTML = f.subclass_power_description;
				for (let i = 0; i < f.subclass_power_feats.length; i++) {
					if (document.getElementById("subclass-power-feats").innerHTML.indexOf(f.subclass_power_feats[i].name_str) > 0) {} 
					else {
						document.getElementById("subclass-power-feats").innerHTML += "<hr><h3 id='" 
						+ f.subclass_power_feats[i].name_str.replace(/\s+/g, '') + "'>" 
						+ f.subclass_power_feats[i].name_str + "</h3><h4><i><b><a href='#subclass-power-name'>" + f.subclass_power_name 
						+ "</a>:</b>  level " + f.subclass_power_feats[i].level + "</i></h4><p>" 
						+ f.subclass_power_feats[i].mechanics_str + "</p>";
					}
				}
				document.getElementById("subclass-magic-name").innerHTML = "Subclass:  The " + f.subclass_magic_name;
				document.getElementById("subclass-magic-image").src = "/resources/images/" + f.name_str + "-" + f.subclass_magic_name + ".png";
				document.getElementById("subclass-magic-image").alt = f.subclass_magic_img_credit;
				document.getElementById("subclass-magic-image-credit").innerHTML = f.subclass_magic_img_credit;
				document.getElementById("subclass-magic-description").innerHTML = f.subclass_magic_description;
				for (let i = 0; i < f.subclass_magic_feats.length; i++) {
					if (document.getElementById("subclass-magic-feats").innerHTML.indexOf(f.subclass_magic_feats[i].name_str) > 0) {} 
					else {
						document.getElementById("subclass-magic-feats").innerHTML += "<hr><h3 id='" 
						+ f.subclass_magic_feats[i].name_str.replace(/\s+/g, '') + "'>" 
						+ f.subclass_magic_feats[i].name_str + "</h3><h4><i><b><a href='#subclass-magic-name'>" + f.subclass_magic_name 
						+ "</a>:</b>  level " + f.subclass_magic_feats[i].level + "</i></h4><p>" 
						+ f.subclass_magic_feats[i].mechanics_str + "</p>";
					}
				}
			}
		});
	});
});
