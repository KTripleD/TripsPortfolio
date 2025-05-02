document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".clickable").forEach(img => {
        img.addEventListener("click", function () {
            // Create the fullscreen overlay container
            const fullscreenDiv = document.createElement("div");
            fullscreenDiv.classList.add("fullscreen-container");

            // Create the fullscreen image
            const fullscreenImg = document.createElement("img");
            fullscreenImg.src = this.src;
            fullscreenImg.classList.add("fullscreen-img");

            // Append the image to the fullscreen container
            fullscreenDiv.appendChild(fullscreenImg);
            document.body.appendChild(fullscreenDiv);

            // Close fullscreen when clicking outside the image
            fullscreenDiv.addEventListener("click", function (event) {
                if (event.target === fullscreenDiv) {
                    fullscreenDiv.remove(); // Remove the overlay
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".video-trigger").forEach(img => {
        img.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video");

            // Create overlay
            const overlay = document.createElement("div");
            overlay.classList.add("video-overlay");

            // Create video element
            const video = document.createElement("video");
            video.src = videoSrc;
            video.controls = true;
            video.autoplay = true;
            video.classList.add("fullscreen-video");

            overlay.appendChild(video);
            document.body.appendChild(overlay);

            // Close overlay on click outside video
            overlay.addEventListener("click", function (e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
        });
    });
});
