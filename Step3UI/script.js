const baseURL = `http://flip1.engr.oregonstate.edu:21895/`;
/* --- Table variables for setting up UI --- */
var customersVariables = ["customerNum", "firstName", "lastName", "phoneNumber"];
var ordersVariables = ["orderNum", "customerNum", "orderDate", "paymentType"];
var keyboardOrdersVariables = ["orderNum", "keyboardNum", "quantityOrdered", "pricePerUnit"];
var keyboardsVariables = ["keyboardNum", "name", "quantityInStock", "switchNum", "keyColorNum"];
var switchesVariables = ["switchNum", "switchName"];
var keyColorsVariables = ["keyColorNum", "keyColorName"];

var customersNarrowVariables = ["firstName", "lastName", "phoneNumber"];
var ordersNarrowVariables = ["customerNum", "orderDate", "paymentType"];
var keyboardOrdersNarrowVariables = ["orderNum", "keyboardNum", "quantityOrdered", "pricePerUnit"];
var keyboardsNarrowVariables = ["name", "quantityInStock", "switchNum", "keyColorNum"];
var switchesNarrowVariables = ["switchName"];
var keyColorsNarrowVariables = ["keyColorName"];


/* --- NAVBAR BUTTON SET UP --- */
function buildTopNav(){
	let createButton = document.createElement("button");
	createButton.className = "navButton cybr-btn-nav";
	createButton.innerText = "Create";
	createButton.addEventListener('click', buildCreatePage);
    document.getElementById("myDropdown").append(createButton);
	
	let readButton = document.createElement("button");
	readButton.className = "navButton cybr-btn-nav";
	readButton.innerText = "Read";
	readButton.addEventListener('click', buildReadPage);
    document.getElementById("myDropdown").append(readButton);
    
	let updateButton = document.createElement("button");
	updateButton.className = "navButton cybr-btn-nav";
	updateButton.innerText = "Update";
	updateButton.addEventListener('click', buildUpdatePage);
    document.getElementById("myDropdown").append(updateButton);
	
	let deleteButton = document.createElement("button");
	deleteButton.className = "navButton cybr-btn-nav";
	deleteButton.innerText = "Delete";
	deleteButton.addEventListener('click', buildDeletePage);
    document.getElementById("myDropdown").append(deleteButton);
	
	return;
}
buildTopNav();
document.body.appendChild(buildIndexPage());

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

/* - INDEX PAGE - */
function buildIndexPage(){
	// Change span in navbar to reflect this mode
	changeModeSpan("index");

	// Add title to page
	var html = '<div class="content"><div id="app"><div id="wrapper"><h1 class="glitch" data-text="DEFINITELY NOT A CULT">DEFINITELY <em>NOT</em> A CULT</h1><span class="sub">sell keyboards | organize orders | join us</span></div></div></div>';
    var wrapper = document.createElement('div');
	wrapper.className = "pageBox";
    wrapper.innerHTML= html;
    return wrapper;

}

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
	document.body.append(divOne);

	divOne.appendChild(buildTableMenuDelete());

	return;
}

function buildTableMenuCreate(){
	var html = '<div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""><label for="tables" class="label">SELECT TABLE:</label><select id="tableSelected" name="tables" onchange="buildCRUDModeControlsCreate(this.value);"><option value="none" selected disabled hidden> Select a Table </option><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuRead(){
	var html = '<div class="content"><ul class="nav-list"><li><div><form action=""><label for="tables" class="label">SELECT TABLE:</label><select onchange="buildCRUDModeControlsRead(this.value);"><option value="none" selected disabled hidden> Select a Table </option><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuUpdate(){
	var html = '<div class="content"><ul class="nav-list"><li><div><form action=""><label for="tables" class="label">SELECT TABLE:</label><select onchange="buildCRUDModeControlsUpdate(this.value);"><option value="none" selected disabled hidden> Select a Table </option><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}

function buildTableMenuDelete(){
	var html = '<div class="content"><ul class="nav-list"><li><div><form action=""><label for="tables" class="label">SELECT TABLE:</label><select onchange="buildCRUDModeControlsDelete(this.value);"><option value="none" selected disabled hidden> Select a Table </option> <option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li><li><div class="spacer"></div></li><li><div><label for="row" class="label">CHOOSE ROW:</label><input for="row" class="row-input"></div></li><li><div class="spacer"></div></li><li><button class="cybr-btn-small">Search<span aria-hidden>_</span><span aria-hidden class="cybr-btn-small__glitch">Search_</span><span aria-hidden class="cybr-btn-small__tag"></span></button></li></ul></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;
	return wrapper;
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
	return;
}

function buildBottomHalfCreate(table){
	var list = document.getElementById("crudControls");
	removeAllChildNodes(list);

	if (table == "customers"){
		for (variable of customersVariables){
			if(variable != "customerNum"){
				list.appendChild(fillCreateControls(variable));}
			}
		sendForReadQuery("read", "customers", customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){
			if(variable != "orderNum"){
				list.appendChild(fillCreateControls(variable));}
		}
		sendForReadQuery("read", "orders", ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillCreateControls(variable));}
		sendForReadQuery("read", "keyboardOrders", keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){
			if(variable != "keyboardNum"){
				list.appendChild(fillCreateControls(variable));}
		}
		sendForReadQuery("read", "keyboards", keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){
			if(variable != "switchNum"){
				list.appendChild(fillCreateControls(variable));}
		}
		sendForReadQuery("read", "switches", switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){
			if(variable != "keyColorNum"){
				list.appendChild(fillCreateControls(variable));}
		}
		sendForReadQuery("read", "keyColors", keyColorsVariables);
	}
	return;
}

function buildCRUDModeControlsCreate(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<div class="content" id="mode-content"><div class="display-col"><form action=""><ul class="nav-list" id="crudControls"></ul></form><div id="right-button"><form action=""><button id="createButton" class="cybr-btn">Add Row<span aria-hidden>_</span><span aria-hidden class="cybr-btn__glitch">Add Row_</span><span aria-hidden class="cybr-btn__tag">340</span></button></form></div><div class="result label" id="result-pad"><strong>RESULT</strong>: <span id="result">(results go here)</span></div></div></div>';
	var wrapper= document.createElement('div');
	wrapper.innerHTML= html;

	var divTwo = document.createElement("div");
	divTwo.class = "pageBox";
	divTwo.id = "divTwo";
	divTwo.appendChild(wrapper);

	document.body.append(divTwo);

	document.getElementById("createButton").addEventListener("click", (event) =>{
		
		tableSelected = document.getElementById("tableSelected");
		console.log(tableSelected.value);
		var values = checkInput(tableSelected.value);
		var insertedValues = []
		for(i=0;i<values.length;i++){
			insertedValues += values[i].value;
		}
		event.stopPropagation(); //don't think I need this anymore, but keeping for now
		event.preventDefault(); // I think this is keeping the page from changing. don't remove
		buildBottomHalfCreate(table);
		resultSpan = document.getElementById("result");
		resultSpan.innerText = "Inserted "
		for(i=0;i<insertedValues.length;i++){
			resultSpan.innerText += insertedValues[i];
			resultSpan.innerText +=" ";
		}

	});
	buildBottomHalfCreate(table);
	
	return;
}

function buildCRUDModeControlsRead(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<div class="content" id="mode-content"><form action=""><form action=""><ul class="nav-list"><li><div id="col-list"><label for="cols" class="label">SELECT FILTER:</label><select id="cols" name="cols"></select></div></li><li><div><button class="cybr-btn-small">Add<span aria-hidden>_</span><span aria-hidden class="cybr-btn-small__glitch">Add_</span><span aria-hidden class="cybr-btn-small__tag"></span></button></div></li></ul></form><div class="result"><ul class="nav-list"><li><span class="label">CURRENT FILTER SELECTION:</span> <span class="label-content" id="text-result">(results go here)</span></li></ul></div><ul class="nav-list"><li><div class="spacer"></div></li></ul><ul class="nav-list"><li><div class="div1"><button class="cybr-btn-med">FILTER<span aria-hidden>_</span><span aria-hidden class="cybr-btn-med__glitch">Apply_</span><span aria-hidden class="cybr-btn-med__tag"></span></button></div></li><li><div class="div2"></div></li><li><div class="div3"><button class="cybr-btn-med">Reset<span aria-hidden>_</span><span aria-hidden class="cybr-btn-med__glitch">Reset_</span><span aria-hidden class="cybr-btn-med__tag"></span></button></div></li></ul></form></div>';
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
		sendForReadQuery("read", "customers", customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){select.appendChild(fillReadControls(variable));}
		sendForReadQuery("read", "orders", ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){select.appendChild(fillReadControls(variable));}
		sendForReadQuery("read", "keyboardOrders", keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){select.appendChild(fillReadControls(variable));}
		sendForReadQuery("read", "keyboards", keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){select.appendChild(fillReadControls(variable));}
		sendForReadQuery("read", "switches", switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){select.appendChild(fillReadControls(variable));}
		sendForReadQuery("read", "keyColors", keyColorsVariables);
	}
	
	return;
}

function buildCRUDModeControlsUpdate(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<div class="content" id="mode-content"><div class="display-col"><ul class="nav-list" id="crudControls"></ul><div id="right-button"><form action=""><button class="cybr-btn">Update Row<span aria-hidden>_</span><span aria-hidden class="cybr-btn__glitch">Update Row_</span><span aria-hidden class="cybr-btn__tag">340</span></button></form></div><div class="result"><ul class="nav-list"><li><span class="label">SEARCH RESULT:</span> <span class="label-content" id="text-result">(results go here)</span></li></ul></div></div></div>';
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
		sendForReadQuery("read", "customers", customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){list.appendChild(fillUpdateControls(variable));}
		sendForReadQuery("read", "orders", ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillUpdateControls(variable));}
		sendForReadQuery("read", "keyboardOrders", keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){list.appendChild(fillUpdateControls(variable));}
		sendForReadQuery("read", "keyboards", keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){list.appendChild(fillUpdateControls(variable));}
		sendForReadQuery("read", "switches", switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){list.appendChild(fillUpdateControls(variable));}
		sendForReadQuery("read", "keyColors", keyColorsVariables);
	}

	return;
}

function buildCRUDModeControlsDelete(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<div class="content" id="mode-content"><div class="display-col"><ul class="nav-list" id="crudControls"></ul><div id="right-button"><form action=""><button class="cybr-btn">Delete Row<span aria-hidden>_</span><span aria-hidden class="cybr-btn__glitch">Delete Row_</span><span aria-hidden class="cybr-btn__tag">340</span></button></form></div><div class="result"><ul class="nav-list"><li><span class="label">SEARCH RESULT:</span> <span class="label-content" id="text-result">(results go here)</span></li></ul></div></div></div>';
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
		sendForReadQuery("read", "customers", customersVariables);
	}
	else if(table == "orders"){
		for (variable of ordersVariables){list.appendChild(fillDeleteControls(variable));}
		sendForReadQuery("read", "orders", ordersVariables);
	}
	else if(table == "keyboardOrders"){
		for (variable of keyboardOrdersVariables){list.appendChild(fillDeleteControls(variable));}
		sendForReadQuery("read", "keyboardOrders", keyboardOrdersVariables);
	}
	else if(table == "keyboards"){
		for (variable of keyboardsVariables){list.appendChild(fillDeleteControls(variable));}
		sendForReadQuery("read", "keyboards", keyboardsVariables);
	}
	else if(table == "switches"){
		for (variable of switchesVariables){list.appendChild(fillDeleteControls(variable));}
		sendForReadQuery("read", "switches", switchesVariables);
	}
	else if(table == "keyColors"){
		for (variable of keyColorsVariables){list.appendChild(fillDeleteControls(variable));}
		sendForReadQuery("read", "keyColors", keyColorsVariables);
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
	input.className = "toBeInput";
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

function sendForReadQuery(requestType, tableName, variablesToUse){
	var req = new XMLHttpRequest();
	var payload = {request:requestType, table:tableName}
	req.open("POST", baseURL, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.addEventListener('load',function(){
  		if(req.status >= 200 && req.status < 400){
    		buildTable(JSON.parse(req.responseText), variablesToUse);
  		}
 	});
	payload = JSON.stringify(payload);
	req.send(payload);
}

function checkInput(table){
	console.log("Adding to "+table);
	//check which table so I know how many li to check for in crudControls
	//then go through each li in ul to get the value in each one
	//if empty, do nothing
	//if good, send post request
	// might not need this var unorderedList = document.getElementById("crudControls");
	var listItems = document.getElementsByClassName("toBeInput");
	
	if (table == "customers"){
		if(listItems[0].value == "" || listItems[1].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,customersVariables, customersNarrowVariables);
	}
	else if(table == "orders"){
		if(listItems[0].value == "" || listItems[1].value == "" || listItems[2].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,ordersVariables, ordersNarrowVariables);
	}
	else if(table == "keyboardOrders"){
		if(listItems[0].value == "" || listItems[1].value == "" || listItems[2].value == "" || listItems[3].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,keyboardOrdersVariables, keyboardOrdersNarrowVariables);
	}
	else if(table == "keyboards"){
		if(listItems[0].value == "" || listItems[1].value == "" || listItems[2].value == "" || listItems[3].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,keyboardsVariables, keyboardsNarrowVariables);
	}
	else if(table == "switches"){
		if(listItems[0].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,switchesVariables,switchesNarrowVariables);
	}
	else if(table == "keyColors"){
		if(listItems[0].value == ""){
			var response = {response:"Error during input"};
			return response;
		}
		insertPostCreation(listItems,table,keyColorsVariables,keyColorsNarrowVariables);
	}
	else{
		var response = {response:"Error during input"};
		return response;
	}

	return listItems;
}


function insertPostCreation(inputItems, table, variablesToUse, narrowVariablesToUse){
	var req = new XMLHttpRequest();
	var payload = {request:"insert", table:table}
	for(i=0;i<inputItems.length;i++){
		if(inputItems[i].value == ""){
			var value = null;
		}
		else{
			var value = inputItems[i].value;
		}
		payload[narrowVariablesToUse[i]]=value;
	}
	console.log(payload);
	req.open("POST", baseURL, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.addEventListener('load',function(){
  		if(req.status >= 200 && req.status < 400){
    		buildTable(JSON.parse(req.responseText), variablesToUse);
  		}
 	});
	payload = JSON.stringify(payload);
	req.send(payload);
}


function buildTable(table, variables){
	if(document.body.contains(document.getElementById("outer-table"))){document.getElementById("outer-table").remove();}
	//outerTable will contain the header table and the values table
	let outerTable = document.createElement("table");
	outerTable.setAttribute("id", "outer-table");

	//headerRowOne and headerDataOne will contain header table
	let headerRowOne = document.createElement("tr");
	outerTable.appendChild(headerRowOne);

	let headerDataOne = document.createElement("td");
	headerRowOne.appendChild(headerDataOne);

	let headerTable = document.createElement("table");
	headerTable.setAttribute("id", "header-table");

	let headerTableRow = document.createElement("tr");
	headerTable.appendChild(headerTableRow);

	var size = 100/variables.length + "%";

	for (each of variables){
		let header = document.createElement("th");
		header.textContent = each;
		header.style.width = size;			//needs to change depending on # of columns given by db
		header.setAttribute("class", "header-cell");
		headerTableRow.appendChild(header);
	}

	headerDataOne.appendChild(headerTable);

	//headerRowTwo and headerDataTwo will contain div, which contains value table
	let headerRowTwo = document.createElement("tr");
	outerTable.appendChild(headerRowTwo);

	let headerDataTwo = document.createElement("td");
	headerRowTwo.appendChild(headerDataTwo);

	let tableHolder = document.createElement("div");
	tableHolder.setAttribute("id", "angel-div");
	headerDataTwo.appendChild(tableHolder);

	let valueTable = document.createElement("table");
	valueTable.setAttribute("id", "cells-table");

	// starting to fill table 
	var count = table.rows.length;

	 // For each object in the returned data, make new row and put in the data
	if(count > 0){
		var rows = table.rows;

		for (i in rows) {
			var dataRow = document.createElement("tr");
			
			for (j in rows[i]){
				var valueCell = document.createElement("td");
				valueCell.textContent = each;
				valueCell.style.width = size;
		  		valueCell.innerText = rows[i][j];
				valueCell.setAttribute("class", "cell");
		  		dataRow.appendChild(valueCell);
			};
			valueTable.appendChild(dataRow);
		};
	};
	
	tableHolder.appendChild(valueTable);

	divTwo = document.getElementById("divTwo");
	divTwo.appendChild(outerTable);

	return;
}







