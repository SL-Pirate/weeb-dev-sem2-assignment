// string key constants for saving into local storage
const galleryBackgroundColor = "gallery_background_color";
const galleryFontSize = "gallery_font_size";

let colorChangeInput = document.getElementById('bgColor');
colorChangeInput.addEventListener('change', changeColor);

let fontChangeInput = document.getElementById('fontSize');
fontChangeInput.addEventListener('change', changeFont);

let backButton = document.getElementsByClassName('backButton');
for(i=0; i<backButton.length; i++){
    backButton[i].addEventListener('click', closePopUp);
}

function changeColor(){
    let colorValue = colorChangeInput.value;
    saveToLocalStorage();
    let content = document.body;
    let description = document.getElementsByClassName('description');

    content.style.backgroundColor = colorValue;

    for(i=0; i<description.length; i++){
        description[i].style.backgroundColor = colorValue;
    }
}

function saveToLocalStorage() {
    // saving current value to local storage
    localStorage.setItem(galleryBackgroundColor, colorChangeInput.value);
    localStorage.setItem(galleryFontSize, fontChangeInput.value);
}

function loadFromLocalStorage() {
    if (localStorage.getItem(galleryBackgroundColor) != null) {
        colorChangeInput.value = localStorage.getItem(galleryBackgroundColor);
        fontChangeInput.value = localStorage.getItem(galleryFontSize);
        changeColor();
        changeFont();
    }
}


function changeFont(){
    let fontSize = fontChangeInput.value;
    saveToLocalStorage()
    let content = document.getElementById('content');
    let description = document.getElementsByClassName('description');

    content.style.fontSize = fontSize;
    fontChangeInput.style.fontSize = fontSize;
    colorChangeInput.style.fontSize = fontSize;

    for(i=0; i<description.length; i++){
        description[i].style.fontSize = fontSize;
    }
}


function displayDescription(event){
    let place = event.target.closest('.place');
    let title = place.querySelector('.title').textContent;

    if(title == 'Colombo Museum'){
        document.getElementById('museum').style.visibility = 'visible';
    }

    if(title == 'Pinnawala Elephant Orphanage'){
        document.getElementById('pinnawala').style.visibility = 'visible';
    }
    
    if(title == 'Hikkaduwa Coral Reef'){
        document.getElementById('hikkaduwa').style.visibility = 'visible';
    }
    if(title == 'Nallur Kovil Jaffna'){
        document.getElementById('jaffna').style.visibility = 'visible';
    }
    if(title == 'Mirissa'){
        document.getElementById('mirissa').style.visibility = 'visible';
    }
    if(title == 'Nine Arch Bridge'){
        document.getElementById('ninearch').style.visibility = 'visible';
    }
    if(title == 'Yala National Park'){
        document.getElementById('yala').style.visibility = 'visible';
    }
    if(title == 'Temple of the Tooth'){
        document.getElementById('templeofthetooth').style.visibility = 'visible';
    }
}

function closePopUp(){
    let descriptions = document.getElementsByClassName('description');
    for(i=0; i<descriptions.length; i++){
        descriptions[i].style.visibility = 'hidden';
    }
}

loadFromLocalStorage();
