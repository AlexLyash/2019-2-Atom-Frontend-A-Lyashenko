/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>

        

        :host {
            flex: 1 0 300px;
            max-width: 40%;
            height: 90%;
            font-family: sans-serif;
            background-color: #CAA561 ;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            opacity: 0.8;
            border-radius: 30px;
            border: 1px solid #ebdfb9;
            overflow: hidden;
        }

        .header{
            color: #fff;
            width: 100%;
            height: 36px;
            display: flex;
            justify-content: center;
            background-color: #40341F;
            z-index: 1;
        }
        
        .chat {
            width: 100%;
            display: flex;
            flex: auto;
            flex-direction: column-reverse;
            align-content: flex-end;
            z-index: 0;
            overflow-y: auto;
        }

        .messagesList{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            flex-direction: column;

        }

        .message-item {
          display: flex;
          flex-flow: column nowrap;
          margin-right: 10px;
          float: right;
          padding: 10px;
          max-width: 80%;
          word-break: break-word;

          background-color: #40341F;
          border-radius: .4em;
          color: #fff;
        }
        .message-item .text{
          padding: 4px 8px;
          background-color: #29384B;
          border-radius: .4em;
          color: #fff;
        }
  
  
        .message-item .time{
            font-size: 10px;
            padding: 4px 8px;
            color: #999;
            align-self: flex-end;
        }
  
        .message-item .name{
            display: none;
        }        

        .inputFrom {
            width: 100%;
            background-color: #F7F8FA;
            
            z-index: 1;
        }

        ::-webkit-scrollbar{
            width: 0px;
        }

        

        input[type=submit] {
            visibility: visible;
        }
    </style>
    
    <div class='header'>
      lGram
    </div>
    <div class='chat'>
        <div class='messagesList'>
        </div>
    </div>
    <div class='inputForm'>
        <form>
            <form-input name="message-text" placeholder="Message..."></form-input>
        </form>
    </div>

`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');

    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messagesList = this._shadowRoot.querySelector('.messagesList');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    this.$dialogueID = 0;
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.length > 0) {
      const $message = this.generateMessage();
      this.$input.$input.value = '';
      // $message.innerText = this.$input.value;
      this.$messagesList.appendChild($message);
      const msgobj = $message.toObject();
      this.messages.push(msgobj);
      localStorage.setItem(`dialogue#${this.$dialogueID}`, JSON.stringify(this.messages));
    }

    
  }

  generateMessage(senderName = 'Alexey', text = this.$input.value, timestamp = null) {
    const message = document.createElement('div');
    message.className = "message-item";
    const time = new Date().toLocaleString('ru', {
      hour: 'numeric',
      minute: 'numeric',
    });

    message.innerHTML = senderName+'(' + time + ')' +': '+ text;

    return message;
  }

  connectedCallback() {
    if (`dialogue#${this.$dialogueID}` in localStorage) {
      this.messages = JSON.parse(localStorage.getItem(`dialogue#${this.$dialogueID}`));
    } else {
      this.messages = [];
    }
    this.messages.forEach((msg) => {
      const $message = this.generateMessage(msg.name, msg.text, msg.timestamp)
      this.$messagesList.appendChild($message);
    });
  }


  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
