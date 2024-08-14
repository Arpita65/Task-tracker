// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <span>
                    <span class="edit" onclick="editTask(${index})">Edit</span>
                    <span class="delete" onclick="deleteTask(${index})">Delete</span>
                </span>
            `;
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    }

    function editTask(index) {
        const newTask = prompt('Edit Task:', tasks[index]);
        if (newTask !== null) {
            tasks[index] = newTask.trim();
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    // Add event listener to the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Make the editTask and deleteTask functions globally accessible
    window.editTask = editTask;
    window.deleteTask = deleteTask;
});
