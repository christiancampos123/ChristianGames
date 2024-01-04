class ScrollToTopButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.render();
    }

    connectedCallback() {
        // Agregar listener para el evento de desplazamiento
        window.addEventListener('scroll', () => this.toggleVisibility());
    }

    disconnectedCallback() {
        // Eliminar el listener cuando el componente se desconecta
        window.removeEventListener('scroll', () => this.toggleVisibility());
    }

    toggleVisibility() {
        const button = this.shadow.getElementById('scrollToTopButton');
        // Mostrar el botón solo cuando la página está desplazada más allá de cierta posición
        button.style.display = window.scrollY > 200 ? 'block' : 'none';
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                }

                button {
                    cursor: pointer;
                    background-color: white;
                    color: #fff;
                    border: solid 0.5rem white;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    background-image: url('data:image/svg+xml;charset=utf-8,<svg fill="%23000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 29.77 29.77" xml:space="preserve"><g><path d="M26.633,15.988c-1.171,1.172-3.071,1.172-4.243,0l-4.505-4.505V26.77c0,1.658-1.343,3-3,3s-3-1.342-3-3V11.487l-4.506,4.505c-0.585,0.586-1.354,0.879-2.121,0.879s-1.536-0.293-2.121-0.879c-1.172-1.172-1.172-3.07,0-4.242L14.887,0l11.747,11.747C27.805,12.917,27.805,14.816,26.633,15.988z"/></g></svg>');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 50px;
                    height: 50px;
                    display: none; /* Inicialmente oculto */
                    position: relative;
                    transition: all 0.3s ease; /* Transición para suavizar la aparición y desaparición */
                }

                button:hover::before {
                    content: "Subir";
                    position: absolute;
                    background-color: #333;
                    color: #fff;
                    padding: 5px;
                    border-radius: 5px;
                    bottom: calc(100% + 10px); /* Distancia ajustada */
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                    opacity: 1;
                    transition: opacity 0.3s ease; /* Transición para suavizar la aparición */
                }

                button::before {
                    content: "Subir";
                    position: absolute;
                    background-color: #333;
                    color: #fff;
                    padding: 5px;
                    border-radius: 5px;
                    bottom: calc(100% + 10px); /* Distancia ajustada */
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.3s ease; /* Transición para suavizar la desaparición */
                }
            </style>

            <button id="scrollToTopButton"></button>
        `;

        this.addEventListeners();
        this.toggleVisibility(); // Asegurarse de que el botón esté visible/invisible inicialmente
    }

    addEventListeners() {
        const button = this.shadow.getElementById('scrollToTopButton');
        button.addEventListener('click', () => this.scrollToTop());
    }

    scrollToTop() {
        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

customElements.define('scroll-to-top-button-component', ScrollToTopButton);
