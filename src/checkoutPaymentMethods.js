class PaymentMethods extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.paymentMethods = [
            { name: 'PayPal' },
            { name: 'Tarjeta de crédito' },
            { name: 'Google Pay' },
            { name: 'Paysafecard' },
            { name: 'PayPal' },
            { name: 'Tarjeta de crédito' },
            { name: 'Google Pay' },
            { name: 'Paysafecard' },
            // Puedes agregar más métodos de pago según sea necesario
        ];

        // Bind para asegurar que 'this' sea correcto dentro del método
        this.handleContainerClick = this.handleContainerClick.bind(this);

        this.render();
    }

    handleContainerClick(index) {
        const radio = this.shadow.querySelector(`#method${index}`);
        radio.checked = true;
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    gap: 0.2rem;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-left: 10px;
                }

                .payment-method {
                    background-color: white;
                    padding: 0.5rem;
                    border: solid 1px grey;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    cursor: pointer;
                    user-select: none; /* Evita que el texto sea seleccionable al hacer clic */
                }

                .payment-method:hover {
                    background-color: #e0e0e0;
                }

                .payment-method svg {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    fill: #000;
                }

                .payment-method span {
                    font-size: 1rem;
                    text-align: left;
                    flex-grow: 1;
                }

                .radio-buttons {
                    display: flex;
                    align-items: center;
                }

                .radio-buttons input {
                    cursor: pointer;
                    margin-right: 5px;
                }
            </style>

            ${this.paymentMethods.map((method, index) => `
                <div class="payment-method">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>${method.name}</title>
                        <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,15A3,3 0 0,1 11,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 7,10V14A2,2 0 0,1 9,16H19A2,2 0 0,1 21,14V10A2,2 0 0,1 19,8H9"/>
                    </svg>
                    <span>${method.name}</span>
                    <div class="radio-buttons">
                        <input type="radio" name="paymentMethod" value="${index}" id="method${index}">
                        <label for="method${index}"></label>
                    </div>
                </div>
            `).join('')}
        `;

        // Agregamos los manejadores de clic después de renderizar el HTML
        this.addEventListeners();
    }

    addEventListeners() {
        const containers = this.shadow.querySelectorAll('.payment-method');
        containers.forEach((container, index) => {
            container.addEventListener('click', () => this.handleContainerClick(index));
        });
    }
}

customElements.define('payment-methods-component', PaymentMethods);
