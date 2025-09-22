/* definition of variables */
/*ToDo Form Variables*/ 
let ToDoForm = document.querySelector("#ToDo-form");
let taskInput = document.querySelector(".task");
let taskListUL = document.querySelector("#task ul");

/* Add task to list*/
ToDoForm.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    
    if (taskInput.value.trim() === "") {
        alert("Please enter your task!");
        return;
    }
    
  
    let listItem = document.createElement("li");
    
   
    let taskText = document.createElement("span");
    taskText.textContent = taskInput.value;
    taskText.className = "task-text";
    
    let actionsDiv = document.createElement("div");
    actionsDiv.className = "task-actions";
     //  (svg delete & edit)
    let editBtn = document.createElement("button");
    editBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
    `;
    editBtn.className = "edit-btn";
    editBtn.title = "Edit Task";
    
   
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3,6 5,6 21,6"/>
            <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
            <line x1="10" y1="11" x2="10" y2="17"/>
            <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
    `;
    deleteBtn.className = "delete-btn";
    deleteBtn.title = "Delete Task";
    
         //  (button delete & edit prompt)

    editBtn.addEventListener("click", editTask);
    deleteBtn.addEventListener("click", deleteTask);
    
 
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);
    
    listItem.appendChild(taskText);
    listItem.appendChild(actionsDiv);
    
    taskListUL.appendChild(listItem);
    
    taskInput.value = "";
});

function deleteTask(event) {
    let listItem = event.target.closest("li");
    listItem.remove();
}

function editTask(event) {
    let listItem = event.target.closest("li");
    let taskText = listItem.querySelector(".task-text");
    let currentText = taskText.textContent;
    
    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;
    editInput.className = "edit-input";
    
    listItem.replaceChild(editInput, taskText);
    editInput.focus();
    
  
    editInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            saveEdit(listItem, editInput);
        }
    });
    
    editInput.addEventListener("blur", function() {
        saveEdit(listItem, editInput);
    });
}

function saveEdit(listItem, editInput) {
    let newText = editInput.value.trim();
    
    if (newText === "") {
        alert("Task cannot be empty!");
        editInput.focus();
        return;
    }
    
    let taskText = document.createElement("span");
    taskText.textContent = newText;
    taskText.className = "task-text";
    
    listItem.replaceChild(taskText, editInput);
}