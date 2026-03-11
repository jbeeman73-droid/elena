import products from "../data/products.js";

export default function Shop() {
  return `
    <h2>Shop</h2>
    <div class="product-grid">
      ${products.map(product => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <a href="#/product/${product.id}" class="btn">View Product</a>
        </div>
      `).join("")}
    </div>
  `;
}