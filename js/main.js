const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

const setCardFlipped = (card, isFlipped) => {
    const front = card.querySelector(".artist-card-front");
    const back = card.querySelector(".artist-card-back");

    if (!front || !back) {
        return;
    }

    const artistName = back.querySelector("h2")?.textContent ?? "artista";

    card.classList.toggle("is-flipped", isFlipped);
    card.setAttribute("aria-pressed", String(isFlipped));
    card.setAttribute(
        "aria-label",
        `${isFlipped ? "Volver a la portada de" : "Ver información de"} ${artistName}`
    );
    front.setAttribute("aria-hidden", String(isFlipped));
    back.setAttribute("aria-hidden", String(!isFlipped));

    // El enlace al perfil sólo es enfocable cuando el dorso está visible
    back.querySelectorAll("a").forEach((link) => {
        link.tabIndex = isFlipped ? 0 : -1;
    });
};

document.querySelectorAll(".artist-card").forEach((card) => {
    const toggleCard = () => {
        const shouldFlip = !card.classList.contains("is-flipped");

        if (shouldFlip) {
            document.querySelectorAll(".artist-card.is-flipped").forEach((openCard) => {
                if (openCard !== card) {
                    setCardFlipped(openCard, false);
                }
            });
        }

        setCardFlipped(card, shouldFlip);
    };

    const isFromLink = (event) => event.target instanceof Element && event.target.closest("a");

    card.addEventListener("click", (event) => {
        if (!isFromLink(event)) {
            toggleCard();
        }
    });
    card.addEventListener("keydown", (event) => {
        if (isFromLink(event)) {
            return;
        }

        if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
            event.preventDefault();
            toggleCard();
        }
    });
});

if (menuToggle instanceof HTMLButtonElement && navigation instanceof HTMLElement) {
    const navbar = menuToggle.closest(".navbar");

    if (navbar) {
        const closeMenu = () => {
            navbar.classList.remove("menu-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        };

        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            navbar.classList.toggle("menu-open", !isExpanded);
            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
            menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
        });

        navigation.addEventListener("click", (event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                closeMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
                menuToggle.focus();
            }
        });
    }
}

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