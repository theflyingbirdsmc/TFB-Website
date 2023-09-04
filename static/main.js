// Function to move a bird around
function moveBird(birdElement) {
    let x = Math.random() * (window.innerWidth - 50); // -50 to keep the bird fully in view
    let y = Math.random() * (window.innerHeight - 50);

    birdElement.style.left = x + 'px';
    birdElement.style.top = y + 'px';
}

// Function to continuously move a bird around
function animateBird(birdElement) {
    moveBird(birdElement);
    setTimeout(() => animateBird(birdElement), 6000); // Move every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById("background");

    document.addEventListener("mousemove", function(event) {
        const x = event.clientX;
        const y = event.clientY;

        // Limit the movement to make it less pronounced
        const bgX = (x / window.innerWidth - 0.5) * 20;  // Reduced from 100 to 20
        const bgY = (y / window.innerHeight - 0.5) * 20;  // Reduced from 100 to 20

        background.style.backgroundPosition = `${bgX}px ${bgY}px`;
    });

    // Get bird elements
    const redBird = document.getElementById("red-bird");
    const greenBird = document.getElementById("green-bird");
    const blueBird = document.getElementById("blue-bird");

    // Start bird animations
    animateBird(redBird);
    animateBird(greenBird);
    animateBird(blueBird);
    
});
