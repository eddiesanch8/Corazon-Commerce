"use strict";

// path to JSON
fetch("../products.json")
  // Error handling in case you don't get the .json file
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  // Now, with the response, we use an array method since my JSON stores my product details as an array of objects
  .then((products) => {
    products.products.forEach((product) => {
      createProduct(product);
    });
  })
  .catch((error) => {
    // Error handling
    console.error("Failed to fetch data:", error);
  });

// function that takes in every object from JSON
function createProduct(obj) {
  // Creates new section and gets Parent Grid
  const newSection = document.createElement("section");
  const parentGrid = document.querySelector("[data-grid]");
  // adds css styling
  newSection.classList.add("product-grid");
  // Inner html for every section
  let productCard = `
        <img class="product-img" src="${obj.image}" alt="${obj.alt}"/>
        <p class="product-name">${obj.name}</p>
        <p class="product-price">$${obj.price}</p>
        <p class="product-desc">
          ${obj.description}
        </p>
        <button class="product-btn">Add to Cart</button>
        `;
  newSection.innerHTML = productCard;
  // add to parent grid
  parentGrid.append(newSection);
}
