document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = text;

        const editButton = document.createElement('span');
        editButton.innerHTML = '✏️';
        editButton.className = 'edit';
        editButton.addEventListener('click', function () {
            editTask(listItem);
        });

        const deleteButton = document.createElement('span');
        deleteButton.innerHTML = '🗑️';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function () {
            confirmDelete(listItem);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    }

    function confirmDelete(listItem) {
        const confirmBox = document.createElement('div');
        confirmBox.className = 'confirm-box';
        confirmBox.innerHTML = `
            <p>Are you sure you want to delete this task?</p>
            <button class="btn btn-danger">Yes</button>
            <button class="btn btn-secondary">Cancel</button>
        `;

        const [yesButton, cancelButton] = confirmBox.querySelectorAll('button');
        yesButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
            document.body.removeChild(confirmBox);
        });

        cancelButton.addEventListener('click', function () {
            document.body.removeChild(confirmBox);
        });

        document.body.appendChild(confirmBox);
    }

    function editTask(listItem) {
        const originalText = listItem.firstChild.textContent.trim();
        listItem.innerHTML = '';

        const input = document.createElement('input');
        input.type = 'text';
        input.value = originalText;
        listItem.appendChild(input);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.className = 'btn btn-success';
        listItem.appendChild(saveButton);

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.className = 'btn btn-secondary';
        listItem.appendChild(cancelButton);

        saveButton.addEventListener('click', function () {
            listItem.innerHTML = input.value.trim();
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
        });

        cancelButton.addEventListener('click', function () {
            listItem.innerHTML = originalText;
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
        });

        const editButton = document.createElement('span');
        editButton.innerHTML = '✏️';
        editButton.className = 'edit';
        listItem.appendChild(editButton);

        const deleteButton = document.createElement('span');
        deleteButton.innerHTML = '🗑️';
        deleteButton.className = 'delete';
        listItem.appendChild(deleteButton);
    }
});
