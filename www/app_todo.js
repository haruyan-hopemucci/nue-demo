import createApp from './nue.js'
import { lib } from './lib/TodoComponents.js'

// Mount <nue-island/> nodes as a Web Component
class NueIsland extends HTMLElement {
  connectedCallback() {
    const App = lib.find(el => el.name == this.getAttribute('island'))
    if (App) createApp(App, {}, lib).mount(this)
  }
}

customElements.define('nue-island', NueIsland)
