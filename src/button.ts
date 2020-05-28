export default class Button extends Phaser.GameObjects.Container {

  public selected:boolean = false;

  private graphics:Phaser.GameObjects.Graphics;
  private text:Phaser.GameObjects.Text;

  constructor(scene:Phaser.Scene, caption:string, private xPos:number, private yPos:number, private widthVal:number, private heightVal:number, private offColor:number, private onColor:number, private selectedColor:number, public buttonArray:Button[]) {
    super(scene);

    this.graphics = new Phaser.GameObjects.Graphics(scene);

    this.drawBackground(offColor);

    let textConfig = { fontFamily: 'Arial', fontSize: '20px', fontStyle: 'bold', color: '#ffffff' };

    this.text = new Phaser.GameObjects.Text(scene, this.graphics.x, this.graphics.y, caption, textConfig);
    this.text.x = this.widthVal/2 - this.text.width/2;
    this.text.y = this.heightVal/2 - this.text.height/2;

    let array:Phaser.GameObjects.GameObject[] = [ this.graphics, this.text ];

    this.add(array);

    this.setPosition(this.xPos - this.widthVal/2, this.yPos - this.heightVal/2);

    let interactiveArea:Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(0, 0, this.widthVal, this.heightVal);

    this.setInteractive(interactiveArea, Phaser.Geom.Rectangle.Contains)
      .on('pointerdown', this.onMouseOn)
      .on('pointerup', this.onMouseSelected)
      .on('pointerout', this.onMouseOff);
  }

  public resetSelf = () => {
    this.drawBackground(this.offColor);
    this.selected = false;
  }

  private onMouseOn = () => {
    this.drawBackground(this.onColor);
  }

  private onMouseOff = () => {
    if (this.selected) {
      this.drawBackground(this.selectedColor);
    }
    else {
      this.drawBackground(this.offColor);
    }
  }

  private onMouseSelected = () => {
    for (let i = 0; i < this.buttonArray.length; i++) {
      this.buttonArray[i].resetSelf();
    }

    this.drawBackground(this.selectedColor);
    this.selected = true;
  }

  private drawBackground = (color:number) => {
    this.graphics.clear();
    this.graphics.fillStyle(color);
    this.graphics.fillRect(0, 0, this.widthVal, this.heightVal);
  }
}