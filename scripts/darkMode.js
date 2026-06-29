const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Wissel donkere modus";
darkModeButton.onclick = () => {
    const isDark = document.documentElement.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

document.querySelector("footer").appendChild(darkModeButton);
