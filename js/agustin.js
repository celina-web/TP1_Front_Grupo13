// Reproductor ficticio: recorre los discos favoritos de Agus.
// Play/Pausa anima el ecualizador y la barra de progreso;
// cuando la barra se llena (o se toca "Siguiente") pasa al próximo disco.

const agusPlayer = document.querySelector(".agus-player");
const playButton = document.querySelector("#agus-play");
const nextButton = document.querySelector("#agus-next");
const nowPlaying = document.querySelector("#agus-now");
const progressBar = document.querySelector("#agus-progress-bar");
const albums = [...document.querySelectorAll('.profile-picks[data-kind="disco"] li')];

let currentAlbum = 0;
let progress = 0;
let timer = null;

const showAlbum = () => {
    const album = albums[currentAlbum];
    const title = album.textContent.replace(/\s+/g, " ").trim();

    albums.forEach((item) => item.classList.remove("is-picked"));
    album.classList.add("is-picked");
    nowPlaying.textContent = `🎧 ${title}`;
    progressBar.style.width = `${progress}%`;
};

const nextAlbum = () => {
    currentAlbum = (currentAlbum + 1) % albums.length;
    progress = 0;
    showAlbum();
};

const tick = () => {
    progress += 2;
    if (progress >= 100) {
        nextAlbum();
    } else {
        progressBar.style.width = `${progress}%`;
    }
};

const play = () => {
    timer = setInterval(tick, 150);
    agusPlayer.classList.add("is-playing");
    playButton.textContent = "⏸ Pausa";
    showAlbum();
};

const pause = () => {
    clearInterval(timer);
    timer = null;
    agusPlayer.classList.remove("is-playing");
    playButton.textContent = "▶ Play";
};

if (agusPlayer && playButton && nextButton && nowPlaying && progressBar && albums.length > 0) {
    playButton.addEventListener("click", () => {
        if (timer) {
            pause();
        } else {
            play();
        }
    });

    nextButton.addEventListener("click", nextAlbum);
}