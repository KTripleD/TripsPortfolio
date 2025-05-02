document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    const currentImg = document.getElementById("current-know");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Array of image/video pairs
    const imageVideoPairs = [
        { src: "assets/Know1.png", video: "assets/video1.mp4" },
        { src: "assets/Know2.png", video: "assets/video2.mp4" },
        { src: "assets/Know3.png", video: "assets/video3.mp4" },
        { src: "assets/Know4.png", video: "assets/video4.mp4" },
        { src: "assets/Know5.png", video: "assets/video5.mp4" },
        { src: "assets/Know6.png", video: "assets/video6.mp4" },
        { src: "assets/Know7.png", video: "assets/video7.mp4" },
        { src: "assets/Know8.png", video: "assets/video8.mp4" },
        { src: "assets/Know9.png", video: "assets/video9.mp4" },
        { src: "assets/Know10.png", video: "assets/video10.mp4" },
        { src: "assets/Know11.png", video: "assets/video11.mp4" },
        { src: "assets/Know12.png", video: "assets/video12.mp4" },
        { src: "assets/Know13.png", video: "assets/video13.mp4" },
        { src: "assets/Know14.png", video: "assets/video14.mp4" },
        { src: "assets/Know15.png", video: "assets/video15.mp4" },
    ];

    let currentIndex = 0;

    // Function to update the displayed image and data-video
    function updateImage() {
        const pair = imageVideoPairs[currentIndex];
        currentImg.src = pair.src;
        currentImg.setAttribute("data-video", pair.video);
        currentImg.alt = `Knowledge ${currentIndex + 1}`;
    }

    // Event listeners for arrows
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageVideoPairs.length) % imageVideoPairs.length;
        updateImage();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageVideoPairs.length;
        updateImage();
    });

    // Click event to show video popup
    currentImg.addEventListener("click", function () {
        const videoSrc = currentImg.getAttribute("data-video");
        if (!videoSrc) return;

        const overlay = document.createElement("div");
        overlay.classList.add("video-overlay");

        const video = document.createElement("video");
        video.src = videoSrc;
        video.controls = true;
        video.autoplay = true;
        video.classList.add("fullscreen-video");

        overlay.appendChild(video);
        document.body.appendChild(overlay);

        // Remove video on overlay click
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });

    // Initialize the first image
    updateImage();
});
