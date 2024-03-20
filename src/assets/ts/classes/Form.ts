class Form {
  element: any;
  inputs: NodeListOf<Element> | undefined;
  defaultPatterns = new Map([
    ["tel", /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/],
    ["email", /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/],
  ]);

  mainPatterns = [];

  constructor(selector: string, mainPatterns = []) {
    this.element = document.querySelector(selector);
    this.mainPatterns = mainPatterns;
  }

  getInputs() {
    this.inputs = this.element?.querySelectorAll("input, textarea");
  }

  validate() {
    // проверка инпутов
  }

  reset() {
    this.element.reset();
  }
}
