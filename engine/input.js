export class Input {
  constructor() {
    this.keys = {};

    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);
  }

  update() {
    // Could track toggles or mouse later
  }

  isKeyDown(keyCode) {
    return !!this.keys[keyCode];
  }
}
