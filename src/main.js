import { setTheme, loadSavedTheme } from "./utils/theme.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import "./styles/global.css";

function router() {
  const hash = window.location.hash || "#/";
  const app = document.getElementById("app");

  let page = "";

  if (hash === "#/") page = Home();
  else if (hash === "#/shop") page = Shop();
  else if (hash.startsWith("#/product/")) {
    const id = hash.split("/")[2];
    page = Product(id);
  }
  else if (hash === "#/cart") page = Cart();
  else page = "<h2>404 - Page Not Found</h2>";

   app.innerHTML = `
    ${Header()}
    <main>${page}</main>
    ${Footer()}
  `;

  // Theme button listeners (must be inside router)
  document.querySelectorAll("[data-theme]").forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      setTheme(theme);
    });
  });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

loadSavedTheme();