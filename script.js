// //your JS code here. If required.
// const levelItem = document.getElementById('level');

// const parentUl = levelItem.parentNode;

// const listItems = parentUl.getElementByTagName('li');

// const index = Array.prototype.indexOf.call(listItems, levelItem);

// alert("The level of the element is:" index);

let level = 0;
let currentElement = document.getElementById('level');
while (currentElement) {
    level++;
    currentElement = currentElement.parentNode;
}
alert("The level of the element is: " + level);