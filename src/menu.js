import { Menu } from './core/menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import { MessageModule } from './modules/message.module';
import { SoundModule } from './modules/sound.module';
import { TimerModule } from './modules/timer.module';


export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      const {clientX, clientY} = event;
      const {innerWidth, innerHeight} = window;
      const {width, height} = this.el.getBoundingClientRect();

      this.el.classList.add('open');
      this.el.style.left = `${clientX + 5}px`;
      this.el.style.top = `${clientY}px`;

      if(clientX + width >= innerWidth) {
      this.el.style.left = `${clientX - width}px`;
      }

      if(clientY + height >= innerHeight) {
        this.el.style.top = `${clientY - height}px`;
      }

      this.#clickItemMenu();
    })
  }

  close() {
    this.el.classList.remove('open');
  }

  add(newElementName, dataValue) {
    this.el.insertAdjacentHTML('beforeend', `
    <li class="menu-item" data-value="${dataValue}">${newElementName}</li>
    `);
  }

  #clickItemMenu() {
    this.el.addEventListener('click', (event) => {
      const {target} = event;

      checkItemValue('click', ClicksModule);
      checkItemValue('background', BackgroundModule);
      checkItemValue('shape', ShapeModule);
      checkItemValue('message', MessageModule);
      checkItemValue('sound', SoundModule);
      checkItemValue('sound', TimerModule);

      this.close();

      function checkItemValue(itemEvent, obj) {
        const itemDataValue = target.closest('.menu-item').getAttribute('data-value')
        if(itemDataValue === itemEvent) {
          const newObj = new obj(itemEvent);
          newObj.trigger();
          newObj.toHTML();
        }
      }

    })
  }
}
