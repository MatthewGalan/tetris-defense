import { Texture, Sprite, Container, Point } from "pixi.js";
import { BLOCK_SIZE } from "./Constants";

export class Block {
  private readonly texture;

  constructor(towerContainer: Container, point: Point) {
    this.texture = new Sprite(
      Texture.from(
        "https://st3.depositphotos.com/1340907/14598/v/450/depositphotos_145989369-stock-illustration-pixel-brick-wall.jpg"
      )
    );
    this.texture.anchor.x = 0.5;
    this.texture.anchor.y = 0.5;
    this.texture.height = BLOCK_SIZE;
    this.texture.width = BLOCK_SIZE;
    this.texture.x = point.x * BLOCK_SIZE;
    this.texture.y = point.y * BLOCK_SIZE;
    towerContainer.addChild(this.texture);
  }
}
