import { Texture, Sprite, Point } from "pixi.js";
import { BLOCK_SIZE } from "./Constants";
import { Tower } from "./Tower";

export class Block {
  private readonly texture;

  constructor(tower: Tower, point: Point) {
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
    this.texture.interactive = true;
    tower.addChild(this.texture);

    this.texture.on("pointerdown", (event) => {
      tower.handlePointerDown(event);
    });
    this.texture.on("pointermove", (event) => {
      tower.handlePointerMove();
    });
    this.texture.on("pointerup", (event) => {
      tower.handlePointerUp();
    });
  }
}
