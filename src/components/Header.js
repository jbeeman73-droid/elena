export default function Header() {
  return `
    <header>
      <h1>Elena Pottery</h1>
      <nav>
        <a href="#/">Home</a>
        <a href="#/shop">Shop</a>
        <a href="#/cart">Cart</a>
      </nav>

      <div class="theme-switcher">
        <button data-theme="beach">Beach</button>
        <button data-theme="garden">Garden</button>
        <button data-theme="antique">Antique</button>
      </div>
    </header>
  `;
}