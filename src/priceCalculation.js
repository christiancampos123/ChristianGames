class Summary extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.products = [
            { title: 'Juego 1', price: 29.99 },
            { title: 'Juego 2', price: 29.99 },
            { title: 'Juego 1', price: 29.99 },
            { title: 'Juego 2', price: 29.99 },
            { title: 'Juego 1', price: 29.99 },
            { title: 'Juego 2', price: 29.99 },
            // Agrega más productos según sea necesario
        ];

        this.render();
    }

    calculateTotal() {
        const subtotal = this.products.reduce((acc, product) => acc + product.price, 0);
        const taxRate = 0.10; // 10% de tasas
        const taxes = subtotal * taxRate;
        const total = subtotal + taxes;

        return {
            subtotal: subtotal.toFixed(2),
            taxes: taxes.toFixed(2),
            total: total.toFixed(2),
        };
    }

    render() {
        const { subtotal, taxes, total } = this.calculateTotal();
        const checkoutWord = this.getAttribute('data-checkout-word') || 'Checkout'; // Obtén el valor del atributo de datos


        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    width: 20%;
                    margin-left: 10px; /* Ajusta el margen según sea necesario */
                    position: sticky;
                    top: 0;
                }

                .summary-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }

                .total {
                    font-weight: bold;
                    margin-top:1rem;
                    border:solid 1px;
                }

                .checkout-button {
                    width: 100%;
                    padding: 10px;
                    background-color: orange; /* Cambia el color del fondo según tus preferencias */
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
            <div class="summary-item">
                <span>Productos Total:</span>
                <span>${subtotal}€</span>
            </div>
            <div class="summary-item">
                <span>Tasas:</span>
                <span>${taxes}€</span>
            </div>
            <div class="summary-item">
                <span>Impuestos:</span>
                <span>0.00€</span> <!-- Puedes agregar la lógica de impuestos si es necesario -->
            </div>
            <div class="summary-item total">
                <span>Total:</span>
                <span>${total}€</span>
            </div>
            <a href="./checkout.html">
                <button class="checkout-button">${checkoutWord}</button>
            </a>
            `;
    }
}

customElements.define('summary-component', Summary);
