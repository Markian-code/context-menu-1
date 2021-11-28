import { Module } from "../core/module";
import { random } from "./src/utils.js";

export class ShapeModule extends Module {
  #shape;

  constructor(type) {
    super(type, "text");
    this.#shape;
  }
  trigger() {
    const shapesArray = [
      "square",
      "circle",
      "rectangle",
      "trapezoid",
      "triangle",
    ];
    this.#shape = document.createElement("div");
        this.#shape.classList.add(shapesArray[random(1, shapesArray.length)]);
        this.#shape.classList.add('figure');
        
  }
  toHTML() {
        document.body.append(this.#shape);
        setTimeout(() => {
              const shape = document.querySelector('.figure')
              shape.remove()
        }, 3000)
  }
}
