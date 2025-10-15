import { MainMenu } from './engine/mainMenu.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const mainMenu = new MainMenu(canvas, ctx);

function animate() {
  mainMenu.update();
  mainMenu.render();
  requestAnimationFrame(animate);
}
animate();
