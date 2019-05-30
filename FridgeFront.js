import { LitElement, html, css } from 'lit-element';

class FridgeFront extends LitElement {
  static get styles() {
    return css`
      :host {

        background-color: white;
        flex: 1;  
        display: block;
        width: 90%;
        height: 90%;
        margin: auto;
        box-shadow: 2rem;
      }
    `;
  }
  render() {
    return html`<slot></slot>`;
  }
}

window.customElements.define('fridge-front', FridgeFront);