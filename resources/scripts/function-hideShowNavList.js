// =========================================================================================
// Dynamically styling the NAVLIST
// 
// A function that Hides and Shows the Navlist
// The NAVLIST includes links to paragraph headers within the same page
// =========================================================================================
function hideShowNavList() {
	var hidden = '0px';
	var shown = '280px';

	// If the NAVLIST is already shown (which it will not be by default upon loading the page)
	if (document.getElementById('populated-navlist-button').style.marginRight.includes(shown)) {

		// Set NAVLIST margins to the right and update button characters 
		document.getElementById('populated-navlist-button').style.marginRight = hidden;
		document.getElementById('populated-navlist').style.marginRight = '-280px';
		document.getElementById('populated-navlist-button').innerHTML = '&#60; &#60;';

		// Animate NAVLIST elements from their Shown position to their recently updated Hidden position
		document.getElementById("populated-navlist").animate([
			{ transform: 'translateX(-280px)' },
			{ transform: 'translateX(0px)' }
		], {
			duration: 750,
			iterations: 1
		});
		document.getElementById("populated-navlist-button").animate([
			{ transform: 'translateX(-280px)' },
			{ transform: 'translateX(0px)' }
		], {
			duration: 750,
			iterations: 1
		});
	} else {

		// Set NAVLIST margins to the lefft and update button characters
		document.getElementById('populated-navlist-button').style.marginRight = shown;
		document.getElementById('populated-navlist').style.marginRight = '0px';
		document.getElementById('populated-navlist-button').innerHTML = '&#62; &#62;';

		// Animate NAVLIST elements from their Hidden position to their recently updated Shown position
		document.getElementById("populated-navlist").animate([
			{ transform: 'translateX(280px)' },
			{ transform: 'translateX(0px)' }
		], {
			duration: 750,
			iterations: 1
		});
		document.getElementById("populated-navlist-button").animate([
			{ transform: 'translateX(280px)' },
			{ transform: 'translateX(0px)' }
		], {
			duration: 750,
			iterations: 1
		});
	}
}
