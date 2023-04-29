const draggableList = document.getElementById("draggable-list");
const checkBtn = document.getElementById("check");


const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Halu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page"
]


const listItems = [];
let dragStartIndex;

createItem();
//function for creating items
function createItem() {
  [...richestPeople]
  .map(a => ({value: a, sort: Math.random()}))
  .sort((a, b) => {return a.sort-b.sort})
  .map(a => a.value)
  .forEach((person, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-index", index);
    listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="name">${person}</p>
      <i class="fas fa-grip-lines"></i>
    </div>
    `;
    listItems.push(listItem);
    draggableList.appendChild(listItem);
  })
  
  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
  console.log(dragStartIndex);
}

function dragEnter() {
  this.classList.add("over");
}
function dragOver(e) {
  e.preventDefault();
  console.log(this);
}
function dragLeave() {
  this.classList.remove("over");
}
function drop() {
  const dragEndIndex = +this.closest("li").getAttribute("data-index");
  swap(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}
function swap(dragStartIndex, dragEndIndex) {
  const name1 = listItems[dragStartIndex].querySelector(".draggable");
  const name2 = listItems[dragEndIndex].querySelector(".draggable");

  listItems[dragStartIndex].appendChild(name2);
  listItems[dragEndIndex].appendChild(name1);
}

function addEventListeners() {
  const dragListItems = document.querySelectorAll(".draggable-list li");
  const draggables = document.querySelectorAll(".draggable");

  draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", dragStart);
  });
  dragListItems.forEach(item => {
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", drop);
  });

}

function checkOrder() {
  listItems.forEach((item, index) => {
    const name = item.querySelector(".draggable").innerText.trim();
    //console.log(item.classList);
    if(name !== richestPeople[index]) {
      item.classList.add("wrong");
    } else {
      item.classList.remove("wrong");
      item.classList.add("right");
    }
  });
}

checkBtn.addEventListener("click", checkOrder);