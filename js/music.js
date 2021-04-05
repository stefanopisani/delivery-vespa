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
}

const mySound = new sound("/Users/stefanopisani/Desktop/game/delivery-vespa/music/Super-Mario.mp3");

const gameOver = new sound("/Users/stefanopisani/Desktop/game/delivery-vespa/music/gameover.mp3");

const hurryUp = new sound("/Users/stefanopisani/Desktop/game/delivery-vespa/music/Donkey Kong '94 (GB) - Hurry Up!.mp3");