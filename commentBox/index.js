import { createNav } from "../header.js";
createNav("comment box");

const main = document.querySelector("main");
let commentArray = [];

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
                                        <button type="button">submit</button>
                                      </div>`;
  main.appendChild(replyCommentContainer);

  commentArray.push([{ name, message }]);
  console.log(commentArray);
}

const replyBtn = document.querySelector(".reply");
replyBtn.addEventListener("click", () => {
  replyComment("reet", "hello");
});
