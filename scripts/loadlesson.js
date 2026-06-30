document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#nav-links a[data-lesson]').forEach((link) => {
        link.addEventListener('click', (event) => loadLesson(link.dataset.lesson, event));
    });
});

async function loadLesson(filePath, event) {
    const start = performance.now();
    event.preventDefault();
    const container = document.getElementById('lesson-container');
    container.innerHTML = '<p>Aan het laden...</p>';

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Lesson not found: ${response.statusText}`);
        }
        container.innerHTML = marked.parse(await response.text());
        if (document.getElementById('bios-tool')) {
            biosScreen();
        }
        const end = performance.now();
        console.log(`Time: ${end - start} ms`);
    } catch (error) {
        console.error("Error loading lesson:", error);
        container.innerHTML = `
            <h2>Er ging iets fout</h2>
            <p>Tux de pinguïn heeft lang en ver gezocht, maar niks gevonden. Weet u zeker dat u met het internet verbonden bent?</p>
        `;
    }
}
