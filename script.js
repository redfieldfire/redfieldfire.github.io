const container = document.getElementById('container');

const size = parseInt(prompt("size", "30"))

const width = parseInt(prompt("width", "30"))
const height = parseInt(prompt("height", "10"))

container.style.width = (width * (size + 2)) + "px"
container.style.height = (height * (size + 1)) + "px"

var quantity = 0
var color = "#000"

forEachAll(addLabel)

function forEachAll(action) {
    quantity = width * height
    while (quantity > 0) {
        quantity--
        action(quantity)
    }
}

function addLabel(id) {
    container.innerHTML += '<div id='+id+' onmouseover="addHover('+id+')" onmouseout="removeHover('+id+')" onclick="paint('+id+')" class="square"></div>'
}

function addHover(id) {
    document.getElementById(id).classList.add('hover-square')
}

function removeHover(id) {
    document.getElementById(id).classList.remove('hover-square')
}

function paint(id) {
    document.getElementById(id).style.backgroundColor = color
}

function changeColor(newColor) {
    color = newColor
    document.body.style.setProperty('--color-hover', newColor)
    console.log(document.body.style)
}

function clearAll() {
    forEachAll(clearOne)
}

function clearOne(id) {
    document.getElementById(id).style.backgroundColor = "black"
}

function showLines(){
    forEachAll(paintBorder)
}

function paintBorder(id) {
    document.getElementById(id).style.border = "solid 1px rgba(255, 255, 255, 0.2)"
}

function hideLines(){
    forEachAll(hideLine)
}

function hideLine(id){
    document.getElementById(id).style.border = "solid 1px transparent"
}