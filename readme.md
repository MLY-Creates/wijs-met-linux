# Wijs in Linux #

Wijs in Linux is een educatieve website die zich richt op het aanleren van Linux aan senioren op een eenvoudig te begrijpen manier. Het project biedt ondersteuning voor zowel Nederlands als Engels en is onderverdeeld in verschillende hoofdstukken. Het is aan te raden om dit project niet los te gebruiken, maar als hulpmiddel bij persoonlijke begeleiding.

Dit project bestaat uit meerdere onderdelen:

1. [index.html](file:///home/mly/PhpstormProjects/wijs-met-linux/index.html): De basisstructuur van de website.
2. [scripts/](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts): Bevat de JavaScript-bestanden voor interactiviteit, navigatie, lettertype- en themabeheer, en taalkeuze.
3. [styles/](file:///home/mly/PhpstormProjects/wijs-met-linux/styles): Bevat de CSS-stylesheets voor de vormgeving.
4. [lessons/](file:///home/mly/PhpstormProjects/wijs-met-linux/lessons): Bevat de lessen in Markdown-formaat, onderverdeeld per taal en hoofdstuk.

## Bestandsstructuur

Hieronder is een overzicht van de belangrijkste bestanden en mappen in het project:

- [index.html](file:///home/mly/PhpstormProjects/wijs-met-linux/index.html) - De startpagina van de applicatie.
- [readme.md](file:///home/mly/PhpstormProjects/wijs-met-linux/readme.md) - Dit document met uitleg over het project.
- [styles/style.css](file:///home/mly/PhpstormProjects/wijs-met-linux/styles/style.css) - Het CSS-bestand voor de styling (inclusief Dark Mode en Comic Neue-lettertype).
- Mappen structuur voor `scripts/`:
  - [scripts/selectLanguage.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/selectLanguage.js) - Regelt de taalkeuze (Nederlands/Engels), vertalingen van knoppen en het laden van de navigatie.
  - [scripts/loadlesson.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/loadlesson.js) - Laadt de Markdown-lesbestanden in de applicatie met behulp van Marked.js.
  - [scripts/changeFont.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/changeFont.js) - Wisselt het lettertype van de website naar Comic Neue.
  - [scripts/darkMode.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/darkMode.js) - Schakelt tussen het lichte en donkere thema en slaat dit op in `localStorage`.
  - [scripts/biosScreen.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/biosScreen.js) - Regelt het interactieve BIOS-scherm voor hoofdstuk 2, les 4.
  - [scripts/languagescripts/dutch.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/languagescripts/dutch.js) - Bevat de hoofdstukken- en lessenlijst voor de Nederlandse versie.
  - [scripts/languagescripts/english.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/languagescripts/english.js) - Bevat de hoofdstukken- en lessenlijst voor de Engelse versie.
- Mappen structuur voor `lessons/`:
  - `lessons/dutch/` - Nederlandse lessen, onderverdeeld in `chapter1` t/m `chapter4`.
  - `lessons/english/` - Engelse lessen, onderverdeeld in `chapter1` t/m `chapter4`.

## index.html

In dit bestand staat de algemene layout van de website.
- In de `<nav>` staat de container `<div id="nav-links">`. Deze wordt dynamisch gevuld door [selectLanguage.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/selectLanguage.js) op basis van de geselecteerde taal en de bijbehorende navigatiestructuur.
- In de `<main>` staat het `<div id="lesson-container">` element. Dit element wordt overschreven door de inhoud van de geselecteerde Markdown-bestanden via [loadlesson.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/loadlesson.js).
- In de `<footer>` bevindt zich de container `<div id="footerButtons">` waarin de taalkeuze (select-box), de knop voor het lettertype en de knop voor donkere modus dynamisch worden geladen en beheerd.


## scripts

Hierin staan de JavaScript-bestanden:

## [selectLanguage.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/selectLanguage.js)
Regelt de meertaligheid van de website:
- Maakt een taal-dropdown (`#language-select`) aan in de footer.
- Vult dynamisch de navigatie (`#nav-links`) met de juiste hoofdstukken en lessen.
- Vertaalt de knopteksten in de footer bij het wisselen van taal.
- Laadt automatisch de juiste vertaling van de actieve les of start met de introductieles van de gekozen taal.

## [languagescripts/](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/languagescripts)
Bevat de configuratiebestanden voor de navigatiemenu's:
- `dutch.js` declareert `window.dutchNav` met alle Nederlandse lespaden en titels.
- `english.js` declareert `window.englishNav` met alle Engelse lespaden en titels.

## [loadlesson.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/loadlesson.js)
- Laadt asynchroon het Markdown-bestand van de geselecteerde les op basis van het meegegeven pad.
- Zet de Markdown-tekst om naar HTML via de `marked` bibliotheek en plaatst dit in de `#lesson-container`.
- Controleert of het element `#bios-tool` aanwezig is in de ingeladen les en start in dat geval de `biosScreen()` functie.

## [changeFont.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/changeFont.js)
- Maakt de knop `#toggle-font-button` aan en voegt deze toe aan de footer.
- Schakelt bij een klik de CSS-klasse `comic-sans` op de `<body>` aan of uit. Dit wisselt het lettertype naar Comic Neue om de leesbaarheid te verhogen.

## [darkMode.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/darkMode.js)
- Controleert bij het laden of de gebruiker al een voorkeur heeft opgeslagen in `localStorage` of dat het besturingssysteem donkere modus verkiest, en past dit toe op de `<html>`-tag.
- Maakt de knop `#toggle-dark-mode-button` aan en voegt deze toe aan de footer.
- Schakelt de klasse `dark-mode` op de `<html>` aan of uit en slaat de voorkeur op in de `localStorage`.

## [biosScreen.js](file:///home/mly/PhpstormProjects/wijs-met-linux/scripts/biosScreen.js)
- Exclusief gebruikt in Hoofdstuk 2, Les 4 om een interactief BIOS-selectiescherm te simuleren.
- Leest een array van laptopdata in en toont stapsgewijs dropdown-keuzes.
- Toont specifieke instructies en eventuele extra opmerkingen via DOM-manipulatie op de div `#bios-tool`.

## styles

Het bestand [style.css](file:///home/mly/PhpstormProjects/wijs-met-linux/styles/style.css) regelt de vormgeving van de website.
- Het gebruikt CSS-variabelen (`:root`) om kleuren te definiëren, waardoor het wisselen naar donkere modus eenvoudig geregeld wordt onder `html.dark-mode`.
- Bevat de opmaak voor de navigatiebalk aan de linkerkant (inclusief hover- en focus-states voor de `<details>` en koppelingen).
- Bevat specifieke opmaak voor de BIOS-simulator en de weergave van code en toetsenbordknoppen (`<kbd>`).

## lessons

Deze directory bevat alle lessen als Markdown-bestanden, georganiseerd per taal (`dutch/` en `english/`) en verdeeld in vier hoofdstukken (`chapter1/` t/m `chapter4/`):

1. **Chapter 1: Begrijp Linux / Understand Linux** (Lessen 0 t/m 5)
2. **Chapter 2: Installeer zelf Linux / Install Linux yourself** (Lessen 0 t/m 5, inclusief de BIOS-interactiviteit in les 4)
3. **Chapter 3: Gebruik Linux / Use Linux** (Lessen 0 t/m 5)
4. **Chapter 4: Veelgestelde vragen & Meewerken** (Veelgestelde vragen en informatie over hoe mee te helpen aan het project)