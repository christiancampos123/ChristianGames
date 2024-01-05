class ProductList extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.products = [
            { title: 'Juego 1', price: 29.99, imageUrl: 'images/juego1.jpg' },
            { title: 'Juego 2', price: 29.99, imageUrl: 'images/juego2.jpg' },
            { title: 'Juego 1', price: 29.99, imageUrl: 'images/juego1.jpg' },
            { title: 'Juego 2', price: 29.99, imageUrl: 'images/juego2.jpg' },
            { title: 'Juego 1', price: 29.99, imageUrl: 'images/juego1.jpg' },
            { title: 'Juego 2', price: 29.99, imageUrl: 'images/juego2.jpg' },
            // Agrega más productos según sea necesario
        ];


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
                    width: 90%;
                    margin: 0 auto;
                }

                .product {
                    background-color: #7da7c3;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;
                    padding: 0.4rem;
                }

                .product img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    margin-right: 10px;
                }

                .product .title {
                    flex-grow: 1;
                }

                .product .price {
                    margin-right: 10px;
                }

                .product .delete-button {
                    cursor: pointer;
                    background-color: #ff5757;
                    color: #fff;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                }

                .delete-icon {
                    width: 24px;
                    height: 24px;
                    fill: #fff;
                }
            </style>

            ${this.products.map((product, index) => `
                <div class="product">
                    <img src="${product.imageUrl}" alt="${product.title}">
                    <div class="title">${product.title}</div>
                    <div class="price">${product.price.toFixed(2)}€</div>
                    <button class="delete-button" data-index="${index}">
                        <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>delete</title>
                            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                        </svg>
                    </button>
                </div>
            `).join('')}
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const deleteButtons = this.shadow.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
            button.addEventListener('click', event => this.handleDeleteClick(event));
        });
    }

    handleDeleteClick(event) {
        const indexToDelete = event.currentTarget.dataset.index;
        this.products.splice(indexToDelete, 1);
        this.render();
    }
}

customElements.define('product-list-component', ProductList);
