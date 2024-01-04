class GenreCarousel extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.genres = ['Inicio', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports',
            'Horror', 'Indie', 'Fighting', 'Puzzle', 'Racing', 'MMORPG', 'Shooter', 'Survival',
            'Open World', 'Stealth', 'Battle Royale', 'Fantasy', 'Sci-Fi', 'Historical',
            'Open World', 'Stealth', 'Battle Royale', 'Fantasy', 'Sci-Fi', 'Historical',
            'Open World', 'Stealth', 'Battle Royale', 'Fantasy', 'Sci-Fi', 'Historical',
            'Open World', 'Stealth', 'Battle Royale', 'Fantasy', 'Sci-Fi', 'final'];

        this.currentIndex = 0; // Iniciando desde la primera página
        this.valueToMove = 0.35;

        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    display: flex;
                    overflow-x: hidden;
                    align-items:center;
                }

                .carousel-container {
                    display: flex;
                    transition: transform 0.3s ease-in-out;
                }

                .genre-button {
                    flex: 0 0 auto;
                    margin-right: 10px;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    background:#7da7c3; /* Borde */
                    border-radius: 8px; /* Bordes redondeados */
                    padding: 5px 10px; /* Espaciado interno */
                    font-weight: bold;
                }

                .arrow {
                    position: absolute;
                    color:white;
                    cursor: pointer;
                    margin: 0 60px; /* Ajusta el margen según tus necesidades */
                }

                .arrow-left {
                    left: 0;
                }

                .arrow-right {
                    right: 0;
                }

                .carousel {
                    position: relative;
                    overflow: hidden;
                    margin-left: 10%;
                    margin-right: 10%;
                }
            </style>
            <div class="arrow arrow-left">◄</div>
            <div class="carousel">
                <div class="carousel-container">
                    ${this.genres.map(genre => `<div class="genre-button">${genre}</div>`).join('')}
                </div>
            </div>
            <div class="arrow arrow-right">►</div>
        `;
        this.updateCarousel();
    }
    

    addEventListeners() {
        this.shadow.querySelector('.arrow-left').addEventListener('click', () => this.handlePrevClick());
        this.shadow.querySelector('.arrow-right').addEventListener('click', () => this.handleNextClick());
    }

    updateCarousel() {
        const container = this.shadow.querySelector('.carousel-container');
        const containerWidth = container.offsetWidth;

        // Ajusta el índice máximo de la última página
        const maxIndex = Math.max(0, Math.ceil((container.scrollWidth - containerWidth) / containerWidth));

        // Ajusta el índice actual si es mayor que el índice máximo
        if (this.currentIndex > maxIndex) {
            this.currentIndex = maxIndex;
        }

        const translationValue = -this.currentIndex * containerWidth;
        console.log(this.currentIndex);
        container.style.transition = 'transform 0.3s ease-in-out';
        container.style.transform = `translateX(${translationValue}px)`;

        // Elimina la transición después de un breve tiempo para permitir el desplazamiento suave
        setTimeout(() => {
            container.style.transition = '';
        }, 300);
    }

    handlePrevClick() {
        if (this.currentIndex > 0) {
            this.currentIndex=this.currentIndex-this.valueToMove;
            this.updateCarousel();
        }
    }

    handleNextClick() {
        const container = this.shadow.querySelector('.carousel-container');
        const containerWidth = container.offsetWidth;
        const maxIndex = Math.max(0, Math.ceil((container.scrollWidth - containerWidth) / containerWidth));
        if (this.currentIndex < maxIndex) {
            this.currentIndex=this.currentIndex+this.valueToMove;
            this.updateCarousel();
        }
    }
}

customElements.define('genre-carousel-component', GenreCarousel);
