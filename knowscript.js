// Image paths for the knowledge slider
const knowImages = [
    "assets/Know1.png",
    "assets/Know2.png",
    "assets/Know3.png",
    "assets/Know4.png",
    "assets/Know5.png",
    "assets/Know6.png",
    "assets/Know7.png",
    "assets/Know8.png",
    "assets/Know9.png",
    "assets/Know10.png",
    "assets/Know11.png",
    "assets/Know12.png",
    "assets/Know13.png",
    "assets/Know14.png",
    "assets/Know15.png"
];

let knowIndex = 0;

// DOM elements
const currentKnow = document.getElementById("current-know");
const leftArrowKnow = document.querySelector(".left-arrow");
const rightArrowKnow = document.querySelector(".right-arrow");

// Function to update the displayed knowledge image
function updateKnowImage() {
    currentKnow.src = knowImages[knowIndex];
    currentKnow.alt = `Knowledge ${knowIndex + 1}`;
}

// Event listeners for arrows
leftArrowKnow.addEventListener("click", () => {
    knowIndex = (knowIndex - 1 + knowImages.length) % knowImages.length;
    updateKnowImage();
});

rightArrowKnow.addEventListener("click", () => {
    knowIndex = (knowIndex + 1) % knowImages.length;
    updateKnowImage();
});

// Initialize with the first image
updateKnowImage();
