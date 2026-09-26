// Recomendador aleatorio: elige una película o un disco favorito,
// lo resalta en la lista y lo anuncia debajo del botón.

const randomButton = document.querySelector("#random-pick");
const randomResult = document.querySelector("#random-result");
const picks = [...document.querySelectorAll(".profile-picks li")];

let lastPick = null;

const pickRandom = () => {
    const options = picks.filter((item) => item !== lastPick);
    return options[Math.floor(Math.random() * options.length)];
};

if (randomButton && randomResult && picks.length > 1) {
    randomButton.addEventListener("click", () => {
        const pick = pickRandom();
        const kind = pick.closest(".profile-picks")?.dataset.kind ?? "favorito";
        const title = pick.textContent.replace(/\s+/g, " ").trim();

        lastPick?.classList.remove("is-picked");
        pick.classList.add("is-picked");
        lastPick = pick;

        randomResult.textContent = `Hoy toca ${kind}: ${title}`;
    });
}
