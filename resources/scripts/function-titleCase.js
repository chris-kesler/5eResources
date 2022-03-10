// A function that capitalizes the first letter of each word in a string
function titleCase(str) {
	var split_string = str.toLowerCase().split(' ');
	for (var i = 0; i < split_string.length; i++) {
	split_string[i] = split_string[i].charAt(0).toUpperCase() + split_string[i].substring(1);
	}
	return split_string.join(' '); 
}
