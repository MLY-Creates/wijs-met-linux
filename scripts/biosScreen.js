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
        "Weet ik niet": { bios: "F2", boot: "F12", note: "De juiste toets verschilt per merk. Probeer vlak na het aanzetten herhaaldelijk op F2, F12, Esc, Del of F10 te tikken. Eén daarvan opent meestal het menu." }
    }
};

function fillSelect(select, names) {
    select.innerHTML = '<option value="" selected disabled>— Maak een keuze —</option>';
    for (const name of names) {
        select.add(new Option(name, name));
    }
}

function biosScreen() {
    const tool = document.getElementById('bios-tool');
    if (!tool) return;

    tool.innerHTML = `
        <div class="bios-selector">
            <label for="bios-brand">1. Kies het merk van uw computer:</label>
            <select id="bios-brand"></select>

            <label for="bios-model" class="bios-hidden">2. Kies uw model:</label>
            <select id="bios-model" class="bios-hidden"></select>
        </div>
        <div id="bios-instructions"></div>
    `;

    const brandSelect = document.getElementById('bios-brand');
    const modelSelect = document.getElementById('bios-model');
    const modelLabel = tool.querySelector('label[for="bios-model"]');
    const instructions = document.getElementById('bios-instructions');

    fillSelect(brandSelect, Object.keys(biosData));

    brandSelect.addEventListener('change', () => {
        instructions.innerHTML = '';
        fillSelect(modelSelect, Object.keys(biosData[brandSelect.value]));
        modelLabel.classList.remove('bios-hidden');
        modelSelect.classList.remove('bios-hidden');
    });

    modelSelect.addEventListener('change', () => {
        showInstructions(brandSelect.value, modelSelect.value, instructions);
    });
}

function showInstructions(brand, model, target) {
    const info = biosData[brand][model];

    const keySteps = info.boot === "—" ? "" : `
        <li>Druk op de aan-knop en tik daarna meteen meerdere keren kort op de <kbd>${info.boot}</kbd>-toets om het opstartmenu te openen.</li>
        <li>Lukt dat niet? Zet de computer opnieuw uit en probeer dezelfde stap met de <kbd>${info.bios}</kbd>-toets om de BIOS te openen.</li>`;

    target.innerHTML = `
        <h3>${brand} — ${model}</h3>
        <p>Zo start u op vanaf de usb-stick:</p>
        <ol>
            <li>Zet uw computer volledig uit.</li>
            <li>Steek de usb-stick met Linux Mint in de computer.</li>
            ${keySteps}
            <li>Kies in de lijst uw usb-stick om Linux te starten.</li>
        </ol>
        ${info.note ? `<p class="bios-note">💡 ${info.note}</p>` : ''}
    `;
}
