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

function changeLanguage(lang) {
    renderNav(lang);
    if (window.currentLessonPath) {
        // e.g. replace "lessons/dutch/..." with "lessons/english/..."
        const parts = window.currentLessonPath.split('/');
        if (parts[0] === 'lessons' || parts[0] === '.' && parts[1] === 'lessons') {
            const langIndex = parts.indexOf('lessons') + 1;
            parts[langIndex] = lang;
            const newPath = parts.join('/');
            loadLesson(newPath);
        }
    } else {
        // If on the welcome screen, load the first lesson to show the language change
        loadLesson(`lessons/${lang}/chapter1/lesson0.md`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Add dropdown to footer
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

    // Initial render
    renderNav('dutch');
});
