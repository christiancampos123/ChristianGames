class GameGrid extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: flex;
                    justify-content:center;
                }

                .products{
                    display:flex;
                    flex-direction:column;
                    padding: 2rem;
                    width:80%;
                }
                .game-grid-popular {
                    display: flex;
                    overflow-x:auto;
                    width:100%;
                    gap: 20px;
                }

                .game-grid {
                    display: grid;
                    width:100%;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 20px;
                }

                .game-card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color:#7da7c3;
                }

                .game-image {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }

                .game-info {
                    padding: 10px;
                }

                .game-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                .game-price {
                    color: black;
                    font-size: 1.1rem;
                    font-weight: bold;
                }

                .title{
                    font-size:2.5rem;
                    margin-top:4rem;
                    margin-bottom:2rem;
                }

            </style>
            <div class = "products">
                <div class = "title">Videojuegos</div>
                <div class="game-grid">
                    ${this.generateGameCards()}
                </div>
            </div>
        `;
    }


    generateGameCards() {
        const games = [
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego2.jpg', price: '$29.99' },
        ];

        return games.map(game => /*html*/ `
            <div class="game-card">
                <img class="game-image" src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-price">${game.price}</div>
                </div>
            </div>
        `).join('');
    }
}

customElements.define('game-grid-component', GameGrid);
