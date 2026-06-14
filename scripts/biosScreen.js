// Gegevens per computermerk en model.
// "bios" = toets om de BIOS te openen, "boot" = toets voor het opstartmenu.
// "note" is optioneel en geeft extra uitleg voor dat model.
const biosData = {
    "Acer": {
        "Aspire": { bios: "F2", boot: "F12" },
        "Swift": { bios: "F2", boot: "F12" },
        "Nitro / Predator": { bios: "F2", boot: "F12" },
        "Anders / weet ik het niet": { bios: "F2", boot: "F12" }
    },
    "Asus": {
        "VivoBook": { bios: "F2", boot: "Esc" },
        "ZenBook": { bios: "F2", boot: "Esc" },
        "ROG / TUF": { bios: "Del", boot: "F8" },
        "Anders / weet ik het niet": { bios: "F2", boot: "Esc" }
    },
    "Dell": {
        "Inspiron": { bios: "F2", boot: "F12" },
        "XPS": { bios: "F2", boot: "F12" },
        "Latitude": { bios: "F2", boot: "F12" },
        "Anders / weet ik het niet": { bios: "F2", boot: "F12" }
    },
    "HP": {
        "Pavilion": { bios: "F10", boot: "F9", note: "Tik bij sommige HP's eerst op de Esc-toets, kies daarna in het menu de juiste toets." },
        "EliteBook / ProBook": { bios: "F10", boot: "F9", note: "Tik bij sommige HP's eerst op de Esc-toets, kies daarna in het menu de juiste toets." },
        "Envy": { bios: "F10", boot: "F9", note: "Tik bij sommige HP's eerst op de Esc-toets, kies daarna in het menu de juiste toets." },
        "Anders / weet ik het niet": { bios: "F10", boot: "F9", note: "Tik bij sommige HP's eerst op de Esc-toets, kies daarna in het menu de juiste toets." }
    },
    "Lenovo": {
        "IdeaPad": { bios: "F2", boot: "F12", note: "Lukt het niet? Veel Lenovo's hebben een klein 'Novo'-knopje naast de aan-knop. Zet de computer uit en druk met een paperclip op dat knopje om het menu te openen." },
        "ThinkPad": { bios: "F1", boot: "F12" },
        "Yoga": { bios: "F2", boot: "F12", note: "Lukt het niet? Veel Lenovo's hebben een klein 'Novo'-knopje naast de aan-knop. Zet de computer uit en druk met een paperclip op dat knopje om het menu te openen." },
        "Anders / weet ik het niet": { bios: "F2", boot: "F12" }
    },
    "MSI": {
        "Modern / Prestige": { bios: "Del", boot: "F11" },
        "Gaming (GF / GE / GS)": { bios: "Del", boot: "F11" },
        "Anders / weet ik het niet": { bios: "Del", boot: "F11" }
    },
    "Samsung": {
        "Galaxy Book": { bios: "F2", boot: "Esc" },
        "Anders / weet ik het niet": { bios: "F2", boot: "Esc" }
    },
    "Toshiba": {
        "Satellite": { bios: "F2", boot: "F12" },
        "Anders / weet ik het niet": { bios: "F2", boot: "F12" }
    },
    "Medion": {
        "Akoya": { bios: "Del", boot: "F11" },
        "Anders / weet ik het niet": { bios: "Del", boot: "F11" }
    },
    "Microsoft Surface": {
        "Surface (alle modellen)": { bios: "—", boot: "—", note: "Een Surface werkt anders: zet hem uit. Houd de knop 'volume omhoog' ingedrukt en druk kort op de aan-knop. Laat 'volume omhoog' pas los als u het menu ziet." }
    },
    "Ander merk / weet ik het niet": {
        "Weet ik het niet": { bios: "F2", boot: "F12", note: "De juiste toets verschilt per merk. Probeer vlak na het aanzetten herhaaldelijk op F2, F12, Esc, Del of F10 te tikken. Eén daarvan opent meestal het menu." }
    }
};

// Bouwt de keuzemenu's en koppelt de logica. Wordt aangeroepen door loadLesson
// zodra de les met het 'bios-tool'-element is geladen.
function biosScreen() {
    const tool = document.getElementById('bios-tool');
    if (!tool) {
        return;
    }

    tool.innerHTML = `
        <div class="bios-selector">
            <label for="bios-brand">1. Kies het merk van uw computer:</label>
            <select id="bios-brand">
                <option value="" selected disabled>— Maak een keuze —</option>
            </select>

            <label for="bios-model" class="bios-hidden">2. Kies uw model:</label>
            <select id="bios-model" class="bios-hidden">
                <option value="" selected disabled>— Maak een keuze —</option>
            </select>
        </div>
        <div id="bios-instructions"></div>
    `;

    const brandSelect = document.getElementById('bios-brand');
    const modelSelect = document.getElementById('bios-model');
    const modelLabel = tool.querySelector('label[for="bios-model"]');
    const instructions = document.getElementById('bios-instructions');

    // Vul het merken-menu.
    for (const brand of Object.keys(biosData)) {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    }

    // Als er een merk gekozen wordt: vul de modellen en verberg oude uitleg.
    brandSelect.addEventListener('change', () => {
        const brand = brandSelect.value;
        instructions.innerHTML = '';

        modelSelect.innerHTML = '<option value="" selected disabled>— Maak een keuze —</option>';
        for (const model of Object.keys(biosData[brand])) {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        }

        modelLabel.classList.remove('bios-hidden');
        modelSelect.classList.remove('bios-hidden');
    });

    // Als er een model gekozen wordt: toon de uitleg.
    modelSelect.addEventListener('change', () => {
        const brand = brandSelect.value;
        const model = modelSelect.value;
        showInstructions(brand, model, instructions);
    });
}

// Toont de stap-voor-stap uitleg voor het gekozen merk en model.
function showInstructions(brand, model, target) {
    const info = biosData[brand][model];
    const isSurface = info.bios === "—";

    let steps;
    if (isSurface) {
        steps = `
            <li>Zet uw computer volledig uit.</li>
            <li>Steek de usb-stick met Linux Mint in de computer.</li>
            <li>Volg de uitleg hieronder om het opstartmenu te openen.</li>
            <li>Kies in de lijst uw usb-stick om Linux te starten.</li>
        `;
    } else {
        steps = `
            <li>Zet uw computer volledig uit.</li>
            <li>Steek de usb-stick met Linux Mint in de computer.</li>
            <li>Druk op de aan-knop en tik daarna meteen meerdere keren kort op de <kbd>${info.boot}</kbd>-toets om het opstartmenu te openen.</li>
            <li>Lukt dat niet? Zet de computer opnieuw uit en probeer dezelfde stap met de <kbd>${info.bios}</kbd>-toets om de BIOS te openen.</li>
            <li>Kies in de lijst uw usb-stick om Linux te starten.</li>
        `;
    }

    const note = info.note
        ? `<p class="bios-note">💡 ${info.note}</p>`
        : '';

    target.innerHTML = `
        <h3>${brand} — ${model}</h3>
        <p>Zo start u op vanaf de usb-stick:</p>
        <ol>${steps}</ol>
        ${note}
    `;
}
