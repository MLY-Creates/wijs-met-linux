function renderNav(lang) {
    const navLinksContainer = document.getElementById("nav-links");
    if (!navLinksContainer) return;

    navLinksContainer.innerHTML = "";
    const navData = lang === 'english' ? window.englishNav : window.dutchNav;

    if (!navData) return;

    navData.forEach(section => {
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
                a.addEventListener('click', (e) => loadLesson(lesson.path, e));
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
                a.addEventListener('click', (e) => loadLesson(lesson.path, e));
                li.appendChild(a);
                ul.appendChild(li);
            });
            navLinksContainer.appendChild(ul);
        }
    });
}

const footerTranslations = {
    dutch: {
        toggleFont: "Wissel lettertype",
        toggleDarkMode: "Wissel donkere modus"
    },
    english: {
        toggleFont: "Toggle font",
        toggleDarkMode: "Toggle dark mode"
    }
};

function changeLanguage(lang) {
    renderNav(lang);

    const fontButton = document.getElementById("toggle-font-button");
    if (fontButton) {
        fontButton.textContent = footerTranslations[lang].toggleFont;
    }
    const darkModeButton = document.getElementById("toggle-dark-mode-button");
    if (darkModeButton) {
        darkModeButton.textContent = footerTranslations[lang].toggleDarkMode;
    }

    if (window.currentLessonPath) {
        const parts = window.currentLessonPath.split('/');
        if (parts[0] === 'lessons' || parts[0] === '.' && parts[1] === 'lessons') {
            const langIndex = parts.indexOf('lessons') + 1;
            parts[langIndex] = lang;
            const newPath = parts.join('/');
            loadLesson(newPath);
        }
    } else {
        loadLesson(`lessons/${lang}/chapter1/lesson0.md`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const footerButtons = document.getElementById('footerButtons');
    if (footerButtons) {
        const select = document.createElement('select');
        select.id = 'language-select';

        const optionNl = document.createElement('option');
        optionNl.value = 'dutch';
        optionNl.textContent = 'Nederlands';

        const optionEn = document.createElement('option');
        optionEn.value = 'english';
        optionEn.textContent = 'English';

        select.appendChild(optionNl);
        select.appendChild(optionEn);

        select.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });

        footerButtons.appendChild(select);
    }

    renderNav('dutch');
});
