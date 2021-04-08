/*
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };
    this.stop = function () {
        this.sound.pause();
    };
}*/

const theSound = new Audio("./music/Super-Mario.mp3");
theSound.volume = 0.3;

const gameOver = new Audio("./music/gameover.mp3");
gameOver.volume = 0.3;

const winSong = new Audio("./music/Ending Theme - Super Mario World.mp3");
winSong.volume = 0.3;

const lastSong = new Audio("./music/ita.mp3");
lastSong.volume = 0.3;