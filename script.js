// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        } 

        // Step 4: Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Step 4: Task Removal
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li element to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Step 5: Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Step 6: Invoke addTask on DOMContentLoaded
    addTask();
});
