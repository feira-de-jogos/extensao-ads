config.scene = {
  preload: preload,
  create: create,
  update: update,
}

class Game extends Phaser.Game {
  constructor () {
    super(config)

    // this.audio = document.querySelector('audio')

    // let iceServers
    // if (window.location.host === 'feira-de-jogos.dev.br') {
    //   this.socket = io({ path: '/adcieqipt20241-vitorhlmm-Jogo/socket.io/' })
    //   iceServers = [
    //     {
    //       urls: 'turn:feira-de-jogos.dev.br',
    //       username: USENARME,
    //       credential: CREDENTIAL
    //     }
    //   ]
    // } else {
    //   this.socket = io()
    //   iceServers = [
    //     {
    //       urls: 'stun:stun.l.google.com:19302'
    //     }
    //   ]
    // }
    // this.iceServers = { iceServers }

    // this.socket.on('connect', () => {
    //   console.log('Conectado ao servidor!')
    // })

    // Inclua novas cenas aqui
    this.scene.add('cenaDeAmostra', cenaDeAmostra)

  }
}

window.onload = () => {
  window.game = new Game()
}

