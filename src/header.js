class Header extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: block;
                }

                header {
                    background-color: #022544;
                    color: white;
                    padding: 10px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    max-height: 5rem;
                }

                .logo img {
                    max-width: 5rem; /* Ajusta el valor según tus necesidades */
                }

                .search-bar {
                    margin: 0 20px;
                    width: 40%; /* Ajusta el margen según tus necesidades */
                }

                .search-bar input {
                    width: 100%; /* El doble de ancho */
                    padding: 10px; /* Ajusta el padding según tus necesidades */
                }

                .user-area {
                    display: flex;
                    align-items: center;
                }

                .login, .register {
                    margin-right: 10px;
                    cursor: pointer;
                }

                .cart {
                    cursor: pointer;
                }

                .logo {
                    padding: 1rem;
                }
            </style>

            <header>
                <a href="./index.html">
                    <div class="logo">
                        <!-- Coloca tu logo aquí -->
                        <img src="./images/logo.png" alt="Logo">
                    </div>
                </a>
                <div class="search-bar">
                    <!-- Aquí puedes colocar tu barra de búsqueda -->
                    <input type="text" placeholder="Search...">
                </div>

                <div class="user-area">
                    <div class="login" onclick="handleLogin()">Login</div>
                    <div class="register" onclick="handleRegister()">Register</div>
                    <a href="./cart.html">
                        <div class="cart" onclick="handleCart()">🛒</div>
                    </a>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header-component', Header);
