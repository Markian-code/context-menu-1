import {Module} from '../core/module'

export class SoundModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('SoundModule');
  }
}
