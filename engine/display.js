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

    // placeholder: draw a blue square as “player”
    this.ctx.fillStyle = '#00aaff';
    this.ctx.fillRect(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25, 50, 50);

    // TODO: render blocks around player here
  }
}
