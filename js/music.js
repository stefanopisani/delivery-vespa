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

const theSound = new Audio("/Users/stefanopisani/Desktop/game/delivery-vespa/music/Super-Mario.mp3");

const gameOver = new Audio("/Users/stefanopisani/Desktop/game/delivery-vespa/music/gameover.mp3");

const winSong = new Audio("/Users/stefanopisani/Desktop/game/delivery-vespa/music/Ending Theme - Super Mario World.mp3");