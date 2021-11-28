import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('ClicksModule');
  }
}
