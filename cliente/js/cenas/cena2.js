export default class cena2 extends Phaser.Scene {
  constructor() {
    super("cena2");
  }

  preload() {
    this.load.image("sky", "assets/images/sky.png");
  }

  create() {
    this.add.image(400, 300, "sky");
    this.add.text(400, 300, "você está na cena 2!");
  }

  update() {}
}
