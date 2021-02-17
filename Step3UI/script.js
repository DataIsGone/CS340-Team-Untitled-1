const baseURL = `http://flip1.engr.oregonstate.edu:21895/`;
/* --- Table variables for setting up UI --- */
var customersVariables = ["customerNum", "firstName", "lastName", "phoneNumber"];
var ordersVariables = ["orderNum", "customerNum", "orderDate", "paymentType"];
var keyboardOrdersVariables = ["orderNum", "keyboardNum", "quantityOrdered", "pricePerUnit"];
var keyboardsVariables = ["keyboardNum", "name", "quantityInStock", "switchNum", "keyColorNum"];
var switchesVariables = ["switchNum", "typeName"];
var keyColorsVariables = ["keyColorNum", "keyColorName"];


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
	var html = '<div class="content"><ul class="nav-list"><li><div id="table-menu"><form action=""><label for="tables" class="label">SELECT TABLE:</label><select name="tables" onchange="buildCRUDModeControlsCreate(this.value);"><option value="customers">Customers</option><option value="orders">Orders</option><option value="keyboards">Keyboards</option><option value="keyboardOrders">Keyboard Orders</option><option value="switches">Key Switches</option><option value="keyColors">Keycap Colors</option></select></form></div></li></ul></div>';
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



function buildCRUDModeControlsCreate(table){
	if(document.body.contains(document.getElementById("divTwo"))){document.getElementById("divTwo").remove();}
	
	var html = '<div class="content" id="mode-content"><div class="display-col"><form action=""><ul class="nav-list" id="crudControls"></ul></form><div id="right-button"><form action=""><button class="cybr-btn">Add Row<span aria-hidden>_</span><span aria-hidden class="cybr-btn__glitch">Add Row_</span><span aria-hidden class="cybr-btn__tag">340</span></button></form></div><div class="result label" id="result-pad"><strong>RESULT</strong>: <span id="result">(results go here)</span></div></div></div>';
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
		var req = new XMLHttpRequest();
		req.open("GET", baseURL, true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
  			if(req.status >= 200 && req.status < 400){
    			buildTable(JSON.parse(req.responseText), customersVariables);
  			}
 		});
		req.send();

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
	console.log(table);
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

	//start with this
	var count = table.rows.length;

	 // For each object in the returned data, make new row and put in the exercise data
	if(count > 0){
		var rows = table.rows;
		//console.log(rows);

		for (i in rows) {
			//console.log(rows[i]);
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
	/* for(var i = 1; i < variables.length + 1; i++){	//data from db will be put into table, could make other function
        var row = document.createElement("tr");
        for(var j = 1; j < variables.length + 1; j++) {
            var column = document.createElement("td");
            column.textContent = i + ", " + j;
			column.setAttribute("class", "cell");
			// column.style.border = "1px solid black";
			// column.style.textAlign = "center";
            row.appendChild(column);
        }
        valueTable.appendChild(row);
	} */
	
	tableHolder.appendChild(valueTable);

	divTwo = document.getElementById("divTwo");
	divTwo.appendChild(outerTable);

	return;
}







