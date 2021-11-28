import { Module } from '../core/module';
import { random } from "../utils";

export class BackgroundModule extends Module {
  #colors;
  constructor(type) {
    super(type, 'text');

    this.#colors = ['red', 'green', 'blue', 'orange', 'pink'];
  }

  trigger() {

  }

  toHTML() {
    document.body.style.background = this.#colors[random(0, random.length - 1)];

    setTimeout(() => {
      document.body.style.background = '#fff';
    }, 3000)
  }
}
