export default class WrapperCalculator extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>
        #wrapper-content {
          color: white;
          font-size: 2rem;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
        }
      </style>
      <div id='wrapper-content'>
        <slot name="content" id='content'></slot>
      </div>
    `;
  }
}
