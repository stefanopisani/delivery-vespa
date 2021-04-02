class Driver {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 80;
    }
    draw() {
        const image = new Image();
        image.src = '/Users/stefanopisani/Desktop/game/images/pngegg.png';
        context.drawImage(image, this.x, this.y, this.width, this.height);
    }
    moveUp() {
        this.y -= 10;
    }
    moveDown() {
        this.y += 10;
    }
    moveLeft() {
        this.x -= 10;
    }
    moveRight() {
        this.x += 10;
    }
}



document.addEventListener('keydown', (e) => {
    context.clearRect(player1.x, player1.y, player1.width, player1.height);
    switch (e.keyCode) {
        case 38:
            if (player1.y > 5) {
                player1.moveUp();
            }
            break;
        case 40:
            if (player1.y < 550) {
                player1.moveDown();
            }
            break;
        case 37:
            if (player1.x > 40) {
                player1.moveLeft();
            }
            break;
        case 39:
            if (player1.x < 420) {
                player1.moveRight();
            }
            break;
    }
});