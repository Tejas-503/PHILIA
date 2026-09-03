const products = [
  { name: "Moomaya Sleeveless Peplum", price: "1400", sizes: "M / L / XL", image: "selling products/1/1.jpeg", video: "selling products/1/1.vid.mp4", description: "Product Name - Moomaya Sleeveless Peplum\nPrice - 1400\nSize - M / L / XL" },
  { name: "Sleeveless V-Neck Peplum Vest Top", price: "1500", sizes: "M / L", image: "selling products/2/2.jpeg", video: "selling products/2/2.vid.mp4", description: "Product Name - Sleeveless V-Neck Peplum Vest Top\nPrice - 1500\nSize - M / L" },
  { name: "Women's White Botanical Linen Top", price: "1500", sizes: "M / L", image: "selling products/3/3.jpeg", video: "selling products/3/3.vid.mp4", description: "Product Name - Women's White Botanical Linen Top\nPrice - 1500\nSize - M / L" },
  { name: "Vintage-Style Floral Print Sleeveless Top", price: "1000", sizes: "M / L", image: "selling products/4/4.jpeg", video: "selling products/4/4.vid.mp4", description: "Product Name - Vintage-Style Floral Print Sleeveless Top\nPrice - 1000\nSize - M / L" },
  { name: "Asymmetrical Blue V-Neck", price: "1200", sizes: "M / L", image: "selling products/5/5.jpeg", video: "selling products/5/5.vid.mp4", description: "Product Name - Asymmetrical Blue V-Neck\nPrice - 1200\nSize - M / L" },
  { name: "Women's Denim Blue Crop Top", price: "800", sizes: "S / M", image: "selling products/6/6.jpeg", video: "selling products/6/6.vid.mp4", description: "Product Name - Women's Denim Blue Crop Top\nPrice - 800\nSize - S / M" },
  { name: "Sleeveless Linen Peplum", price: "1400", sizes: "M / L", image: "selling products/7/7.jpeg", video: "selling products/7/7.vid.mp4", description: "Product Name - Sleeveless Linen Peplum\nPrice - 1400\nSize - M / L" },
  { name: "White Schiffi Embroidered Cotton Top", price: "1400", sizes: "M / L", image: "selling products/8/8.jpeg", video: "selling products/8/8.vid.mp4", description: "Product Name - White Schiffi Embroidered Cotton Top\nPrice - 1400\nSize - M / L" },
  { name: "Asymmetric Printed Sleeveless Top", price: "800", sizes: "M / L", image: "selling products/9/9.jpeg", video: "selling products/9/9.vid.mp4", description: "Product Name - Asymmetric Printed Sleeveless Top\nPrice - 800\nSize - M / L" }
];

const grid = document.querySelector("#product-grid");
const modal = document.querySelector("#product-modal");
const media = document.querySelector("#modal-media");
const modalTitle = document.querySelector("#modal-title");
const modalIndex = document.querySelector("#modal-index");
const modalDescription = document.querySelector("#modal-description");
const whatsapp = document.querySelector("#modal-whatsapp");
const heroSlideshow = document.querySelector("[data-hero-slideshow]");
let activeProduct = 0;
let activeSlide = 0;
let touchStartX = 0;

if (heroSlideshow) {
  const heroSlides = heroSlideshow.querySelectorAll(".hero-slide");
  const heroDots = document.querySelectorAll("[data-hero-slide]");
  let activeHeroSlide = 0;

  function showHeroSlide(index) {
    activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeHeroSlide));
    heroDots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === activeHeroSlide));
  }

  heroDots.forEach((dot) => dot.addEventListener("click", () => showHeroSlide(Number(dot.dataset.heroSlide))));
  window.setInterval(() => showHeroSlide(activeHeroSlide + 1), 6500);
}

function whatsappUrl(product) {
  const message = `Hi! I'm interested in the ${product.name}. Is it available?`;
  return `https://wa.me/919619113823?text=${encodeURIComponent(message)}`;
}

function renderCards() {
  grid.innerHTML = products.map((product, index) => `
    <article class="product-card" tabindex="0" data-product="${index}" aria-label="View ${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-open" aria-hidden="true">↗</span>
      </div>
      <div class="product-meta">
        <h3>${product.name}</h3>
        <p>${product.price} <span aria-hidden="true">·</span> ${product.sizes}</p>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openProduct(Number(card.dataset.product)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProduct(Number(card.dataset.product));
      }
    });
  });
}

function renderModalMedia(product) {
  media.innerHTML = `
    <div class="modal-slide is-active"><video autoplay muted loop playsinline preload="metadata"><source src="${product.video}" type="video/mp4"></video></div>
    <div class="modal-slide"><img src="${product.image}" alt="${product.name}"></div>
    <div class="modal-controls">
      <button class="modal-arrow" type="button" data-previous aria-label="Previous image">←</button>
      <div class="modal-dots" aria-label="Product media navigation"><button class="modal-dot is-active" type="button" data-slide="0" aria-label="Show product video"></button><button class="modal-dot" type="button" data-slide="1" aria-label="Show product image"></button></div>
      <button class="modal-arrow" type="button" data-next aria-label="Next image">→</button>
    </div>
  `;
  media.querySelector("[data-previous]").addEventListener("click", () => changeSlide(-1));
  media.querySelector("[data-next]").addEventListener("click", () => changeSlide(1));
  media.querySelectorAll("[data-slide]").forEach((dot) => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
}

function showSlide(slideIndex) {
  activeSlide = (slideIndex + 2) % 2;
  media.querySelectorAll(".modal-slide").forEach((slide, index) => slide.classList.toggle("is-active", index === activeSlide));
  media.querySelectorAll(".modal-dot").forEach((dot, index) => dot.classList.toggle("is-active", index === activeSlide));
}

function changeSlide(direction) { showSlide(activeSlide + direction); }

function openProduct(index) {
  activeProduct = index;
  activeSlide = 0;
  const product = products[index];
  modalTitle.textContent = product.name;
  modalIndex.textContent = `${String(index + 1).padStart(2, "0")} / 09  ·  ${product.price}`;
  modalDescription.textContent = product.description;
  whatsapp.href = whatsappUrl(product);
  renderModalMedia(product);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  media.innerHTML = "";
}

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  if (event.key === "ArrowRight" && modal.classList.contains("is-open")) changeSlide(1);
  if (event.key === "ArrowLeft" && modal.classList.contains("is-open")) changeSlide(-1);
});
media.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
media.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 45) changeSlide(distance < 0 ? 1 : -1);
}, { passive: true });

renderCards();
