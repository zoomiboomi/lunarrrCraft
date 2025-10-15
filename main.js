const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw a simple cube placeholder for now
  ctx.fillStyle = '#0af';
  ctx.fillRect(100, 100, 50, 50);
  
  requestAnimationFrame(gameLoop);
}

gameLoop();
