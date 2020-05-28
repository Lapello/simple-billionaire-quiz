import 'phaser';
import Button from './button';

export default class Demo extends Phaser.Scene {

  public buttonArray:Button[] = [];

  constructor() {
    super('demo');
  }

  preload() {

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
        300, 50, 0xff0000, 0x0000ff, 0x00ff00, this.buttonArray);

      this.add.existing(button);
      this.buttonArray.push(button);
    }
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#125555',
  width: 800,
  height: 600,
  scene: Demo
};

const game = new Phaser.Game(config);
