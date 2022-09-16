const linkArray = [
  "https://github.com/dabinderudhan",
  "https://www.linkedin.com/in/dabinder-udhan-50133813/",
  "https://twitter.com/dabinderudhan",
];

const imagesLink = [
  "../images/github.svg",
  "../images/linkedin2.svg",
  "../images/twitter.svg",
];

const imagesLinkMainPage = [
  "./images/github.svg",
  "./images/linkedin2.svg",
  "./images/twitter.svg",
];

export function createNav(title) {
  const nav = document.createElement("nav");
  const home = document.createElement("a");
  home.setAttribute("href", "../index.html");
  home.innerText = "home";
  nav.appendChild(home);

  const heading = document.createElement("h1");
  heading.innerText = title;
  nav.appendChild(heading);

  const ul = document.createElement("ul");

  for (let i = 0; i < linkArray.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", linkArray[i]);
    const img = document.createElement("img");

    img.setAttribute(
      "src",
      title === "frontend mini challenges"
        ? imagesLinkMainPage[i]
        : imagesLink[i]
    );
    a.appendChild(img);
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);

  document.body.prepend(nav);
}
