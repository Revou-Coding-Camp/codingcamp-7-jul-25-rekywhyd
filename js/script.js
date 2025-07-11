//Global List
let tasks = [];

// function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

    if (taskInput.value === '' || dueDateInput.value === '') {
        alert('Please fill in both fields.');
        return;
    }else {
        // Create a new task object
        const newTask = {
            id: Date.now(),
            task: taskInput.value, 
            dueDateInput: dueDateInput.value, 
            complated: false
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Clear the input fields
        taskInput.value = '';
        dueDateInput.value = '';

        // Log the new task (for demonstration purposes)
        console.log('New task added:', newTask);
        displayTasks();
    }
    console.log('Adding task:', taskInput.value, 'Due date:', dueDateInput.value);
}

// function to display task
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the existing list
    tasks.forEach(element => {
        const taskItem = `
        <div>
            <span>${element.task}</span>
            <span>${element.dueDateInput}</span>
            <button class="bg-green-500 text-white p-[4px] rounded" onclick="toggleTaskCompletion(${element.id})">${element.complated ? 'Undo' : 'Complate'}</button>
            <button class="bg-red-500 text-white p-[4px] rounded" onclick="deleteTask(${element.id})">Delete</button>
        </div>`;
        taskList.innerHTML += taskItem;
    });
}

function deleteTask(id) {
    // Find the index of the task to delete
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        // Remove the task from the tasks array
        tasks.splice(taskIndex, 1);
        displayTasks(); // Refresh the displayed task list
    }
}

// function to delete all tasks
function deleteAllTasks() {
    tasks = []; // Clear the tasks array
    displayTasks();
    console.log('All tasks deleted');
    
}

function toggleTaskCompletion(id) {
    // Find the task by ID
    const task = tasks.find(task => task.id === id);
    if (task) {
        // Toggle the completion status
        task.complated = !task.complated;
        console.log('Toggling completion for task with ID:', id, 'New status:', task.complated);
        
        displayTasks(); // Refresh the displayed task list
    }
}

// function to filter tasks
function filterTasks() {
    
}