document.addEventListener("DOMContentLoaded", () => {
    const rangeInput = document.getElementById("hype-range");
    const emojiOutput = document.getElementById("hype-emoji");
    const textOutput = document.getElementById("hype-text");

    if (!rangeInput || !emojiOutput || !textOutput) return;

    const updateHype = () => {
        const val = parseInt(rangeInput.value, 10);
        let text = "";
        let emoji = "";

        if (val < 20) {
            text = "Probando sonido...";
            emoji = "🥱";
        } else if (val < 40) {
            text = "¡Entrando en calor!";
            emoji = "🤔";
        } else if (val < 60) {
            text = "¡Afinando la guitarra!";
            emoji = "🎸";
        } else if (val < 85) {
            text = "¡Rompemoos toda!";
            emoji = "🔥";
        } else {
            text = "¡A tocar!";
            emoji = "🚀";
        }

        emojiOutput.textContent = emoji;
        textOutput.textContent = text;
    };

    rangeInput.addEventListener("input", updateHype);
    updateHype();
});
