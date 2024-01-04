class Carrousel extends HTMLElement {
  constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.slideIndex = 1;
      this.prevButtonImage = "./images/arrow.jpg";
      this.nextButtonImage = "./images/arrow.jpg";
      this.render();
  }

  pauseAutoSlider() {
      clearInterval(this.autoSliderInterval);
  }

  resumeAutoSlider() {
      this.autoSliderInterval = setInterval(() => {
          this.nextSlide();
      }, 5000);
  }

  connectedCallback() {
      this.startAutoSlider();
  }

  startAutoSlider() {
      this.autoSliderInterval = setInterval(() => {
          this.nextSlide();
      }, 6000);
  }

  nextSlide() {
      this.pauseAutoSlider(); // Detener el intervalo
      const newIndex = (this.slideIndex !== this.images.length) ? (this.slideIndex + 1) : 1;
      this.slideIndex = newIndex;
      this.updateImageAndDot();
      this.resumeAutoSlider(); // Reiniciar el intervalo
  }

  prevSlide() {
      this.pauseAutoSlider(); // Detener el intervalo
      const newIndex = (this.slideIndex !== 1) ? (this.slideIndex - 1) : this.images.length;
      this.slideIndex = newIndex;
      this.updateImageAndDot();
      this.resumeAutoSlider(); // Reiniciar el intervalo
  }

  moveDot(index) {
    if (index !== this.slideIndex) {
      this.pauseAutoSlider(); // Detener el intervalo
      this.slideIndex = index;
      this.updateImageAndDot();
      this.resumeAutoSlider(); // Reiniciar el intervalo
    }
  }

  updateImageAndDot() {
      const slides = this.shadow.querySelector(".slides");
      const containerDots = this.shadow.querySelector(".container-dots");

      const activeSlide = slides.querySelector("[data-active]");
      slides.children[this.slideIndex - 1].dataset.active = true;
      activeSlide && delete activeSlide.dataset.active;

      const activeDot = containerDots.querySelector("[data-active]");
      containerDots.children[this.slideIndex - 1].dataset.active = true;
      activeDot && delete activeDot.dataset.active;
  }

  render() {
      this.images = [
          { src: "./images/juego1.jpg" },
          { src: "./images/juego2.jpg" },
          { src: "./images/user-avatar.png" },
          { src: "./images/chatgpt-icon.webp" },
          { src: "./images/arrow.jpg" },
          { src: "./images/logo.png" },
      ];

      this.shadow.innerHTML = /*html*/ `
          <style>
              /* Estilos del carrousel */

              /* Main Wrapper Container */
              :host {
                  display: flex;
                  justify-content: center;
              }

              .container-slider {
                  position: relative;
                  max-width: 1000px;
                  width: 100%;
                  height: 600px;
                  border-radius: 20px;
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                  overflow: hidden;
              }

              /* Slider Container which contains images */
              .slides {
                  position: relative;
                  width: 100%;
                  height: 100%;
              }

              /* Default Image Properties */
              .slides img {
                  position: absolute;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                  object-position: center;
                  opacity: 0;
                  transform: scale(0);
              }

              .slides > img[data-active] {
                  opacity: 1;
                  transform: scale(1);
                  width: 100%;
                  height: 100%;
                  z-index: 10;
              }

              /* Image Slider Next And Previous Buttons */
              .btn-slide {
                  position: absolute;
                  background: #f1f1f1;
                  width: 40px;
                  height: 40px;
                  padding: 10px;
                  border-radius: 50%;
                  opacity: 0;
                  border: 1px solid rgba(34, 34, 34, 0.287);
                  transition: opacity 300ms ease-in-out;
                  cursor: pointer;
                  overflow: hidden;
                  z-index: 10;
              }

              .btn-slide > img {
                  width: 100%;
              }

              /* Show Buttons when user hover on the slider Container */
              .container-slider:hover > .btn-slide {
                  opacity: 1;
              }

              /* Previous and Next Button Position Absolute */
              .prev,
              .next {
                  top: 50%;
                  transform: translateY(-60%);
              }

              .prev {
                  left: 20px;
              }

              .next {
                  right: 20px;
              }

              /* Bottom Dots Container  */
              .container-dots {
                  position: absolute;
                  bottom: 20px;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  z-index: 10;
              }

              /* Single Dot style */
              .dot {
                  width: 10px;
                  height: 10px;
                  border-radius: 50%;
                  border: 3px solid #f1f1f1;
                  margin: 0 5px;
                  background: #f1f1f1;
                  cursor: pointer;
                  transition: background-color 500ms ease-in-out;
              }

              /* Change the color of bg when user hover on it. */
              .dot:hover {
                  opacity: 0.9;
                  background: rgb(32, 32, 32);
              }

              /* Current or active dot */
              .dot[data-active="true"] {
                  background: rgb(32, 32, 32);
              }
          </style>

          <div class="container-slider">
              <!-- Slider Container with images...  -->
              <div class="slides"></div>

              <!--  Previous Button  -->
              <button class="btn-slide prev">
                  <img src="${this.prevButtonImage}" alt="prevBtn" />
              </button>

              <!-- Next Button -->
              <button class="btn-slide next">
                  <img src="${this.nextButtonImage}" alt="nextBtn" />
              </button>

              <!--  Container for dots  -->
              <div class="container-dots"></div>
          </div>
      `;

      const slides = this.shadow.querySelector(".slides");
      const containerDots = this.shadow.querySelector(".container-dots");

      // Agregar imágenes y puntos al contenedor respectivo
      this.images.map((img, index) => {
          var imgTag = document.createElement("img");
          imgTag.src = img.src;
          var dot = document.createElement("div");
          dot.classList.add("dot");
          dot.addEventListener("click", () => {
              this.moveDot(index + 1);
          });
          slides.appendChild(imgTag);
          containerDots.appendChild(dot);
      });

      // Eventos de botones
      const nextBtn = this.shadow.querySelector(".next");
      nextBtn.onclick = () => {
          this.nextSlide();
      };

      const prevBtn = this.shadow.querySelector(".prev");
      prevBtn.onclick = () => {
          this.prevSlide();
      };

      // Mostrar la imagen cuando la página se carga
      this.updateImageAndDot();
  }
}

customElements.define('carrousel-component', Carrousel);
