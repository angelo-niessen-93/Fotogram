// Speichert, welches Bild gerade geöffnet ist
// Starten bei 0 (erstes Bild)
let currentIndex = 0;

// Anzahl aller Bilder im Ordner
const totalImages = 27;


// Container, in dem alle Vorschaubilder liegen
const imageContainer = document.getElementById('image-container');

// Das <dialog>-Element für die große Ansicht
const dialog = document.getElementById('open-dialog');

// Das <img>-Element im Dialog
const dialogImg = document.getElementById('dialog-img');

// Button zum Schließen des Dialogs
const closeButton = document.getElementById('close-button');

// Navigationspfeil nach links
const navBack = document.querySelector('.nav.back');

// Navigationspfeil nach rechts
const navNext = document.querySelector('.nav.next');

//Alt tag der Bilder
const descriptions =[
    "Lila Blumen auf einer Wiese",
    "Brücke mit Licht am Abend",
    "Verlassenes Gebäude am Wasser",
    "Verlassenes Gebäude am Wasser",
    "Kirche von innen",
    "Eine Kirche in der Stadt",
    "Kettenkarussell hoch in der Luft",
    "Panzer auf einem Feld",
    "Panzer auf einem Feld",
    "Panzer auf einem Feld",
    "Panzer auf einem Feld",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Panzer im Wald",
    "Ein Bachlauf im Wald",
    "Rheinbrücke",
    "Der Kölner Dom von außen",
    "Der Kölner Dom von außen",
    "Luftaufnahme eines Industriegebiets",
    "Luftaufnahme eines Waldweges",
    "Luftaufnahme eines Waldweges",
    "Luftaufnahme zweier Seen im Wald",
];

// Bilder in die Seite einfügen


function renderImg() {
    // Schleife läuft so oft, wie es Bilder gibt
    for (let i = 0; i < totalImages; i++) {

        // Fügt für jedes Bild ein <img>-Element in den Container ein
        // i + 1, weil die Dateinamen bei bild1.jpg beginnen
        //alt tag holt sich von oben die const description und fügt es im Bild ein
        imageContainer.innerHTML += `
            <img src="./img/bild${i + 1}.jpg" alt="${descriptions[i]}">`;
    }
}


// Dialog öffnen und Bild setzen


function openDialog(index) {
    // Merkt sich, welches Bild geklickt wurde
    currentIndex = index;

    // Setzt das passende Bild im Dialog
    dialogImg.src = `./img/bild${currentIndex + 1}.jpg`;

    // Öffnet das Dialogfenster
    dialog.showModal();
}


// Dialog schließen


closeButton.addEventListener('click', () => {
    // Schließt den Dialog
    dialog.close();
});


// Navigation: vorheriges Bild


navBack.addEventListener('click', () => {

    // Geht ein Bild zurück
    currentIndex--;

    // Wenn wir vor dem ersten Bild sind,
    // springen wir zum letzten Bild
        if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Aktualisiert das Bild im Dialog
    dialogImg.src = `./img/bild${currentIndex + 1}.jpg`;
});


// Navigation: nächstes Bild


navNext.addEventListener('click', () => {

    // Geht ein Bild weiter
    currentIndex++;

    // Wenn wir hinter dem letzten Bild sind,
    // springen wir wieder zum ersten Bild
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    // Aktualisiert das Bild im Dialog
    dialogImg.src = `./img/bild${currentIndex + 1}.jpg`;
});
    // Damit kann man den Dialog schließen, wenn man außerhalb des Bildes klickt
dialog.addEventListener('click', (event) => {

     // event.target ist das Element, auf das wirklich geklickt wurde
    // Wenn man auf den Dialog selbst klickt (nicht auf das Bild), soll der Dialog schließen
    if (event.target === dialog) {

     // Schließt den Dialog
        dialog.close();
    }
});


// Klick-Events für Vorschaubilder


function addEventTrigger() {

    // Holt alle <img>-Elemente im Container
    const images = imageContainer.getElementsByTagName('img');

    // Geht alle Bilder durch
    for (let i = 0; i < images.length; i++) {

        // Fügt jedem Bild einen Klick-Listener hinzu
        images[i].addEventListener('click', () => {

            // Öffnet den Dialog mit dem angeklickten Bild
            openDialog(i);
        });
    }
}

        // Hört auf Tastendruck-Ereignisse auf der ganzen Seite
document.addEventListener('keydown', (event) => {

    // Prüfen, ob der Dialog überhaupt offen ist
    if (!dialog.open) return;

    // Prüfen, ob die linke Pfeiltaste gedrückt wurde
    if (event.key === 'ArrowLeft') {

        // Zum vorherigen Bild gehen
        currentIndex--;

        // Wenn wir vor dem ersten Bild sind, zum letzten springen
        if (currentIndex < 0) currentIndex = totalImages - 1;

        // Das aktuelle Bild im Dialog anzeigen
        dialogImg.src = `./img/bild${currentIndex + 1}.jpg`;
    }

    // Prüfen, ob die rechte Pfeiltaste gedrückt wurde
    if (event.key === 'ArrowRight') {

        // Zum nächsten Bild gehen
        currentIndex++;

        // Wenn wir hinter dem letzten Bild sind, zum ersten springen
        if (currentIndex >= totalImages) currentIndex = 0;

        // Das aktuelle Bild im Dialog anzeigen
        dialogImg.src = `./img/bild${currentIndex + 1}.jpg`;
    }
});

// Startpunkt des Skripts


// Erst Bilder anzeigen
renderImg();

// Danach Klick-Events hinzufügen
addEventTrigger();