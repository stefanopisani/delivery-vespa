const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let animationId;
let endGame = false;
let levelPassed = false;

document.getElementById('game-board').style.display = 'none';
document.querySelector('.left-side').style.display = 'none';
document.querySelector('.left-side2').style.display = 'none';
document.querySelector('.left-side3').style.display = 'none';
document.querySelector('#game-over1').style.display = 'none';
document.querySelector('#game-over2').style.display = 'none';
document.getElementById('win').style.display = 'none';
document.getElementById('win2').style.display = 'none';


document.getElementById('start-button').onclick = () => {
    startGame();
};

// PLAYERS 
const player1 = new Driver(200, 650);
const house1 = new Target(20, 0, 150, 150);
const house2 = new Target2(330, 0, 150, 150);
const house3 = new Target3(10, 0, 120, 120);
const tram = new Tram(395, 0, 120, 150);
const tram2 = new Tram(395, 0, 120, 150);
const tram3 = new Tram(-15, 0, 120, 150);
const boom = new Explosion(250, 350, 200, 200);

let frames = 0;
let obstacles = [];
let newObstacles = [];
let currentLevel = 1;

// START GAME
function startGame() {
    document.querySelector('.game-intro').style.display = 'none';
    document.getElementById('win').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    if (currentLevel === 1) {
        document.querySelector('.left-side').style.display = 'block';
    } else if (currentLevel === 2) {
        document.querySelector('.left-side2').style.display = 'block';
    } else {
        document.querySelector('.left-side2').style.display = 'none';
        document.querySelector('.left-side3').style.display = 'block';
    }
    endGame = false;
    theSound.play();
    player1.draw();
    updateCanvas();
}


// END GAME
function stopGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    frames = 0;
    player1.y += 600;
    obstacles = [];
    endGame = true;
    cancelAnimationFrame(animationId);
}

// // stop for win
// function nextLevel() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     frames = 0;
//     player1.y += 600;
//     obstacles = [];
//     levelPassed = true;
//     cancelAnimationFrame(animationId);
// }

// UPDATE CANVAS 
function updateCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.draw();
    player1.moveUp();
    player1.newPos();

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

    // TARGETS APPEAR
    if (currentLevel === 1 && frames > 1200) { //1200
        house1.draw();
    }
    if (currentLevel === 2 && frames > 1350) { //1350
        house2.draw();
    }
    if (currentLevel === 3 && frames > 1500) { //1500
        house3.draw();
    }

    // MESSAGE 
    if (currentLevel === 1 && frames > 1300 && frames < 1325 || frames > 1350 && frames < 1400) {
        context.font = '45px Arial';
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.strokeText('Hurry Up!!!', 300, 70);
    }
    if (currentLevel === 2 && frames > 1400 && frames < 1475) {
        context.font = '45px Arial';
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.strokeText('Hurry Up!!!', 300, 70);
    }
    if (currentLevel === 3 && frames > 1500 && frames < 1575) {
        context.font = '45px Arial';
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.strokeText('Hurry Up!!!', 300, 70);
    }

    // obstacle 1
    if (frames % 190 === 0) {
        const height = 100;
        const width = 100;
        const minX = 70;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const newObstacle = new Obstacle(randomX, randomY, width, height);
        obstacles.push(newObstacle);
    }

    // Taxi
    if (frames % 455 === 0) {
        const height = 100;
        const width = 100;
        const minX = 70;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle2 = new Obstacle2(randomX, randomY, width, height);
        obstacles.push(obstacle2);
    }

    // Police 
    if (frames % 850 === 0) {
        const height = 100;
        const width = 100;
        const minX = 70;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle3 = new Obstacle3(randomX, randomY, width, height);
        obstacles.push(obstacle3);
    }

    // other car
    if (frames % 270 === 0) {
        const height = 100;
        const width = 100;
        const minX = 70;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        // const randomX = getRandomObstacleX();
        const randomY = 0;
        const obstacle4 = new Obstacle4(randomX, randomY, width, height);
        obstacles.push(obstacle4);
    }

    // AMBULANCE
    if (currentLevel > 1 && frames % 500 === 0) {
        const height = 120;
        const width = 120;
        const minX = 250;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle5 = new Ambulance(randomX, randomY, width, height);
        obstacles.push(obstacle5);
    }

    // TRUCK
    if (currentLevel === 3 && frames % 350 === 0) {
        const height = 150;
        const width = 150;
        const minX = 70;
        const maxX = 350;
        const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
        const randomY = 0;
        const obstacle6 = new Truck(randomX, randomY, width, height);
        obstacles.push(obstacle6);
    }


    // LOOP into OBSTACLES array
    obstacles.forEach((obstacle, index) => {
        if (currentLevel === 1) {
            obstacle.y += 2;
        } else if (currentLevel === 2) {
            obstacle.y += 3;
        } else {
            obstacle.y += 4;
        }

        obstacle.draw();

        if (detectCollision(obstacle)) {
            theSound.pause();
            gameOver.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side').style.display = 'none';
            document.querySelector('.left-side2').style.display = 'none';
            document.querySelector('.left-side3').style.display = 'none';
            document.querySelector('#game-over1').style.display = 'block';
            stopGame();

            document.querySelector('.restart-button').onclick = () => {
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                document.querySelector('#game-over1').style.display = 'none';
                location.reload();
            };
        }

        if (obstacle.y > 700) {
            obstacles.splice(index, 1);
            //remove from the randomXs array
        }
    });


    if (currentLevel === 1) {
        // time's up
        if (frames > 1500 && !targetReached()) {
            theSound.pause();
            gameOver.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side').style.display = 'none';
            document.querySelector('#game-over2').style.display = 'block';
            stopGame();

            document.querySelector('.restart-button2').onclick = () => {
                cancelAnimationFrame(animationId);
                document.querySelector('#game-over2').style.display = 'none';
                location.reload();
            };
        }
        // target reached
        if (frames > 1250 && targetReached()) { //1200
            theSound.pause();
            winSong.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side').style.display = 'none';
            document.getElementById('win').style.display = 'block';
            stopGame();
            document.querySelector('.next-level').onclick = () => {
                currentLevel = 2;
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                startGame();
            };
        }
    } else if (currentLevel === 2) {
        // time's up
        if (frames > 1750 && !targetReached()) {
            theSound.pause();
            gameOver.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side2').style.display = 'none';
            document.querySelector('#game-over2').style.display = 'block';
            stopGame();
            document.querySelector('.restart-button2').onclick = () => {
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                document.querySelector('#game-over2').style.display = 'none';
                location.reload();
            };
        }
        // target reached
        if (frames > 1400 && targetReached()) { //1350
            theSound.pause();
            winSong.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side2').style.display = 'none';
            document.getElementById('win').style.display = 'block';
            stopGame();
            document.querySelector('.next-level').onclick = () => {
                currentLevel = 3;
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                startGame();
            };
        }
    } else {
        // time's up
        if (frames > 1900 && !targetReached()) {
            gameOver.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side3').style.display = 'none';
            document.querySelector('#game-over2').style.display = 'block';
            stopGame();
            document.querySelector('.restart-button2').onclick = () => {
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                document.querySelector('#game-over2').style.display = 'none';
                location.reload();
            };
        }
        // target reached
        if (frames > 1550 && targetReached()) { //1500
            theSound.pause();
            lastSong.play();
            document.getElementById('game-board').style.display = 'none';
            document.querySelector('.left-side3').style.display = 'none';
            document.getElementById('win2').style.display = 'block';
            stopGame();
            document.querySelector('.final-button').onclick = () => {
                currentLevel = 3;
                player1.y = 600;
                frames = 0;
                cancelAnimationFrame(animationId);
                location.reload();
            };
        }
    }
    if (!endGame) {
        animationId = requestAnimationFrame(updateCanvas);
    }
}

// COLLISIONS:

// OBSTACLES
function detectCollision(obstacle) {
    return !((player1.x > (obstacle.x + 30) + (obstacle.width - 55)) ||
        (player1.x + player1.width < obstacle.x + 30) ||
        (player1.y > (obstacle.y + 10) + (obstacle.height - 15)) ||
        (player1.y + player1.height < obstacle.y + 10));
}

// TARGET
function targetReached() {
    if (currentLevel === 1) {
        return !((player1.x > house1.x + house1.width) ||
            (player1.x + player1.width < house1.x) ||
            (player1.y > house1.y + house1.height) ||
            (player1.y + player1.height < house1.y));
    } else if (currentLevel === 2) {
        return !((player1.x > house2.x + house2.width) ||
            (player1.x + player1.width < house2.x) ||
            (player1.y > house2.y + house2.height) ||
            (player1.y + player1.height < house2.y));
    } else {
        return !((player1.x > house3.x + house3.width) ||
            (player1.x + player1.width < house3.x) ||
            (player1.y > house3.y + house3.height) ||
            (player1.y + player1.height < house3.y));
    }
}


// function getRandomObstacleX(minX, maxX) {
//     let randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
//     let foundOverlapping = obstacles.some((obstacle) => {
//         return !((randomX > (obstacle.x + 30) + (obstacle.width - 55)) ||
//             (randomX + 70 < obstacle.x + 30) ||
//             (0 > (obstacle.y + 10) + (obstacle.height - 15)) ||
//             (0 + 70 < obstacle.y + 10));
//     });
//     if (foundOverlapping) {
//         getRandomObstacleX();
//     } else {
//         return randomX;
//     }
// }