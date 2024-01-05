class RequirementsCard extends HTMLElement {
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

                .requirements {
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    margin: 20px;
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: #7da7c3;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .system-requirements {
                    padding: 20px;
                    display: flex;
                    gap:3rem;
                }

                h2 {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }

                p {
                    margin: 10px 0;
                }

                .requirement-label {
                    font-weight: bold;
                }

                .minimum-requirements,
                .recommended-requirements {
                    width: 80%;
                    margin-bottom: 20px;
                }
            </style>

            <div class="requirements">
                <div class="system-requirements">
                    
                    <div class="minimum-requirements">
                        <h3 class="requirement-label">Requisitos Mínimos</h3>
                        <p><span class="requirement-label">Sistema Operativo:</span> Windows 10</p>
                        <p><span class="requirement-label">Procesador:</span> Intel Core i5-2400 / AMD FX-6300</p>
                        <p><span class="requirement-label">Memoria:</span> 8 GB de RAM</p>
                        <p><span class="requirement-label">Tarjeta Gráfica:</span> NVIDIA GeForce GTX 760 / AMD Radeon R9 270X</p>
                        <p><span class="requirement-label">Almacenamiento:</span> 50 GB de espacio disponible</p>
                    </div>

                    <div class="recommended-requirements">
                        <h3 class="requirement-label">Requisitos Recomendados</h3>
                        <p><span class="requirement-label">Sistema Operativo:</span> Windows 10</p>
                        <p><span class="requirement-label">Procesador:</span> Intel Core i7-9700K / AMD Ryzen 7 3700X</p>
                        <p><span class="requirement-label">Memoria:</span> 16 GB de RAM</p>
                        <p><span class="requirement-label">Tarjeta Gráfica:</span> NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT</p>
                        <p><span class="requirement-label">Almacenamiento:</span> 50 GB de espacio disponible (SSD recomendado)</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('requirements-card-component', RequirementsCard);
