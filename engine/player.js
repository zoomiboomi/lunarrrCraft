export class Player {
  constructor() {
    this.x = 0; // player position X (float)
    this.z = 0; // player position Z (float)
  }

  update(world, input) {
    const speed = 0.1;

    if (input.isKeyDown('KeyW')) this.z -= speed;
    if (input.isKeyDown('KeyS')) this.z += speed;
    if (input.isKeyDown('KeyA')) this.x -= speed;
    if (input.isKeyDown('KeyD')) this.x += speed;
  }
}
