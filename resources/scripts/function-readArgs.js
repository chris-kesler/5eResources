function readArgs() {
	var parameters = location.search.substring(1).split("&");

	var temp = parameters[0].split("=");
	page_args = unescape(temp[1]);

	return page_args;
}
