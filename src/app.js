import './styles.css'
import {ContextMenu} from './menu';

const contextMenu = new ContextMenu('#menu');

contextMenu.add('Аналитика кликов', 'click');
contextMenu.add('Случайная фигура', 'shape');
contextMenu.add('Таймер отсчета', 'timer');
contextMenu.add('Случайный звук', 'sound');
contextMenu.add('Случайный фон', 'background');
contextMenu.add('Кастомное сообщение', 'message');

contextMenu.open()
