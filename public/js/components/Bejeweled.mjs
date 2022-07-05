import { randomGrid, GRID_SIZE, TOTAL_COLORS } from '../grid.mjs';

const COLOR_MAP = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'white',
];

const childElement = (color) => {
  const element = document.createElement('div');

  element.setAttribute('class', `cell ${color}`);

  return element;
};

class Bejeweled extends HTMLElement {
  grid;

  constructor() {
    super();

    this.grid = this.createShadowRoot();
  }

  createShadowRoot() {
    const shadow = this.attachShadow({ mode: 'closed' });
    const link = document.createElement('link');
    const grid = document.createElement('div');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'main.css');
    grid.setAttribute('class', 'grid');

    shadow.appendChild(link);
    shadow.appendChild(grid);

    return grid;
  }

  render() {
    const grid = randomGrid();
    const children = [];

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < TOTAL_COLORS; j++) {
        if (!grid[j][i]) {
          continue;
        }

        children.push(childElement(COLOR_MAP[j]));

        break;
      }
    }

    this.grid.replaceChildren(...children);
  }

  connectedCallback() {
    this.render();

    window.dispatchEvent(new CustomEvent('component-loaded'));
    window.addEventListener('grid-refresh', () => this.render());
  }
}

export { Bejeweled };
