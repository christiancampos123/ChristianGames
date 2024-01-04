class ProductSlider extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.products = [
      {
        name: 'Producto 1',
        image: './images/juego1.jpg',
        price: 19.99,
        discount: 50,
      },
      {
        name: 'Producto 2',
        image: './images/user-avatar.png',
        price: 29.99,
        discount: 50,
      },
      {
        name: 'Producto 3',
        image: './images/juego1.jpg',
        price: 39.99,
        discount: 50,
      },
      {
        name: 'Producto 1',
        image: './images/juego1.jpg',
        price: 19.99,
        discount: 50,
      },
      {
        name: 'Producto 2',
        image: './images/user-avatar.png',
        price: 29.99,
        discount: 40,
      },
      {
        name: 'Producto 3',
        image: './images/juego1.jpg',
        price: 39.99,
      },
      {
        name: 'Producto 1',
        image: './images/juego1.jpg',
        price: 19.99,
        discount: 40,
      },
      {
        name: 'Producto 2',
        image: './images/user-avatar.png',
        price: 29.99,
      },
      {
        name: 'Producto 3',
        image: './images/juego1.jpg',
        price: 39.99,
      },
      {
        name: 'Producto 1',
        image: './images/juego1.jpg',
        price: 19.99,
        discount: 40,
      },
      {
        name: 'Producto 2',
        image: './images/user-avatar.png',
        price: 29.99,
      },
      {
        name: 'Producto 3',
        image: './images/juego1.jpg',
        price: 39.99,
      },
      {
        name: 'Producto 1',
        image: './images/juego1.jpg',
        price: 19.99,
      },
      {
        name: 'Producto 2',
        image: './images/user-avatar.png',
        price: 29.99,
      },
      {
        name: 'Producto 3',
        image: './images/juego1.jpg',
        price: 39.99,
      },


      // ... (otros productos)
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
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding-right:10%;
        padding-left:10%;
      }
      
      .product-category {
        font-size:2.5rem;
        font-weight: bold;
        margin-bottom: 40px;
        text-transform: capitalize;
      }
      
      .product-container {
        padding: 0px 0vw;
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        padding-left: 0rem;
        overflow-y: hidden;
      }
      
      .product-container::-webkit-scrollbar {
        display: none;
      }
      
      .product-card {
        background-color:#7DA7C3;
        border-radius:10px;
        padding:1rem;
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
        border-radius:100%;
        width: 4vw;
        height: 20%;
        position: absolute;
        top: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        /*background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);*/
        cursor: pointer;
        z-index: 8;
      }
      
      .pre-btn {
        left: 50px;
        transform: rotate(180deg);
        border-radius:2rem;
      }
      
      .nxt-btn {
        right: 50px;
      }
      
      .pre-btn img,
      .nxt-btn img {
        opacity: 0.8;
        width: 50px; 
        height: 50px;
        border-radius:2rem;
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
      <div class="arrow-container pre-btn">
          <img src="images/arrow.jpg" alt="Previous">
      </div>
      <div class="arrow-container nxt-btn">
          <img src="images/arrow.jpg" alt="Next">
      </div>
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
        item.scrollLeft += containerWidth - 500;
      });

      preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth - 500;
      });
    });
  }

  getProductCardHTML(product) {
    let discountTag = '';
    let discountedPrice = '';
  
    if (!isNaN(product.discount)) {
      discountTag = `<span class="discount-tag">${product.discount}% off</span>`;
      discountedPrice = `<span class="price">${(product.price - (product.price * product.discount / 100)).toFixed(2)}€</span>`;
    }
  
    return `
        <div class="product-card">
            <div class="product-image">
                ${discountTag}
                <a href="./fichaJuego.html">
                    <img src="${product.image}" class="product-thumb" alt="">
                </a>
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${product.name}</h2>
                ${discountedPrice ? `<span class="price">${discountedPrice}</span>` : `<span class="price">${product.price.toFixed(2)}€</span>`}
                ${!isNaN(product.discount) ? `<span class="actual-price">${product.price.toFixed(2)}€</span>` : ''}
            </div>
        </div>
    `;
  }
  


  attachEventListeners() {
  }
}

customElements.define('product-slider-component', ProductSlider);
