let currentIndex = 1;
const totalImages = 27;


function renderImg() {
    const imagecontainerRef = document.getElementById('image-container');
    
    for(let i = 1; i < 28; i++){  
        
        imagecontainerRef.innerHTML += `<img src="./img/bild${i}.jpg" alt="" onclick="openDialog(${i})">`
    }
}

function openDialog (i) {
    const dialog = document.getElementById('open-dialog');
    const dialogImg = document.getElementById('dialog-img');

    dialogImg.src = `./img/bild${i}.jpg`;
    dialog.showModal();
} 

document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('open-dialog').close();
});


document.querySelector('.nav.back').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 1) currentIndex = totalImages;
    document.getElementById('dialog-img').src = `./img/bild${currentIndex}.jpg`;
});


document.querySelector('.nav.next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalImages) currentIndex = 1; 
    document.getElementById('dialog-img').src = `./img/bild${currentIndex}.jpg`;
});


renderImg();

