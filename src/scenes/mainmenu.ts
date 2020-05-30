import 'phaser';
import Button from '../components/button';

export default class SceneMainMenu extends Phaser.Scene {

  public buttonArray:Button[] = [];

  constructor() {
    super({ key: 'main-menu', active: false });
  }

  preload() {

  }

  create() {
    let selectionString:string[] = [
      'Play',
      'Options',
      'Quit'
    ]

    for (let i = 0; i < selectionString.length; i++) {
      let button:Button = new Button(this, selectionString[i], 
        this.cameras.main.centerX,
        this.cameras.main.centerY - (selectionString.length * 100 - 50)/2 + i * 100 + 25,
        300, 50, 0xf97272, 0x5eb8d6, 0x68d6a8, this.buttonArray);

      this.add.existing(button);
      this.buttonArray.push(button);
    }

    // Give button 0 (play button) a callback function that starts gameplay scene
    this.buttonArray[0].setCallback(() => {
      this.scene.start('gameplay');
      this.scene.stop();
    });
  }
}