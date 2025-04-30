// Image paths for the certifications
const certImages = [
    "assets/cert1.png",
    "assets/cert2.png",
    "assets/cert3.png",
    "assets/cert6.png",
    "assets/cert7.png"
];

let currentIndex = 0;

// DOM elements
const currentCert = document.getElementById("current-cert");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Function to update the displayed certification
function updateCertImage() {
    currentCert.src = certImages[currentIndex];
    currentCert.alt = `Certification ${currentIndex + 1}`;
}

// Event listeners for arrows
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + certImages.length) % certImages.length;
    updateCertImage();
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % certImages.length;
    updateCertImage();
});

// Initialize with the first image
updateCertImage();
