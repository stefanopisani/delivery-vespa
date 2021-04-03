class Target {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const house = new Image();
        house.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/lisboa.png';
        context.drawImage(house, this.x, this.y, this.width, this.height);
    }
}