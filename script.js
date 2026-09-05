const products = [
  { name: "Moomaya Sleeveless Peplum", price: "1400", sizes: "M / L / XL", image: "selling products/1/1.jpeg", video: "selling products/1/1.vid.mp4", description: "Product Name - Moomaya Sleeveless Peplum\nPrice - 1400\nSize - M / L / XL" },
  { name: "Sleeveless V-Neck Peplum Vest Top", price: "1500", sizes: "M / L", image: "selling products/2/2.jpeg", video: "selling products/2/2.vid.mp4", description: "Product Name - Sleeveless V-Neck Peplum Vest Top\nPrice - 1500\nSize - M / L" },
  { name: "Women's White Botanical Linen Top", price: "1500", sizes: "M / L", image: "selling products/3/3.jpeg", video: "selling products/3/3.vid.mp4", description: "Product Name - Women's White Botanical Linen Top\nPrice - 1500\nSize - M / L" },
  { name: "Vintage-Style Floral Print Sleeveless Top", price: "1000", sizes: "M / L", image: "selling products/4/4.jpeg", video: "selling products/4/4.vid.mp4", description: "Product Name - Vintage-Style Floral Print Sleeveless Top\nPrice - 1000\nSize - M / L" },
  { name: "Asymmetrical Blue V-Neck", price: "1200", sizes: "M / L", image: "selling products/5/5.jpeg", video: "selling products/5/5.vid.mp4", description: "Product Name - Asymmetrical Blue V-Neck\nPrice - 1200\nSize - M / L" },
  { name: "Women's Denim Blue Crop Top", price: "800", sizes: "S / M", image: "selling products/6/6.jpeg", video: "selling products/6/6.vid.mp4", description: "Product Name - Women's Denim Blue Crop Top\nPrice - 800\nSize - S / M" },
  { name: "Sleeveless Linen Peplum", price: "1400", sizes: "M / L", image: "selling products/7/7.jpeg", video: "selling products/7/7.vid.mp4", description: "Product Name - Sleeveless Linen Peplum\nPrice - 1400\nSize - M / L" },
  { name: "White Schiffi Embroidered Cotton Top", price: "1400", sizes: "M / L", image: "selling products/8/8.jpeg", video: "selling products/8/8.vid.mp4", description: "Product Name - White Schiffi Embroidered Cotton Top\nPrice - 1400\nSize - M / L" },
  { name: "Side Flap Linen Cotton Top", price: "1200", sizes: "M / L / XL", image: "selling products/10/WhatsApp Image 2026-09-05 at 6.42.16 PM (2).jpeg", images: ["selling products/10/WhatsApp Image 2026-09-05 at 6.42.16 PM (2).jpeg"], description: "Price - 1200\nFabric - Linen Cotton\nDescription - Top\nDetailing - Side Flap\nSize - M / L / XL" },
  { name: "Pure Cotton Zip-Back Top", price: "750", sizes: "M / L / XL / XXL", image: "selling products/11/WhatsApp Image 2026-09-05 at 6.42.11 PM.jpeg", images: ["selling products/11/WhatsApp Image 2026-09-05 at 6.42.11 PM.jpeg", "selling products/11/WhatsApp Image 2026-09-05 at 6.42.13 PM.jpeg"], description: "Price - 750\nFabric - Pure cotton\nDescription - Top\nDetailing - Zip on back\nSize - M / L / XL / XXL" },
  { name: "Bohemian Beaded Poncho Dress", price: "1200", sizes: "S / M / L / XL", image: "selling products/12/WhatsApp Image 2026-09-05 at 6.42.10 PM (1).jpeg", images: ["selling products/12/WhatsApp Image 2026-09-05 at 6.42.10 PM (1).jpeg", "selling products/12/WhatsApp Image 2026-09-05 at 6.42.10 PM.jpeg"], description: "Price - 1200\nFabric - Crepe Fabric\nDescription - Poncho Dress\nDetailing - Bohemian look, multi beads and shell lace on sleeves\nSize - S / M / L / XL" },
  { name: "Cotton Satin Midi Dress", price: "1500", sizes: "M / L / XL", image: "selling products/13/WhatsApp Image 2026-09-05 at 6.42.09 PM (1).jpeg", images: ["selling products/13/WhatsApp Image 2026-09-05 at 6.42.09 PM (1).jpeg", "selling products/13/WhatsApp Image 2026-09-05 at 6.42.09 PM.jpeg"], description: "Price - 1500\nFabric - Cotton Satin\nDescription - Midi Dress\nSize - M / L / XL" },
  { name: "Modal Tie-Dye Midi Dress", price: "1200", sizes: "S / M / L", image: "selling products/16/WhatsApp Image 2026-09-05 at 6.42.13 PM (1).jpeg", images: ["selling products/16/WhatsApp Image 2026-09-05 at 6.42.13 PM (1).jpeg", "selling products/16/WhatsApp Image 2026-09-05 at 6.42.13 PM (2).jpeg"], description: "Price - 1200\nFabric - Modal Tye & Dye\nDescription - Midi Dress\nDetailing - Crochet lace on waist\nSize - S / M / L" },
  { name: "Shimmer Crepe Midi Dress", price: "2300", sizes: "S / M", image: "selling products/17/WhatsApp Image 2026-09-05 at 6.42.11 PM (1).jpeg", images: ["selling products/17/WhatsApp Image 2026-09-05 at 6.42.11 PM (1).jpeg", "selling products/17/WhatsApp Image 2026-09-05 at 6.42.14 PM (2).jpeg"], description: "Price - 2300\nFabric - Shimmer Crepe\nDescription - Midi Dress\nDetailing - One sided brooch\nSize - S / M" },
  { name: "Pleated Collar Floral Top", price: "1500", sizes: "S / M / L", image: "selling products/18/WhatsApp Image 2026-09-05 at 6.42.12 PM (2).jpeg", images: ["selling products/18/WhatsApp Image 2026-09-05 at 6.42.12 PM (2).jpeg", "selling products/18/WhatsApp Image 2026-09-05 at 6.42.15 PM (1).jpeg"], description: "Price - 1500\nFabric - Polyester\nDescription - Floral Print Top\nDetailing - Pleated Collar\nSize - S / M / L" },
  { name: "Fancy Fabric Cow Print Top", price: "1200", sizes: "M / L / XL", image: "selling products/19/WhatsApp Image 2026-09-05 at 6.42.15 PM (2).jpeg", images: ["selling products/19/WhatsApp Image 2026-09-05 at 6.42.15 PM (2).jpeg"], description: "Price - 1200\nFabric - Fancy Fabric\nDescription - Cow Print Top\nSize - M / L / XL" },
  { name: "Olive Modal Tunic", price: "1800", sizes: "L / XL / XXL", image: "selling products/20/WhatsApp Image 2026-09-05 at 6.42.16 PM.jpeg", images: ["selling products/20/WhatsApp Image 2026-09-05 at 6.42.16 PM.jpeg"], description: "Price - 1800\nFabric - Modal\nDescription - Olive Tunic\nDetailing - Padded halter neck\nSize - L / XL / XXL" },
  { name: "Polyester Floral Print Top", price: "1500", sizes: "S / M / L", image: "selling products/21/WhatsApp Image 2026-09-05 at 6.42.16 PM (1).jpeg", images: ["selling products/21/WhatsApp Image 2026-09-05 at 6.42.16 PM (1).jpeg"], description: "Price - 1500\nFabric - Polyester\nDescription - Floral Print Top\nDetailing - Pleated Collar\nSize - S / M / L" },
  { name: "Crepe Floral Midi Dress", price: "1500", sizes: "S / M / L / XL", image: "selling products/22/WhatsApp Image 2026-09-05 at 6.42.12 PM.jpeg", images: ["selling products/22/WhatsApp Image 2026-09-05 at 6.42.12 PM.jpeg", "selling products/22/WhatsApp Image 2026-09-05 at 6.42.15 PM.jpeg"], description: "Price - 1500\nFabric - Crepe Fabric\nDescription - Midi Dress\nDetailing - Multi beads and shell lace on sleeves\nSize - S / M / L / XL" },
  { name: "Padded Halter Olive Tunic", price: "1800", sizes: "L / XL / XXL", image: "selling products/23/WhatsApp Image 2026-09-05 at 6.42.12 PM (1).jpeg", images: ["selling products/23/WhatsApp Image 2026-09-05 at 6.42.12 PM (1).jpeg"], description: "Price - 1800\nFabric - Modal\nDescription - Olive Tunic\nDetailing - Padded halter neck\nSize - L / XL / XXL" }
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

  heroSlideshow.querySelectorAll("video").forEach((video) => {
    const setHeroVideoSpeed = () => { video.playbackRate = 1.5; };
    setHeroVideoSpeed();
    video.addEventListener("loadedmetadata", setHeroVideoSpeed);
  });

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

function priceLabel(product) {
  return `${product.price} + delivery charge`;
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
        <p>${priceLabel(product)} <span aria-hidden="true">·</span> ${product.sizes}</p>
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
  const mediaItems = [];
  if (product.video) mediaItems.push(`<div class="modal-slide is-active"><video autoplay muted loop playsinline preload="metadata"><source src="${product.video}" type="video/mp4"></video></div>`);
  (product.images || [product.image]).forEach((image, index) => {
    mediaItems.push(`<div class="modal-slide${!product.video && index === 0 ? " is-active" : ""}"><img src="${image}" alt="${product.name} ${index + 1}"></div>`);
  });
  media.innerHTML = `
    ${mediaItems.join("")}
    <div class="modal-controls">
      <button class="modal-arrow" type="button" data-previous aria-label="Previous image">←</button>
      <div class="modal-dots" aria-label="Product media navigation">${mediaItems.map((item, index) => `<button class="modal-dot${index === 0 ? " is-active" : ""}" type="button" data-slide="${index}" aria-label="Show product media ${index + 1}"></button>`).join("")}</div>
      <button class="modal-arrow" type="button" data-next aria-label="Next image">→</button>
    </div>
  `;
  media.querySelector("[data-previous]").addEventListener("click", () => changeSlide(-1));
  media.querySelector("[data-next]").addEventListener("click", () => changeSlide(1));
  media.querySelectorAll("[data-slide]").forEach((dot) => dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide))));
}

function showSlide(slideIndex) {
  const slideCount = media.querySelectorAll(".modal-slide").length;
  activeSlide = (slideIndex + slideCount) % slideCount;
  media.querySelectorAll(".modal-slide").forEach((slide, index) => slide.classList.toggle("is-active", index === activeSlide));
  media.querySelectorAll(".modal-dot").forEach((dot, index) => dot.classList.toggle("is-active", index === activeSlide));
}

function changeSlide(direction) { showSlide(activeSlide + direction); }

function openProduct(index) {
  activeProduct = index;
  activeSlide = 0;
  const product = products[index];
  modalTitle.textContent = product.name;
  modalIndex.textContent = `${String(index + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}  ·  ${priceLabel(product)}`;
  modalDescription.textContent = product.description.replace(/Price - [^\n]+/, `Price - ${priceLabel(product)}`);
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
