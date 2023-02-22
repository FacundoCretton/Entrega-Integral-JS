// Contenedor de productos
const products = document.querySelector('.categoria-container');



const renderProduct = (product) => {
	if (!product) {
		return;
	  }
  const { id, nombre, precio, duracion, itinerario, backgroundImg, categoria } = product;

  // crear la tarjeta de producto
  const productCard = document.createElement('div');
  productCard.classList.add('product-cards');
  productCard.dataset.categoria = categoria;
  productCard.innerHTML = `
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
              <button class="btn-buy">Add</button>
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

  // obtener el contenedor de categoría correspondiente
  const categoriaContainer = document.querySelector(`[data-categoria="${categoria}"]`);

  // insertar la tarjeta de producto en el contenedor de categoría
  categoriaContainer.appendChild(productCard);
};






const renderDividedProducts = (container, index = 0) => {
	container.innerHTML += productsController.dividedProducts[index]
	  .map(renderProduct)
	  .join("");
  };

const renderFilteredProducts = (categoria) => {
	const productsList = productsData.filter((product) => {
		return product.categoria === categoria;
	});
	products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, categoria = undefined) => {
	if (!categoria) {
		renderDividedProducts(index);
		return;
	}
	renderFilteredProducts(categoria);
};

// const changeShowMoreBtnState = (categoria) => {
// 	if (!categoria) {
// 		btnLoad.classList.remove("hidden");
// 		return;
// 	}
// 	btnLoad.classList.add("hidden");
// };

// const changeBtnActiveState = (selectedCategory) => {
// 	const categories = [...categoriesList];
// 	categories.forEach((categoryBtn) => {
// 		if (categoryBtn.dataset.category !== selectedCategory) {
// 			categoryBtn.classList.remove("active");
// 			return;
// 		}
// 		categoryBtn.classList.add("active");
// 	});
// };

// const changeFilterState = (e) => {
// 	const selectedCategory = e.target.dataset.category;
// 	changeShowMoreBtnState(selectedCategory);
// 	changeBtnActiveState(selectedCategory);
// };

// const applyFilter = (e) => {
// 	if (!e.target.classList.contains("category")) {
// 		return;
// 	} else {
// 		changeFilterState(e);
// 	}
// 	if (!e.target.dataset.category) {
// 		products.innerHTML = "";
// 		renderProducts();
// 	} else {
// 		renderProducts(0, e.target.dataset.category);
// 		productsController.nextProductsIndex = 1;
// 	}
// };

// const isLastIndexOf = () => {
// 	return (
// 		productsController.nextProductsIndex === productsController.productsLimit
// 	);
// };





window.addEventListener('load', function() {
  const flipIcons = document.querySelectorAll('.flip-icon');

  flipIcons.forEach(flipIcon => {
    flipIcon.addEventListener('click', function() {
      const card = flipIcon.closest('.card');
      card.classList.toggle('flipped');
    });
  });
  
});
// ------------------------------------------------------ARROW---------------------------------

  let arrow = document.getElementsByClassName('arrow');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	arrow[1].onclick = ()=>{right_mover();}
	arrow[0].onclick = ()=>{left_mover();}
 
const init = () => {
	renderProducts();
  
	categories.addEventListener("click", applyFilter);
	btnLoad.addEventListener("click", showMoreProducts);
	barsBtn.addEventListener("click", toggleMenu);
	cartBtn.addEventListener("click", toggleCart);
	barsMenu.addEventListener("click", closeOnClick);
	window.addEventListener("scroll", closeOnScroll);
	overlay.addEventListener("click", closeOnOverlayClick);
};

init();
