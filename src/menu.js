import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.el.classList.add('open');
      console.log(event);
      const {clientX, clientY} = event;
      this.el.style.left = `${clientX + 5}px`;
      this.el.style.top = `${clientY}px`
    })
  }

  close() {
    this.el.classList.remove('open');
  }

  add(newElementName, dataValue) {
    this.el.insertAdjacentHTML('beforeend', `
    <li class="menu-item" data-value="${dataValue}">${newElementName}</li>
    `)
  }
}
