// Trocar páginas sem carregar o navegador
let currentPage = window.location.hash || "#home";
document.querySelector(currentPage).className = "";


function changePage(event) {
  document.querySelector(currentPage).className = "hidden";
  currentPage = event.target.hash;
  document.querySelector(currentPage).className = "";
};

let menu = document.querySelector("#menu");

let menuItem = menu.children;
for (i = 0; i < menuItem.length; i++) {
  menuItem[i].querySelector("a").onclick = changePage;
};


// adicionar uma tarefa na lista
let tasks = [];

let TasksElement = document.querySelector("#tasks");
drawList();


function drawList() {
  TasksElement.innerHTML = "";
  for (i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    TasksElement.innerHTML += `<li>${task.description}</li>`;
  }
}

let addform = document.querySelector("#addform");
addform.onsubmit = addTask;

function addTask(event) {
  event.preventDefault();
  let form = event.target;
  let description = form.children.description.value;
  let observation = form.children.observation.value;
  tasks.push(new Task(description, tasks.length, observation));
  drawList();
}
