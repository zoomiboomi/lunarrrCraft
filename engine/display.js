export class Display {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  clear() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render(world, player) {
    this.clear();

    const blockSize = 20;
    const gridSize = 10;
    const ctx = this.ctx;
    const canvasCenterX = this.canvas.width / 2;
    const canvasCenterY = this.canvas.height / 2;

    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const blockX = Math.floor(player.x) + x;
        const blockZ = Math.floor(player.z) + z;

        const offsetX = (player.x - Math.floor(player.x)) * blockSize;
        const offsetZ = (player.z - Math.floor(player.z)) * blockSize;

        const screenX = canvasCenterX + (x * blockSize) - offsetX;
        const screenY = canvasCenterY + (z * blockSize) - offsetZ;

        ctx.fillStyle = (blockX + blockZ) % 2 === 0 ? '#7ec850' : '#5ba34a';
        ctx.fillRect(screenX, screenY, blockSize, blockSize);
      }
    }

    // Player is a red square in the center
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(canvasCenterX, canvasCenterY, blockSize, blockSize);
  }
}
