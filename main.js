const stage = new Stage('gameCanvas');
const player = new Player(50, 300, 50, 50, 'player.png'); 

function gameLoop() {
    stage.clear();
    player.draw(stage.context);
    requestAnimationFrame(gameLoop);
}

gameLoop();


document.getElementById('upButton').addEventListener('click', () => {
    player.move('up', stage);
});

document.getElementById('downButton').addEventListener('click', () => {
    player.move('down', stage);
});

document.getElementById('leftButton').addEventListener('click', () => {
    player.move('left', stage);
});

document.getElementById('rightButton').addEventListener('click', () => {
    player.move('right', stage);
});