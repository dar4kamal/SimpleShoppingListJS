// Variable Declarations
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");


// Function playGround
function strikeThrough(e) {	
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createDeleteBtn(li);
	input.value = "";
}

function createDeleteBtn(li) {
	var btn = document.createElement("button");	
	var i = document.createElement("i");
	i.classList.toggle("fa");
	i.classList.toggle("fa-trash");
	// i.addEventListener("click",deleteBtnOnClick);
	btn.appendChild(i);
	btn.classList.toggle("btn");
	btn.addEventListener("click",deleteBtnOnClick);
	li.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteBtnOnClick(){
	var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
}

// Main Operations 
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", strikeThrough);

listItems.forEach(function (li) {
	createDeleteBtn(li);	
})