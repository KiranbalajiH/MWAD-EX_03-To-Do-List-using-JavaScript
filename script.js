document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Add Task
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
      addTask(taskText);
      taskInput.value = "";
    });
  
    // Add task element
    function addTask(text) {
      const li = document.createElement("li");
  
      const span = document.createElement("span");
      span.textContent = text;
  
      const actions = document.createElement("div");
      actions.className = "task-actions";
  
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✓";
      completeBtn.classList.add("complete-btn");
      completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
      });
  
      actions.appendChild(completeBtn);
      actions.appendChild(deleteBtn);
  
      li.appendChild(span);
      li.appendChild(actions);
      taskList.appendChild(li);
    }
  });
  