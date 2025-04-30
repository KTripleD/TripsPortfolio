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
