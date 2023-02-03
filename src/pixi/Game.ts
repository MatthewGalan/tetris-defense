import { Application, Container, DisplayObject } from "pixi.js";
import { Tower } from "./Tower";

// initialize pixi
const app = new Application();

// inject pixi into the webpage
// @ts-ignore
document.body.appendChild(app.view);

const container = new Container();
app.stage.addChild(container);

export function stageEntity(entity: DisplayObject) {
  container.addChild(entity);
}

export function unstageEntity(entity: DisplayObject) {
  container.removeChild(entity);
}

const tower = new Tower();
