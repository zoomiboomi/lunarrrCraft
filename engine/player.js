export class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  update(world, input) {
    // TODO: update player position based on input & physics
    if (input.isKeyDown('KeyW')) {
      this.z -= 0.1;
    }
    if (input.isKeyDown('KeyS')) {
      this.z += 0.1;
    }
    if (input.isKeyDown('KeyA')) {
      this.x -= 0.1;
    }
    if (input.isKeyDown('KeyD')) {
      this.x += 0.1;
    }
  }
}
