# Wijs in Linux #

Wijs in Linux is een educationele website dat richt op het aanleren van Linux voor senioren in een eenvoudig te begrijpen manier. Het wordt onderverdeeld in 3 delen: Leer, installeer en gebruik Linux. Het is aan te raden om dit project niet los te gebruiken, maar als hulpmiddel bij persoonlijke begeleiding.

**Technische werking**

Dit project bestaat uit meerdere onderdelen:

1. index.html, hier staan de componenten van de website op.
2. loadlesson.js, hier worden de markdown bestanden omgezet naar renderable HTML.
3. styles, hierin staan de vanilla CSS stylesheets
4. lessons, hierin staan de lessen in markdown formaat, de lessen zijn onderverdeeld in 4 chapters.

**index.html**

In dit bestand staat de algemene layout van de website. In de nav staan de links naar de verschillende markdown files onderverdeeld in 3 details tags. Onclick wordt er gerefereerd naar de bestandslocatie van de markdown files, mocht die bestandslocatie veranderen moet dat ook hierzo aangepast worden.

In de main staat de lesson container, dit wordt aangepast door loadlesson.js. Er staat default HTML in als welkomsbericht, dat wordt overschreven door de markdown files door loadlesson.js

In de footer staan de twee functies changefont.JS en darkmode.JS


**scripts**

Hierin staan de onderstaande JavaScript bestanden

**loadlesson.js**

Hieruit wordt vanuit de loadlesson functie de markdown bestanden omgezet naar renderable HTML via marked. Dit wordt in de lesson container van index.html geplaatst.

**changefont.js**

Zet de font van de website om naar open sans of sans serif. Dit wordt gedaan via een queryselector waarop het HTML bestand aangepast wordt.

**darkMode.js**

Schakelt tussen lichte en donkere thema's, hierbij worden de variablen van style.css getoggled naar dark mode kleuren..

**biosScreen.js**

Dit is exclusief voor chapter 2 lesson 4. Hierin worden de elementen van de dropdowns een voor een vertoont, als de huidige dropdown geselecteerd is. Bovenaan staat de data in een array, die data wordt uitgelezen 

**styles**

Hierin staat de stylesheet van Wijs In Linux, waaruit index.html refereert. Hierin staat de nav bovenaan en de footer onderaan.

**lessons**

Deze directory bevat alle lessen in markdown formaat. De lessen zijn onderverdeeld in 4 chapters:

Chapter 1: Begrijp Linux

Chapter 2: Installeer zelf Linux

Chapter 3: Gebruik Linux

Chapter 4: Veelgestelde vragen

Elke chapter bevat de individuele bestanden in volgorde van de lessen. Die worden opgeroepen vanuit loadlesson.js.