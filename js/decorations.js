class Tram {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        const decoration1 = new Image();
        decoration1.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/tram.png';
        context.drawImage(decoration1, this.x, this.y, this.width, this.height);
    }
}

class Explosion {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        const boom = new Image();
        boom.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/booom.png';
        context.drawImage(boom, this.x, this.y, 100, 100);
    }
}