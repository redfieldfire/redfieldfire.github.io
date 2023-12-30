const container = document.getElementById("container");

const size = parseInt(prompt("size max(30) min(20)", "30"));

const width = parseInt(prompt("width max(40)", "40"));
const height = parseInt(prompt("height max(20)", "20"));

container.style.width = (width * (size + 2)) + "px";
container.style.height = (height * (size + 2)) + "px";

var quantity = 0;
var color = "#FFF";
var drag = false;

document.body.style.setProperty('--size-square', size + "px")

forEachAll(addSquares);

//Thats map all the squares and affect all with one action
function forEachAll(action) {
    quantity = width * height;
    while (quantity > 0) {
        quantity--;
        action(quantity);
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
        'onmouseover="addHover(' + id + ')" ' +
        'onmouseout="removeHoverAndDrag(' + id + ')" ' +
        'onmousedown="turnOnDrag()" ' +
        'onmouseup="turnOffDrag()" ' +
        'onmousemove="checkDrag(' + id + ')" ' +
        'onclick="paint(' + id + ')" ' +
        'class="square"></div>'
    );
}

function addHover(id) {
    //Temporal CSS for hover and paint the saquare with the selected color
    document.getElementById(id).classList.add("hover-square");
}

function removeHoverAndDrag(id) {
    //Remove the hover, and check if drag is active
    document.getElementById(id).classList.remove("hover-square");
    checkDrag(id);
}

function checkDrag(id) {
    if (drag) paint(id)
}

function paint(id) {
    //Paint the saquare
    document.getElementById(id).style.backgroundColor = color;
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
    forEachAll(clearOne);
}   

function clearOne(id) {
    document.getElementById(id).style.backgroundColor = "black";
}

//The next 4 is for show and hide the lines of the squares

function showLines() {
    forEachAll(showBorder);
}

function showBorder(id) {
    document.getElementById(id).style.border =
        "solid 1px rgba(255, 255, 255, 0.2)";
}

function hideLines() {
    forEachAll(hideBorder);
}

function hideBorder(id) {
    document.getElementById(id).style.border = "solid 1px transparent";
}
