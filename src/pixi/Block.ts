import { Container, Graphics } from "pixi.js";
import { BLOCK_SIZE } from "./Constants";

export class Block {
  private readonly graphics;

  constructor(towerContainer: Container) {
    this.graphics = new Graphics();
    this.graphics.beginFill(0xde3249);
    this.graphics.drawRect(BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    this.graphics.endFill();
    towerContainer.addChild(this.graphics);
  }
}
