export default class ContentCalculator extends HTMLElement {
  private display!: HTMLDivElement;
  private currentInput: string;
  private operations: string[];

  constructor() {
    super();
    this.currentInput = "0";
    this.operations = [];
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {
    this.initializeButtons(); // Liaison des événements
  }

  private render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        .calculator {
          font-size: 1.5rem;
          padding: 1rem;
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 0.25rem;
          color: black;
          cursor: pointer;
        }
        .operator {
          background-color: #f59e0b;
          color: white;
          border-radius: 0.25rem;
        }
        .display {
          font-size: 2rem;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          background-color: white;
          color: black;
          text-align: right;
          margin-bottom: 1rem;
        }
        .button-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
      </style>

      <div class="display" id="display">0</div>
      <div class="button-grid">
        ${this.getButtonsMarkup()}
      </div>
    `;

    this.display = this.shadowRoot.querySelector("#display") as HTMLDivElement;
  }

  private getButtonsMarkup(): string {
    const buttons = [
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
      "/",
    ];

    return buttons
      .map((btn) => {
        const className = ["+", "-", "x", "/", "="].includes(btn)
          ? "calculator operator"
          : "calculator";
        return `<button class="${className}">${btn}</button>`;
      })
      .join("");
  }

  private initializeButtons() {
    if (!this.shadowRoot) return;

    const buttons = this.shadowRoot.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const target = e.target as HTMLButtonElement;
        this.handleButtonClick(target.textContent || "");
      });
    });
  }

  private handleButtonClick(value: string) {
    if (value === "=") {
      this.operations.push(this.currentInput);
      const result = this.calculateResult();
      this.display.textContent = String(result);
      this.operations = [];
      this.currentInput = "0";
    } else if (["+", "-", "x", "/"].includes(value)) {
      this.operations.push(this.currentInput);
      this.operations.push(this.convertOperator(value));
      this.currentInput = "0";
    } else {
      this.currentInput =
        this.currentInput === "0" ? value : this.currentInput + value;
      this.display.textContent = this.currentInput;
    }
  }

  private convertOperator(value: string): string {
    return value === "x" ? "*" : value;
  }

  private calculateResult(): number {
    const expression = this.operations.join("");
    console.log(expression);
    try {
      const result = Function(`"use strict"; return (${expression});`)();
      return result;
    } catch (error) {
      console.error("Erreur lors du calcul:", error);
      return 0;
    }
  }
}
