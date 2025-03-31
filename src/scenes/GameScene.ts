import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    console.log('[PRELOAD] 시작됨');

    this.load.tilemapTiledJSON('map', 'assets/maps/tilemap_packed.json');
    this.load.image('tiles', 'assets/tilesets/tilemap_packed.png');

    this.load.on('loaderror', (file: any) => {
      console.error('❌ Load error:', file.key, file.src);
    });

    this.load.on('complete', () => {
      console.log('✅ All assets loaded');
      this.createMap(); // 로드 완료 후 createMap 호출
    });
  }

  createMap() { // 분리된 createMap 함수
    console.log('[CREATE] 실행됨');

    const map = this.make.tilemap({ key: 'map' });
    if (map == undefined) {
      console.log('map is undefined')
    }

    const tileset = map.addTilesetImage('tilemap_packed', 'tiles');

    if (!tileset) {
      console.error('❌ tileset is undefined!');
      return;
    }

    map.createLayer('Tile Layer 1', tileset, 0, 0);
  }
}