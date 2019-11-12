const template = document.createElement('template');
template.innerHTML = `
    <style>

        .header{
            color: #fff;
            width: 100%;
            height: 36px;
            display: flex;
            justify-content: center;
            background-color: #40341F;
            z-index: 1;
        }

    </style>
    <div class='header'>
    lGram
    </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('header-custom', Header);
