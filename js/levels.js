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




    function level1() {
        // Target appears
        if (frames > 1200) {
            house1.draw();
        }
        // MESSAGE 
        if (frames > 1300 && frames < 1375) {
            context.font = '45px Arial';
            context.strokeStyle = 'white';
            context.lineWidth = 2;
            context.strokeText('Hurry Up!!!', 300, 70);
        }
    }

    function level2() {
        // Target appears
        if (frames > 1350) {
            house2.draw();
        }
        // MESSAGE 

        if (currentLevel === 2 && frames > 1400 && frames < 1475) {
            context.font = '45px Arial';
            context.strokeStyle = 'white';
            context.lineWidth = 2;
            context.strokeText('Hurry Up!!!', 300, 70);
        }
        // AMBULANCE
        if (frames % 400 === 0) {
            const height = 80;
            const width = 100;
            const minX = 70;
            const maxX = 350;
            const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
            const randomY = 0;
            const obstacle5 = new Ambulance(randomX, randomY, width, height);
            obstacles.push(obstacle5);
        }
    }


    function level3() {
        if (frames > 1500) {
            house3.draw();
        }
        // MESSAGE 
        if (currentLevel === 2 && frames > 1500 && frames < 1575) {
            context.font = '45px Arial';
            context.strokeStyle = 'white';
            context.lineWidth = 2;
            context.strokeText('Hurry Up!!!', 300, 70);
        }
        // AMBULANCE
        if (frames % 400 === 0) {
            const height = 80;
            const width = 100;
            const minX = 70;
            const maxX = 350;
            const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
            const randomY = 0;
            const obstacle5 = new Ambulance(randomX, randomY, width, height);
            obstacles.push(obstacle5);
        }
        // TRUCK

        if (currentLevel === 3 && frames % 650 === 0) {
            const height = 100;
            const width = 100;
            const minX = 70;
            const maxX = 350;
            const randomX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
            const randomY = 0;
            const obstacle6 = new Truck(randomX, randomY, width, height);
            obstacles.push(obstacle6);
        }
    }

    // loop into obstacles array
    obstacles.forEach((obstacle) => {
        if (currentLevel === 1) {
            obstacle.y += 2;
        } else if (currentLevel === 2) {
            obstacle.y += 2.25;
        } else {
            obstacle.y += 2.5;
        }
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
        }
    });


    // collision with target
    function targetReached() {
        return !((player1.x > house1.x + house1.width) ||
            (player1.x + player1.width < house1.x) ||
            (player1.y > house1.y + house1.height) ||
            (player1.y + player1.height < house1.y));
    }

    if (currentLevel === 1) {
        // time's up
        if (frames > 1750 && !targetReached()) { //**** MUSIC NOT WORKING */
            mySound.stop();
            gameOver.play();
            alert('Too late the pizza is cold! Try again...');
            context.clearRect(0, 0, canvas.width, canvas.height);
            obstacles = [];
            frames = 0;
            location.reload();

        }
        // target reached
        if (frames > 1200 && targetReached()) {
            mySound.stop();
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
    }
    animationId = requestAnimationFrame(updateCanvas);
}