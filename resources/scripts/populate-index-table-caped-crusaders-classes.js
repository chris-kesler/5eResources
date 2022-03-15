// A function that populates the page buttons and data within
$(function readClass() {
	$.getJSON('classes.json', function(data) {
		var path = window.location.pathname;
		var page = path.split("/").pop();
		$.each(data.entries, function(i, f) {
			document.getElementById(`class-button-${i}`).setAttribute("onclick", "location.href='classes/entry-page.html?name=" + f.name_str.toLowerCase() + "'");
			document.getElementById(`class-button-${i}`).innerHTML = "<section class='populated-index-button-content-ceiling'><img class='class-image-small' src='/resources/images/" + f.name_str + ".png' alt='" + f.name_str + " Image'><h3>" + f.name_str + "</h3><hr>" + f.description_short_str + "</section><section class='populated-index-button-content-floor'><i><b>Hit Die:</b>  d" + f.hit_die_int + "<br><b>Primary Ability:</b>  " + f.primary_ability + "<br><b>Saves:</b>  " + f.proficiencies_saves + "</section>";
		});
	});
});

