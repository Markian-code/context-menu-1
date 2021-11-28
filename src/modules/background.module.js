import {Module} from '../core/module'

export class BackgroundModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('BackgroundModule');
  }
}
