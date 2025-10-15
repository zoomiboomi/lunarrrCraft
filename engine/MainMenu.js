export class MainMenu {
  constructor(canvas, ctx, onStartCallback) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.onStart = onStartCallback;

    this.buttons = [];

    this.createButtons();

    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('click', (e) => this.onClick(e));
  }

  createButtons() {
    const centerX = this.canvas.width / 2;
    const startY = this.canvas.height / 2;

    this.buttons.push({
      text: 'Start Game',
      x: centerX - 100,
      y: startY,
      width: 200,
      height: 50,
      hovered: false,
      action: () => this.onStart()
    });

    this.buttons.push({
      text: 'Quit',
      x: centerX - 100,
      y: startY + 70,
      width: 200,
      height: 50,
      hovered: false,
      action: () => alert('Quit clicked! Implement quitting logic here.')
    });
  }

  update() {
    // No additional logic for now
  }

  render() {
    const ctx = this.ctx;
    const canvas = this.canvas;

    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LunarrrCraft', canvas.width / 2, canvas.height / 3);

    this.buttons.forEach(button => {
      ctx.fillStyle = button.hovered ? '#4CAF50' : '#2E7D32';
      ctx.fillRect(button.x, button.y, button.width, button.height);

      ctx.fillStyle = '#fff';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(button.text, button.x + button.width / 2, button.y + button.height / 2);
    });
  }

  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    this.buttons.forEach(button => {
      button.hovered = mouseX >= button.x && mouseX <= button.x + button.width &&
                       mouseY >= button.y && mouseY <= button.y + button.height;
    });
  }

  onClick(e) {
    const clickedButton = this.buttons.find(btn => btn.hovered);
    if (clickedButton) {
      clickedButton.action();
    }
  }
}
