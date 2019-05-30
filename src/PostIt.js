import { LitElement, html, css } from 'lit-element';

export class PostIt extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: lightgoldenrodyellow;
        margin: 10px;
        width: 200px;
        height: 200px;
        font-size: 20rem;
        box-shadow: 10px; 
        border: 2px;
        border-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px 2px 15px 15px;

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
