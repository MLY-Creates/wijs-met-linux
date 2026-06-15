const button = document.createElement("button");
button.textContent = "Wissel lettertype";
button.onclick = () => document.body.classList.toggle("comic-sans");

document.querySelector("footer").appendChild(button);