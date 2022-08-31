const enterTaskElement = document.querySelector(".enter-task input");
const displayTasksContainer = document.querySelector(".display-tasks");
const addTaskButton = document.querySelector(".enter-task button");

let taskArray = [];

const getTaskValue = () => {
  const taskValue = enterTaskElement.value;
  taskArray.push(taskValue);
  displayTaskValue(taskArray);
};

const displayTaskValue = (taskArray) => {
  displayTasksContainer.innerHTML = taskArray
    .map(
      (task) => `<div class="task-container">
                      <p class="task">${task}</p>
                      <button class="edit-task" type="button">📝</button>
                      <button class="save-task" type="button">💾</button>
                      <button class="delete-task" type="button">🗑️</button>
                  </div>`
    )
    .join("");
};

addTaskButton.addEventListener("click", () => {
  getTaskValue();
});

displayTasksContainer.addEventListener("click", (e) => {
  console.log(e.target);
});
