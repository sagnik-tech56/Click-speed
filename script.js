//WE WILL LEARN:
//Event Handling with addEventListener:
//DOM Manipulation:
//Asynchronous Programming with Timers:
//Enabling/Disabling Buttons Dynamically
//String Interpolation (Template Literals)
//Event Loop and Callbacks:

const clickButton = document.querySelector("#click-btn");
const startButton = document.querySelector("#start-btn");
const clickCount = document.querySelector("#click-count");
const result = document.querySelector("#result");
let count;

clickButton.disabled = true;

function clickTime() {
    clickButton.disabled = true;
    startButton.disabled = false;
    result.textContent = `You have clicked ${count} times in 5 seconds`
}

startButton.addEventListener('click', () => {
    count = 0;
    clickCount.textContent = count;
    clickButton.disabled = false;
    startButton.disabled = true;
    setTimeout(clickTime, 5000);    
})

clickButton.addEventListener("click", () => {
    count += 1;
    clickCount.textContent = count;
})