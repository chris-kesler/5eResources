// This function updates the filter table dynamically as input is entered in the filter boxes
function FilterTableFunction() {

	// Declaring variables to be used in the filter function
	var table, tr, i; 
	var tdZero, tdOne, tdTwo, tdThree, tdFour, tdFive, tdSix, tdSeven, tdEight, tdNine, tdTen, tdEleven, tdTwelve;  
	var txtValueZero, txtValueOne, txtValueTwo, txtValueThree, txtValueFour, txtValueFive, txtValueSix, txtValueSeven, txtValueEight, txtValueNine, txtValueTen, txtValueEleven, txtValueTwelve, txtValueThirteen;

	// Defining filter variables based on the text present in the input boxes
	var inputIncludeZero = document.getElementById("directory-page-dynamic-table-query-inputInclude0");
	var inputIncludeOne = document.getElementById("directory-page-dynamic-table-query-inputInclude1");
	var inputIncludeTwo = document.getElementById("directory-page-dynamic-table-query-inputInclude2");
	var inputIncludeThree = document.getElementById("directory-page-dynamic-table-query-inputInclude3");
	var inputIncludeFour = document.getElementById("directory-page-dynamic-table-query-inputInclude4");
	var inputIncludeFive = document.getElementById("directory-page-dynamic-table-query-inputInclude5");
	var inputIncludeSix = document.getElementById("directory-page-dynamic-table-query-inputInclude6");
	var inputIncludeSeven = document.getElementById("directory-page-dynamic-table-query-inputInclude7");
	var inputIncludeEight = document.getElementById("directory-page-dynamic-table-query-inputInclude8");
	var inputIncludeNine = document.getElementById("directory-page-dynamic-table-query-inputInclude9");
	var inputIncludeTen = document.getElementById("directory-page-dynamic-table-query-inputInclude10");
	var inputIncludeEleven = document.getElementById("directory-page-dynamic-table-query-inputInclude11");

	var inputExcludeZero = document.getElementById("directory-page-dynamic-table-query-inputExclude0");
	var inputExcludeOne = document.getElementById("directory-page-dynamic-table-query-inputExclude1");
	var inputExcludeTwo = document.getElementById("directory-page-dynamic-table-query-inputExclude2");
	var inputExcludeThree = document.getElementById("directory-page-dynamic-table-query-inputExclude3");
	var inputExcludeFour = document.getElementById("directory-page-dynamic-table-query-inputExclude4");
	var inputExcludeFive = document.getElementById("directory-page-dynamic-table-query-inputExclude5");
	var inputExcludeSix = document.getElementById("directory-page-dynamic-table-query-inputExclude6");
	var inputExcludeSeven = document.getElementById("directory-page-dynamic-table-query-inputExclude7");
	var inputExcludeEight = document.getElementById("directory-page-dynamic-table-query-inputExclude8");
	var inputExcludeNine = document.getElementById("directory-page-dynamic-table-query-inputExclude9");
	var inputExcludeTen = document.getElementById("directory-page-dynamic-table-query-inputExclude10");
	var inputExcludeEleven = document.getElementById("directory-page-dynamic-table-query-inputExclude11");

	// Reformatting the data to uppercase to make handling comparisons easier
	var filterIncludeZero = inputIncludeZero.value.toUpperCase();
	var filterIncludeOne = inputIncludeOne.value.toUpperCase();
	var filterIncludeTwo = inputIncludeTwo.value.toUpperCase();
	var filterIncludeThree = inputIncludeThree.value.toUpperCase();
	var filterIncludeFour = inputIncludeFour.value.toUpperCase();
	var filterIncludeFive = inputIncludeFive.value.toUpperCase();
	var filterIncludeSix = inputIncludeSix.value.toUpperCase();
	var filterIncludeSeven = inputIncludeSeven.value.toUpperCase();
	var filterIncludeEight = inputIncludeEight.value.toUpperCase();
	var filterIncludeNine = inputIncludeNine.value.toUpperCase();
	var filterIncludeTen = inputIncludeTen.value.toUpperCase();
	var filterIncludeEleven = inputIncludeEleven.value.toUpperCase();

	var filterExcludeZero = inputExcludeZero.value.toUpperCase();
	var filterExcludeOne = inputExcludeOne.value.toUpperCase();
	var filterExcludeTwo = inputExcludeTwo.value.toUpperCase();
	var filterExcludeThree = inputExcludeThree.value.toUpperCase();
	var filterExcludeFour = inputExcludeFour.value.toUpperCase();
	var filterExcludeFive = inputExcludeFive.value.toUpperCase();
	var filterExcludeSix = inputExcludeSix.value.toUpperCase();
	var filterExcludeSeven = inputExcludeSeven.value.toUpperCase();
	var filterExcludeEight = inputExcludeEight.value.toUpperCase();
	var filterExcludeNine = inputExcludeNine.value.toUpperCase();
	var filterExcludeTen = inputExcludeTen.value.toUpperCase();
	var filterExcludeEleven = inputExcludeEleven.value.toUpperCase();

	// Reading the table element and all table rows within
	table = document.getElementById("cc-dynamic-index");
	tr = table.getElementsByTagName("tr");

	// Looping through all table rows and hiding those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		tdZero = tr[i].getElementsByTagName("td")[0];
		tdOne = tr[i].getElementsByTagName("td")[1];
		tdTwo = tr[i].getElementsByTagName("td")[2];
		tdThree = tr[i].getElementsByTagName("td")[3];
		tdFour = tr[i].getElementsByTagName("td")[4];
		tdFive = tr[i].getElementsByTagName("td")[5];
		tdSix = tr[i].getElementsByTagName("td")[6];
		tdSeven = tr[i].getElementsByTagName("td")[7];
		tdEight = tr[i].getElementsByTagName("td")[8];
		tdNine = tr[i].getElementsByTagName("td")[9];
		tdTen = tr[i].getElementsByTagName("td")[10];
		tdEleven = tr[i].getElementsByTagName("td")[11];

		// Ensuring the entry exists before attempting additional processes
		if (tdZero) {
		txtValueZero = tdZero.textContent || tdZero.innerText;
		txtValueOne = tdOne.textContent || tdOne.innerText;
		txtValueTwo = tdTwo.textContent || tdTwo.innerText;
		txtValueThree = tdThree.textContent || tdThree.innerText;
		txtValueFour = tdFour.textContent || tdFour.innerText;
		txtValueFive = tdFive.textContent || tdFive.innerText;
		txtValueSix = tdSix.textContent || tdSix.innerText;
		txtValueSeven = tdSeven.textContent || tdSeven.innerText;
		txtValueEight = tdEight.textContent || tdEight.innerText;
		txtValueNine = tdNine.textContent || tdNine.innerText;
		txtValueTen = tdTen.textContent || tdTen.innerText;
		txtValueEleven = tdEleven.textContent || tdEleven.innerText;

		// Hiding elements that do not match the include filter input
		if (txtValueZero.toUpperCase().indexOf(filterIncludeZero) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueOne.toUpperCase().indexOf(filterIncludeOne) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueTwo.toUpperCase().indexOf(filterIncludeTwo) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueThree.toUpperCase().indexOf(filterIncludeThree) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueFour.toUpperCase().indexOf(filterIncludeFour) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueFive.toUpperCase().indexOf(filterIncludeFive) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueSix.toUpperCase().indexOf(filterIncludeSix) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueSeven.toUpperCase().indexOf(filterIncludeSeven) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueEight.toUpperCase().indexOf(filterIncludeEight) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueNine.toUpperCase().indexOf(filterIncludeNine) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueTen.toUpperCase().indexOf(filterIncludeTen) == -1) {
			tr[i].style.display = "none";
		} else if (txtValueEleven.toUpperCase().indexOf(filterIncludeEleven) == -1) {
			tr[i].style.display = "none";
		} 
		
		// Hiding elements that do match the exclude filter input
		else if (txtValueZero.toUpperCase().indexOf(filterExcludeZero) > -1 && filterExcludeZero != '') {
			tr[i].style.display = "none";
		} else if (txtValueOne.toUpperCase().indexOf(filterExcludeOne) > -1 && filterExcludeOne != '') {
			tr[i].style.display = "none";
		} else if (txtValueTwo.toUpperCase().indexOf(filterExcludeTwo) > -1 && filterExcludeTwo != '') {
			tr[i].style.display = "none";
		} else if (txtValueThree.toUpperCase().indexOf(filterExcludeThree) > -1 && filterExcludeThree != '') {
			tr[i].style.display = "none";
		} else if (txtValueFour.toUpperCase().indexOf(filterExcludeFour) > -1 && filterExcludeFour != '') {
			tr[i].style.display = "none";
		} else if (txtValueFive.toUpperCase().indexOf(filterExcludeFive) > -1 && filterExcludeFive != '') {
			tr[i].style.display = "none";
		} else if (txtValueSix.toUpperCase().indexOf(filterExcludeSix) > -1 && filterExcludeSix != '') {
			tr[i].style.display = "none";
		} else if (txtValueSeven.toUpperCase().indexOf(filterExcludeSeven) > -1 && filterExcludeSeven != '') {
			tr[i].style.display = "none";
		} else if (txtValueEight.toUpperCase().indexOf(filterExcludeEight) > -1 && filterExcludeEight != '') {
			tr[i].style.display = "none";
		} else if (txtValueNine.toUpperCase().indexOf(filterExcludeNine) > -1 && filterExcludeNine != '') {
			tr[i].style.display = "none";
		} else if (txtValueTen.toUpperCase().indexOf(filterExcludeTen) > -1 && filterExcludeTen != '') {
			tr[i].style.display = "none";
		} else if (txtValueEleven.toUpperCase().indexOf(filterExcludeEleven) > -1 && filterExcludeEleven != '') {
			tr[i].style.display = "none";
		} else {
			tr[i].style.display = "";
		}
		}
	}
}