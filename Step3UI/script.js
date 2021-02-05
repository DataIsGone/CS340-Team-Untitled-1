/* --- Table variables for setting up UI --- */
var customersVariables = ["customerNum", "firstName", "lastName", "phoneNumber"];
var ordersVariables = ["orderNum", "customerNum", "orderDate", "paymentType"];
var keyboardOrdersVariables = ["orderNum", "keyboardNum", "quantityOrdered", "pricePerUnit"];
var keyboardsVariables = ["keyboardNum", "name", "quantityInStock", "switchNum", "keyColorNum"];
var switchesVariables = ["switchNum", "typeName"];
var keyColorsVariables = ["keyColorNum", "keyColorName"];


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

/* --- TITLE MODE CHANGE --- */
function changeModeSpan(modeStr) {
	switch(modeStr) {
		case "create":
			document.getElementById("titleMode").textContent = "CREATE";
			break;
		case "read":
			document.getElementById("titleMode").textContent = "READ";
			break;
		case "update":
			document.getElementById("titleMode").textContent = "UPDATE";
			break;
		case "delete":
			document.getElementById("titleMode").textContent = "DELETE";
			break;
		default:
			document.getElementById("titleMode").textContent = "N/A";
			break;
	}
}

/* --- DOM MANIPULATION --- */

/* - CREATE PAGE - */
function buildCreatePage(){
	// Change span in navbar to reflect this mode
	changeModeSpan("create");

	// Deleting other or same page before creating new page.
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}

	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	// Container for table menu
	let divOne = document.createElement("div");
	divOne.className = "pageBox";
	divOne.id = "divOne";
	// divOne.innerText = "Create";
	document.body.append(divOne);

	// Creates table selection menu, when one is selected, rest of page shows up
	divOne.appendChild(buildTableMenuCreate());

	// Same process for other pages
	return;
}

/* - READ PAGE - */
function buildReadPage(){
	// Change span in navbar to reflect this mode
	changeModeSpan("read");

	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}

	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	let divOne = document.createElement("div");
	divOne.className = "pageBox";
	// divOne.innerText = "Read";
	document.body.append(divOne);

	divOne.appendChild(buildTableMenuRead());

	return;
}

/* - UPDATE PAGE - */
function buildUpdatePage(){
	// Change span in navbar to reflect this mode
	changeModeSpan("update");


	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}

	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}

	let divOne = document.createElement("div");
	divOne.className = "pageBox";
	// divOne.innerText = "Update";
	document.body.append(divOne);

	divOne.appendChild(buildTableMenuUpdate());

	return;
}

/* - DELETE PAGE - */
function buildDeletePage(){
	// Change span in navbar to reflect this mode
	changeModeSpan("delete");

	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}

	let divOne = document.createElement("div");
	divOne.className = "pageBox";
	// divOne.innerText = "Delete";
	document.body.append(divOne);

	divOne.appendChild(buildTableMenuDelete());

	return;
}


function buildTableMenuCreate(){
	var html = '<!-- DIV 1: Table Menu --><div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select onchange="buildCRUDModeControlsCreate(this.value);"><option value="none" selected disabled hidden> Select a Table </option> <option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div><!-- Row:<input><button>Find</button> --></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuRead(){
	var html = '<!-- DIV 1: Table Menu --><div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select onchange="buildCRUDModeControlsRead(this.value);"><option value="none" selected disabled hidden> Select a Table </option> <option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div><!-- Row:<input><button>Find</button> --></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuUpdate(){
	var html = '<!-- DIV 1: Table Menu --><div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select onchange="buildCRUDModeControlsUpdate(this.value);"><option value="none" selected disabled hidden> Select a Table </option> <option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div>Row:<input><button>Find</button></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuDelete(){
	var html = '<!-- DIV 1: Table Menu --><div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""> <!-- need action --><label for="tables">Table:</label><select onchange="buildCRUDModeControlsDelete(this.value);"><option value="none" selected disabled hidden> Select a Table </option> <option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div>Row:<input><button>Find</button></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}



function buildCRUDModeControlsCreate(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: CREATE)--><div class="content" id="mode-content"><div class="display-col"><form action="">  <!-- need action --><ul class="nav-list" id="crudControls"></ul></form><div id="right-button"><form action="">  <!-- need action --><button class="button">Add Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;

	var divTwo = document.createElement("div");
	divTwo.class = "pageBox";
	divTwo.id = "divTwo";
	divTwo.appendChild(wrapper);

	document.body.append(divTwo);

	var list = document.getElementById("crudControls");

	if (table == "customers"){
		for (variable of customersVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){list.appendChild(fillCreateControls(variable));}
		buildTable(table, keyColorsVariables);
	}
	
	return;
}

function buildCRUDModeControlsRead(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: READ)--><div class="content" id="mode-content"><form action="">  <!-- need action --><!-- COLUMN MENU --><div><form action=""> <!-- need action --><ul class="nav-list"><li><div id="col-list"><label for="cols">Item:</label><select id="cols" name="cols"></select></div></li><li><div><button id="add-filter-button">Add to Filter</button></div></li></ul></form></div><!-- FILTER RESULT --><div><div class="result" id="result-pad"><strong>Result</strong>: <span id="result">(results go here)</span></div></div><!-- BUTTONS --><div><ul class="nav-list"><li><div class="div1"><button class="button">Apply</button></div></li><li><div class="div2"></div></li><li><div class="div3"><button class="button">Reset</button></div></li></ul></div></form></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;

	var divTwo = document.createElement("div");
	divTwo.class = "pageBox";
	divTwo.id = "divTwo";
	divTwo.appendChild(wrapper);

	document.body.append(divTwo);

	var select = document.getElementById("cols");
	 
	if (table == "customers"){
		for (variable of customersVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){select.appendChild(fillReadControls(variable));}
		buildTable(table, keyColorsVariables);
	}
	
	return;
}

function buildCRUDModeControlsUpdate(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: UPDATE)--><div class="content" id="mode-content"><div class="display-col"><form action="">  <!-- need action --><ul class="nav-list" id="crudControls"><!-- Gets filled by JS --></ul></form><div id="right-button"><form action="">  <!-- need action --><button class="button">Update Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;

	var divTwo = document.createElement("div");
	divTwo.class = "pageBox";
	divTwo.id = "divTwo";
	divTwo.appendChild(wrapper);

	document.body.append(divTwo);

	var list = document.getElementById("crudControls");

	if (table == "customers"){
		for (variable of customersVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){list.appendChild(fillUpdateControls(variable));}
		buildTable(table, keyColorsVariables);
	}

	return;
}

function buildCRUDModeControlsDelete(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<!-- DIV 2: CRUD Mode Controls (CURRENT: DELETE)--><div class="content" id="mode-content"><div class="display-col"><ul class="nav-list" id="crudControls"></ul><div id="right-button"><form action="">  <!-- need action --><button class="button">Delete Row</button></form></div><div class="result"><strong>Result</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;

	var divTwo = document.createElement("div");
	divTwo.class = "pageBox";
	divTwo.id = "divTwo";
	divTwo.appendChild(wrapper);

	document.body.append(divTwo);

	var list = document.getElementById("crudControls");

	if (table == "customers"){
		for (variable of customersVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){list.appendChild(fillDeleteControls(variable));}
		buildTable(table, keyColorsVariables);
	}

	return;
}



function fillCreateControls(variable){ //this is copied in three functions, could probably try to make it one. Will check later.
	var list = document.createElement("li");

	var outerDiv = document.createElement("div");
	outerDiv.className = "col-info";
	list.appendChild(outerDiv);

	var divLabel = document.createElement("div");
	divLabel.className = "col-label";
	outerDiv.appendChild(divLabel);

	var label = document.createElement("span");
	label.textContent = variable;
	divLabel.appendChild(label);

	var divLabelTwo = document.createElement("div");
	divLabelTwo.className = "col-content";
	outerDiv.appendChild(divLabelTwo);

	var input = document.createElement("input");			//have to find way to set correct input type. Or maybe just allow text for all. not sure
	input.setAttribute("type", "text");
	divLabelTwo.appendChild(input);

	return list;
}

function fillReadControls(variable){
	var option = document.createElement("option");
	option.value = variable;
	option.innerText = variable;
	return option;

}

function fillUpdateControls(variable){
	var list = document.createElement("li");

	var outerDiv = document.createElement("div");
	outerDiv.className = "col-info";
	list.appendChild(outerDiv);

	var divLabel = document.createElement("div");
	divLabel.className = "col-label";
	outerDiv.appendChild(divLabel);

	var label = document.createElement("span");
	label.textContent = variable;
	divLabel.appendChild(label);

	var divLabelTwo = document.createElement("div");
	divLabelTwo.className = "col-content";
	outerDiv.appendChild(divLabelTwo);

	var input = document.createElement("input");			
	input.setAttribute("type", "text");
	divLabelTwo.appendChild(input);

	return list;
}

function fillDeleteControls(variable){
	var list = document.createElement("li");

	var outerDiv = document.createElement("div");
	outerDiv.className = "col-info";
	list.appendChild(outerDiv);

	var divLabel = document.createElement("div");
	divLabel.className = "col-label";
	outerDiv.appendChild(divLabel);

	var label = document.createElement("span");
	label.textContent = variable;
	divLabel.appendChild(label);

	var divLabelTwo = document.createElement("div");
	divLabelTwo.className = "col-content";
	outerDiv.appendChild(divLabelTwo);

	var input = document.createElement("input");			
	input.setAttribute("type", "text");
	divLabelTwo.appendChild(input);

	return list;
}



function buildTable(table, variables){
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

	var size = 100/variables.length + "%";

	for (each of variables){
		let header = document.createElement("th");
		header.textContent = each;
		header.style.width = size;			//needs to change depending on # of columns given by db
		headerTableRow.appendChild(header);
	}

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

	//start with this
	for(var i = 1; i < variables.length + 1; i++){	//data from db will be put into table, could make other function
        var row = document.createElement("tr");
        for(var j = 1; j < variables.length + 1; j++) {
            var column = document.createElement("td");
            column.textContent = i + ", " + j;
			column.style.border = "1px solid black";
			column.style.textAlign = "center";
            row.appendChild(column);
        }
        valueTable.appendChild(row);
	}
	
	tableHolder.appendChild(valueTable);

	divTwo = document.getElementById("divTwo");
	divTwo.appendChild(outerTable);

	return;
}







