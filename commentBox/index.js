import { createNav } from "../header.js";
createNav("comment box");

const main = document.querySelector("main");
let commentArray = [];

// const firstMessage = document.createElement("p");
// firstMessage.innerHTML = "first message";
// main.appendChild(firstMessage);
// commentArray.push(firstMessage.innerHTML);

// main.addEventListener("click", (e) => {
//   if (e.target.innerHTML === "first message") {
//     const secondMessage = document.createElement("p");
//     secondMessage.innerHTML = "second message";
//     main.appendChild(secondMessage);
//     commentArray.push(secondMessage.innerHTML);
//     console.log(commentArray);
//   }
// });

function displayComment(name, message) {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-box");
  const nameElement = document.createElement("h3");
  nameElement.innerHTML = name;
  const messageElement = document.createElement("p");
  messageElement.innerHTML = message;
  const replyButton = document.createElement("button");
  replyButton.classList.add("reply");
  replyButton.innerHTML = "reply";
  commentContainer.appendChild(nameElement);
  commentContainer.appendChild(messageElement);
  commentContainer.appendChild(replyButton);
  main.appendChild(commentContainer);

  commentArray.push({ name, message });
  console.log(commentArray);
}
displayComment("dabinder", "hello world");

function replyComment(name, message) {
  const replyCommentContainer = document.createElement("div");
  replyCommentContainer.classList.add("comment-box", "reply-comment");
  replyCommentContainer.innerHTML = `<label>name <input type="text"/></label>
                                      <label>message <input type="message"/></label>
                                      <div>
                                        <button type="button">reply</button>
                                        <button type="button">edit</button>
                                        <button type="button">delete</button>
                                      </div>`;
  main.appendChild(replyCommentContainer);

  commentArray.push([{ name, message }]);
  console.log(commentArray);
}

const replyBtn = document.querySelector(".reply");
replyBtn.addEventListener("click", () => {
  replyComment("reet", "hello");
});

/*
first comment box
if clicked on first comment box then child comment box is created
if clicked again of first comment box then another child comment box is created
*/
