const button = document.createElement("button");
button.textContent = "Wissel lettertype";
button.onclick = () => document.body.classList.toggle("comic-sans");

document.querySelector("#footerButtons").appendChild(button);