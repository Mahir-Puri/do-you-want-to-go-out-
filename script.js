// Function to play background music
function playMusic() {
    const music = document.getElementById("backgroundMusic");
    music.play();

    // Hide the music button after clicking
    const musicButton = document.getElementById("musicButton");
    musicButton.style.display = "none";

    // Save the music state to localStorage
    localStorage.setItem("musicPlaying", "true");
}

// Function to check if music should play on page load
function checkMusic() {
    const musicPlaying = localStorage.getItem("musicPlaying");
    if (musicPlaying === "true") {
        playMusic();
    }
}

// Function to handle the "Yes" button click
function nextPage() {
    // Hide the music button
    const musicButton = document.getElementById("musicButton");
    musicButton.style.display = "none";

    // Start the flower animation
    startFlowerAnimation();

    // Redirect to the "Yes" page immediately
    window.location.href = "yes.html";
}

// Function to start the flower animation
function startFlowerAnimation() {
    const container = document.querySelector(".container");

    // Create multiple flowers
    for (let i = 0; i < 50; i++) {
        createFlower(container);
    }
}

// Function to create a flower element
function createFlower(container) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "🌸"; // Use a flower emoji
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${-10 - Math.random() * 20}%`; // Start above the screen
    flower.style.animationDuration = `${5 + Math.random() * 10}s`; // Random fall speed
    container.appendChild(flower);

    // Remove the flower after the animation ends
    setTimeout(() => flower.remove(), 1000); // Adjust based on animation duration
}

// Function to move the "No" button randomly when hovered over
function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate random position within the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Add wiggle animation for fun
    noButton.classList.add("wiggle");
    setTimeout(() => noButton.classList.remove("wiggle"), 500); // Remove after animation
}

// Optional: Add hearts animation when "Yes" is clicked
document.getElementById("yesButton").addEventListener("click", () => {
    const container = document.querySelector(".container");
    for (let i = 0; i < 20; i++) {
        createHeart(container);
    }
});

// Function to create a heart element
function createHeart(container) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    container.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => heart.remove(), 1000);
}