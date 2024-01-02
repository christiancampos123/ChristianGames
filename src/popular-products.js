class ProductSlider extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.games = [
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 2', image: './images/juego1.jpg', price: '$39.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 1', image: './images/juego1.jpg', price: '$29.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
            { title: 'Game 3', image: './images/juego2.jpg', price: '$39.99' },
        ];
        this.currentSlide = 0;
        this.slidesToShow = 5;
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .slider-container {
                    overflow: hidden;
                    position: relative;
                    width: 80%;
                    margin: 20px 0;
                }

                .slider-track {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }

                .game-card {
                    width: calc(100% / ${this.slidesToShow});
                    box-sizing: border-box;
                    margin-right: 10px;
                    position: relative;
                }

                .game-card:hover {
                    transform: scale(1.05);
                    transition: transform 0.3s ease-in-out;
                }

                .game-image {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }

                .game-info {
                    background-color: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 10px;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    box-sizing: border-box;
                }

                .slider-arrows {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }

                .slider-arrow {
                    font-size: 2rem;
                    cursor: pointer;
                    color: white;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 0.5rem;
                    border: none;
                    outline: none;
                    transition: background-color 0.3s ease;
                }

                .slider-arrow:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
            </style>
            <div class="slider-container">
                <div class="slider-track" style="transform: translateX(${-this.currentSlide * (100 / this.slidesToShow)}%)">
                    ${this.generateGameCards()}
                </div>
                <div class="slider-arrows">
                    <button class="slider-arrow prev" @click="${() => this.prevSlide()}">&#9664;</button>
                    <button class="slider-arrow next" @click="${() => this.nextSlide()}">&#9654;</button>
                </div>
            </div>
        `;
        this.addEventListeners();
    }

    generateGameCards() {
        const totalGames = this.games.length;
        const startIndex = this.currentSlide % totalGames;
        const endIndex = (startIndex + this.slidesToShow) % totalGames;
    
        let visibleGames;
    
        if (startIndex <= endIndex) {
            visibleGames = this.games.slice(startIndex, endIndex);
        } else {
            visibleGames = [...this.games.slice(startIndex), ...this.games.slice(0, endIndex)];
        }
    
        // If there are not enough games to fill the slider, duplicate games
        while (visibleGames.length < this.slidesToShow) {
            visibleGames = [...visibleGames, ...visibleGames.slice(0, this.slidesToShow - visibleGames.length)];
        }
    
        return visibleGames.map(game => /*html*/ `
            <div class="game-card">
                <img class="game-image" src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <div class="game-title">${game.title}</div>
                    <div class="game-price">${game.price}</div>
                </div>
            </div>
        `).join('');
    }
    

    addEventListeners() {
        const prevButton = this.shadow.querySelector('.prev');
        const nextButton = this.shadow.querySelector('.next');

        prevButton.addEventListener('click', () => this.prevSlide());
        nextButton.addEventListener('click', () => this.nextSlide());
    }

    nextSlide() {
        if (this.currentSlide < this.games.length - this.slidesToShow) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0;
        }
        this.updateTrackTransform();
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.games.length - this.slidesToShow;
        }
        this.updateTrackTransform();
    }

    updateTrackTransform() {
        const track = this.shadow.querySelector('.slider-track');
        track.style.transform = `translateX(${-this.currentSlide * (100 / this.slidesToShow)}%)`;
    }
}

customElements.define('product-slider-component', ProductSlider);