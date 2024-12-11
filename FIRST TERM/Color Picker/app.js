

//NAVBAR
const navToggle = document.querySelector('nav-toggle')
const links = document.querySelector('.links')
navToggle,addEventListener('click', () => {
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }*/
    links.classList.toggle('show-links')
})


//COLOR PICKER
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomIndex() {
    return Math.random() * hex.length;
}

btn.addEventListener("click", () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(getRandomIndex())];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});