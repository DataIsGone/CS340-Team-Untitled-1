/* --- NAVBAR SET UP --- */
function buildTopNav(){
	let createButton = document.createElement("button");
	createButton.className = "navButton";
	createButton.innerText = "Create";
	createButton.addEventListener('click', buildCreatePage);
    document.getElementById("myDropdown").append(createButton);
	
	let readButton = document.createElement("button");
	readButton.className = "navButton";
	readButton.innerText = "Read";
	readButton.addEventListener('click', buildReadPage);
    document.getElementById("myDropdown").append(readButton);
    
	let updateButton = document.createElement("button");
	updateButton.className = "navButton";
	updateButton.innerText = "Update";
	updateButton.addEventListener('click', buildUpdatePage);
    document.getElementById("myDropdown").append(updateButton);
	
	let deleteButton = document.createElement("button");
	deleteButton.className = "navButton";
	deleteButton.innerText = "Delete";
	deleteButton.addEventListener('click', buildDeletePage);
    document.getElementById("myDropdown").append(deleteButton);
	
	return;
}
buildTopNav();

/* --- DOM MANIPULATION --- */
function buildCreatePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let createDiv = document.createElement("div");
	createDiv.className = "pageBox";
	createDiv.innerText = "Create";
	document.body.append(createDiv);

	//Part 1
	createDiv.appendChild(buildTableMenu());

	//Part 2
	createDiv.appendChild(buildCRUDModeControlsCreate());

	//Part 3
	createDiv.appendChild(buildTable());

	return;
}

function buildReadPage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let readDiv = document.createElement("div");
	readDiv.className = "pageBox";
	readDiv.innerText = "Read";
	document.body.append(readDiv);

	//Part 1
	readDiv.appendChild(buildTableMenu());

	//Part 2
	readDiv.appendChild(buildCRUDModeControlsRead());

	return;
}

function buildUpdatePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}

	let updateDiv = document.createElement("div");
	updateDiv.className = "pageBox";
	updateDiv.innerText = "Update";
	document.body.append(updateDiv);

	//Part 1
	updateDiv.appendChild(buildTableMenuWithFind());

	//Part 2
	updateDiv.appendChild(buildCRUDModeControlsUpdate());

	//Part 3
	updateDiv.appendChild(buildTable());
	return;
}

function buildDeletePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let deleteDiv = document.createElement("div");
	deleteDiv.className = "pageBox";
	deleteDiv.innerText = "Delete";
	document.body.append(deleteDiv);

	//Part 1
	deleteDiv.appendChild(buildTableMenuWithFind());

	//Part 2
	deleteDiv.appendChild(buildCRUDModeControlsDelete());

	//Part 3
	deleteDiv.appendChild(buildTable());

	return;
}
function buildTableMenu(){
	var html = '<div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select id="tables" name="tables"><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div><!-- Row:<input><button>Find</button> --></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuWithFind(){
	var html = '<div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select id="tables" name="tables"><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div>Row:<input><button>Find</button></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildCRUDModeControlsCreate(){
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: CREATE)--><div class="content" id="mode-content"><div class="display-col"><form action="">  <!-- need action --><ul class="nav-list"><li><div class="col-info"> <!-- holds col info --><div class="col-label"> <!-- holds col label --><span>Col 1</span></div><div class="col-content"> <!-- holds col content --><input type="text" name="col1"> <!-- NOTE: need DOM to add `name` and `value` attributes procedurally --></div></div></li></ul></form><div id="right-button"><form action="">  <!-- need action --><button class="button">Add Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildCRUDModeControlsRead(){
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: READ)--><div class="content" id="mode-content"><form action="">  <!-- need action --><!-- COLUMN MENU --><div><form action=""> <!-- need action --><ul class="nav-list"><li><div id="col-list"><label for="cols">Item:</label><select id="cols" name="cols"><option value="col0">Col 0 (PK)</option><option value="col1">Col 1</option><option value="col2">Col 2</option><option value="col3">Col 3</option><option value="col4">Col 4</option></select></div></li><li><div><button id="add-filter-button">Add to Filter</button></div></li></ul></form></div><!-- FILTER RESULT --><div><div class="result" id="result-pad"><strong>Result</strong>: <span id="result">(results go here)</span></div></div><!-- BUTTONS --><div><ul class="nav-list"><li><div class="div1"><button class="button">Apply</button></div></li><li><div class="div2"></div></li><li><div class="div3"><button class="button">Reset</button></div></li></ul></div></form></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildCRUDModeControlsUpdate(){
	var html = '<div class="content" id="mode-content"><div class="display-col"><form action="">  <!-- need action --><ul class="nav-list"><li><div class="col-info"> <!-- holds col info --><div class="col-label"> <!-- holds col label --><span>Col 1</span></div><div class="col-content"> <!-- holds col content --><input type="text" name="col1"> <!-- NOTE: need DOM to add `name` and `value` attributes procedurally --></div></div></li></ul></form><div id="right-button"><form action="">  <!-- need action --><button class="button">Update Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildCRUDModeControlsDelete(){
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: DELETE)--><div class="content" id="mode-content"><div class="display-col"><ul class="nav-list"><li><div class="col-info"> <!-- holds col info --><div class="col-label"> <!-- holds col label --><span>Col 1</span></div><div class="col-content"> <!-- holds col content -->Col 1 Content</div></div></li></ul><div id="right-button"><form action="">  <!-- need action --><button class="button">Delete Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTable(){
	//outerTable will contain the header table and the values table
	let outerTable = document.createElement("table");
	outerTable.style.cellSpacing = "0px";
	outerTable.style.cellPadding = "0px";
	outerTable.style.border = "0px";
	outerTable.style.width = "900px";	//find way to change depending on window size
	outerTable.style.marginLeft = "auto";
	outerTable.style.marginRight = "auto";

	//headerRowOne and headerDataOne will contain header table
	let headerRowOne = document.createElement("tr");
	outerTable.appendChild(headerRowOne);

	let headerDataOne = document.createElement("td");
	headerRowOne.appendChild(headerDataOne);

	let headerTable = document.createElement("table");
	headerTable.style.cellSpacing = "0px";
	headerTable.style.cellPadding = "1px";
	headerTable.style.width = "875px"; // has to be 25 px less than outerTable width

	let headerTableRow = document.createElement("tr");
	headerTable.appendChild(headerTableRow);

	let headerOne = document.createElement("th");
	headerOne.textContent = "keyboardNum";
	headerOne.style.width = '20%';			//needs to change depending on # of columns given by db
	headerTableRow.appendChild(headerOne);

	let headerTwo = document.createElement("th");
	headerTwo.textContent = "name";
	headerTwo.style.width = '20%';
	headerTableRow.appendChild(headerTwo);

	let headerThree = document.createElement("th");
	headerThree.textContent = "quantityInStock";
	headerThree.style.width = '20%';
	headerTableRow.appendChild(headerThree);

	let headerFour = document.createElement("th");
	headerFour.textContent = "switchNum";
	headerFour.style.width = '20%';
	headerTableRow.appendChild(headerFour);

	let headerFive = document.createElement("th");
	headerFive.textContent = "keyColorNum";
	headerFive.style.width = '20%';
	headerTableRow.appendChild(headerFive);

	headerDataOne.appendChild(headerTable);

	//headerRowTwo and headerDataTwo will contain div, which contains value table
	let headerRowTwo = document.createElement("tr");
	outerTable.appendChild(headerRowTwo);

	let headerDataTwo = document.createElement("td");
	headerRowTwo.appendChild(headerDataTwo);

	let tableHolder = document.createElement("div");
	tableHolder.style.overflow = "auto";
	tableHolder.style.height = "50px";
	tableHolder.style.width = "900px"; 
	headerDataTwo.appendChild(tableHolder);

	let valueTable = document.createElement("table");
	valueTable.style.cellSpacing = "0px";
	valueTable.style.cellPadding = "1px";
	valueTable.style.width = "875px"; // this has to be 25 px less than tableHolder width

	for(var i = 1; i < 6; i++){	//data from db will be put into table, could make other function
        var row = document.createElement("tr");
        for(var j = 1; j < 6; j++) {
            var column = document.createElement("td");
            column.textContent = i + ", " + j;
			column.style.border = "1px solid black";
			column.style.textAlign = "center";
            row.appendChild(column);
        }
        valueTable.appendChild(row);
	}
	
	tableHolder.appendChild(valueTable);

	return outerTable;
}







