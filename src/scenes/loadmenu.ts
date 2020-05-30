import 'phaser';

export default class SceneLoadMenu extends Phaser.Scene {

  constructor() {
    super({ key: 'load-menu', active: true });
  }

  preload() {
    let gLoadBar:Phaser.GameObjects.Graphics = this.add.graphics();
    let gLoadBox:Phaser.GameObjects.Graphics = this.add.graphics();

    gLoadBox.fillStyle(0xffffff, 0.2);
    gLoadBox.fillRect(
      this.cameras.main.centerX - 200,  // X
      this.cameras.main.centerY - 25,   // Y
      400, 50 // W, H
    );

    // Create a textbox which says Loading...
    let txtLoad:Phaser.GameObjects.Text = this.make.text({
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    txtLoad.setOrigin(0.5, 0.5);  // Set the origin point to the middle of the text

    // What happens during load progress
    this.load.on('progress', (value) => {
      gLoadBar.clear();
      gLoadBar.fillStyle(0xffffff);
      gLoadBar.fillRect(
        this.cameras.main.centerX - 195,
        this.cameras.main.centerY - 20,
        390 * value, 40
      );
    });

    // What happens when loading is complete
    this.load.on('complete', () => {
      this.scene.start('main-menu');
      this.scene.stop();
    });

    // Start the actual loading
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
  }
}