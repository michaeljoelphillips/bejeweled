import { Bejeweled } from './components/Bejeweled.mjs';

const handleRefreshButtonClick = () => {
  window.dispatchEvent(new CustomEvent('grid-refresh'));
};

const handleComponentLoaded = () => {
  document.getElementById('refresh').removeAttribute('hidden');
};

(() => {
  window.addEventListener('component-loaded', handleComponentLoaded);
  document.getElementById('refresh').addEventListener('click', handleRefreshButtonClick);

  customElements.define('bejeweled-grid', Bejeweled);
})();
