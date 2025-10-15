import { MainMenu } from './engine/mainMenu.js';
import { Display } from './engine/display.js';
import { Input } from './engine/input.js';
import { World } from './engine/world.js';
import { Player } from './engine/player.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

let gameStarted = false;

// Game objects - created later only if game starts
let display, input, world, player;

const mainMenu = new MainMenu(canvas, ctx, startGame);

function startGame() {
  gameStarted = true;
  display = new Display('gameCanvas');
  input = new Input();
  world = new World();
  player = new Player();
}

function animate() {
  if (!gameStarted) {
    mainMenu.update();
    mainMenu.render();
  } else {
    input.update();
    player.update(world, input);
    world.update();
    display.render(world, player);
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
