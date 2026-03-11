import products from "../data/products.js";

export default function Product(id) {
  const product = products.find(p => p.id == id);

  if (!product) {
    return `<h2>Product Not Found</h2>`;
  }

  return `
    <div class="product-detail">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>$${product.price.toFixed(2)}</strong></p>
      <button class="btn">Add to Cart</button>
    </div>
  `;
}