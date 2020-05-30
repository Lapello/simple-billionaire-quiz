import 'phaser';
import Button from '../components/button';

export default class SceneGameplay extends Phaser.Scene {

  public buttonArray:Button[] = [];

  constructor() {
    super({ key: 'gameplay', active: false });
  }

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {

    let selectionString:string[] = [
      'This is an answer 1',
      'This is an answer 2',
      'This is an answer 3',
      'This is an answer 4'
    ]

    for (let i = 0; i < 4; i++) {
      let button:Button = new Button(this, selectionString[i], 
        i > 1 ? 560 : 240,                           // X 
        i > 1 ? 450 + (i-2) * 80 : 450 + i * 80,     // Y
        300, 50, 0xf97272, 0x5eb8d6, 0x68d6a8, this.buttonArray);

      this.add.existing(button);
      this.buttonArray.push(button);
    }
    
    let sprite:Phaser.GameObjects.Image = this.add.image(
      300,
      100,
      'logo'
    )
  }
}