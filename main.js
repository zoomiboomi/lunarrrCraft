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

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // If you have menu, update buttons positions on resize
  if (!gameStarted) mainMenu.createButtons();
}
window.addEventListener('resize', resize);
resize();

