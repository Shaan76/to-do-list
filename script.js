const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskCategory = document.getElementById('task-category');
const taskPriority = document.getElementById('task-priority');
const taskList = document.getElementById('task-list');

function addTask() {
    const title = taskTitle.value;
    const description = taskDescription.value;
    const category = taskCategory.value;
    const priority = taskPriority.value;

    if (!title) {
        alert('Task title is required.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${title} - ${description}</span>
        <span>Category: ${category}, Priority: ${priority}</span>
        <input type="checkbox" onclick="toggleComplete(this)">
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="editTask(this)">Edit</button>
    `;
    taskList.appendChild(taskItem);

    taskTitle.value = '';
    taskDescription.value = '';
}

function toggleComplete(checkbox) {
    const taskItem = checkbox.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span:first-child').textContent;
    const [title, description] = taskText.split(' - ');

    taskTitle.value = title;
    taskDescription.value = description;
    taskCategory.value = taskItem.querySelector('span:nth-child(2)').textContent;
    taskPriority.value = taskItem.querySelector('span:nth-child(3)').textContent;
    
    taskList.removeChild(taskItem);
}

