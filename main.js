import { MainMenu } from './engine/mainMenu.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameStarted = false;

const mainMenu = new MainMenu(canvas, ctx, () => {
  gameStarted = true;
  console.log('Game would start here');
  // TODO: replace with game initialization
});

function animate() {
  if (!gameStarted) {
    mainMenu.update();
    mainMenu.render();
  }
  requestAnimationFrame(animate);
}

animate();
