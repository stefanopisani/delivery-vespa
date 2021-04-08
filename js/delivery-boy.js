class Driver {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 60;

        this.speedY = 0;
        this.speedX = 0;

    }
    draw() {
        const image = new Image();
        image.src = './images/bike2.png';
        context.drawImage(image, this.x, this.y, this.width, this.height);
        // context.strokeStyle = 'white';
        // context.strokeRect(this.x, this.y + 5, this.width, this.height - 15);
    }
    newPos() {
        if (player1.x > 40) {
            this.x += this.speedX;
        } else {
            player1.x = 40.1;
        }
        if (player1.x < 400) {
            this.x += this.speedX;
        } else {
            player1.x = 399.9;
        }
        if (player1.y > 10) {
            this.y += this.speedY;
        } else {
            player1.y = 5.1;
        }
        if (player1.y < 650) {
            this.y += this.speedY;
        } else {
            player1.y = 650.1;
        }


        this.y += this.speedY;
    }
    moveUp() {
        this.y -= 0.2;
    }
    accelerate() {
        this.speedY -= 1;
    }
    break () {
        this.speedY += 1;
    }
    moveLeft() {
        this.speedX -= 1;
    }
    moveRight() {
        this.speedX += 1;
    }
}

document.addEventListener('keydown', (e) => {
    context.clearRect(player1.x, player1.y, player1.width, player1.height);
    switch (e.keyCode) {
        case 38:
            if (player1.y > 5) {
                player1.accelerate();
            }
            break;
        case 40:
            if (player1.y < 650) {
                player1.break();
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

document.addEventListener('keyup', () => {
    context.clearRect(player1.x, player1.y, player1.width, player1.height);
    player1.speedX = 0;
    player1.speedY = 0;
});