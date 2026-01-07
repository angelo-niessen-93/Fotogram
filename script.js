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


// Bilder in die Seite einfügen


function renderImg() {
    // Schleife läuft so oft, wie es Bilder gibt
    for (let i = 0; i < totalImages; i++) {

        // Fügt für jedes Bild ein <img>-Element in den Container ein
        // i + 1, weil die Dateinamen bei bild1.jpg beginnen
        imageContainer.innerHTML += `
            <img src="./img/bild${i + 1}.jpg" alt="">
        `;
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


// Startpunkt des Skripts


// Erst Bilder anzeigen
renderImg();

// Danach Klick-Events hinzufügen
addEventTrigger();