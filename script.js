
const input = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        input.value = ''; 
    }
});


