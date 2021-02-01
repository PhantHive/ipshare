const backTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        // go back to top if scroll to more than 400px
        if (!backTopButton.classList.contains("btnEntrance")) {
            backTopButton.classList.remove("btnExit");
            backTopButton.classList.add("btnEntrance");
            backTopButton.style.display = "block";
        }
    }
    else {
        if (backTopButton.classList.contains("btnEntrance")) {
            backTopButton.classList.remove("btnEntrance");
            backTopButton.classList.add("btnExit");
            setTimeout(function () {
                backTopButton.style.display = "none";
            }, 250);

        }
    }
}

backTopButton.addEventListener("click", smoothScrollBackToTop)

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    backTopButton.style.outline = "none";
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};