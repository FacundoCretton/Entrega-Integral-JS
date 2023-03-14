const products = document.querySelector(".product-container");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const categoriaList = document.querySelector(".bts-fil")
const btnLoad = document.querySelector(".btn-load");
const flipIcons = document.querySelectorAll(".flip-icon");
const card = document.querySelector(".card");
const header=document.querySelector("header")
const toggleThemeButton = document.getElementById("toggle-theme");
const bodyElement = document.querySelector("body");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
const navLinks = document.querySelectorAll('.navbar a');
// -------
const buyBtn = document.querySelector(".btn-buy");
// Botón para abrir y cerrar carrito
//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");
const productsCart = document.querySelector (".cart-container")
const total = document.querySelector (".total")

let cart = JSON.parse(localStorage.getItem("cart")) || [];




const saveLocalStorage = (cartList) => {
	localStorage.setItem("cart", JSON.stringify(cartList));
};


const renderProduct = (product) => {
  const { id, nombre, precio, duracion, itinerario, backgroundImg } = product;

  return `
  <div class="card-container">
    <div class="card">
      <div class="card-front">
        <div class="product-card-image" style="background-image: url(${backgroundImg})">
          <h2 class="product-name">${nombre}</h2>
        </div>
        <div class="product-price">
          <p>Precio</p>
          <span>$${precio}</span>
        </div>
        <div class="product-duration">
          <p>Duracion</p> 
          <span>${duracion} noches</span> 
        </div>

        <div class="product-bot">
          <div class="btn-flip">
            <button class="btn-buy" 
            data-id="${id}"
            data-nombre="${nombre}"
            data-precio="${precio}"
            data-duracion="${duracion}"
            data-img="${backgroundImg}">Add</button>
          <div class="flip-icon"><i class="fas fa-arrow-circle-right"></i></div>
          </div>                  
        </div>
      </div>
      <div class="card-back">
        <div class="itinerario">
          <h2>Itinerario</h2>
          <ul>
            ${itinerario.map((dia) => `<li><span>${dia}</span></li>`).join('')}
          </ul>
        </div>
        <div class="flip-icon"><i class="fas fa-arrow-circle-left"></i></div>
      </div>
    </div>
  </div>
  `;
}
const renderDividedProducts = (index = 0) => {
	products.innerHTML += productsController.dividedProducts[index]
		.map(renderProduct)
		.join("");
};

const renderFilteredProducts = (categoria) => {
	const productsList = productsData.filter((product) => {
		return product.categoria === categoria;
	});
	products.innerHTML = productsList.map(renderProduct).join("");
};




const renderProducts = (index=0, categoria = undefined) => {
  if (!categoria) {
    renderDividedProducts(index);
    return;
    
  }
  renderFilteredProducts(categoria)

}
const changeShowMoreBtnState = (categoria) => {
	if (!categoria) {
		btnLoad.classList.remove("hidden");
		return;
	}
	btnLoad.classList.add("hidden");
};
const changeBtnActiveState = (categoriaSeleccionada) => {
	const categories = [...botonesCategorias]; // (Esto lo hago porque al no ser un array los botones, no puedo pasarle un forEach directamente)
	categories.forEach((botonCategoria) => {
		if (botonCategoria.dataset.categoria !== categoriaSeleccionada) {
			botonCategoria.classList.remove("active");
			return;
		}
		botonCategoria.classList.add("active");
	});
};

const changeFilterState = (e) => {
	const categoriaSeleccionada = e.target.dataset.categoria;
	changeShowMoreBtnState(categoriaSeleccionada);
	changeBtnActiveState(categoriaSeleccionada);
  
};

const flipCard = () => {
  const flipIcons = document.querySelectorAll('.flip-icon');

  flipIcons.forEach(flipIcon => {
    flipIcon.addEventListener('click', function() {
      const card = this.closest('.card');
      if (!card) return;  

      card.classList.toggle('flipped');
    });
  });
}




const applyFilter = (e) => {
	if (!e.target.classList.contains("boton-categoria")) {
		return;
	} else {
		changeFilterState(e);
	}
	if (!e.target.dataset.categoria) {
		products.innerHTML = "";
		renderProducts();
	} else {
		renderProducts(0, e.target.dataset.categoria);
		productsController.nextProductsIndex = 1;
	}
  flipCard()
};

const isLastIndexOf = () => {
	return (
		productsController.nextProductsIndex === productsController.productsLimit
	);
};

const showMoreProducts = () => {
	renderProducts(productsController.nextProductsIndex);
	productsController.nextProductsIndex++;
	if (isLastIndexOf()) {
		btnLoad.classList.add("hidden");
	}
  flipCard()
};

// ------Navbar-scroll-----
const toggleHeaderBackground =() => {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
}

// ------Modo oscuro--------
toggleTheme = () => {
  bodyElement.classList.toggle("dark");
  
  if (bodyElement.classList.contains("dark")) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    header.classList.add("dark-mode");
    toggleHeaderBackground(".dark header.scrolled");
    localStorage.setItem("modo", "dark")
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    header.classList.remove("dark-mode");
    toggleHeaderBackground("header.scrolled");
    localStorage.setItem("modo", "light");

  }
}
// ------------------Smooth Scroll----------------
function smoothScroll() {

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;
      if (href === "/pages/login.html") {
        // no prevenimos el comportamiento predeterminado del enlace
        return;
      }
      event.preventDefault();
      window.scrollTo({
        top: offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });
}
// -------------------------------------------------------
// botonesCategorias.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     const categoria = event.target.dataset.categoria;
//     renderCategoryProducts(categoria);
//   });
// });
// -----------------PRUEBA---------------
const toggleMenu = (event) => {
  if (event.target.matches('[data-logo]') || event.target.closest('[data-logo]')) {
    return;
  }

  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};


const toggleCart = () => {
	cartMenu.classList.toggle("open-cart");
	if (barsMenu.classList.contains("open-menu")) {
		barsMenu.classList.remove("open-menu");
		return;
	}
	overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
	if (!e.target.classList.contains("navbar-list a")) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
	if (
		!barsMenu.classList.contains("open-menu") &&
		!cartMenu.classList.contains("open-cart")
	) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
	barsMenu.classList.remove("open-menu");
	cartMenu.classList.remove("open-cart");
	overlay.classList.remove("show-overlay");
};

// ---------------------------MAS PRUEBAS-------------------

const renderCardProduct = (cartProduct) => {
  const { id, nombre, precio, duracion, backgroundImg, quantity } = cartProduct;
  return `
  <div class="cart-item">
    <img src= ${backgroundImg} alt="paquete de viaje en carrito">
    <div class="item-info">
      <h3 class="item-tittle">${nombre}</h3>
      <p class="item-duracion">${duracion} noches</p>
      <span class="item-precio">$${precio}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `
    <p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(renderCardProduct).join("");
};
const getCartTotal = () => {
  return cart.reduce((acc, cur) => {
    return acc + Number(cur.precio) * cur.quantity; // Number es para evitar que llegue un string
  }, 0);
};

const showTotal = () => {
  total.innerHTML = `${getCartTotal()}`;
};

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => {
    return acc + cur.quantity; 
  }, 0);
  
};
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart();
  showTotal();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  renderCartBubble();
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-buy")) {
    return;
  }
  const { id, nombre, precio, duracion, backgroundImg } = e.target.dataset;

  const product = productdata(id, nombre, precio, duracion, backgroundImg);
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito con exito");
  }

  checkCartState();
};
const productdata = (id, nombre, precio, duracion, backgroundImg) => {
  return { id, nombre, precio, duracion, backgroundImg };
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => {
    return item.id === product.id;
  });
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const createCartProduct = (product) => {
  cart = [
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ];
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }

  substractProductUnit(existingCartProduct);
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const handleplusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => {
    return item.id === id;
  });
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handleplusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};
const completeBuy = () => {
  completeCartAction(
    "¿desea comprar lo que hay en el carrito?",
    "¡Gracias por su compra!"
  );
};
const deleteCart = () => {
  completeCartAction(
    "¿Desea eliminar el carrito?",
    "El carrito se elimino perfectamente"
  );
};


// ---------------------------------------------------------


const init =()=>{
  renderProducts()
  categoriaList.addEventListener("click", applyFilter);
	btnLoad.addEventListener("click", showMoreProducts);
  window.addEventListener('load', flipCard);
  toggleThemeButton.addEventListener('click', toggleTheme);
  window.addEventListener("scroll", toggleHeaderBackground);
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    toggleTheme();
  }
  smoothScroll();
  cartBtn.addEventListener("click", toggleCart);
	barsMenu.addEventListener("click", closeOnClick);
	window.addEventListener("scroll", closeOnScroll);
	overlay.addEventListener("click", closeOnOverlayClick);
  barsBtn.addEventListener("click", toggleMenu);
  barsBtn.addEventListener('click', event => {
    event.preventDefault();
  });

  // ------
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  document.addEventListener("DOMContentLoaded", renderCartBubble);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
  

}
init();



