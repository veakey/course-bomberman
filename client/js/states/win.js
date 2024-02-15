// import { Text } from '../helpers/elements';

class Win extends Phaser.State {

  init(winner_skin) {
    this.skin = winner_skin
  }

  create() {
    new Text({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      text: this.winnerText(),
      style: {
        font: '30px Areal',
        fill: '#FFFFFF'
      }
    })
  }

  update() {
    if( this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER) ) {
      this.returnToMenu();
    }
  }

  returnToMenu() {
    this.state.start('Menu');
  }

  winnerText() {
    if (this.skin) {
      return `Le joueur: "${this.skin}" a gagné! Appuie sur entrée pour revenir au menu principal.`
    }

    return 'Un joueur est parti ! Entrée pour revenir au menu principal'
  }
}
