import { Module } from '../core/module'
import { random } from '../utils'

export class SoundModule extends Module {

  #sound
  constructor(type) {
    super(type, 'text');
    this.#sound
  }

  trigger() {
    const sounds = ["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3"];

    const newRandom = random(0, sounds.length)
    this.#sound = new Audio(`https://kirill8313.ru/sounds/${sounds[newRandom]}`);
    this.#sound.play()
  }
}
