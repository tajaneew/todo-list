//New Task Input
const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

// 13 = enter button. If the enter button is pressed and something is typed, add the task.
newTask.addEventListener('keyup', (e) => {
if (e.keyCode === 13 && inputValid()) {
    addTask();
    }
});

//listening for a click, press the add button, add task
addTaskBtn.addEventListener('click', () =>{
if (inputValid()) {
    addTask();
}
});
//event listener for click
removeCompleteBtn.addEventListener('click', () => {
    //all elements with class of task or list items, array for all tasks
    const tasks = document.querySelectorAll('.task');
    //create a loop for all tasks
    tasks.forEach(task => {
        //if the task is checked off, remove it
        const checked = task.querySelector('input').checked;
        if(checked) {
            task.remove();
        }
    })
});

//pulling all of the content of the Template.
//setting up a new task element

function addTask() {
const taskElement = document.importNode
(taskTemplate.content, true);
//selecting the checkbox element that we set up new task for
const checkbox = taskElement.querySelector('input');
//setting checkbox id to 1
checkbox.id = id;
//telling the label it is for "this" checkbox
const label = taskElement.querySelector('label');
label.htmlFor = id;
//append whatever is typed into the label. 
label.append(newTask.value);
//put the task element that was created. append or add it to the task list ul
taskList.appendChild(taskElement);
//take task input and set value to empty. once the task is completed
newTask.value = '';
//increment the id, so the next task will have a unique id
id++;
}

//Looking to return any value added. if something was typed return true, if not return false.
function inputValid() {
return newTask.value !== ''
}