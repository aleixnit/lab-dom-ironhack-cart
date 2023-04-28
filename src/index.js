// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = +product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;

  // console.log("price: ", price);
  // console.log("quanity: ", quantity);

  // guardamos el resultado de multiplicar la cantidad de productos por el precio por producto
  const subtotal = price * quantity;
  // console.log("subottal: ", subtotal);

  // metemos el valor de la variable 'subtotal' en el nodo del DOM
  product.querySelector(".subtotal span").textContent = subtotal;

  //devolver el valor de la varible subtotal
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  // usad querySelectorAll para recuperar todos los nodos del DOM que tiene la clase .product. Guardad el resultado en una variable llamado products (si quereis). Verificad que lo habeis hecho bien haciendo un console.log de esa variable
  const products = document.querySelectorAll(".product"); //

  let total = 0;

  products.forEach((prod) => {
    // llamar a la función updateSubtotal y pasarle como parámetro todo el producto sobre el cual estamos iterando
    // la varible prod es un objeto

    // Opción 2. acumular lo que devuelve la función updateSubtotal dentro del forEach que ya tenemos

    total += updateSubtotal(prod);
    console.log("total: ", total);
  });

  // utilizad la función forEach para iterar por cada producto y usarlo como parámetro de la función updateSubtotal

  // ITERATION 3
  //... your code goes here

  // Opción 1. con querySelectorAll y forEach recorrer todos los .subtotal y acumular cada valor
  // document.querySelectorAll(".subtotal span").forEach((s) => {
  //   total += +s.textContent;
  // });

  // Finalmente, actualizar el nodo del DOM para poner el valor total del compra
  document.querySelector("#total-value span").textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const abuelo = target.parentNode.parentNode;
  abuelo.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
  const priceInput = document.querySelector("#new-product-price");
  const price = priceInput.value;

  // Recuperar el nombre que ha dado el usuario al nuevo producto
  const nameInput = document.querySelector("#new-product-name");
  const name = nameInput.value;


  // 1. Crear un nuevo nodo de tipo tr, y debemos añadir la clase product
  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  // 2. Rellenar su propiedad .innerHTML
  newProduct.innerHTML = `<td class="name">
  <span>${name}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  // 3. Añadir el nodo a la <table>
  document.querySelector("#cart tbody").appendChild(newProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  // Iteración 4: recuperar todos los botones de 'borrar' y añadir un listener a cada uno de ellos, que invoque la función removeProduct (1-2 línea de código, parecida al de arriba)
  document.querySelectorAll(".btn-remove").forEach((button) => {
    // addEventLister: primer parámetro, nombre del evento en formato string
    // segunda parámetro, la función que vamos a ejecutar cuando hagamos click
    button.addEventListener("click", removeProduct);
  });

  // Añade un manejador de eventos de click al botón "Crear Producto" que tomará una función llamada createProduct como callback.
  document.querySelector("#create").addEventListener("click", createProduct);
});
