import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type) {
    super(type, 'text');

    this.oneClickNum = 0
    this.twoClickNum = 0
  }

  trigger() {
    let oneClick = (event) => {
      this.oneClickNum++
    }
    document.addEventListener('click', oneClick)
    let dbClick = (event) => {
      this.twoClickNum++
    }
    document.addEventListener('dblclick', dbClick)


    setTimeout(() => {
      let reult = alert(`Кол-во нажатий левой кнопкой мыши: ${this.oneClickNum} , Кол-во нажатий правой кнопкой мыши: ${this.twoClickNum}`)
      document.removeEventListener('click', oneClick)
      document.removeEventListener('dbclick', dbClick)
      this.oneClickNum = 0
      this.twoClickNum = 0
    }, 3000);
  }
}

