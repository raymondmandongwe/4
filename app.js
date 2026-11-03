const imageBase = "https://lynuxespadrilles.co.za/images/";
const products = [
  { slug: "ariana", name: "ARIANA", price: 1099, colors: ["Black", "Ivory", "Mustard", "Navy Stars", "Nude", "Protea Print", "Red", "Rustic"], category: "Sandals", description: "Handcrafted sandal with a beautiful stripe upper and comfortable leather insole.", facts: ["Handcrafted", "Open toe", "Stripe upper", "Leather insole"], soles: ["Flat", "Double", "Medium Wedge Sole", "High Wedge Sole"], image: "ariana.png" },
  { slug: "carnero-slipper", name: "CARNERO SLIPPER", price: 1299, colors: ["Baby Pink", "Cream", "Mustard"], category: "Slippers", description: "Handcrafted 100% sheep wool sandal with a comfortable leather insole.", facts: ["Handcrafted", "100% Sheep wool upper", "Leather insole", "Slipper style"], soles: ["Flat", "Double"], image: "carnero-slipper.jpg" },
  { slug: "florencia-cerrada", name: "FLORENCIA CERRADA", price: 1499, colors: ["Black"], category: "Leather", description: "Handcrafted closed toe espadrille with premium leather finish.", facts: ["Handcrafted", "Closed toe", "Premium leather", "Leather insole"], soles: [], image: "florencia-cerrada.jpg" },
  { slug: "lucia-wedge", name: "LUCIA WEDGE", price: 1299, colors: ["Leopard Print"], category: "Sandals", description: "Handcrafted wedge espadrille with leopard print upper and leather insole.", facts: ["Handcrafted", "Wedge sole", "Leopard print", "Leather insole"], soles: [], image: "lucia-wedge.png" },
  { slug: "renata", name: "RENATA", price: 999, priceMax: 1099, colors: ["Khaki"], category: "Sandals", description: "Handcrafted sandal with a clean, classic upper and leather insole.", facts: ["Handcrafted", "Open toe", "Classic upper", "Leather insole"], soles: ["Flat", "Double"], image: "renata.jpg" },
  { slug: "the-bella", name: "THE BELLA", price: 999, colors: ["Blue", "Green", "Natural", "Orange", "Red"], category: "Sandals", description: "Tie up Gladiator sandal with adjustable string strap and leather insole.", facts: ["Handcrafted", "Gladiator style", "Adjustable string strap", "Leather insole"], soles: [], image: "the-bella.jpg" },
  { slug: "the-lynux", name: "THE LYNUX", price: 1099, colors: ["Black", "Khaki", "Multi-Color", "Navy", "Nude", "Olive"], category: "Sandals", description: "The signature Lynux sandal. Handcrafted with linen upper, bow detail and leather insole. Our most loved style.", facts: ["Handcrafted", "Open toe", "Linen upper", "Bow detail", "Leather insole"], soles: ["Flat", "Double"], image: "the-lynux.png" },
  { slug: "the-mule", name: "THE MULE", price: 1299, colors: ["Leopard Print", "Brown", "Black"], category: "Leather", description: "Handcrafted open toe mule sandal with leather upper and comfortable leather insole.", facts: ["Handcrafted", "Open toe", "Leather upper", "Leather insole", "Available in black and brown"], soles: ["Flat", "Double"], toeStyles: ["Open Toe", "Closed Toe"], image: "the-mule-new-5.jpg" },
  { slug: "the-tina", name: "THE TINA", price: 1099, colors: ["Black", "Ivory"], category: "Sandals", description: "Handcrafted sandal with cotton upper, adjustable ankle strap and leather insole.", facts: ["Handcrafted", "Cotton upper", "Adjustable ankle strap", "Leather insole"], soles: ["Flat", "Double", "Low Wedge Sole", "Medium Wedge Sole", "High Wedge Sole"], image: "the-tina.jpg" },
  { slug: "valeria", name: "VALERIA", price: 1099, colors: ["Baby Pink", "Khaki", "Multi-Color", "Nude", "Olive", "Orange", "White"], category: "Sandals", description: "Handcrafted sandal with adjustable string strap and leather insole.", facts: ["Handcrafted", "Adjustable string strap", "Leather insole"], soles: ["Flat", "Double"], image: "valeria.png" },
  { slug: "ximera-leather", name: "XIMERA LEATHER", price: 1299, colors: ["Tan"], category: "Leather", description: "Handcrafted leather espadrille with premium finish and comfortable leather insole.", facts: ["Handcrafted", "Premium leather upper", "Leather insole"], soles: ["Flat", "Double", "Medium Wedge Sole", "High Wedge Sole"], image: "ximera-leather.jpg" }
];

const colorImages = {
  "ariana": { Black: "ariana-5.jpg", Ivory: "ariana-2.jpg", Mustard: "ariana.png", "Navy Stars": "ariana-new-3.jpg", Nude: "ariana-6.jpg", "Protea Print": "ariana-new-1.jpg", Red: "lucia-wedge-2.png", Rustic: "ariana-3.jpg" },
  "carnero-slipper": { "Baby Pink": "carnero-slipper-2.jpg", Cream: "carnero-slipper-5.jpg", Mustard: "carnero-slipper.jpg" },
  "florencia-cerrada": { Black: "florencia-cerrada.jpg" },
  "lucia-wedge": { "Leopard Print": "lucia-wedge.png" },
  "renata": { Khaki: "renata.jpg" },
  "the-bella": { Blue: "the-bella-5.jpg", Green: "the-bella-2.jpg", Natural: "the-bella-new-1.jpg", Orange: "the-bella-7.jpg", Red: "the-bella.jpg" },
  "the-lynux": { Black: "the-lynux-3.jpg", Khaki: "the-lynux-6.jpg", "Multi-Color": "the-lynux.png", Navy: "the-lynux-7.jpg", Nude: "the-lynux-4.jpg", Olive: "the-lynux-5.jpg" },
  "the-mule": { "Leopard Print": "the-mule-new-5.jpg", Brown: "the-mule-new-2.jpg", Black: "the-mule-new-1.jpg" },
  "the-tina": { Black: "the-tina-2.jpg", Ivory: "the-tina-3.jpg" },
  "valeria": { "Baby Pink": "valeria-6.jpg", Khaki: "valeria-2.jpg", "Multi-Color": "valeria.png", Nude: "valeria-new-3.jpg", Olive: "valeria-5.jpg", Orange: "valeria-new-4.jpg", White: "valeria-3.jpg" },
  "ximera-leather": { Tan: "ximera-leather.jpg" }
};

const formatPrice = value => `R${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const productBySlug = slug => products.find(product => product.slug === slug);
const app = document.querySelector("#app");
const cartKey = "lynux-preview-cart-v1";
let cart = readCart();
const likedKey = "lynux-preview-liked-v1";
let liked = readLiked();
let activeFilter = "All styles";
let activeSearch = "";
let activeSort = "featured";

function readCart() {
  try { return JSON.parse(localStorage.getItem(cartKey) || "[]"); }
  catch { return []; }
}

function saveCart() {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateBagCount();
}

function readLiked() {
  try { return JSON.parse(localStorage.getItem(likedKey) || "[]"); }
  catch { return []; }
}

function toggleLiked(slug) {
  liked = liked.includes(slug) ? liked.filter(item => item !== slug) : [...liked, slug];
  try { localStorage.setItem(likedKey, JSON.stringify(liked)); } catch {}
  updateLikedCount();
  document.querySelectorAll(`[data-like="${slug}"]`).forEach(button => setLikeButton(button, slug));
  if (location.hash === "#liked") renderLiked();
}

function setLikeButton(button, slug) {
  const isLiked = liked.includes(slug);
  const name = productBySlug(slug).name;
  button.setAttribute("aria-pressed", String(isLiked));
  button.setAttribute("aria-label", `${isLiked ? "Remove" : "Add"} ${name} ${isLiked ? "from" : "to"} liked items`);
}

function likeButton(product, extraClass = "") {
  return `<button class="like-button ${extraClass}" type="button" data-like="${product.slug}" aria-pressed="${liked.includes(product.slug)}" aria-label="${liked.includes(product.slug) ? "Remove" : "Add"} ${product.name} ${liked.includes(product.slug) ? "from" : "to"} liked items"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"></path></svg></button>`;
}

function updateLikedCount() {
  const count = liked.length;
  document.querySelector("#liked-count").textContent = count;
  document.querySelector("#liked-count").hidden = count === 0;
  document.querySelector(".liked-link").setAttribute("aria-label", `Liked items, ${count} ${count === 1 ? "item" : "items"}`);
}

function renderLiked() {
  const items = liked.map(productBySlug).filter(Boolean);
  app.innerHTML = `<section class="cart-page container"><p class="eyebrow">Your favourites</p><h1 class="page-title">Liked items${items.length ? ` <span class="shop-count">(${items.length} ${items.length === 1 ? "style" : "styles"})</span>` : ""}</h1>${items.length ? `<div class="product-grid">${items.map(product => card(product)).join("")}</div>` : `<div class="empty-cart"><p>You haven’t liked any styles yet. Tap the heart on a style to save it here.</p><a class="button" href="#shop">Discover the collection</a></div>`}</section>`;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.remove("is-active"));
}

function cartCount() { return cart.reduce((total, item) => total + item.quantity, 0); }

function updateBagCount() {
  const count = cartCount();
  document.querySelector("#bag-count").textContent = count;
  document.querySelector(".bag-link").setAttribute("aria-label", `Go to cart, ${count} ${count === 1 ? "item" : "items"}`);
}

function card(product, prioritizeImage = false) {
  const colors = product.colors.slice(0, 5).map(color => `<span class="swatch-dot" title="${color}" style="background:${colorValue(color)}"></span>`).join("");
  return `<article class="product-card">
    <a class="product-image-link" href="#product/${product.slug}" aria-label="View ${product.name}">
      <img src="${imageBase}${product.image}" alt="${product.name}" loading="${prioritizeImage ? "eager" : "lazy"}" decoding="async"${prioritizeImage ? " fetchpriority=\"high\"" : ""}>
      <span class="image-label">View the style</span>
    </a>
    ${likeButton(product, "card-like")}
    <div class="product-meta"><div><h3>${product.name}</h3><p>${priceLabel(product)}</p></div><div class="swatch-dots" aria-label="${product.colors.length} ${product.colors.length === 1 ? "colour" : "colours"}">${colors}</div></div>
  </article>`;
}

function priceLabel(product) {
  return product.priceMax ? `${formatPrice(product.price)} – ${formatPrice(product.priceMax)}` : formatPrice(product.price);
}

function amountRange(low, high) {
  return low === high ? formatPrice(low) : `${formatPrice(low)} – ${formatPrice(high)}`;
}

function colorValue(color) {
  const palette = { Black: "#242321", Ivory: "#e9e4d8", Mustard: "#b89845", "Navy Stars": "#28334a", Nude: "#c9ae98", "Protea Print": "#b56b5b", Red: "#a84036", Rustic: "#92745d", "Baby Pink": "#d8a8a6", Cream: "#ded2bd", Blue: "#677f91", Green: "#697a63", Natural: "#d2c4a8", Orange: "#c97845", Khaki: "#84846b", "Multi-Color": "linear-gradient(135deg,#bd8d66 0 35%,#d1c6a9 35% 65%,#77816a 65%)", Olive: "#777d57", "Leopard Print": "#a77b51", Brown: "#765840", Tan: "#b98c65", White: "#f6f4ee" };
  return palette[color] || "#b7aa98";
}

function renderHome() {
  app.innerHTML = `<section class="hero">
    <div class="hero-image"><img src="${imageBase}1000038200.jpg" alt="Lynux espadrilles lifestyle" fetchpriority="high"></div>
    <div class="hero-copy"><p class="eyebrow">Handcrafted in South Africa</p><h1>Timeless Style.<br>Effortless Comfort.</h1><p>Handcrafted espadrilles for every step of your journey.</p><div class="hero-actions"><a class="button" href="#shop">Shop the collection <span aria-hidden="true">→</span></a></div></div>
  </section>
  <div class="ticker" aria-label="Our commitments"><span><i>◇</i> Handcrafted with care</span><span><i>↗</i> R65 flat-rate delivery</span><span><i>↻</i> Free defect exchanges</span></div>
  <section class="featured-section container"><div class="section-heading"><h2>Our Collection</h2></div><div class="product-grid">${products.slice(0, 4).map(product => card(product, true)).join("")}</div><div class="view-all"><a class="button button-outline" href="#shop">View all styles <span aria-hidden="true">→</span></a></div></section>
  <section class="journal-section"><div class="journal-inner container"><div class="journal-title"><a href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="Follow Lynux Espadrilles on Instagram"><span class="instagram-icon" aria-hidden="true">◎</span><span>Follow us on Instagram</span></a></div><div class="journal-grid"><div class="journal-item"><img src="instagram-images/1-sunhat.jpg" alt="Lynux espadrilles with a straw sunhat and sunglasses" loading="lazy" style="object-position: 55% 65%"><a href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="View Lynux on Instagram"></a></div><div class="journal-item"><img src="instagram-images/2-chair.jpg" alt="Beige bow espadrilles worn while sitting on an outdoor chair" loading="lazy" style="object-position: center 68%"><a href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="View The Mule on Instagram"></a></div><div class="journal-item"><img src="instagram-images/3-marina.jpg" alt="Model wearing Lynux espadrilles at the marina" loading="lazy" style="object-position: center 30%"><a href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="Follow Lynux on Instagram"></a></div><div class="journal-item journal-extra"><img src="instagram-images/4-decking.jpg" alt="Brown leather espadrilles on wooden decking" loading="lazy" style="object-position: center 55%"><a href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="More Lynux on Instagram"></a></div></div><a class="journal-next" href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer" aria-label="See more on Instagram">→</a></div></section>`;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === "home"));
}

function renderShop() {
  app.innerHTML = `<section class="collection-intro"><div class="container"><h1 class="page-title">Shop Our Collection</h1><p>Find your perfect pair</p></div></section>
    <section class="container"><div class="shop-toolbar"><div class="filter-tabs" role="group" aria-label="Filter by category">${["All styles", "Sandals", "Slippers", "Leather"].map(filter => `<button class="filter-button" data-filter="${filter}" aria-pressed="${activeFilter === filter}">${filter}</button>`).join("")}</div><div class="shop-controls"><span class="shop-count" id="shop-count"></span><label for="sort-products">Sort</label><select id="sort-products" aria-label="Sort products"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></div></div><div class="shop-results"><div class="product-grid" id="shop-grid"></div></div></section>`;
  const sort = document.querySelector("#sort-products");
  sort.value = activeSort;
  updateShopGrid();
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === "shop"));
  document.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    updateShopGrid();
  }));
  sort.addEventListener("change", () => { activeSort = sort.value; updateShopGrid(); });
}

function updateShopGrid() {
  const grid = document.querySelector("#shop-grid");
  if (!grid) return;
  let visible = products.filter(product => (activeFilter === "All styles" || product.category === activeFilter) && `${product.name} ${product.description} ${product.colors.join(" ")}`.toLowerCase().includes(activeSearch.toLowerCase()));
  if (activeSort === "price-low") visible = [...visible].sort((a, b) => a.price - b.price);
  if (activeSort === "price-high") visible = [...visible].sort((a, b) => b.price - a.price);
  if (activeSort === "name") visible = [...visible].sort((a, b) => a.name.localeCompare(b.name));
  document.querySelector("#shop-count").textContent = `${visible.length} ${visible.length === 1 ? "style" : "styles"}`;
  grid.innerHTML = visible.length ? visible.map(card).join("") : `<div class="no-results">No styles match that search.</div>`;
}

function renderProduct(slug) {
  const product = productBySlug(slug);
  if (!product) { renderNotFound(); return; }
  const gallery = [...new Set(Object.values(colorImages[product.slug] || {}))];
  if (!gallery.length) gallery.push(product.image);
  const mainImage = gallery.includes(product.image) ? product.image : gallery[0];
  app.innerHTML = `<section class="product-page container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="#home">Home</a><span>/</span><a href="#shop">The Collection</a><span>/</span><span>${product.name}</span></nav>
    <div class="product-layout"><div class="product-gallery"><div class="gallery-thumbs" aria-label="Product images">${gallery.map((image, index) => `<button class="gallery-thumb" data-gallery-image="${image}" aria-label="View ${product.name} image ${index + 1}" aria-current="${image === mainImage}"><img src="${imageBase}${image}" alt="" loading="lazy"></button>`).join("")}</div><div class="gallery-main"><img id="main-product-image" src="${imageBase}${mainImage}" alt="${product.name}" fetchpriority="high"></div></div>
    <div class="product-info"><p class="eyebrow">Lynux collection</p><div class="product-title-row"><h1>${product.name}</h1>${likeButton(product, "product-like")}</div><p class="product-price">${priceLabel(product)}</p><hr style="border:0;border-top:1px solid var(--line)"><p class="product-description">${product.description}</p><ul class="product-facts">${product.facts.map(fact => `<li>${fact}</li>`).join("")}</ul>
      <div class="option-group"><div class="option-heading"><span>Size</span><button type="button" data-size-guide>View size guide</button></div><div class="option-row" data-option-group="size">${[3, 4, 5, 6, 7, 8, 9].map(size => `<button class="option-chip" type="button" data-value="${size}" aria-pressed="false">${size}</button>`).join("")}</div></div>
      ${product.soles.length ? `<div class="option-group"><div class="option-heading"><span>Sole style</span></div><div class="option-row" data-option-group="sole">${product.soles.map(sole => `<button class="option-chip" type="button" data-value="${sole}" aria-pressed="false">${sole}</button>`).join("")}</div></div>` : ""}
      ${product.toeStyles ? `<div class="option-group"><div class="option-heading"><span>Toe style</span></div><div class="option-row" data-option-group="toe">${product.toeStyles.map(style => `<button class="option-chip" type="button" data-value="${style}" aria-pressed="false">${style}</button>`).join("")}</div></div>` : ""}
      <div class="option-group"><div class="option-heading"><span>Colour</span></div><div class="option-row" data-option-group="color">${product.colors.map(color => `<button class="option-chip color-chip" type="button" data-value="${color}" title="${color}" aria-label="${color}" aria-pressed="false" style="background:${colorValue(color)}"></button>`).join("")}</div><p class="color-name" id="selected-color">Select a colour</p></div>
      <div class="option-group"><div class="option-heading"><span>Quantity</span></div><div class="quantity-control"><button type="button" data-quantity="minus" aria-label="Decrease quantity">−</button><span id="product-quantity">1</span><button type="button" data-quantity="plus" aria-label="Increase quantity">+</button></div></div>
      <p class="selection-error" id="selection-error" aria-live="polite">Select your size${product.soles.length ? ", sole style" : ""}${product.toeStyles ? ", toe style" : ""} and colour to continue.</p>
      <div class="product-actions"><button class="button" type="button" data-add-cart>Add to bag</button><button class="button button-outline" type="button" data-buy-now>Buy now</button></div>
      <div class="purchase-note"><span>Handcrafted to order</span><span>R65 flat-rate delivery</span><span>Free defect exchange</span></div>
    </div></div>
    <div class="product-additional"><details class="product-accordion"><summary>Description</summary><p>${product.description} ${product.facts.join(" · ")}.</p></details><details class="product-accordion"><summary>Shipping &amp; Returns</summary><p>Flat-rate delivery is R65 across South Africa. Each pair is handcrafted to order. We do not accept returns for change of mind; manufacturing defect exchanges are free and courier costs are covered.</p><a class="text-link" href="https://lynuxespadrilles.co.za/returns/" target="_blank" rel="noreferrer">Full returns information ↗</a></details></div></section>`;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === "shop"));
  setupProduct(product);
}

function setupProduct(product) {
  const choices = { size: null, color: null, sole: null, toe: null };
  let quantity = 1;
  document.querySelectorAll("[data-option-group]").forEach(group => group.addEventListener("click", event => {
    const button = event.target.closest("[data-value]");
    if (!button) return;
    group.querySelectorAll("[data-value]").forEach(option => option.setAttribute("aria-pressed", String(option === button)));
    choices[group.dataset.optionGroup] = button.dataset.value;
    if (group.dataset.optionGroup === "color") {
      document.querySelector("#selected-color").textContent = button.dataset.value;
      const image = colorImages[product.slug]?.[button.dataset.value];
      if (image) showGalleryImage(image, `${product.name} in ${button.dataset.value}`);
    }
    updateSelectionError(product, choices);
  }));
  document.querySelectorAll("[data-gallery-image]").forEach(button => button.addEventListener("click", () => showGalleryImage(button.dataset.galleryImage, product.name)));
  document.querySelectorAll("[data-quantity]").forEach(button => button.addEventListener("click", () => {
    quantity = Math.max(1, quantity + (button.dataset.quantity === "plus" ? 1 : -1));
    document.querySelector("#product-quantity").textContent = quantity;
  }));
  document.querySelector("[data-size-guide]").addEventListener("click", () => document.querySelector("#size-dialog").showModal());
  const addButton = document.querySelector("[data-add-cart]");
  const buyButton = document.querySelector("[data-buy-now]");
  addButton.addEventListener("click", () => addProduct(product, choices, quantity, false));
  buyButton.addEventListener("click", () => addProduct(product, choices, quantity, true));
}

function showGalleryImage(image, alt) {
  const main = document.querySelector("#main-product-image");
  main.src = imageBase + image;
  main.alt = alt;
  document.querySelectorAll("[data-gallery-image]").forEach(item => item.setAttribute("aria-current", String(item.dataset.galleryImage === image)));
}

function updateSelectionError(product, choices) {
  const missing = [];
  if (!choices.size) missing.push("size");
  if (product.soles.length && !choices.sole) missing.push("sole style");
  if (product.toeStyles && !choices.toe) missing.push("toe style");
  if (!choices.color) missing.push("colour");
  document.querySelector("#selection-error").textContent = missing.length ? `Select your ${missing.join(", ")} to continue.` : "Your selection is ready.";
}

function addProduct(product, choices, quantity, goToCart) {
  const missing = [];
  if (!choices.size) missing.push("size");
  if (product.soles.length && !choices.sole) missing.push("sole style");
  if (product.toeStyles && !choices.toe) missing.push("toe style");
  if (!choices.color) missing.push("colour");
  if (missing.length) {
    document.querySelector("#selection-error").textContent = `Please select ${missing.join(", ")} first.`;
    return;
  }
  const variant = { size: choices.size, color: choices.color, sole: choices.sole, toe: choices.toe };
  const key = `${product.slug}|${variant.size}|${variant.color}|${variant.sole || ""}|${variant.toe || ""}`;
  const existing = cart.find(item => item.key === key);
  if (existing) existing.quantity += quantity;
  else cart.push({ key, slug: product.slug, variant, quantity });
  saveCart();
  if (goToCart) location.hash = "#cart";
  else {
    const button = document.querySelector("[data-add-cart]");
    button.textContent = "Added to bag";
    setTimeout(() => { if (button.isConnected) button.textContent = "Add to bag"; }, 1300);
  }
}

function renderCart() {
  if (!cart.length) {
    app.innerHTML = `<section class="cart-page container"><p class="eyebrow">Your selection</p><h1 class="page-title">Your bag</h1><div class="empty-cart"><p>Your bag is currently empty.</p><a class="button" href="#shop">Discover the collection</a></div></section>`;
    return;
  }
  const subtotalLow = cart.reduce((total, item) => total + productBySlug(item.slug).price * item.quantity, 0);
  const subtotalHigh = cart.reduce((total, item) => total + (productBySlug(item.slug).priceMax || productBySlug(item.slug).price) * item.quantity, 0);
  const rows = cart.map((item, index) => {
    const product = productBySlug(item.slug);
    const detail = [item.variant.color, `Size ${item.variant.size}`, item.variant.sole, item.variant.toe].filter(Boolean).join(" · ");
    return `<article class="cart-row"><a href="#product/${product.slug}"><img src="${imageBase}${product.image}" alt="${product.name}" loading="lazy"></a><div><h2><a href="#product/${product.slug}">${product.name}</a></h2><p class="cart-variant">${detail}</p><div class="quantity-control"><button type="button" data-cart-quantity="minus" data-index="${index}" aria-label="Decrease ${product.name} quantity">−</button><span>${item.quantity}</span><button type="button" data-cart-quantity="plus" data-index="${index}" aria-label="Increase ${product.name} quantity">+</button></div><div><button class="remove-item" type="button" data-remove-item="${index}">Remove</button></div></div><span class="cart-item-price">${amountRange(product.price * item.quantity, (product.priceMax || product.price) * item.quantity)}</span></article>`;
  }).join("");
  app.innerHTML = `<section class="cart-page container"><p class="eyebrow">Your selection</p><h1 class="page-title">Your bag <span class="shop-count">(${cartCount()} items)</span></h1><div class="cart-layout"><div>${rows}<a class="text-link" href="#shop">Continue shopping</a></div><aside class="cart-summary"><h2>Order summary</h2><div class="summary-line"><span>Subtotal</span><span>${amountRange(subtotalLow, subtotalHigh)}</span></div><div class="summary-line"><span>Delivery</span><span>${formatPrice(65)}</span></div><div class="summary-line summary-total"><span>Total</span><span>${amountRange(subtotalLow + 65, subtotalHigh + 65)}</span></div><button class="button" type="button" disabled>Checkout unavailable in preview</button><p class="checkout-disclaimer">This local draft does not place orders or connect to Paystack. Your live checkout remains unchanged.</p></aside></div></section>`;
  document.querySelectorAll("[data-cart-quantity]").forEach(button => button.addEventListener("click", () => {
    const item = cart[Number(button.dataset.index)];
    item.quantity += button.dataset.cartQuantity === "plus" ? 1 : -1;
    if (item.quantity < 1) cart.splice(Number(button.dataset.index), 1);
    saveCart(); renderCart();
  }));
  document.querySelectorAll("[data-remove-item]").forEach(button => button.addEventListener("click", () => {
    cart.splice(Number(button.dataset.removeItem), 1); saveCart(); renderCart();
  }));
}

function renderStory() {
  app.innerHTML = `<section class="story-editorial container"><div class="story-hero-copy"><p class="story-kicker">Our Story</p><h1>A journey<br>rooted in<br>craftsmanship.</h1><p class="story-intro">Lynux Espadrilles was born from a simple idea — to create timeless footwear that blends effortless style with exceptional craftsmanship.</p></div><div class="story-hero-image"><img src="story-images/orange-espadrilles.png" alt="Orange Lynux espadrilles worn on patterned steps" fetchpriority="high"></div></section>
    <section class="story-philosophy"><p class="story-kicker">Our Philosophy</p><h2>Comfort, beauty<br>and purpose.</h2><p>We believe great design should feel effortless. Our espadrilles are made to accompany you — from sunlit escapes to everyday moments.</p></section>`;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === "story"));
}

function renderContact() {
  app.innerHTML = `<section class="collection-intro"><div class="container"><h1 class="page-title">Get in touch</h1><p>Contact Lynux Espadrilles</p></div></section>
    <section class="contact-page container"><div class="contact-copy"><p class="eyebrow">Contact</p><h2>We’re here to help.</h2><p>For questions about a style, an order, or an exchange, contact Lynux through one of the channels below.</p><a class="button" href="mailto:info@lynuxespadrilles.co.za">Email Lynux <span aria-hidden="true">→</span></a></div>
      <div class="contact-methods"><a class="contact-method" href="mailto:info@lynuxespadrilles.co.za"><span class="contact-label">Email</span><span>info@lynuxespadrilles.co.za</span><span aria-hidden="true">↗</span></a><a class="contact-method" href="https://instagram.com/lynux_espadrille" target="_blank" rel="noreferrer"><span class="contact-label">Instagram</span><span>@lynux_espadrille</span><span aria-hidden="true">↗</span></a>
        <div class="contact-service"><span class="contact-label">Delivery</span><strong>R65 flat-rate delivery</strong><span>South Africa</span></div><div class="contact-service"><span class="contact-label">Returns &amp; exchanges</span><span>Free exchange for manufacturing defects.</span><a class="text-link" href="https://lynuxespadrilles.co.za/returns/" target="_blank" rel="noreferrer">Read the policy ↗</a></div></div></section>`;
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("is-active", link.dataset.nav === "contact"));
}

function renderNotFound() {
  app.innerHTML = `<section class="cart-page container"><p class="eyebrow">Lynux collection</p><h1 class="page-title">Style not found</h1><div class="empty-cart"><a class="button" href="#shop">Browse the collection</a></div></section>`;
}

function route() {
  const routeValue = location.hash.replace(/^#\/?/, "");
  document.body.classList.toggle("home-route", routeValue === "" || routeValue === "home");
  document.body.classList.toggle("story-route", routeValue === "story");
  document.querySelector("#primary-nav").classList.remove("is-open");
  document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  if (routeValue !== "shop") {
    activeSearch = "";
    document.querySelector("#site-search").value = "";
    document.querySelector("#search-panel").hidden = true;
  }
  if (routeValue.startsWith("product/")) renderProduct(routeValue.split("/")[1]);
  else if (routeValue === "shop") renderShop();
  else if (routeValue === "cart") renderCart();
  else if (routeValue === "liked") renderLiked();
  else if (routeValue === "story") renderStory();
  else if (routeValue === "contact") renderContact();
  else renderHome();
  updateBagCount();
  updateLikedCount();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelector("#menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector("#primary-nav");
  nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(nav.classList.contains("is-open")));
});
document.querySelector("#search-toggle").addEventListener("click", () => {
  const panel = document.querySelector("#search-panel");
  panel.hidden = !panel.hidden;
  if (!panel.hidden) document.querySelector("#site-search").focus();
});
document.querySelector("#search-close").addEventListener("click", () => { document.querySelector("#search-panel").hidden = true; });
document.querySelector("#site-search").addEventListener("input", event => {
  activeSearch = event.target.value.trim();
  if (location.hash !== "#shop") location.hash = "#shop";
  else updateShopGrid();
});
document.querySelector(".dialog-close").addEventListener("click", () => document.querySelector("#size-dialog").close());
document.addEventListener("click", event => {
  const button = event.target.closest("[data-like]");
  if (button) toggleLiked(button.dataset.like);
});
window.addEventListener("hashchange", route);
route();