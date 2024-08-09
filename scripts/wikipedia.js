const PARAGRAPH = document.querySelectorAll("p");
let words = 0;

Array.from(PARAGRAPH).forEach((i) => {return words += i.innerHTML.split(' ').length;});

let title = document.querySelector(".mw-page-title-main");
let readTime = document.createElement("p");
readTime.textContent = `⏱️ ${Math.round(words/200)} min read.`;

title.appendChild(readTime);



