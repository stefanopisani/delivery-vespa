const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
document.getElementById('start-button').onclick = () => {
    startGame();
};

const player1 = new Driver(200, 650);
const house1 = new Target(120, 0, 100, 100);
let frames = 0;
let obstacles = [];

function startGame() {
    player1.draw();
    updateCanvas();
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw();
    player1.moveUp();
    player1.newPos();
    frames += 1;

    // target appears
    if (frames > 1200) {
        house1.draw();
        // house1.y += 0.3;
    }

    // obstacle 1
    if (frames % 190 === 0) {
        const height = 80;
        const width = 80;
        const minX = 50;
        const maxX = 400;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const newObstacle = new Obstacle(randomX, randomY, width, height);
        obstacles.push(newObstacle);
    }

    // New obstacle - taxi
    if (frames % 487 === 0) {
        const height = 80;
        const width = 80;
        const minX = 50;
        const maxX = 400;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle2 = new Obstacle2(randomX, randomY, width, height);
        obstacles.push(obstacle2);
    }

    // Police 
    if (frames % 853 === 0) {
        const height = 80;
        const width = 80;
        const minX = 50;
        const maxX = 400;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle3 = new Obstacle3(randomX, randomY, width, height);
        obstacles.push(obstacle3);
    }

    // other car
    if (frames % 301 === 0) {
        const height = 80;
        const width = 80;
        const minX = 50;
        const maxX = 400;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle4 = new Obstacle4(randomX, randomY, width, height);
        obstacles.push(obstacle4);
    }

    // loop into obstacles array
    obstacles.forEach((obstacle) => {
        obstacle.y += 2;
        obstacle.draw();
        // detect collision with obstacles
        function detectCollision(obstacle) {
            return !((player1.x > (obstacle.x + 25) + (obstacle.width - 50)) ||
                (player1.x + player1.width < obstacle.x + 25) ||
                (player1.y > (obstacle.y + 5) + (obstacle.height - 10)) ||
                (player1.y + player1.height < obstacle.y + 5));
        }
        if (detectCollision(obstacle)) {
            alert('BOOOM! Try again...');
            obstacles = [];
            location.reload();
        }
    });
    // collision with target
    function targetReached() {
        return !((player1.x > house1.x + house1.width) ||
            (player1.x + player1.width < house1.x) ||
            (player1.y > house1.y + house1.height) ||
            (player1.y + player1.height < house1.y));
    }
    // time's up
    if (frames > 1750 && !targetReached()) {
        alert('Too late the pizza is cold! Try again...');
        context.clearRect(0, 0, canvas.width, canvas.height);
        location.reload();

    }
    // target reached
    if (frames > 1200 && targetReached()) {
        alert('Congrats, target reached!!!!');
        context.clearRect(0, 0, canvas.width, canvas.height);
        location.reload();

    }
    requestAnimationFrame(updateCanvas);
}