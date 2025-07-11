// Global List
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

    if (taskInput.value === '' || dueDateInput.value === '') {
        alert('Please fill in both fields.');
        return;
    } else {
        const newTask = {
            id: Date.now(),
            task: taskInput.value,
            dueDateInput: dueDateInput.value,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = '';
        dueDateInput.value = '';
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list');
    const filter = document.querySelector('.todos').value;
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<p>Task is Empty!</p>';
        return;
    }

    filteredTasks.forEach(element => {
        const taskItem = `
        <div>
            <span>${element.task}</span>
            <span>${element.dueDateInput}</span>
            <button onclick="toggleTaskCompletion(${element.id})">${element.completed ? 'Completed' : 'Pending'}</button>
            <button onclick="deleteTask(${element.id})">Delete</button>
        </div>`;
        taskList.innerHTML += taskItem;
    });
}

// Delete a single task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}

// Delete all tasks
function deleteAllTasks() {
    tasks = [];
    displayTasks();
}

// Toggle completion status
function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        displayTasks();
    }
}

// Filter tasks when the dropdown changes
document.querySelector('.todos').addEventListener('change', () => {
    displayTasks();
});
