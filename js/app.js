const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
document.getElementById('start-button').onclick = () => {
    startGame();
};

const player1 = new Driver(200, 500);
let frames = 0;
let obstacles = [];

function startGame() {
    player1.draw();
    updateCanvas();
}


function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw();

    frames += 1;
    if (frames % 120 === 0) {
        const height = 50;
        const width = Math.floor(Math.random() * 50) + 20;
        const randomX = Math.floor(Math.random() * 450);
        const randomY = 0;
        const newObstacle = new Obstacle(randomX, randomY, width, height);
        obstacles.push(newObstacle);
    }

    obstacles.forEach((obstacle) => {
        obstacle.y += 1;
        obstacle.draw();

        function detectCollision(obstacle) {
            return !((player1.x > obstacle.x + obstacle.width) ||
                (player1.x + player1.width < obstacle.x) ||
                (player1.y > obstacle.y + obstacle.height) ||
                (player1.y + player1.height < obstacle.y));
        }
        if (detectCollision(obstacle)) {
            alert('BOOOM! Try again...');
            obstacles = [];
            location.reload();
        }
    });
    requestAnimationFrame(updateCanvas);
}