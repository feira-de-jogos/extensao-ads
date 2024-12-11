import config from './config/config.js'
import cenaDeAmostra from './cenas/cenaDeAmostra.js'
import abertura from './cenas/abertura.js'
// import sala from './sala.js'
// import mapa from './mapa.js'
// import finalFeliz from './finalFeliz.js'
// import finalTriste from './finalTriste.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.audio = document.querySelector('audio')

    let iceServers
    // if (window.location.host === 'feira-de-jogos.dev.br') {
    //   this.socket = io({ path: '/adcieqipt20241/socket.io/' })
    //   iceServers = [
    //     {
    //       urls: 'turn:feira-de-jogos.dev.br',
    //       username: 'adcieqipt20241',
    //       credential: 'adcieqipt20241'
    //     }
    //   ]
    // } else {
      this.socket = io()
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    // }
    this.iceServers = { iceServers }

    this.socket.on('connect', () => {
      console.log('Conectado ao servidor!')
    })

    this.scene.add('cenaDeAmostra', cenaDeAmostra)
    this.scene.add('abertura', abertura)
    this.scene.start('cenaDeAmostra')
  }
}

window.onload = () => {
  window.game = new Game()
}