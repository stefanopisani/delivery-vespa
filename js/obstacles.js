class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/Audi.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}

class Obstacle2 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/taxi.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}

class Obstacle3 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/Police.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}

class Obstacle4 {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/Black_viper.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}

class Ambulance {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/Ambulance.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}

class Truck {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        const obstacleCar = new Image();
        obstacleCar.src = '/Users/stefanopisani/Desktop/game/delivery-vespa/images/Topdown_vehicle_sprites_pack/truck.png';
        context.drawImage(obstacleCar, this.x, this.y, this.width, this.height);
    }
}