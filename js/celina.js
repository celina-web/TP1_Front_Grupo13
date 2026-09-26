// Generador de citas de libros
const bookQuotes = [
    "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla — Gabriel García Márquez, Vivir para contarla",
    "El que lee mucho y anda mucho, ve mucho y sabe mucho — Miguel de Cervantes, Don Quijote de la Mancha",
    "La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos — Miguel de Cervantes, Don Quijote de la Mancha",
    "Podrán cortar todas las flores, pero no podrán detener la primavera - Pablo Neruda",
    "Un libro es el mejor medio de transporte: te lleva lejos, no contamina, llega puntual, sale barato y nunca marea - Juan Villoro",
    "Caminante, no hay camino, se hace camino al andar - Antonio Machado, Proverbios y cantares",
    "Mira hacia atrás y recuerda que tan solo eres un hombre - Máxima romana tradicional",
    "Los días más felices son aquellos que nos hacen sabios - Gabriela Mistral",
    "Escribo para los amigos que todavía no conozco. Los que conozco ya están hartos de escucharme - Eduardo Galeano",
    "Si me caí, es porque estaba caminando. Y caminar vale la pena, aunque te caigas. - Eduardo Galeano"
];

const bookQuoteButton = document.querySelector("#book-quote-button");
const bookQuoteResult = document.querySelector("#book-quote-result");
let lastBookQuoteIndex = -1;

if (bookQuoteButton instanceof HTMLButtonElement && bookQuoteResult instanceof HTMLElement) {
    bookQuoteButton.addEventListener("click", () => {
        let quoteIndex;

        do {
            quoteIndex = Math.floor(Math.random() * bookQuotes.length);
        } while (quoteIndex === lastBookQuoteIndex);

        lastBookQuoteIndex = quoteIndex;
        bookQuoteResult.textContent = `“${bookQuotes[quoteIndex]}”`;
    });
}
