const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: row;
            height: 50px;
            box-sizing: border-box;
            background-color: #F7F8FA;
        }

        input {
            border: 100 px;
            outline: 10px;
            padding: 5px 16px;
            width: 100%;
            height: 100%;
            background-color: transparent;
        }

    </style>

    <input type="text">
    
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }
}

window.customElements.define('form-input', FormInput);
