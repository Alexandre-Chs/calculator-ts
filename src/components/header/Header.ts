export default class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1 class="text-4xl font-bold underline">Header</h1>`;
  }
}
