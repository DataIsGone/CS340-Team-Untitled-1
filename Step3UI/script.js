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

function buildCreatePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		console.log(check);
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let createDiv = document.createElement("div");
	createDiv.className = "pageBox";
	createDiv.innerText = "Create";
	document.body.append(createDiv);

	createDiv.appendChild(buildTable());

	return;
}

function buildReadPage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		console.log(check);
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let readDiv = document.createElement("div");
	readDiv.className = "pageBox";
	readDiv.innerText = "Read";
	document.body.append(readDiv);

	readDiv.appendChild(buildTable());

	return;
}

function buildUpdatePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		console.log(check);
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}

	let updateDiv = document.createElement("div");
	updateDiv.className = "pageBox";
	updateDiv.innerText = "Update";
	document.body.append(updateDiv);

	updateDiv.appendChild(buildTable());
	return;
}

function buildDeletePage(){
	var check = document.getElementsByClassName("pageBox").length;
	if(check > 0){
		console.log(check);
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let deleteDiv = document.createElement("div");
	deleteDiv.className = "pageBox";
	deleteDiv.innerText = "Delete";
	document.body.append(deleteDiv);

	deleteDiv.appendChild(buildTable());

	return;
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







