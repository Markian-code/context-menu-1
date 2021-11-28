import { Module } from '../core/module'

export class TimerModule extends Module {
  #timerCount;
  constructor(type) {
    super(type, 'text');

    this.#timerCount;
  }

  trigger() {
    this.#timerCount = prompt('введите число');
  }

  toHTML() {
    document.body.insertAdjacentHTML('beforeend', `<div id="timer-count">${this.#timerCount}</div>`)

    const timer = document.querySelector('#timer-count')

    const intervalOne = setInterval(() => {
      this.#timerCount--;
      if (this.#timerCount < '0') {
        clearInterval(intervalOne);
        return timer.remove();
      }

      timer.textContent = this.#timerCount;
    }, 1000)
  }
}
