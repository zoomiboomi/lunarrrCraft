export class MainMenu {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
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
      action: () => this.startGame()
    });

    this.buttons.push({
      text: 'Quit',
      x: centerX - 100,
      y: startY + 70,
      width: 200,
      height: 50,
      hovered: false,
      action: () => this.quitGame()
    });
  }

  update() {
    // No complex update logic needed here yet
  }

  render() {
    const ctx = this.ctx;
    const canvas = this.canvas;

    // Clear screen
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw title
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LunarrrCraft', canvas.width / 2, canvas.height / 3);

    // Draw buttons
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

  startGame() {
    alert('Start Game clicked! Implement game start here.');
    // TODO: hook this to start your game loop and world rendering
  }

  quitGame() {
    alert('Quit Game clicked! Closing game...');
    // TODO: implement quitting or redirect
  }
}
