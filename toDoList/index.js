import { createNav } from "../header.js";
createNav("todo list");

const enterTaskElement = document.querySelector(".enter-task input");
const displayTasksContainer = document.querySelector(".display-tasks");
const addTaskButton = document.querySelector(".enter-task button");

let taskArray = [];

//~% on loading window it checks the data from localstorage and updates and displays the content of taskArray accordingly.
window.addEventListener("load", () => {
  let todo = localStorage.getItem("todo");

  if (todo === null) {
    taskArray = [];
  } else {
    taskArray = JSON.parse(todo);
  }
  displayTaskValue(taskArray);
});

//~# this gets the value from the user input and adds the new value to the local storage.
const getTaskValue = () => {
  // console.log(taskArray);

  const taskValue = enterTaskElement.value;
  if (!taskValue) return;
  else {
    taskArray.push(taskValue);
    localStorage.setItem("todo", JSON.stringify(taskArray));
    displayTaskValue(taskArray);
  }
};

//~? this displays the task array in the DOM
const displayTaskValue = (taskArray) => {
  displayTasksContainer.innerHTML = taskArray
    .map(
      (task) => `<div class="task-container">
                      <div class="task">
                        <label class="task-label" for="task">${task}</label>
                        <input class="task-input" type="text" id="task" value=${task}></input>
                      </div>
                      <button class="edit-task" type="button">📝</button>
                      <button class="save-task" type="button">💾</button>
                      <button class="delete-task" type="button">🗑️</button>
                  </div>`
    )
    .join("");
};

//~^ eventlistener to the add task button to get and display the new value from the user and clear the user input.
addTaskButton.addEventListener("click", () => {
  getTaskValue();
  enterTaskElement.value = "";
});

//~> this deletes the task from the task array and updates the local storage.
const deleteTask = (e) => {
  const element = e.target;

  if (element.classList.contains("delete-task")) {
    const elementTask =
      element.parentElement.firstElementChild.firstElementChild.innerHTML;
    taskArray = taskArray.filter((task) => task !== elementTask);
    localStorage.setItem("todo", JSON.stringify(taskArray));
    displayTaskValue(taskArray);
  }
};

//~> this edit the task and also updates the local storage.
const editTask = (e) => {
  const element = e.target;

  if (element.classList.contains("edit-task")) {
    const taskContainer = element.parentElement;

    const oldValue = taskContainer.querySelector(".task-label").innerHTML;

    const selectElement = (className, styleValue) => {
      taskContainer.querySelector(className).style.display = styleValue;
    };

    selectElement(".edit-task", "none");
    selectElement(".save-task", "inline-block");
    selectElement(".task-label", "none");
    selectElement(".task-input", "inline-block");

    taskContainer.querySelector(".save-task").addEventListener("click", () => {
      const newValue = taskContainer.querySelector(".task-input").value;
      taskContainer.querySelector(".task-label").innerHTML = newValue;

      const taskIndex = taskArray.findIndex((task) => task === oldValue);
      taskArray[taskIndex] = newValue;
      localStorage.setItem("todo", JSON.stringify(taskArray));

      selectElement(".edit-task", "inline-block");
      selectElement(".save-task", "none");
      selectElement(".task-label", "inline-block");
      selectElement(".task-input", "none");
    });
  }
};

//~% we call the functions deletetask and edittask on displayTaskContainer.
displayTasksContainer.addEventListener("click", deleteTask);
displayTasksContainer.addEventListener("click", editTask);
