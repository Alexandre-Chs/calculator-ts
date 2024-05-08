import ContentCalculator from "./components/calculator/ContentCalculator";
import WrapperCalculator from "./components/calculator/WrapperCalculator";
import "../src/components/header/Header";
import "./style.css";

customElements.define("wrapper-calculator", WrapperCalculator);
customElements.define("calculator-content", ContentCalculator);
