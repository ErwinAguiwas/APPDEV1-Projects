

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


//SIMPLE TIMER
let count = 30;
let countdown;

const value = document.querySelector('#value');
const startButton = document.querySelector('.start');

startButton.addEventListener('click', () => {
    startCountdown();
});

function startCountdown() {
    startButton.disabled = true;

    countdown = setInterval(() => {
        if (count > 0) {
            count--;
            value.textContent = count;
        } else {
            clearInterval(countdown);
            startButton.disabled = false;
            count = 30;
            value.textContent = count;
        }
    }, 1000);
}