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
		console.log(check);
		var check = document.getElementsByClassName("pageBox");
		check[0].parentNode.removeChild(check[0]);
	}
	
	let createDiv = document.createElement("div");
	createDiv.className = "pageBox";
	createDiv.innerText = "Create";
	document.body.append(createDiv);
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
	return;
}










