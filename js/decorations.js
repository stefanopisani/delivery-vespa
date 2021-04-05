class Tower {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        const tower = new Image();
        tower.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/belemTower.png';
        context.drawImage(tower, this.x, this.y, this.width, this.height);
    }
}

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

class Bridge {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        const bridge = new Image();
        bridge.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/ponta25.png';
        context.drawImage(bridge, this.x, this.y, this.width, this.height);
    }
}