var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("ul");
var eraser = document.getElementsByClassName("eraser");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var del = document.createElement("button");
    li.appendChild(document.createTextNode(input.value + " "));
    del.appendChild(document.createTextNode("Delete"));
    del.classList.add("eraser");
    ul.appendChild(li);
    li.append(del);
    input.value="";
}

function removeListElement(element) {
    if (element.target.className === "eraser") {
        element.target.parentElement.remove();
    }
}  

function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.code === "Enter"){
        createListElement();
    }
}

function toggleDone(e) {
    if  (e.target.tagName === "LI"){
        e.target.classList.toggle("done");
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", toggleDone);

list.addEventListener("click", removeListElement);