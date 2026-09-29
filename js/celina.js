// Generador de frases de autores hispanos
const bookQuotes = [
    "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla — Gabriel García Márquez, Vivir para contarla",
    "El que lee mucho y anda mucho, ve mucho y sabe mucho — Miguel de Cervantes, Don Quijote de la Mancha",
    "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos — Miguel de Cervantes, Don Quijote de la Mancha",
    "Podrán cortar todas las flores, pero no podrán detener la primavera - Pablo Neruda",
    "Un libro es el mejor medio de transporte: te lleva lejos, no contamina, llega puntual, sale barato y nunca marea - Juan Villoro",
    "Caminante, no hay camino, se hace camino al andar - Antonio Machado, Proverbios y cantares",
    "La duda es uno de los nombres de la inteligencia. - Jorge Luis Borges",
    "Los días más felices son aquellos que nos hacen sabios - Gabriela Mistral",
    "Escribo para los amigos que todavía no conozco. Los que conozco ya están hartos de escucharme - Eduardo Galeano",
    "Si me caí, es porque estaba caminando. Y caminar vale la pena, aunque te caigas. - Eduardo Galeano"
];

const bookQuoteButton = document.querySelector("#book-quote-button");
const bookQuoteResult = document.querySelector("#book-quote-result");
const bookQuoteContainer = document.querySelector(".frase-generada");
let lastBookQuote = null;

if (
    bookQuoteButton instanceof HTMLButtonElement &&
    bookQuoteResult instanceof HTMLElement &&
    bookQuoteContainer instanceof HTMLElement
) {
    bookQuoteButton.addEventListener("click", () => {
        const availableQuotes = bookQuotes.filter((quote) => quote !== lastBookQuote);

        if (availableQuotes.length === 0) {
            return;
        }

        lastBookQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
        bookQuoteResult.textContent = `“${lastBookQuote}”`;
        bookQuoteContainer.hidden = false;
    });
}
