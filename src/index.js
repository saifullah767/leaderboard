import './style.css';
import addScore from './module/add.js';
import recentScore from './module/recent.js';

const container = document.createElement('div');
container.classList.add('container');
container.appendChild(recentScore());
container.appendChild(addScore());
document.body.appendChild(container);