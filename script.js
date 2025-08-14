// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            // task text is before the remove button
            const text = li.firstChild.textContent;
            tasks.push(text);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create the addTask Function
    function addTask(taskText, save = true) {
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task Creation
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn'); // ✅ uses classList.add

        // Task Removal
        removeButton.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // update Local Storage after removal
        };

        // Append button and li to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if needed
        if (save) {
            saveTasks();
        }

        // Clear input field
        taskInput.value = "";
    }

    // Attach Event Listeners
    addButton.addEventListener('click', function () {
        addTask();
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page starts
    loadTasks();
});
