export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    if (document.createElement(element).toString() === "[object HTMLUnknownElement]")
      throw new Stepan.StepanError("Non-existent element");

    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      if (parent === null || typeof parent === 'undefined' || !(parent instanceof Element))
        throw new Stepan.StepanError("Invalid parent object");
      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }

  static StepanError = class extends Error {
    constructor(message) {
      super(message);
    }

}

}
