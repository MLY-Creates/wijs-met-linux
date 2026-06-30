const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
    document.documentElement.classList.add("dark-mode");
}

function addDarkModeButton() {
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Wissel donkere modus";
    darkModeButton.onclick = () => {
        const isDark = document.documentElement.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    document.querySelector("#footerButtons").appendChild(darkModeButton);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addDarkModeButton);
} else {
    addDarkModeButton();
}
