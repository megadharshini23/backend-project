// Counter
// Counter
let count = 0;

let countDisplay = document.getElementById("count");
let incBtn = document.getElementById("increase");
let decBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

// Function to update color
function updateColor() {
    if (count > 10) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

// Increase
incBtn.onclick = function() {
    count++;
    countDisplay.textContent = count;
    updateColor(); // ✅ correct place
};

// Decrease
decBtn.onclick = function() {
    count--;
    countDisplay.textContent = count;
    updateColor(); // ✅ important
};

// Reset
resetBtn.onclick = function() {
    count = 0;
    countDisplay.textContent = count;
    updateColor(); // ✅ important
};