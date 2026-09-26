// Aparición de entradas al hacer scroll
document.documentElement.classList.add("js-ready");

const revealElements = document.querySelectorAll(
    ".hero-content, .artist-card, .tour-title, .tour-date, .store-title, .store-card"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element, index) => {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}