document.addEventListener("DOMContentLoaded", function () {
    const currentImg = document.getElementById("current-know");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Images 1–11 have no videos, just larger images; 12–15 have video
    const imageVideoPairs = [
        { src: "assets/Know1.png", type: "image" },
        { src: "assets/Know2.png", type: "image" },
        { src: "assets/Know3.png", type: "image" },
        { src: "assets/Know4.png", type: "image" },
        { src: "assets/Know5.png", type: "image" },
        { src: "assets/Know6.png", type: "image" },
        { src: "assets/Know7.png", type: "image" },
        { src: "assets/Know8.png", type: "image" },
        { src: "assets/Know9.png", type: "image" },
        { src: "assets/Know10.png", type: "image" },
        { src: "assets/Know11.png", type: "image" },
        { src: "assets/Know12.png", type: "video", video: "assets/video12.mp4" },
        { src: "assets/Know13.png", type: "video", video: "assets/video13.mp4" },
        { src: "assets/Know14.png", type: "video", video: "assets/video14.mp4" },
        { src: "assets/Know15.png", type: "video", video: "assets/video15.mp4" },
    ];

    let currentIndex = 0;

    function updateImage() {
        const item = imageVideoPairs[currentIndex];
        currentImg.src = item.src;
        currentImg.setAttribute("data-type", item.type);
        currentImg.setAttribute("data-src", item.type === "video" ? item.video : item.src);
        currentImg.alt = `Knowledge ${currentIndex + 1}`;
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageVideoPairs.length) % imageVideoPairs.length;
        updateImage();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageVideoPairs.length;
        updateImage();
    });

    currentImg.addEventListener("click", function () {
        const type = currentImg.getAttribute("data-type");
        const src = currentImg.getAttribute("data-src");

        const overlay = document.createElement("div");
        overlay.classList.add("video-overlay");

        if (type === "video") {
            const video = document.createElement("video");
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.classList.add("fullscreen-video");
            overlay.appendChild(video);
        } else {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("fullscreen-image");
            overlay.appendChild(img);
        }

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });

    updateImage();
});
