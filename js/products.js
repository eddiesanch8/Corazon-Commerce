"use strict";

fetch("../products.json") // Specify the path to your JSON file
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((products) => {
    products.products.forEach((product) => {
      createProduct(product);
    });

    // createProduct(products.products[0]);
    // console.log(products.products[0]);
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error); // Handle any errors
  });

function createProduct(obj) {
  const newDiv = document.createElement("section");
  const parentGrid = document.querySelector("[data-grid]");

  newDiv.classList.add("product-grid");

  let productCard = `
        <img class="product-img" src="${obj.image}" alt="${obj.alt}"/>
        <p class="product-name">${obj.name}</p>
        <p class="product-price">${obj.price}</p>
        <p class="product-desc">
          ${obj.description}
        </p>
        <button class="product-btn">Add to Cart</button>
        `;
  newDiv.innerHTML = productCard;
  parentGrid.append(newDiv);
}
