let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clear");
let list = document.getElementById("tasklist");
let nameInput = document.getElementById("name");
let taskInput = document.getElementById("task");
let listHeader = document.getElementById("listhead");
let modal = document.getElementById("modal");
let backdrop = document.getElementById("backdrop");
let modalCloseBtn = document.getElementById("modal-btn");
let modalText = document.getElementById("modal-text");
let userName = "";
let task = "";
let form = document.getElementById("form");
let taskList = [];
let items = 0;
let modalMessage = 'Cannot submit empty form.'

submitButton.addEventListener("click", handleSubmit);
clearButton.addEventListener("click", clearForm);

function modalChange(displayValue, message) {
  modalText.innerHTML = message;
  modal.style.display = displayValue;
}

function handleSubmit(event) {
  event.preventDefault();
  if (taskInput.value === "" || nameInput.value === "") {
    modalChange('flex', modalMessage);
    return false;
  } else if (taskInput.value.length > 16) {
    alert("Please limit task to 16 characters");
    return false;
  } else {
    userName = nameInput.value;
    task = taskInput.value;
    taskList.push(task);
    listHeader.innerHTML = `${userName}'s Tasks`;
    let li = document.createElement("li");
    li.innerHTML = `${taskList[items]}<button onclick="this.parentNode.remove()" id="done">X</button></li>`;
    list.appendChild(li);

    items++;

    taskInput.value = taskInput.defaultValue;
    taskInput.focus();
  }
}

function clearForm() {
  list.innerHTML = "";
  items = null;
}

function deleteChild(e) {
  list.removeChild(list.lastElementChild);
}

modalCloseBtn.addEventListener("click", () => modalChange("none"));