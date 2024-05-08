export default class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.initTemplate();
  }

  initTemplate() {
    this.innerHTML = `
      <header class="bg-blue-500 text-white p-4">
        <h1 class="text-center">Web Components</h1>
      </header>
    `;
  }
}

customElements.define("custom-header", HeaderComponent);
