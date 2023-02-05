import {
  Container,
  DisplayObject,
  FederatedPointerEvent,
  Point,
} from "pixi.js";
import { Block } from "./Block";
import { stageEntity } from "./Game";
import { getRandomIntInclusive, roundToNearestX } from "./MathUtils";
import { BLOCK_SIZE, SHAPES } from "./Constants";
export enum TowerState {
  Store,
  Placing,
  Placed,
}

export class Tower {
  private gridPos: Point;
  private readonly container: Container;
  private blocks: Map<Point, Block>;
  private state: TowerState;
  private moveData?: FederatedPointerEvent;

  constructor() {
    this.state = TowerState.Placed;
    this.container = new Container();
    this.container.x = 400 - (BLOCK_SIZE * 3) / 2;
    this.container.y = 300 - (BLOCK_SIZE * 3) / 2;
    const blockCount = getRandomIntInclusive(3, 5);

    this.blocks = new Map();
    const shapeToRender = getRandomIntInclusive(0, SHAPES.length - 1);
    for (let i = 0; i < SHAPES[shapeToRender].length; i++) {
      const point = new Point(
        SHAPES[shapeToRender][i].x,
        SHAPES[shapeToRender][i].y
      );
      this.blocks.set(point, new Block(this, point));
    }

    stageEntity(this.container);
  }

  public handlePointerDown(event: FederatedPointerEvent): void {
    console.log("POINTER DOWN", event);
    this.state = TowerState.Placing;
    this.moveData = event;
  }

  public handlePointerMove(): void {
    console.log("MOVING");
    if (this.state === TowerState.Placing && this.moveData) {
      this.container.x = this.moveData.screenX;
      this.container.y = this.moveData.screenY;
    }
  }

  public handlePointerUp(): void {
    console.log("POINTER UP");
    this.state == TowerState.Placed;
    this.moveData = undefined;
    this.container.x = roundToNearestX(this.container.x, BLOCK_SIZE);
    this.container.y = roundToNearestX(this.container.y, BLOCK_SIZE);
  }

  public addChild(child: DisplayObject): DisplayObject {
    return this.container.addChild(child);
  }
}
