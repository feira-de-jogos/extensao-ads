import config from "./config/config.js";
import cena1 from "./cenas/cena1.js";
import cena2 from "./cenas/cena2.js";
// import finalFeliz from './finalFeliz.js'
// import finalTriste from './finalTriste.js'

class Game extends Phaser.Game {
  constructor() {
    super(config);

    this.audio = document.querySelector("audio");

    let iceServers;
    if (window.location.host === "feira-de-jogos.dev.br") {
      this.socket = io({ path: "/adcieqipt20241/socket.io/" });
      iceServers = [
        {
          urls: "turn:feira-de-jogos.dev.br",
          username: "adcieqipt20241",
          credential: "adcieqipt20241",
        },
      ];
    } else {
      this.socket = io();
      iceServers = [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ];
      // }
      this.iceServers = { iceServers };

      this.socket.on("connect", () => {
        console.log("Conectado ao servidor!");
      });

      this.scene.add("cena1", cena1);
      this.scene.add("cena2", cena2);
      this.scene.start("cena1");
    }
  }
}
window.onload = () => {
  window.game = new Game();
};
