export default class abertura extends Phaser.Scene {
  constructor() {
    super("abertura");
  }

  preload() {
    this.load.image("sky", "assets/images/sky.png");
  }

  create() {
    this.add.image(400, 300, "sky");
  }

  update() {}
}

// Exclua esse Arquivo depois
