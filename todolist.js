const inputBox = document.getElementById("inputBox");
const listContainer = document.querySelector(".list-container");

function keyEnter(event){
  if(event.key === 'Enter'){
    addTask();
  }
}

function addTask() {
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else {
    const task = todoData.addTask(inputBox.value);
    renderTask(task);
    todoData.saveToStorage();
  }
  inputBox.value = '';
}

function renderTask(task) {
  let li = document.createElement("li");
  li.dataset.id = task.id;
  li.innerHTML = task.text;
  
  if(task.completed) {
    li.classList.add("checked");
  }
  
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  listContainer.appendChild(li);
}

function renderAllTasks() {
  listContainer.innerHTML = '';
  todoData.getAllTasks().forEach(task => renderTask(task));
}

listContainer.addEventListener("click", e => {
  const li = e.target.closest("li");
  
  if(li) {
    const taskId = parseInt(li.dataset.id);
    
    if(e.target.tagName === "SPAN") {
      todoData.removeTask(taskId);
      li.remove();
    } else {
      todoData.toggleTask(taskId);
      li.classList.toggle("checked");
    }
    
    todoData.saveToStorage();
  }
});

// Load tasks on page load
renderAllTasks();
