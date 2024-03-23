let products = [
  {
    name: "Nike Air Jordan 1",
    tag: "/shoe/men/1_Air Jordan 1 Retro High OG/product_Img_1_14.webp",
    price: 350,
    inCart: 0
  },
  {
    name: "Nike Go FlyEase",
    tag: "/shoe/men/2_Nike Go FlyEase/product_Img_2_4.webp",
    price: 405,
    inCart: 0
  },
  {
    name: "UA Phantom 3",
    tag: "/shoe/men/3_Unisex UA HOV Phantom 3 SE Storm Running Shoes/product_Img_3_1.webp",
    price: 350,
    inCart: 0
  },
  {
    name: "UA INTAKE 6",
    tag: "/shoe/men/4_Mens UA HOV Intake 6 Running Shoes/product_Img_4_1.webp",
    price: 350,
    inCart: 0
  },
  {
    name: "AD Ultra Bounce",
    tag: "/shoe/men/5_Adidas ultrabounce mens running shoes/product_Img_5_1.webp",
    price: 370,
    inCart: 0
  },
  {
    name: "AD Duramo",
    tag: "/shoe/men/6_Adidas duramo 10 mens running shoes/product_Img_6_3.webp",
    price: 350,
    inCart: 0
  },
  {
    name: "Nike Court Vision",
    tag: "/shoe/women/w1_Nike Court Vision Alta/product_Img_w1_1.webp",
    price: 445,
    inCart: 0
  },
  {
    name: "Nike MetCon 9",
    tag: "/shoe/women/w2_Nike Metcon 9/product_Img_w2_1.webp",
    price: 465,
    inCart: 0
  },
  {
    name: "UA Flow Dynamic",
    tag: "/shoe/women/w3_Womens UA Flow Dynamic Training Shoes/product_Img_w3_4.webp",
    price: 400,
    inCart: 0
  },
  {
    name: "UA Flow Breakthru",
    tag: "/shoe/women/w4_Womens UA Flow Breakthru 4 Basketball Shoes/product_Img_w4_4.webp",
    price: 645,
    inCart: 0
  },
  {
    name: "AD Duramo SL",
    tag: "/shoe/women/w5_Adidas duramo sl 2.0 womens running shoes/product_Img_w5_1.webp",
    price: 425,
    inCart: 0
  },
  {
    name: "AD Pureboost",
    tag: "/shoe/women/w6_Adidas pureboost 22 womens running shoes/product_Img_w6_1.webp",
    price: 400,
    inCart: 0
  }
  
]

document.addEventListener('DOMContentLoaded', function() {
  let cartButtons = document.querySelectorAll('.add-cart-btn');
  cartButtons.forEach(button => {
      button.addEventListener('click', function() {
          let productId = this.dataset.productId;
          if (productId == "0") {
            setItem(products[0]);
            totalCost(products[0]);
          }
          else if (productId == "1") {
            setItem(products[1]);
            totalCost(products[1]);
          }
          else if (productId == "2") {
            setItem(products[2]);
            totalCost(products[2]);
          }
          else if (productId == "3") {
            setItem(products[3]);
            totalCost(products[3]);
          }
          else if (productId == "4") {
            setItem(products[4]);
            totalCost(products[4]);
          }
          else if (productId == "5") {
            setItem(products[5]);
            totalCost(products[5]);
          }
          else if (productId == "6") {
            setItem(products[6]);
            totalCost(products[6]);
          }
          else if (productId == "7") {
            setItem(products[7]);
            totalCost(products[7]);
          }
          else if (productId == "8") {
            setItem(products[8]);
            totalCost(products[8]);
          }
          else if (productId == "9") {
            setItem(products[9]);
            totalCost(products[9]);
          }
          else if (productId == "10") {
            setItem(products[10]);
            totalCost(products[10]);
          }
          else if (productId == "11") {
            setItem(products[11]);
            totalCost(products[11]);
          }
      });
  });
});

function setItem(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log("The product price is", product.price);
  let cartCost = localStorage.getItem('totalCost');

  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  }else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');

  if ( cartItems && productContainer ) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product-container">
        <div class="product-content">
          <img class="cart-img" src="${item.tag}">
          <span>${item.name}</span>
        </div>
        <div class="price-content">${item.price}.00</div>
          <div class="quantity-content">
          <span>${item.inCart}</span>
        </div>
        <div class="total-content">
        ${item.inCart * item.price}.00
      </div>
        </div>
        `
      });

      productContainer.innerHTML += `
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">
            Grand Total
          </h4>
          <h4 class= "basketTotal">
            $${cartCost}.00
          </h4>
        `
        productContainer.innerHTML += `
        <div class="checkout-btn-container">
        <a class="checkout-btn" href="checkout.html">Checkout</a> 
        </div>
        `

  }
}

displayCart();