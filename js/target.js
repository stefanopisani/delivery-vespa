class Target {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const house = new Image();
        house.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/house2.png';
        context.drawImage(house, this.x, this.y, this.width, this.height);
    }
}

class Target2 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const house2 = new Image();
        house2.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/house2.png';
        context.drawImage(house2, this.x, this.y, this.width, this.height);
    }
}