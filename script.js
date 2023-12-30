const container = document.getElementById("container");
const statusBorder = document.getElementById("statusBorder");

const borderColor = "rgba(120,120,120,0.5)"

const size = parseInt(prompt("size max(30) min(20)", "30"));

const width = parseInt(prompt("width max(40)", "40"));
const height = parseInt(prompt("height max(20)", "20"));

const quantity = width * height;

container.style.width = (width * (size + 2)) + "px";
container.style.height = (height * (size + 2)) + "px";

document.body.style.setProperty('--size-square', size + "px")

var color = "#FFF";
var drag = false;
var borderHide = false;

forEachAll(addSquares);

//Thats foreach all the squares and affect all with one action (Send the ID)
function forEachAll(action) {
    id = quantity;
    while (id > 0) {
        id--;
        action(id);
    }
}

//Thats map all the squares and affect all with one action (Send the Square)
function mapAll(action) {
    id = width * height;
    while (id > 0) {
        id--;
        action(document.getElementById(id));
    }
}

//Create all the squares
function addSquares(id) {
    container.innerHTML += square(id);
}

function square(id) {
    return (
        '<div id=' + id + ' ' +
        'draggable="false" ' +
        'onmouseover="addHover(this)" ' +
        'onmouseout="removeHoverAndDrag(this)" ' +
        'onmousedown="turnOnDrag()" ' +
        'onmouseup="turnOffDrag()" ' +
        'onmousemove="checkDrag(this)" ' +
        'onclick="paint(this)" ' +
        'class="square"></div>'
    );
}

function addHover(square) {
    //Temporal CSS for hover and paint the saquare with the selected color
    square.classList.add("hover-square");
}

function removeHoverAndDrag(square) {
    //Remove the hover, and check if drag is active
    square.classList.remove("hover-square");
    checkDrag(square);
}

function checkDrag(square) {
    //If paint with drag is active
    if (drag) paint(square)
}

function paint(square) {
    //Paint the saquare
    square.style.backgroundColor = color;
    if (borderHide) square.style.borderColor = color;
}

function turnOnDrag() {
    drag = true
}

function turnOffDrag() {
    drag = false
}

function changeColor(newColor) {
    //Here gets the new color, and put the variable in CSS for the hover effects
    color = newColor;
    document.body.style.setProperty("--color-hover", newColor);
}

function clearAll() {
    //Erase all the squares
    mapAll(clearOne);
}   

function clearOne(square) {
    square.style.backgroundColor = "black";
    square.style.borderColor = borderHide ? "black" : borderColor;
}

//The next 5 is for show and hide the lines of the squares

function changeStateBorder() {
    if(borderHide) {
        showLines();
        statusBorder.value = "Hide lines"
    }   
    else {
        hideLines();
        statusBorder.value = "Show lines"
    }
    borderHide = !borderHide;
}

function showLines() {
    mapAll(showBorder);
}

function showBorder(square) {
    square.style.borderColor = borderColor;
}

function hideLines() {
    mapAll(hideBorder);
}

function hideBorder(square) {
    square.style.borderColor = ((square.style.backgroundColor + "").length > 0) ? square.style.backgroundColor : "black";
}
