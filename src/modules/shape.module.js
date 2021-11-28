import {Module} from '../core/module'

export class ShapeModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('ShapeModule');
  }
}
