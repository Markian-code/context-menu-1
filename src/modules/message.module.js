import {Module} from '../core/module'

export class MessageModule extends Module {
  constructor(type) {
    super(type, 'text');
  }

  trigger() {
    console.log('MessageModule');
  }
}
