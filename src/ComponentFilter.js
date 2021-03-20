import { html, css, LitElement } from 'lit-element';

export class ComponentFilter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--component-filter-text-color, #000);
      }
      
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 0 ;
  }

  __increment() {
    this.counter += 2;
  }

  render() {
    return html`
      <h1>Jyoti Rospigliosi :P</h1>
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>incrementar en 2</button>
    `;
  }
}
