document.addEventListener("DOMContentLoaded", () => {
    const btnEncore = document.getElementById("btn-encore");
    const backstagePass = document.getElementById("backstage-pass");

    if (btnEncore && backstagePass) {
        btnEncore.addEventListener("click", () => {
            const isExpanded = btnEncore.getAttribute("aria-expanded") === "true";
            
            if (isExpanded) {
                btnEncore.setAttribute("aria-expanded", "false");
                backstagePass.setAttribute("aria-hidden", "true");
                backstagePass.classList.remove("show");
            } else {
                btnEncore.setAttribute("aria-expanded", "true");
                backstagePass.setAttribute("aria-hidden", "false");
                backstagePass.classList.add("show");
            }
        });
    }
});

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    const toggleBackToTop = () => {
        backToTop.hidden = window.scrollY < 400;
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
}