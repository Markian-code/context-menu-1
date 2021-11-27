import {Module} from '../core/module'

export class ShapeModule extends Module {
      // const divShape = document.createElement('div')
      // divShape.className = 'shape'
      // document.body.append(divShape)
      // const shape = document.querySelector('.shape')

      getRandomShape() {
            if (Math.random() <= 0.2){
            divShape.className = "square";
            }
            else if (Math.random() <= 0.4){
            divShape.className = "circle";
            }
            else if (Math.random() <= 0.6){
            divShape.className = "rectangle";
            }
            else if (Math.random() <= 0.8){
            divShape.className = "trapezoid";
            }
            else {
            divShape.className = "triangle";
            }
      }
}