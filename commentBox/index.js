import { createNav } from "../header.js";
createNav("comment box");

const main = document.querySelector("main");

class Comment {
  constructor(name, message) {
    this.name = name;
    this.message = message;
    this.commentArray = [];
  }

  displayComment(name, message) {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-box");
    const nameElement = document.createElement("h3");
    nameElement.innerHTML = name;
    const messageElement = document.createElement("p");
    messageElement.innerHTML = message;
    const replyButton = document.createElement("button");
    replyButton.innerHTML = "reply";
    commentContainer.appendChild(nameElement);
    commentContainer.appendChild(messageElement);
    commentContainer.appendChild(replyButton);
    main.appendChild(commentContainer);
    this.commentArray.push({ name, message });
  }

  get CommentArray() {
    return this.commentArray;
  }
}

const firstComment = new Comment();
firstComment.displayComment("Dabinder", "Hello World");
console.log(firstComment.CommentArray);
