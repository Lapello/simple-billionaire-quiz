import 'phaser';
import SceneGameplay from './scenes/gameplay';
import SceneLoadMenu from './scenes/loadmenu';
import SceneMainMenu from './scenes/mainmenu';

// Entry Point

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 600,
  scene: [ SceneLoadMenu, SceneMainMenu, SceneGameplay ]
};

const game = new Phaser.Game(config);
