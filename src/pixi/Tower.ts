import { Container, Point } from "pixi.js";
import { Block } from "./Block";
import { stageEntity } from "./Game";
import { getRandomIntInclusive } from "./MathUtils";

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

  constructor() {
    this.state = TowerState.Placed;
    this.container = new Container();

    const blockCount = getRandomIntInclusive(3, 5);

    this.blocks = new Map();
    this.blocks.set(new Point(0, 0), new Block(this.container));

    stageEntity(this.container);
  }
}
