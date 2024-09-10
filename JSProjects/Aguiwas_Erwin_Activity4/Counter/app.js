document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    let countdownInterval;

    startButton.addEventListener('click', () => {
        if (countdownInterval) return; // If the timer is already running, do nothing.

        let timeLeft = 30;

        countdownInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                timerDisplay.textContent = '0';
                return;
            }

            timeLeft--;
            timerDisplay.textContent = timeLeft;
        }, 1000);
    });
});

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

