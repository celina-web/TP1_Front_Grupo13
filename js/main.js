const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

const pageTransitions = new Map([
    ["index.html", { effect: "home", label: "WEBFEST", color: "#111111" }],
    ["bitacora.html", { effect: "tour", label: "BITÁCORA", color: "#e83268" }],
    ["agustin.html", { effect: "agus", label: "AGUSTÍN", color: "#FF7A45" }],
    ["sebastian.html", { effect: "sebas", label: "SEBAS", color: "#65D98B" }],
    ["valentina.html", { effect: "valen", label: "VALEN", color: "#FF4F81" }],
    ["celina.html", { effect: "celi", label: "CELI", color: "#FFD447" }]
]);

const pageTransitionParameter = "page-transition";
const entryEffect = new URL(window.location.href).searchParams.get(pageTransitionParameter);

if (entryEffect && [...pageTransitions.values()].some(({ effect }) => effect === entryEffect)) {
    document.documentElement.classList.add(`page-enter--${entryEffect}`);

    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete(pageTransitionParameter);
    window.history.replaceState(window.history.state, "", `${cleanUrl.pathname}${cleanUrl.search}${cleanUrl.hash}`);
}

let pageTransitionInProgress = false;

document.addEventListener("click", (event) => {
    if (
        !(event.target instanceof Element) ||
        !(event instanceof MouseEvent) ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    const link = event.target.closest("a[href]");

    if (
        !(link instanceof HTMLAnchorElement) ||
        link.hasAttribute("download") ||
        (link.target && link.target.toLowerCase() !== "_self") ||
        link.relList.contains("external")
    ) {
        return;
    }

    const destination = new URL(link.href, window.location.href);
    const destinationFile = destination.pathname.slice(destination.pathname.lastIndexOf("/") + 1).toLowerCase();
    const transition = pageTransitions.get(destinationFile);

    if (
        destination.origin !== window.location.origin ||
        !["http:", "https:", "file:"].includes(destination.protocol) ||
        destination.pathname === window.location.pathname ||
        !transition
    ) {
        return;
    }

    event.preventDefault();

    if (pageTransitionInProgress) {
        return;
    }

    pageTransitionInProgress = true;
    destination.searchParams.set(pageTransitionParameter, transition.effect);

    const overlay = document.createElement("div");
    overlay.className = `page-transition page-transition--${transition.effect}`;
    overlay.setAttribute("aria-hidden", "true");
    overlay.textContent = transition.label;
    overlay.style.setProperty("--page-transition-color", transition.color);
    document.body.append(overlay);

    let hasNavigated = false;
    const navigate = () => {
        if (hasNavigated) {
            return;
        }

        hasNavigated = true;
        window.location.assign(destination.href);
    };

    overlay.addEventListener("animationend", navigate, { once: true });
    window.setTimeout(navigate, 800);
});

const randomProfileButton = document.querySelector("#random-profile");

// Animación cartas artistas
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

if (randomProfileButton instanceof HTMLButtonElement) {
    randomProfileButton.addEventListener("click", () => {
        const artistCards = document.querySelectorAll(".artist-card");

        if (artistCards.length === 0) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * artistCards.length);
        const randomCard = artistCards[randomIndex];

        document.querySelectorAll(".artist-card.is-flipped").forEach((openCard) => {
            if (openCard !== randomCard) {
                setCardFlipped(openCard, false);
            }
        });

        setCardFlipped(randomCard, true);
        randomCard.scrollIntoView({ block: "center" });
    });
}

// Menú hamburguesa en pantallas pequeñas
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