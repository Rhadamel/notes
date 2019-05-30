import { LitElement, html, css } from 'lit-element';

export class FridgeFront extends LitElement {
  static get styles() {
    return css`
      :host {

        background-color: rgb(3, 184, 169); 
        display: flex;
        flex-direction: row;
        width: inherit;
        height: inherit;
        margin: auto;
        flex-wrap: wrap;
      }
    `;
  }
  render() {
    return html`<slot></slot>`;
  }
}
