# MWAD-EX_03-To-Do-List-using-JavaScript
## Date: 30.04.25

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
## index.html
'''

        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>To-Do App</title>
        <link rel="stylesheet" href="style.css" />
        </head>
        <body>
        <div class="container">
            <h1> To-Do List</h1>
            <div class="input-section">
            <input type="text" id="task-input" placeholder="Add a new task..." />
            <button id="add-task-btn">Add</button>
            </div>
            <ul id="task-list"></ul>
        </div>

        <script src="script.js"></script>
        </body>
        </html>

'''
## style.css
'''
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }
          
          body {
            background-color: #f0f4f8;
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
          }
          
          .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          
          h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }
          
          .input-section {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }
          
          #task-input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          
          #add-task-btn {
            padding: 10px 15px;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }
          
          #add-task-btn:hover {
            background-color: #0056b3;
          }
          
          ul#task-list {
            list-style: none;
          }
          
          ul#task-list li {
            background: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          ul#task-list li.completed {
            text-decoration: line-through;
            opacity: 0.6;
          }
          
          .task-actions button {
            margin-left: 5px;
            border: none;
            padding: 5px;
            border-radius: 3px;
            cursor: pointer;
          }
          
          .complete-btn {
            background-color: #28a745;
            color: white;
          }
          
          .delete-btn {
            background-color: #dc3545;
            color: white;
          }
          
'''

## script.js
'''
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
  
'''

## OUTPUT
![Screenshot 2025-04-30 113305](https://github.com/user-attachments/assets/69aab35c-9d8c-43ec-9106-7e9ec8e2f108)


## RESULT
The program for creating To-do list using JavaScript is executed successfully.
