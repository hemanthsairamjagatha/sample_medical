/* ============================================================
   ABC Pharmacy — Customer Site Script (script.js)
   ============================================================ */

// ─── DEFAULT PRODUCT DATA ────────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Dolo 650 Tablet (10s)",
    brand: "Micro Labs",
    category: "Medicines",
    rx: true,
    mrp: 30,
    price: 24,
    rating: 4.7,
    reviews: 2840,
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    desc: "Dolo 650 is used for the temporary relief of fever and mild to moderate pain such as headache, muscular aches, and cold symptoms.",
    stock: 500
  },
  {
    id: 2,
    name: "Cetirizine 10mg (10s)",
    brand: "Cipla",
    category: "Medicines",
    rx: false,
    mrp: 35,
    price: 28,
    rating: 4.5,
    reviews: 1620,
    img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80",
    desc: "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching, and sneezing.",
    stock: 300
  },
  {
    id: 3,
    name: "Vitamin D3+K2 60 Tabs",
    brand: "HealthVit",
    category: "Vitamins",
    rx: false,
    mrp: 699,
    price: 499,
    rating: 4.6,
    reviews: 985,
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80",
    desc: "Supports bone health, immunity, and cardiovascular function. Vitamin D3 works synergistically with K2 for optimal calcium absorption.",
    stock: 150
  },
  {
    id: 4,
    name: "Neem Face Wash 100ml",
    brand: "Himalaya",
    category: "Skincare",
    rx: false,
    mrp: 180,
    price: 153,
    rating: 4.4,
    reviews: 3210,
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
    desc: "Himalaya Neem Face Wash is enriched with the goodness of neem and turmeric to effectively control pimples and keep skin clear.",
    stock: 200
  },
  {
    id: 5,
    name: "Johnson's Baby Powder 200g",
    brand: "J&J",
    category: "Baby Care",
    rx: false,
    mrp: 220,
    price: 187,
    rating: 4.8,
    reviews: 4580,
    img: "https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=400&q=80",
    desc: "Johnson's Baby Powder keeps your baby's skin soft, smooth, and dry. Clinically proven to be gentle and mild.",
    stock: 180
  },
  {
    id: 6,
    name: "Omron BP Monitor HEM-7124",
    brand: "Omron",
    category: "Devices",
    rx: false,
    mrp: 2499,
    price: 1999,
    rating: 4.6,
    reviews: 8920,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    desc: "Fully automatic blood pressure monitor with IntelliSense technology for accurate, comfortable measurement. Stores 30 readings.",
    stock: 75
  },
  {
    id: 7,
    name: "Ashwagandha 60 Tabs",
    brand: "Patanjali",
    category: "Ayurvedic",
    rx: false,
    mrp: 150,
    price: 120,
    rating: 4.3,
    reviews: 2100,
    img: "https://images.unsplash.com/photo-1596453400691-8c5e1d86a32f?w=400&q=80",
    desc: "Ashwagandha helps reduce stress and anxiety, boosts energy levels, and improves concentration. Made from pure Ashwagandha root extract.",
    stock: 220
  },
  {
    id: 8,
    name: "Omega-3 Fish Oil 60 Caps",
    brand: "Naturo Sciences",
    category: "Vitamins",
    rx: false,
    mrp: 899,
    price: 649,
    rating: 4.5,
    reviews: 1340,
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80",
    desc: "High-strength Omega-3 fish oil capsules with EPA and DHA to support heart, brain, and joint health.",
    stock: 130
  },
  {
    id: 9,
    name: "Aloe Vera Gel 150g",
    brand: "Mamaearth",
    category: "Skincare",
    rx: false,
    mrp: 249,
    price: 199,
    rating: 4.4,
    reviews: 5670,
    img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
    desc: "Pure aloe vera gel with no harsh chemicals. Soothes sunburn, moisturises skin, and reduces acne redness.",
    stock: 250
  },
  {
    id: 10,
    name: "Digital Thermometer",
    brand: "Dr. Morepen",
    category: "Devices",
    rx: false,
    mrp: 299,
    price: 199,
    rating: 4.2,
    reviews: 3890,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    desc: "Fast and accurate digital thermometer with fever alarm and large LCD display. Suitable for all ages.",
    stock: 400
  },
  {
    id: 11,
    name: "Ibugesic 400mg (15s)",
    brand: "Cipla",
    category: "Medicines",
    rx: true,
    mrp: 45,
    price: 38,
    rating: 4.6,
    reviews: 1980,
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
    desc: "Ibuprofen 400mg for relief of mild to moderate pain, fever, and inflammation. Works fast in 20 minutes.",
    stock: 350
  },
  {
    id: 12,
    name: "Multivitamin 30 Tabs",
    brand: "Revital",
    category: "Vitamins",
    rx: false,
    mrp: 350,
    price: 280,
    rating: 4.5,
    reviews: 7200,
    img: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80",
    desc: "Complete multivitamin with 10 vitamins, 9 minerals, and ginseng for daily health, energy, and immunity support.",
    stock: 190
  }
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let products = [];
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSearch = '';
let currentSlide = 0;
let carouselTimer = null;
let totalSlides = 3;

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderProducts();
  initCarousel();
  initCategoryTabs();
  initProductFilterTabs();
  initSearch();
  initCartUI();
  initWishlist();
  initPrescriptionUpload();
  initPincodeModal();
  initQuickView();
  initStickyHeader();
  initConcernCards();
});

// ─── DATA HELPERS ─────────────────────────────────────────────────────────────
function loadData() {
  const stored = localStorage.getItem('abc_pharmacy_products');
  if (stored) {
    try { products = JSON.parse(stored); } catch { products = [...DEFAULT_PRODUCTS]; }
  } else {
    products = [...DEFAULT_PRODUCTS];
    saveProducts();
  }
  const storedCart = localStorage.getItem('abc_pharmacy_cart');
  if (storedCart) { try { cart = JSON.parse(storedCart); } catch { cart = []; } }
  const storedWish = localStorage.getItem('abc_pharmacy_wishlist');
  if (storedWish) { try { wishlist = JSON.parse(storedWish); } catch { wishlist = []; } }
}

function saveProducts() {
  localStorage.setItem('abc_pharmacy_products', JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem('abc_pharmacy_cart', JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem('abc_pharmacy_wishlist', JSON.stringify(wishlist));
}

// ─── STICKY HEADER ───────────────────────────────────────────────────────────
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ─── CAROUSEL ─────────────────────────────────────────────────────────────────
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.dot');
  const carousel = document.getElementById('heroCarousel');

  function goTo(idx) {
    currentSlide = (idx + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${(currentSlide * 100) / totalSlides}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  function startTimer() {
    stopTimer();
    carouselTimer = setInterval(() => goTo(currentSlide + 1), 4000);
  }

  function stopTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
  }

  document.getElementById('prevSlide').addEventListener('click', () => { goTo(currentSlide - 1); startTimer(); });
  document.getElementById('nextSlide').addEventListener('click', () => { goTo(currentSlide + 1); startTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startTimer(); }));

  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);

  // Touch support
  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? currentSlide + 1 : currentSlide - 1); startTimer(); }
  });

  startTimer();
}

// ─── CATEGORY TABS (header) ──────────────────────────────────────────────────
function initCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      currentFilter = cat === 'all' ? 'all' : cat;
      syncProductFilterTabs(currentFilter);
      renderProducts();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function syncProductFilterTabs(filter) {
  document.querySelectorAll('.pf-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.pf === filter || (filter === 'all' && tab.dataset.pf === 'all'));
  });
}

// ─── PRODUCT FILTER TABS ──────────────────────────────────────────────────────
function initProductFilterTabs() {
  document.querySelectorAll('.pf-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pf-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.pf;
      renderProducts();
    });
  });
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function initSearch() {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    currentSearch = input.value.trim().toLowerCase();
    renderProducts();
    if (currentSearch) {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ─── PRODUCT RENDERING ────────────────────────────────────────────────────────
function getFilteredProducts() {
  // Re-read products from localStorage in case admin updated them
  const stored = localStorage.getItem('abc_pharmacy_products');
  if (stored) { try { products = JSON.parse(stored); } catch {} }

  return products.filter(p => {
    const matchCat = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = !currentSearch ||
      p.name.toLowerCase().includes(currentSearch) ||
      p.brand.toLowerCase().includes(currentSearch) ||
      (p.category && p.category.toLowerCase().includes(currentSearch));
    return matchCat && matchSearch;
  });
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '★';
    else if (i === full && half) html += '½';
    else html += '☆';
  }
  return html;
}

function getDiscount(mrp, price) {
  return Math.round(((mrp - price) / mrp) * 100);
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = filtered.map(p => {
    const disc = getDiscount(p.mrp, p.price);
    const isWishlisted = wishlist.includes(p.id);
    const cartItem = cart.find(c => c.id === p.id);
    const inCart = !!cartItem;

    return `
      <div class="product-card" data-id="${p.id}" data-category="${p.category}">
        <div class="product-img-wrap" onclick="openQuickView(${p.id})">
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
          <div class="product-badges">
            ${p.rx ? '<span class="badge-rx">Rx</span>' : ''}
            <span class="badge-discount">${disc}% OFF</span>
          </div>
          <button class="wishlist-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist(event,${p.id})" title="Wishlist">
            ${isWishlisted ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="product-body">
          <div class="product-brand">${p.brand}</div>
          <div class="product-name" onclick="openQuickView(${p.id})">${p.name}</div>
          <div class="product-rating">
            <span class="stars">${renderStars(p.rating)}</span>
            <span class="rating-val">${p.rating} (${p.reviews?.toLocaleString() || 0})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">₹${p.price}</span>
            <span class="product-mrp">₹${p.mrp}</span>
            <span class="product-off">${disc}% off</span>
          </div>
          <button class="add-to-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${p.id})">
            ${inCart ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ─── WISHLIST ─────────────────────────────────────────────────────────────────
function initWishlist() {}

function toggleWishlist(e, id) {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) { wishlist.push(id); } else { wishlist.splice(idx, 1); }
  saveWishlist();
  renderProducts();
}

// ─── CART ─────────────────────────────────────────────────────────────────────
function initCartUI() {
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  updateCartCount();
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  renderCart();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += 1; } else { cart.push({ ...product, qty: 1 }); }
  saveCart();
  updateCartCount();
  renderProducts();
  showCartFlash();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
  renderProducts();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCart() {
  const list = document.getElementById('cartItemsList');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const subtotalEl = document.getElementById('cartSubtotal');

  if (cart.length === 0) {
    empty.style.display = 'flex';
    list.innerHTML = '';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">×</button>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
}

function showCartFlash() {
  const btn = document.getElementById('cartBtn');
  btn.style.transform = 'scale(1.25)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
}

// ─── PINCODE MODAL ────────────────────────────────────────────────────────────
function initPincodeModal() {
  const pinBtn = document.getElementById('pinBtn');
  const modal = document.getElementById('pinModal');
  const closeBtn = document.getElementById('pinModalClose');
  const applyBtn = document.getElementById('applyPin');
  const pinInput = document.getElementById('pinInput');
  const pinDisplay = document.getElementById('pinDisplay');

  pinBtn.addEventListener('click', () => modal.classList.add('open'));
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

  applyBtn.addEventListener('click', () => {
    const val = pinInput.value.trim();
    if (/^\d{6}$/.test(val)) {
      pinDisplay.textContent = val;
      modal.classList.remove('open');
    } else {
      pinInput.style.borderColor = '#e63946';
      pinInput.placeholder = 'Enter valid 6-digit pincode';
      setTimeout(() => { pinInput.style.borderColor = ''; }, 1500);
    }
  });

  pinInput.addEventListener('keydown', e => { if (e.key === 'Enter') applyBtn.click(); });
}

// ─── QUICK VIEW MODAL ─────────────────────────────────────────────────────────
function initQuickView() {
  const modal = document.getElementById('quickViewModal');
  document.getElementById('qvClose').addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function openQuickView(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  const disc = getDiscount(p.mrp, p.price);
  const cartItem = cart.find(c => c.id === id);
  const inCart = !!cartItem;

  document.getElementById('qvInner').innerHTML = `
    <div class="qv-img">
      <img src="${p.img}" alt="${p.name}"/>
    </div>
    <div class="qv-details">
      <div class="qv-brand">${p.brand}</div>
      <h2 class="qv-name">${p.name}</h2>
      <div class="qv-rating">
        <span class="qv-stars">${renderStars(p.rating)}</span>
        <span class="qv-rating-val">${p.rating} (${p.reviews?.toLocaleString() || 0} reviews)</span>
      </div>
      <div class="qv-price-row">
        <span class="qv-price">₹${p.price}</span>
        <span class="qv-mrp">₹${p.mrp}</span>
        <span class="qv-discount">${disc}% OFF</span>
      </div>
      <div class="qv-badges">
        ${p.rx ? '<span class="badge-rx">Rx Required</span>' : ''}
        <span class="badge-discount">In Stock (${p.stock || 'N/A'})</span>
      </div>
      <p class="qv-desc">${p.desc || 'No description available.'}</p>
      <button class="btn-primary btn-full ${inCart ? 'added' : ''}" onclick="addToCart(${p.id}); this.textContent='✓ Added'; this.classList.add('added');">
        ${inCart ? '✓ Added to Cart' : '+ Add to Cart'}
      </button>
    </div>
  `;
  document.getElementById('quickViewModal').classList.add('open');
}

// ─── CONCERN CARDS ───────────────────────────────────────────────────────────
function initConcernCards() {
  document.querySelectorAll('.concern-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      currentFilter = cat;
      syncProductFilterTabs(cat);
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
      renderProducts();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ─── PRESCRIPTION UPLOAD ──────────────────────────────────────────────────────
function initPrescriptionUpload() {
  const dropArea = document.getElementById('rxDropArea');
  const fileInput = document.getElementById('rxFileInput');
  const label = document.getElementById('rxDropLabel');

  ['dragenter', 'dragover'].forEach(evt => {
    dropArea.addEventListener(evt, e => { e.preventDefault(); dropArea.classList.add('dragover'); });
  });
  ['dragleave', 'drop'].forEach(evt => {
    dropArea.addEventListener(evt, e => { e.preventDefault(); dropArea.classList.remove('dragover'); });
  });

  dropArea.addEventListener('drop', e => {
    const file = e.dataTransfer.files[0];
    if (file) showFile(file);
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) showFile(fileInput.files[0]);
  });

  function showFile(file) {
    label.textContent = `✓ ${file.name}`;
    label.style.color = '#a7f3d0';
    label.style.fontWeight = '700';
  }
}
