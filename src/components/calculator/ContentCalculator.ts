export default class ContentCalculator extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <style>
        .btn-calculator {
            font-size: 1.5rem;
            padding: 1rem;
            background-color: #f3f4f6;
            border: 1px solid #e5e7eb;
            border-radius: 0.25rem;
            color: black;
            cursor: pointer;
        }

        .btn-calculator-operator {
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
        }
    </style>
        <div class='display mb-4 rounded-md' id='display'>0</div>
        <div class='grid grid-cols-4 gap-2'>
            <button class='btn-calculator'>7</button>
            <button class='btn-calculator'>8</button>
            <button class='btn-calculator'>9</button>
            <button class='btn-calculator-operator'>x</button>
            <button class='btn-calculator'>4</button>
            <button class='btn-calculator'>5</button>
            <button class='btn-calculator'>6</button>
            <button class='btn-calculator-operator'>-</button>
            <button class='btn-calculator'>1</button>
            <button class='btn-calculator'>2</button>
            <button class='btn-calculator'>3</button>
            <button class='btn-calculator-operator'>+</button>
            <button class='col-span-2 btn-calculator'>0</button>
            <button class="btn-calculator-operator">.</button>
            <button class="btn-calculator-operator">=</button>
        </div>
    `;

    const display = this.querySelector("#display");
    if (!display) return;

    const buttons = this.querySelectorAll(".btn-calculator");
    console.log(buttons);
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const value = target.textContent;
        if (display.textContent === "0") {
          display.textContent = value;
        } else if (display.textContent && display) {
          display.textContent += value;
        }
      });
    });
  }
}
