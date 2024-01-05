class PaymentForm extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-top: 10px;
                    margin-left: 10px;
                }

                label {
                    margin-bottom: 5px;
                }

                input {
                    padding: 5px;
                    margin-bottom: 10px;
                }

                button {
                    background-color: #4caf50;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>

            <label for="firstName">Nombre:</label>
            <input type="text" id="firstName" name="firstName" required>

            <label for="lastName">Apellidos:</label>
            <input type="text" id="lastName" name="lastName" required>

            <label for="address">Dirección:</label>
            <input type="text" id="address" name="address" required>

            <label for="country">País:</label>
            <input type="text" id="country" name="country" required>

            <label for="cardNumber">Número de tarjeta:</label>
            <input type="text" id="cardNumber" name="cardNumber" required>

            <label for="expirationDate">Fecha de expiración:</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" required>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required>

            <button>Registrar</button>
        `;
    }
}

customElements.define('payment-form-component', PaymentForm);
