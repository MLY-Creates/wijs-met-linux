const nlNav = [
    {
        title: "1. Begrijp Linux",
        lessons: [
            { path: "lessons/chapter1/lesson0.md", title: "0. Begrijp Linux" },
            { path: "lessons/chapter1/lesson1.md", title: "1. Het Linux verhaal" },
            { path: "lessons/chapter1/lesson2.md", title: "2. Waarom Linux op uw computer?" },
            { path: "lessons/chapter1/lesson3.md", title: "3. Wat kunt u allemaal met Linux?" },
            { path: "lessons/chapter1/lesson4.md", title: "4. De nadelen van Linux" },
            { path: "lessons/chapter1/lesson5.md", title: "5. Versies van Linux" }
        ]
    },
    {
        title: "2. Installeer zelf Linux",
        lessons: [
            { path: "./lessons/chapter2/lesson0.md", title: "0. Installeer zelf Linux" },
            { path: "./lessons/chapter2/lesson1.md", title: "1. Koop een usb-stick" },
            { path: "./lessons/chapter2/lesson2.md", title: "2. Download Linux Mint" },
            { path: "./lessons/chapter2/lesson3.md", title: "3. \"Brand\" Linux Mint op de usb-stick" },
            { path: "./lessons/chapter2/lesson4.md", title: "4. Probeer Linux vanuit de usb-stick" },
            { path: "./lessons/chapter2/lesson5.md", title: "5. Installeer Linux" }
        ]
    },
    {
        title: "3. Gebruik Linux",
        lessons: [
            { path: "lessons/chapter3/lesson0.md", title: "0. Gebruik Linux" },
            { path: "lessons/chapter3/lesson1.md", title: "1. De welkomstour" },
            { path: "lessons/chapter3/lesson2.md", title: "2. Pas uw instellingen aan" },
            { path: "lessons/chapter3/lesson3.md", title: "3. Gebruik het office pakket" },
            { path: "lessons/chapter3/lesson4.md", title: "4. Ga op het internet" },
            { path: "lessons/chapter3/lesson5.md", title: "5. Download nieuwe apps in de app store" }
        ]
    },
    {
        title: null,
        lessons: [
            { path: "lessons/chapter4/lesson0.md", title: "Veelgestelde vragen" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const navLinksContainer = document.getElementById("nav-links");
    if (!navLinksContainer) return;
    
    navLinksContainer.innerHTML = "";

    nlNav.forEach(section => {
        if (section.title) {
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            summary.textContent = section.title;
            details.appendChild(summary);

            const ul = document.createElement("ul");
            section.lessons.forEach(lesson => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.setAttribute("data-lesson", lesson.path);
                a.textContent = lesson.title;
                li.appendChild(a);
                ul.appendChild(li);
            });
            details.appendChild(ul);
            navLinksContainer.appendChild(details);
        } else {
            const ul = document.createElement("ul");
            section.lessons.forEach(lesson => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.setAttribute("data-lesson", lesson.path);
                a.textContent = lesson.title;
                li.appendChild(a);
                ul.appendChild(li);
            });
            navLinksContainer.appendChild(ul);
        }
    });
});
