import { LitElement, html, css } from 'lit-element';

export class PostIt extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: lightgoldenrodyellow;
        display: block;
        padding: 1rem;
        width: 300rem;
        height: 300rem;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }
  
  render() {
    return html`
      ${this.text}
    `;
  }
}
