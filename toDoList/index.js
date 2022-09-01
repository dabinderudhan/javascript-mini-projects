const enterTaskElement = document.querySelector(".enter-task input");
const displayTasksContainer = document.querySelector(".display-tasks");
const addTaskButton = document.querySelector(".enter-task button");

let taskArray = ["HTML", "CSS", "JavaScript", "React", "Github"];

const getTaskValue = () => {
  // let todo = localStorage.getItem("todo");
  // console.log(todo);

  const taskValue = enterTaskElement.value;
  if (!taskValue) return;
  else {
    taskArray.push(taskValue);
    displayTaskValue(taskArray);
  }
};

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

displayTaskValue(taskArray);

addTaskButton.addEventListener("click", () => {
  getTaskValue();
  enterTaskElement.value = "";
});

const deleteTask = (e) => {
  const element = e.target;

  if (element.classList.contains("delete-task")) {
    const elementTask =
      element.parentElement.firstElementChild.firstElementChild.innerHTML;
    taskArray = taskArray.filter((task) => task !== elementTask);
    displayTaskValue(taskArray);
  }
};

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

      selectElement(".edit-task", "inline-block");
      selectElement(".save-task", "none");
      selectElement(".task-label", "inline-block");
      selectElement(".task-input", "none");
    });
  }
};

displayTasksContainer.addEventListener("click", deleteTask);
displayTasksContainer.addEventListener("click", editTask);
