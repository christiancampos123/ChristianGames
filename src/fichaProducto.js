class ProductCard extends HTMLElement {
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
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .product {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    margin: 1px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    margin-top: 2rem;
                    background-color: #7da7c3;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .product-image {
                    flex: 1;
                    overflow: hidden;
                    position: relative;
                    height: 600px; /* Establece la altura deseada */
                }

                .product-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .product-details {
                    flex: 2;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }

                p {
                    margin: 10px 0;
                }

                .info-label {
                    font-weight: bold;
                }

                .description {
                    border-radius: 10px;
                    padding-top: 2rem;
                    padding-right: 2%;
                    padding-left: 2%;
                    background-color: #7da7c3;
                    width: 76%;
                    margin-bottom: 20px;
                }

                .action-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: auto;
                    
                }

                .buy-button {
                    background-color: YellowGreen; /* Verde */
                    color: #000;
                    padding: 10px;
                    width: 20%;
                    cursor: pointer;
                    text-align: center;
                    border-radius:10px;
                    font-weight:bold;
                }

                .cart-button {
                    background-color: Orange;
                    color: #000;
                    text-align: center;
                    width: 20%;
                    padding: 10px;
                    cursor: pointer;
                    border-radius:10px;
                    font-weight:bold;
                }

                .video-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2rem;
                }
            </style>

            <div class="product">
                <div class="product-image">
                    <!-- Imagen del producto -->
                    <img src="./images/juego1.jpg" alt="Game Cover">
                </div>

                <div class="product-details">
                    <!-- Detalles del producto -->
                    <h2>Nombre del Juego</h2>
                    <p class="info-label">Desarrollador: <span>Nombre del Desarrollador</span></p>
                    <p class="info-label">Empresa: <span>Nombre de la Empresa</span></p>
                    <p class="info-label">Géneros: <span>Aventura, Acción</span></p>
                    <p class="info-label">Nota: <span>4.5/5</span></p>
                    <p class="info-label">PEGI: <span>18+</span></p>

                    <div class="video-container">
                        <iframe
                            width="533"
                            height="300"
                            src="https://www.youtube.com/embed/rXMX4YJ7Lks"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <!-- Otros detalles adicionales que desees agregar -->
                    <div class="action-buttons">
                        <div class="buy-button" onclick="handleBuy()">Comprar</div>
                        <div class="cart-button" onclick="handleAddToCart()">Add to Cart</div>
                    </div>
                </div>
            </div>

            <div class="description">
                <!-- Descripción del producto -->
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </div>
        `;
    }
}

customElements.define('product-card-component', ProductCard);
