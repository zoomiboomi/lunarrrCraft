export class Input {
  constructor() {
    this.keys = {};

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
  }

  update() {
    // No extra logic needed yet
  }

  isKeyDown(keyCode) {
    return !!this.keys[keyCode];
  }
}
