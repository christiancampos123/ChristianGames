class FAQList extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.faqs = [
            { question: '¿Cuál es el objetivo de este sitio?', answer: 'Lcctetur a co t amet, consectetur adipiscing elit.Lorem ipsuscin a co t amet, consectetur adipiscing elit.Lorem ipsuscin a co t amet, consectetur adipiscing elit.Lorem ipsuscin a co t amet, consectetur adipiscing elit.Lorem ipsuscin a co t amet, consectetur adipiscing elit.Lorem ipsuscing elit.' },
            { question: '¿Cómo puedo contactar con el soporte?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { question: '¿Cuál es el objetivo de este sitio?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { question: '¿Cómo puedo contactar con el soporte?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { question: '¿Cuáles son los métodos de pago aceptados?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            // Agrega más preguntas y respuestas según sea necesario
        ];

        this.render();
    }
    imprimirTamañosRespuestas() {
        const contents = this.shadow.querySelectorAll('.accordion-content');

        console.log('Tamaños de respuestas sin desplegar:');
        contents.forEach((content, index) => {
            const alturaSinMostrar = this.obtenerAlturaSinMostrar(content);
            console.log(`Respuesta ${index + 1}: ${alturaSinMostrar}px`);
        });
    }

    obtenerAlturaSinMostrar(contenido) {
        const clon = contenido.cloneNode(true);
        clon.style.position = 'absolute';
        clon.style.top = '-9999px';
        document.body.appendChild(clon);
        const altura = clon.offsetHeight;
        document.body.removeChild(clon);
        return altura;
    }

    imprimirTamañoMasGrande() {
        const contents = this.shadow.querySelectorAll('.accordion-content');
        
        let tamañoMasGrande = 0;

        contents.forEach((content, index) => {
            const alturaSinMostrar = this.obtenerAlturaSinMostrar(content);
            tamañoMasGrande = Math.max(tamañoMasGrande, alturaSinMostrar);
        });

        return tamañoMasGrande;
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <style>
@import url('https://fonts.googleapis.com/css?family=Hind:300,400&display=swap');

* {
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Hind', sans-serif;
  background: #fff;
  color: #4d5974;
  display: flex;
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  padding: 4rem;
  width: 80%;
}

.accordion .accordion-item {
  border-bottom: 1px solid #e5e5e5;
}

.accordion .accordion-item button[aria-expanded='true'] {
  border-bottom: 1px solid #03b5d2;
}

.accordion button {
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #7288a2;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
}

.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
  color: #03b5d2;
}

.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
  color: #03b5d2;
  border: 1px solid #03b5d2;
}

.accordion button .accordion-title {
  padding: 1em 1.5em 1em 0;
}

.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;
}

.accordion button .icon::before {
  display: block;
  position: absolute;
  content: '';
  top: 9px;
  left: 5px;
  width: 10px;
  height: 2px;
  background: currentColor;
}
.accordion button .icon::after {
  display: block;
  position: absolute;
  content: '';
  top: 5px;
  left: 9px;
  width: 2px;
  height: 10px;
  background: currentColor;
}

.accordion button[aria-expanded='true'] {
  color: #03b5d2;
}
.accordion button[aria-expanded='true'] .icon::after {
  width: 0;
}
.accordion button[aria-expanded='true'] + .accordion-content {
  height: auto;
  transition: all 200ms linear;
}
.accordion .accordion-content {
  height: 0;
  overflow: hidden;
  transition: height 200ms linear;
}
.accordion .accordion-content p {
  font-size: 1rem;
  font-weight: 300;
  margin: 2em 0;
}




            </style>

            <div class="container">
                <h2>Frequently Asked Questions</h2>
                <div class="accordion">
                    ${this.faqs.map((faq, index) => `
                        <div class="accordion-item">
                            <button id="accordion-button-${index + 1}" aria-expanded="false">
                                <span class="accordion-title">${faq.question}</span>
                                <span class="icon" aria-hidden="true"></span>
                            </button>
                            <div class="accordion-content">
                                <p>${faq.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        //this.imprimirTamañoMasGrande();
        window.addEventListener('resize', function() {


        });

        const items = this.shadow.querySelectorAll('.accordion button');

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');
            const content = this.nextElementSibling;

            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
                items[i].nextElementSibling.style.height = '0';
            }

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
                content.style.height = content.scrollHeight + 'px';
            } else {
                this.setAttribute('aria-expanded', 'false');
            }
        }

        items.forEach((item) => item.addEventListener('click', toggleAccordion));

        let contenedor = this.shadow.querySelector(".container");
        let alturaActual = contenedor.offsetHeight;
        let divMasGrande= this.imprimirTamañoMasGrande();

        // Sumar 300 píxeles a la altura actual
        let nuevaAltura = alturaActual + divMasGrande +50;

        // Asignar la nueva altura al contenedor
        contenedor.style.height = `${nuevaAltura}px`;
    }
}

customElements.define('faq-list-component', FAQList);