import {Module} from '../core/module'

export class TimerModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('TimerModule');
  }
}
