async function loadLesson(filePath, event) {
    if (event) {
        event.preventDefault();
    }
    const container = document.getElementById('lesson-container');

    try {
        container.innerHTML = '<p>Aan het laden...</p>';
        const response = await fetch(filePath);
    
        if (!response.ok) {
            throw new Error(`Lesson not found: ${response.statusText}`);
        } else {
            const markdownText = await response.text();
            container.innerHTML = marked.parse(markdownText);

            // Sommige lessen bevatten een interactief onderdeel. Start dat op
            // zodra de inhoud in de pagina staat.
            if (document.getElementById('bios-tool')) {
                biosScreen();
            }
        }
    } catch (error) {
        console.error("Error loading lesson:", error);
        container.innerHTML =
            `
            <h2>Er ging iets fout</h2>
            <p>Tux de pinguïn heeft lang en ver gezocht, maar niks gevonden. Weet u zeker dat u met het internet verbonden bent?</p>
            `;
    }}