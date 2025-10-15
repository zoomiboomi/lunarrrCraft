import { Display } from './engine/display.js';
import { Input } from './engine/input.js';
import { World } from './engine/world.js';
import { Player } from './engine/player.js';

const display = new Display('gameCanvas');
const input = new Input();
const world = new World();
const player = new Player();

function gameLoop() {
  input.update();

  player.update(world, input);
  world.update();

  display.render(world, player);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
