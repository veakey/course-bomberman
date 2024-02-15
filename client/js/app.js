class Game extends Phaser.Game {
  constructor() {
    super(980, 630, Phaser.AUTO, 'game-container');

    // Tell Phaser to use setTimeOut even if RAF(request animation frame) is available.
    this.config['forceSetTimeOut'] = true

    this.state.add('Boot',         Boot);
    this.state.add('Preload',      Preload);
    this.state.add('Menu',         Menu);
    this.state.add('SelectMap',    SelectMap);
    this.state.add('PendingGame',  PendingGame);
    this.state.add('Play',         Play);
    this.state.add('Win',          Win);

    this.state.start('Boot');
  }
}

new Game();
