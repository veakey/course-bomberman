class Bone extends Phaser.Sprite {

  constructor(game, col, row) {
    super(game, (col * TILE_SIZE), (row * TILE_SIZE), 'bone_tileset');
  }

}
