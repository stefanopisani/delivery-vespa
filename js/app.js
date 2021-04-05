const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let animationId;

document.getElementById('game-board').style.display = 'none';
document.querySelector('.left-side').style.display = 'none';
document.getElementById('win').style.display = 'none';

document.getElementById('start-button').onclick = () => {
    startGame();
};

const player1 = new Driver(200, 650);
const house1 = new Target(120, 0, 150, 150);
const house2 = new Target2(230, 0, 150, 150);
const tram = new Tram(380, 0, 120, 150);
const tram2 = new Tram(380, 0, 120, 150);
const tram3 = new Tram(0, 0, 120, 150);

let frames = 0;
let obstacles = [];
let currentLevel = 1;


function startGame() {
    document.querySelector('.game-intro').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    document.querySelector('.left-side').style.display = 'block';
    player1.draw();
    updateCanvas();
}

function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw();
    player1.moveUp();
    player1.newPos();
    mySound.play();
    frames += 1;

    // DECORATIONS:
    if (frames > 300) {
        tram.draw();
        tram.y += 1;
    }
    if (frames > 700) {
        tram3.draw();
        tram3.y += 1;
    }
    if (frames > 900) {
        tram2.draw();
        tram2.y += 1;
    }


    // target appears
    if (frames > 1200) {
        house1.draw();
        mySound.stop();
        hurryUp.play();
    }

    if (frames > 1300 && frames < 1375) {
        context.font = '35px Arial';
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.strokeText('Hurry Up!!!', 300, 50);
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


    if (currentLevel === 1) {
        level1();
    }

    function level1() {

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
            mySound.stop();
            gameOver.play();
            alert('BOOOM! Try again...');
            obstacles = [];
            location.reload();
        } else if (detectCollision(obstacle) && frames > 1200) { //**** MUSIC NOT WORKING */
            hurryUp.stop();
            gameOver.play();
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
    if (frames > 1750 && !targetReached()) { //**** MUSIC NOT WORKING */
        hurryUp.stop();
        gameOver.play();
        alert('Too late the pizza is cold! Try again...');
        context.clearRect(0, 0, canvas.width, canvas.height);
        obstacles = [];
        frames = 0;
        location.reload();

    }
    // target reached
    if (frames > 1200 && targetReached()) {
        hurryUp.stop();
        winSong.play();
        document.getElementById('game-board').style.display = 'none';
        document.querySelector('.left-side').style.display = 'none';
        document.getElementById('win').style.display = 'block';
        obstacles = [];
        frames--;
        document.getElementById('restart-button').onclick = () => {
            currentLevel = 2;
            player1.y = 600;
            frames = 0;
            cancelAnimationFrame(animationId);
            startGame();
        };
    }
    animationId = requestAnimationFrame(updateCanvas);
}