import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(type) {
    super(type, 'text');

    this.oneClick = -1
    this.twoClick = 0
  }

  trigger() {
    let countClick = ()=>{
      document.addEventListener('click',(event)=>{
          event.preventDefault()
          this.oneClick++
          })
  
         document.addEventListener('contextmenu',(event)=>{
         event.preventDefault()
            this.twoClick++
          })
        setTimeout(() => { 
          alert(`Кол-во нажатий левой кнопкой мыши: ${this.oneClick} , Кол-во нажатий правой кнопкой мыши: ${this.twoClick}`)
       }, 3000); 
  }
  countClick()
    console.log('ClicksModule');
  }
}
