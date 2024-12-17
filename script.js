const storeOpening = new Date('Dec 17, 2024 16:07:00');


setCountdown(storeOpening);
setInterval(function(){
    setCountdown(storeOpening);
},1000)

function setCountdown(countingDownTime) {
    let now = new Date();
    let timeRemaining = countingDownTime - now;

    
    if (timeRemaining < 0) {
        timeRemaining = 0;
    }

    console.log(timeRemaining);

    let seconds = Math.floor((timeRemaining / 1000)% 60);
    let minutes = Math.floor((timeRemaining / (1000 * 60))% 60);
    let hours = Math.floor((timeRemaining / (1000 * 60 * 60))% 24);
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    console.log(days, hours, minutes, seconds);

    let daysToDisplay = days;
    let hoursToDisplay = hours- (days );
    let minutesToDispplay = minutes -(hours );
    let secondsToDisplay = seconds - (minutes );

    console.log(daysToDisplay, hoursToDisplay, minutesToDispplay, secondsToDisplay);

    const daysEl = document.getElementById ('days')
    const hoursEl = document.getElementById ('hours')
    const minutesEl = document.getElementById ('minutes')
    const secondsEl = document.getElementById ('seconds')

    daysEl.textContent = daysToDisplay
    hoursEl.textContent = hoursToDisplay
    minutesEl.textContent = minutesToDispplay
    secondsEl.textContent = secondsToDisplay
}