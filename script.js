// Use a variable for the counter value
let counter = 0;

// Function to update and display the counter value
function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counterDisplay');
    counterDisplay.textContent = counter;
}

// Function to increment the counter
function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

// Function to decrement the counter
function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

// Initial display
updateCounterDisplay();


