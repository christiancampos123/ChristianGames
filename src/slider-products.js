class ProductSlider extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.products = [
            {
                name: 'Producto 1',
                image: './images/user-avatar.png',
                price: 19.99,
            },
            {
                name: 'Producto 2',
                image: './images/user-avatar.png',
                price: 29.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
            {
                name: 'Producto 3',
                image: './images/user-avatar.png',
                price: 39.99,
            },
        ];
        this.currentSlide = 0;

        this.render();
        this.attachEventListeners();
    }

    render() {
        this.shadow.innerHTML = `
        <style>
        /* PRODUCTS */
        .product {
          position: relative;
          overflow: hidden;
          padding: 20px;
        }
        
        .product-category {
          padding: 0 10vw;
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 40px;
          text-transform: capitalize;
        }
        
        .product-container {
          padding: 0 10vw;
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding-left:3rem;
        }
        
        .product-container::-webkit-scrollbar {
          display: none;
        }
        
        .product-card {
          flex: 0 0 auto;
          width: 250px;
          height: 450px;
          margin-right: 40px;
        }
        
        .product-image {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }
        
        .product-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .discount-tag {
          position: absolute;
          background: #fff;
          padding: 5px;
          border-radius: 5px;
          color: #ff7d7d;
          right: 10px;
          top: 10px;
          text-transform: capitalize;
        }
        
        .card-btn {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px;
          width: 90%;
          text-transform: capitalize;
          border: none;
          outline: none;
          background: #fff;
          border-radius: 5px;
          transition: 0.5s;
          cursor: pointer;
          opacity: 0;
        }
        
        .product-card:hover .card-btn {
          opacity: 1;
        }
        
        .card-btn:hover {
          background: #ff7d7d;
          color: #fff;
        }
        
        .product-info {
          width: 100%;
          height: 100px;
          padding-top: 10px;
        }
        
        .product-brand {
          text-transform: uppercase;
        }
        
        .product-short-description {
          width: 100%;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          opacity: 0.5;
          text-transform: capitalize;
          margin: 5px 0;
        }
        
        .price {
          font-weight: 900;
          font-size: 20px;
        }
        
        .actual-price {
          margin-left: 20px;
          opacity: 0.5;
          text-decoration: line-through;
        }
        
        .pre-btn,
        .nxt-btn {
          border: none;
          width: 10vw;
          height: 100%;
          position: absolute;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
          cursor: pointer;
          z-index: 8;
        }
        
        .pre-btn {
          left: 0;
          transform: rotate(180deg);
        }
        
        .nxt-btn {
          right: 0;
        }
        
        .pre-btn img,
        .nxt-btn img {
          opacity: 0.2;
        }
        
        .pre-btn:hover img,
        .nxt-btn:hover img {
          opacity: 1;
        }
        
        .collection-container {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px;
        }
        
        .collection {
          position: relative;
        }
        
        .collection img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .collection p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          font-size: 50px;
          text-transform: capitalize;
        }
        
        .collection:nth-child(3) {
          grid-column: span 2;
          margin-bottom: 10px;
        }
        
        </style>

    <section class="product"> 
        <h2 class="product-category">best selling</h2>
        <button class="pre-btn"><img src="images/arrow.png" alt=""></button>
        <button class="nxt-btn"><img src="images/arrow.png" alt=""></button>
        <div class="product-container">
            ${this.products.map(product => this.getProductCardHTML(product)).join('')}
        </div>
    </section>
      `;
      const productContainers = [...this.shadow.querySelectorAll('.product-container')];
      const nxtBtn = [...this.shadow.querySelectorAll('.nxt-btn')];
      const preBtn = [...this.shadow.querySelectorAll('.pre-btn')];

      productContainers.forEach((item, i) => {
          let containerDimensions = item.getBoundingClientRect();
          let containerWidth = containerDimensions.width;

          nxtBtn[i].addEventListener('click', () => {
              item.scrollLeft += containerWidth-500;
          });

          preBtn[i].addEventListener('click', () => {
              item.scrollLeft -= containerWidth-500;
          });
      });
  }

  getProductCardHTML(product) {
      return `
          <div class="product-card">
              <div class="product-image">
                  <span class="discount-tag">${product.discount}% off</span>
                  <img src="${product.image}" class="product-thumb" alt="">
                  <button class="card-btn">add to wishlist</button>
              </div>
              <div class="product-info">
                  <h2 class="product-brand">${product.name}</h2>
                  <p class="product-short-description">a short line about the cloth..</p>
                  <span class="price">$${product.price}</span><span class="actual-price">$${product.price + product.discount}</span>
              </div>
          </div>
      `;
  }

  attachEventListeners() {
      // Agrega aquí tus event listeners si es necesario
  }
}

customElements.define('product-slider-component', ProductSlider);