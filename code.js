let submitButton = document.getElementById("submit")
let clearButton = document.getElementById("clear")
let list = document.getElementById("tasklist")
let nameInput = document.getElementById("name")
let taskInput = document.getElementById("task")
let listHeader = document.getElementById("listhead")
let userName = ""
let task = ""
let form = document.getElementById("form")
let taskList = []
let items = 0
//list.innerHTML = ""





submitButton.addEventListener("click", handleSubmit);
clearButton.addEventListener("click", clearForm);







function handleSubmit (event)  {
    event.preventDefault();
    if (taskInput.value === "" || nameInput.value === "") {
        alert('This cannot be empty')
        return false;
     }  else if (taskInput.value.length > 12) {
        alert('Please limit task to 12 characters');
        return false
     }
    else    {
    userName = nameInput.value
    task = taskInput.value
    taskList.push(task)
    listHeader.innerHTML = `${userName}'s Tasks`
    let li = document.createElement("li")
    li.innerHTML = `${taskList[items]}<button onclick="this.parentNode.remove()" id="done">X</button></li>`;
    list.appendChild(li)
    //let deleteTask = document.getElementById("done")
    //deleteTask.addEventListener("click", deleteChild)
    //taskList.forEach((o, items) => o.id = items);
      
    items++
    
    taskInput.value = taskInput.defaultValue
    taskInput.focus()
}
}

function clearForm ()   {
    list.innerHTML = ""
    items = null
}



function deleteChild (e) {
    //e.target.parentNode.remove()
    //let item = document.getElementById(nameInput.)
    list.removeChild(list.lastElementChild)
}


/*
onclick="deleteChild()"
*/


