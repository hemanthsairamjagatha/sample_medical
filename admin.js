/* ============================================================
   ABC Pharmacy — Admin Panel Script (admin.js)
   ============================================================ */

// ─── DEFAULT DATA ─────────────────────────────────────────────────────────────
const DEFAULT_PRODUCTS = [
  { id:1,  name:"Dolo 650 Tablet (10s)",       brand:"Micro Labs",      category:"Medicines",    rx:true,  mrp:30,   price:24,   stock:500, img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80", desc:"Paracetamol 650mg for fever and pain relief." },
  { id:2,  name:"Cetirizine 10mg (10s)",        brand:"Cipla",           category:"Medicines",    rx:false, mrp:35,   price:28,   stock:300, img:"https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80", desc:"Antihistamine for allergy relief." },
  { id:3,  name:"Vitamin D3+K2 60 Tabs",        brand:"HealthVit",       category:"Vitamins",     rx:false, mrp:699,  price:499,  stock:150, img:"https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80", desc:"Bone health and immunity support." },
  { id:4,  name:"Neem Face Wash 100ml",         brand:"Himalaya",        category:"Skincare",     rx:false, mrp:180,  price:153,  stock:200, img:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80", desc:"Controls pimples and purifies skin." },
  { id:5,  name:"Johnson's Baby Powder 200g",   brand:"J&J",             category:"Baby Care",    rx:false, mrp:220,  price:187,  stock:180, img:"https://images.unsplash.com/photo-1559181567-c3190ca9d222?w=400&q=80", desc:"Keeps baby skin soft and dry." },
  { id:6,  name:"Omron BP Monitor HEM-7124",    brand:"Omron",           category:"Devices",      rx:false, mrp:2499, price:1999, stock:75,  img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80", desc:"Fully automatic blood pressure monitor." },
  { id:7,  name:"Ashwagandha 60 Tabs",          brand:"Patanjali",       category:"Ayurvedic",    rx:false, mrp:150,  price:120,  stock:220, img:"https://images.unsplash.com/photo-1596453400691-8c5e1d86a32f?w=400&q=80", desc:"Reduces stress, boosts energy." },
  { id:8,  name:"Omega-3 Fish Oil 60 Caps",     brand:"Naturo Sciences", category:"Vitamins",     rx:false, mrp:899,  price:649,  stock:130, img:"https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80", desc:"Supports heart and brain health." },
  { id:9,  name:"Aloe Vera Gel 150g",           brand:"Mamaearth",       category:"Skincare",     rx:false, mrp:249,  price:199,  stock:250, img:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80", desc:"Soothes skin and reduces acne." },
  { id:10, name:"Digital Thermometer",          brand:"Dr. Morepen",     category:"Devices",      rx:false, mrp:299,  price:199,  stock:400, img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80", desc:"Fast accurate digital thermometer." },
  { id:11, name:"Ibugesic 400mg (15s)",         brand:"Cipla",           category:"Medicines",    rx:true,  mrp:45,   price:38,   stock:350, img:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80", desc:"Ibuprofen for pain and inflammation." },
  { id:12, name:"Multivitamin 30 Tabs",         brand:"Revital",         category:"Vitamins",     rx:false, mrp:350,  price:280,  stock:190, img:"https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80", desc:"Daily multivitamin with ginseng." }
];

const DEFAULT_ORDERS = [
  { id:"ORD-1001", customer:"Priya Sharma",     phone:"9820123456", email:"priya@email.com",    address:"42, Andheri West, Mumbai 400058", items:[{id:1,qty:2},{id:3,qty:1}], total:1046, payment:"UPI",        status:"Delivered",        date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 9:00 AM"},{label:"Processing",time:"22 Oct, 9:30 AM"},{label:"Out for Delivery",time:"22 Oct, 12:00 PM"},{label:"Delivered",time:"22 Oct, 1:45 PM"}] },
  { id:"ORD-1002", customer:"Rahul Mehta",      phone:"9871234567", email:"rahul@email.com",    address:"B-204, Koramangala, Bengaluru 560034", items:[{id:6,qty:1}], total:1999, payment:"Credit Card", status:"Delivered",        date:"21 Oct 2024", history:[{label:"Order Placed",time:"21 Oct, 10:15 AM"},{label:"Processing",time:"21 Oct, 11:00 AM"},{label:"Out for Delivery",time:"21 Oct, 2:00 PM"},{label:"Delivered",time:"21 Oct, 4:30 PM"}] },
  { id:"ORD-1003", customer:"Ananya Gupta",     phone:"9765432100", email:"ananya@email.com",   address:"12, Lajpat Nagar, Delhi 110024", items:[{id:4,qty:2},{id:9,qty:1}], total:505, payment:"COD",         status:"Out for Delivery", date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 8:00 AM"},{label:"Processing",time:"22 Oct, 8:45 AM"},{label:"Out for Delivery",time:"22 Oct, 11:00 AM"}] },
  { id:"ORD-1004", customer:"Vikram Singh",     phone:"9612345678", email:"vikram@email.com",   address:"56, Civil Lines, Jaipur 302006", items:[{id:11,qty:3},{id:2,qty:2}], total:170, payment:"UPI",        status:"Processing",       date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 7:30 AM"},{label:"Processing",time:"22 Oct, 8:00 AM"}] },
  { id:"ORD-1005", customer:"Sunita Patel",     phone:"9523456789", email:"sunita@email.com",   address:"78, Navrangpura, Ahmedabad 380009", items:[{id:5,qty:1},{id:8,qty:2}], total:1485, payment:"Debit Card", status:"Pending",         date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 6:00 AM"}] },
  { id:"ORD-1006", customer:"Aditya Kumar",     phone:"9434567890", email:"aditya@email.com",   address:"33, Salt Lake, Kolkata 700091", items:[{id:7,qty:2},{id:12,qty:1}], total:520, payment:"UPI",         status:"Delivered",        date:"20 Oct 2024", history:[{label:"Order Placed",time:"20 Oct, 9:00 AM"},{label:"Processing",time:"20 Oct, 9:45 AM"},{label:"Out for Delivery",time:"20 Oct, 12:30 PM"},{label:"Delivered",time:"20 Oct, 3:00 PM"}] },
  { id:"ORD-1007", customer:"Meera Nair",       phone:"9345678901", email:"meera@email.com",    address:"22, Viman Nagar, Pune 411014", items:[{id:10,qty:1},{id:2,qty:3}], total:283, payment:"COD",          status:"Cancelled",        date:"19 Oct 2024", history:[{label:"Order Placed",time:"19 Oct, 3:00 PM"},{label:"Cancelled",time:"19 Oct, 3:30 PM"}] },
  { id:"ORD-1008", customer:"Rohit Verma",      phone:"9256789012", email:"rohit@email.com",    address:"8, Banjara Hills, Hyderabad 500034", items:[{id:3,qty:1},{id:6,qty:1}], total:2498, payment:"UPI",   status:"Processing",       date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 5:00 AM"},{label:"Processing",time:"22 Oct, 5:30 AM"}] },
  { id:"ORD-1009", customer:"Kavya Iyer",       phone:"9167890123", email:"kavya@email.com",    address:"18, T Nagar, Chennai 600017", items:[{id:1,qty:5},{id:11,qty:2}], total:196, payment:"Debit Card",  status:"Delivered",        date:"18 Oct 2024", history:[{label:"Order Placed",time:"18 Oct, 8:00 AM"},{label:"Processing",time:"18 Oct, 8:30 AM"},{label:"Out for Delivery",time:"18 Oct, 10:00 AM"},{label:"Delivered",time:"18 Oct, 12:15 PM"}] },
  { id:"ORD-1010", customer:"Arjun Reddy",      phone:"9078901234", email:"arjun@email.com",    address:"91, Jubilee Hills, Hyderabad 500033", items:[{id:8,qty:1},{id:12,qty:2}], total:1209, payment:"Credit Card", status:"Out for Delivery", date:"22 Oct 2024", history:[{label:"Order Placed",time:"22 Oct, 4:00 AM"},{label:"Processing",time:"22 Oct, 5:00 AM"},{label:"Out for Delivery",time:"22 Oct, 9:00 AM"}] }
];

const DEFAULT_CUSTOMERS = [
  { id:1, name:"Priya Sharma",  initials:"PS", phone:"9820123456", email:"priya@email.com",  orders:8,  spent:12450, joined:"Jan 2023" },
  { id:2, name:"Rahul Mehta",   initials:"RM", phone:"9871234567", email:"rahul@email.com",  orders:5,  spent:8920,  joined:"Mar 2023" },
  { id:3, name:"Ananya Gupta",  initials:"AG", phone:"9765432100", email:"ananya@email.com", orders:12, spent:19800, joined:"Nov 2022" },
  { id:4, name:"Vikram Singh",  initials:"VS", phone:"9612345678", email:"vikram@email.com", orders:3,  spent:4200,  joined:"Jun 2023" },
  { id:5, name:"Sunita Patel",  initials:"SP", phone:"9523456789", email:"sunita@email.com", orders:7,  spent:11200, joined:"Feb 2023" },
  { id:6, name:"Aditya Kumar",  initials:"AK", phone:"9434567890", email:"aditya@email.com", orders:15, spent:24500, joined:"Sep 2022" },
  { id:7, name:"Meera Nair",    initials:"MN", phone:"9345678901", email:"meera@email.com",  orders:4,  spent:6700,  joined:"Apr 2023" },
  { id:8, name:"Rohit Verma",   initials:"RV", phone:"9256789012", email:"rohit@email.com",  orders:9,  spent:16900, joined:"Dec 2022" }
];

const CATEGORIES_DEFAULT = [
  { name:"Medicines",     icon:"💊", count:45 },
  { name:"Vitamins",      icon:"🌿", count:32 },
  { name:"Skincare",      icon:"🧴", count:28 },
  { name:"Baby Care",     icon:"👶", count:19 },
  { name:"Devices",       icon:"🩺", count:24 },
  { name:"Ayurvedic",     icon:"🌱", count:38 },
  { name:"Personal Care", icon:"🚿", count:22 }
];

const REVENUE_DATA = [
  { month:"Jan", value:82000 },
  { month:"Feb", value:94500 },
  { month:"Mar", value:71000 },
  { month:"Apr", value:108000 },
  { month:"May", value:124500 },
  { month:"Jun", value:99000 }
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let products = [];
let orders = [];
let customers = [];
let categories = [];
let currentSection = 'dashboard';
let editingProductId = null;
let confirmCallback = null;
let orderStatusFilter = 'all';
let productSearchTerm = '';
let customerSearchTerm = '';

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadAllData();
  initSidebar();
  renderDashboard();
  renderProductsTable();
  renderOrdersTable();
  renderCustomersTable();
  renderCategoriesGrid();
  initProductModal();
  initOrderPanel();
  initOrderFilter();
  initProductSearch();
  initCustomerSearch();
  initSettingsForm();
  initConfirmDialog();
  initViewAllLinks();
});

// ─── DATA ─────────────────────────────────────────────────────────────────────
function loadAllData() {
  const storedP = localStorage.getItem('abc_pharmacy_products');
  products = storedP ? tryParse(storedP, DEFAULT_PRODUCTS) : [...DEFAULT_PRODUCTS];

  const storedO = localStorage.getItem('abc_pharmacy_orders');
  orders = storedO ? tryParse(storedO, DEFAULT_ORDERS) : [...DEFAULT_ORDERS];

  const storedC = localStorage.getItem('abc_pharmacy_customers');
  customers = storedC ? tryParse(storedC, DEFAULT_CUSTOMERS) : [...DEFAULT_CUSTOMERS];

  const storedCat = localStorage.getItem('abc_pharmacy_categories');
  categories = storedCat ? tryParse(storedCat, CATEGORIES_DEFAULT) : [...CATEGORIES_DEFAULT];
}

function tryParse(str, fallback) {
  try { return JSON.parse(str); } catch { return fallback; }
}

function saveProducts() {
  localStorage.setItem('abc_pharmacy_products', JSON.stringify(products));
}
function saveOrders() {
  localStorage.setItem('abc_pharmacy_orders', JSON.stringify(orders));
}
function saveCategories() {
  localStorage.setItem('abc_pharmacy_categories', JSON.stringify(categories));
}

// ─── SIDEBAR NAVIGATION ───────────────────────────────────────────────────────
function initSidebar() {
  document.querySelectorAll('.sb-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      navigateTo(section);
    });
  });
}

function navigateTo(section) {
  currentSection = section;
  document.querySelectorAll('.sb-link').forEach(l => l.classList.toggle('active', l.dataset.section === section));
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  const el = document.getElementById(`sec-${section}`);
  if (el) el.style.display = 'block';

  const labels = { dashboard:'Dashboard', products:'Products', orders:'Orders', customers:'Customers', categories:'Categories', settings:'Settings' };
  document.getElementById('adminBreadcrumb').textContent = labels[section] || section;

  if (section === 'products') renderProductsTable();
  if (section === 'orders') renderOrdersTable();
  if (section === 'customers') renderCustomersTable();
  if (section === 'categories') renderCategoriesGrid();
}

function initViewAllLinks() {
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(el.dataset.goto);
    });
  });
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function renderDashboard() {
  renderDashOrders();
  renderTopProducts();
  renderRevenueChart();
}

function renderDashOrders() {
  const tbody = document.getElementById('dashRecentOrders');
  const recent = orders.slice(0, 8);
  tbody.innerHTML = recent.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.customer}</td>
      <td>${o.items.length} item${o.items.length > 1 ? 's' : ''}</td>
      <td><strong>₹${o.total.toLocaleString()}</strong></td>
      <td><span class="status-badge status-${cssStatus(o.status)}">${o.status}</span></td>
      <td>${o.date}</td>
    </tr>
  `).join('');
}

function renderTopProducts() {
  const el = document.getElementById('topProductsList');
  const top = products.slice(0, 5);
  el.innerHTML = top.map(p => `
    <div class="top-product-item">
      <img src="${p.img}" alt="${p.name}" class="tp-img"/>
      <div class="tp-info">
        <div class="tp-name">${p.name}</div>
        <div class="tp-cat">${p.category}</div>
      </div>
      <div class="tp-price">₹${p.price}</div>
    </div>
  `).join('');
}

function renderRevenueChart() {
  const max = Math.max(...REVENUE_DATA.map(d => d.value));
  const chart = document.getElementById('revenueChart');
  const labels = document.getElementById('chartLabels');

  chart.innerHTML = REVENUE_DATA.map(d => {
    const pct = Math.round((d.value / max) * 100);
    return `
      <div class="bar-item">
        <div class="bar" style="height:${pct}%;">
          <span class="bar-val">₹${(d.value/1000).toFixed(0)}k</span>
        </div>
      </div>
    `;
  }).join('');

  labels.innerHTML = REVENUE_DATA.map(d => `<div class="bar-label">${d.month}</div>`).join('');
}

// ─── PRODUCTS TABLE ───────────────────────────────────────────────────────────
function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  const term = productSearchTerm.toLowerCase();
  const list = term ? products.filter(p => p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)) : products;

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:32px;color:#999">No products found.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map((p, i) => {
    const disc = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    return `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${p.img}" class="prod-thumb" alt="${p.name}" onerror="this.src='https://via.placeholder.com/44'"/></td>
        <td><strong>${p.name}</strong><br/><small style="color:#888">${p.brand}</small></td>
        <td><span class="status-badge" style="background:#f0f4ff;color:#1a56db">${p.category}</span></td>
        <td>₹${p.mrp}</td>
        <td><strong style="color:var(--primary)">₹${p.price}</strong> <small style="color:#00a651">(${disc}% off)</small></td>
        <td>${p.stock}</td>
        <td>${p.rx ? '<span class="badge-rx">Rx</span>' : '<span style="color:#999">—</span>'}</td>
        <td style="display:flex;gap:6px;align-items:center;">
          <button class="tbl-action tbl-edit" onclick="editProduct(${p.id})" title="Edit">✏️</button>
          <button class="tbl-action tbl-delete" onclick="confirmDelete(${p.id})" title="Delete">🗑️</button>
        </td>
      </tr>
    `;
  }).join('');
}

function initProductSearch() {
  document.getElementById('productSearch').addEventListener('input', function() {
    productSearchTerm = this.value.trim();
    renderProductsTable();
  });
}

// ─── ADD / EDIT PRODUCT MODAL ─────────────────────────────────────────────────
function initProductModal() {
  const overlay = document.getElementById('productModalOverlay');
  const form = document.getElementById('productForm');

  document.getElementById('addProductBtn').addEventListener('click', () => openProductModal(null));
  document.getElementById('productModalClose').addEventListener('click', closeProductModal);
  document.getElementById('productFormCancel').addEventListener('click', closeProductModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeProductModal(); });

  form.addEventListener('submit', saveProduct);
}

function openProductModal(id) {
  clearFormErrors();
  editingProductId = id;
  const title = document.getElementById('productModalTitle');

  if (id) {
    const p = products.find(p => p.id === id);
    if (!p) return;
    title.textContent = 'Edit Product';
    document.getElementById('fm_name').value = p.name;
    document.getElementById('fm_brand').value = p.brand;
    document.getElementById('fm_category').value = p.category;
    document.getElementById('fm_stock').value = p.stock;
    document.getElementById('fm_mrp').value = p.mrp;
    document.getElementById('fm_price').value = p.price;
    document.getElementById('fm_desc').value = p.desc || '';
    document.getElementById('fm_img').value = p.img;
    document.getElementById('fm_rx').checked = !!p.rx;
    document.getElementById('fm_id').value = p.id;
  } else {
    title.textContent = 'Add Product';
    document.getElementById('productForm').reset();
    document.getElementById('fm_id').value = '';
  }

  document.getElementById('productModalOverlay').classList.add('open');
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('open');
  editingProductId = null;
  clearFormErrors();
}

function saveProduct(e) {
  e.preventDefault();
  clearFormErrors();

  const name = document.getElementById('fm_name').value.trim();
  const brand = document.getElementById('fm_brand').value.trim();
  const category = document.getElementById('fm_category').value;
  const mrp = parseFloat(document.getElementById('fm_mrp').value);
  const price = parseFloat(document.getElementById('fm_price').value);
  const img = document.getElementById('fm_img').value.trim();
  const stock = parseInt(document.getElementById('fm_stock').value) || 0;
  const desc = document.getElementById('fm_desc').value.trim();
  const rx = document.getElementById('fm_rx').checked;

  let valid = true;
  if (!name) { showErr('err_name', 'Product name is required'); valid = false; }
  if (!brand) { showErr('err_brand', 'Brand is required'); valid = false; }
  if (!category) { showErr('err_category', 'Please select a category'); valid = false; }
  if (isNaN(mrp) || mrp <= 0) { showErr('err_mrp', 'Enter a valid MRP'); valid = false; }
  if (isNaN(price) || price <= 0) { showErr('err_price', 'Enter a valid sale price'); valid = false; }
  if (price > mrp) { showErr('err_price', 'Sale price cannot exceed MRP'); valid = false; }
  if (!img) { showErr('err_img', 'Image URL is required'); valid = false; }
  if (!valid) return;

  const id = editingProductId;
  if (id) {
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
      products[idx] = { ...products[idx], name, brand, category, mrp, price, stock, desc, img, rx };
    }
    showToast('Product updated successfully', 'success');
  } else {
    const newId = Math.max(0, ...products.map(p => p.id)) + 1;
    products.push({ id: newId, name, brand, category, mrp, price, stock, desc, img, rx, rating: 4.5, reviews: 0 });
    showToast('Product added successfully', 'success');
  }

  saveProducts();
  closeProductModal();
  renderProductsTable();
  renderTopProducts();
}

function editProduct(id) {
  openProductModal(id);
}

function showErr(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; }
  const inputMap = { err_name:'fm_name', err_brand:'fm_brand', err_category:'fm_category', err_mrp:'fm_mrp', err_price:'fm_price', err_img:'fm_img' };
  const inputId = inputMap[id];
  if (inputId) document.getElementById(inputId)?.classList.add('input-error');
}

function clearFormErrors() {
  ['err_name','err_brand','err_category','err_mrp','err_price','err_img'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });
  ['fm_name','fm_brand','fm_category','fm_mrp','fm_price','fm_img'].forEach(id => {
    document.getElementById(id)?.classList.remove('input-error');
  });
}

// ─── DELETE PRODUCT ───────────────────────────────────────────────────────────
function confirmDelete(id) {
  const p = products.find(p => p.id === id);
  if (!p) return;
  showConfirm(
    'Delete Product?',
    `Are you sure you want to delete "${p.name}"? This action cannot be undone.`,
    () => {
      products = products.filter(p => p.id !== id);
      saveProducts();
      renderProductsTable();
      renderTopProducts();
      showToast('Product deleted', 'error');
    }
  );
}

// ─── ORDERS TABLE ─────────────────────────────────────────────────────────────
function renderOrdersTable() {
  const tbody = document.getElementById('ordersTableBody');
  const list = orderStatusFilter === 'all'
    ? orders
    : orders.filter(o => o.status === orderStatusFilter);

  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:32px;color:#999">No orders found.</td></tr>';
    return;
  }

  tbody.innerHTML = list.map(o => `
    <tr>
      <td><strong>${o.id}</strong></td>
      <td>${o.customer}</td>
      <td>${o.items.length} item${o.items.length > 1 ? 's' : ''}</td>
      <td><strong>₹${o.total.toLocaleString()}</strong></td>
      <td>${o.payment}</td>
      <td>
        <select class="status-select" onchange="updateOrderStatus('${o.id}', this.value)">
          ${['Pending','Processing','Out for Delivery','Delivered','Cancelled'].map(s =>
            `<option value="${s}" ${o.status === s ? 'selected' : ''}>${s}</option>`
          ).join('')}
        </select>
      </td>
      <td>${o.date}</td>
      <td><button class="tbl-action tbl-view" onclick="openOrderPanel('${o.id}')">View</button></td>
    </tr>
  `).join('');
}

function initOrderFilter() {
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      orderStatusFilter = pill.dataset.status;
      renderOrdersTable();
    });
  });
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    const time = new Date().toLocaleString('en-IN', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });
    if (!order.history) order.history = [];
    order.history.push({ label: newStatus, time });
    saveOrders();
    showToast(`Order ${orderId} status updated to "${newStatus}"`, 'success');
    renderDashOrders();
  }
}

// ─── ORDER SIDE PANEL ─────────────────────────────────────────────────────────
function initOrderPanel() {
  document.getElementById('ospClose').addEventListener('click', closeOrderPanel);
  document.getElementById('orderPanelOverlay').addEventListener('click', closeOrderPanel);
}

function openOrderPanel(orderId) {
  const o = orders.find(o => o.id === orderId);
  if (!o) return;

  const body = document.getElementById('ospBody');
  const orderProducts = o.items.map(item => {
    const p = products.find(p => p.id === item.id);
    return { ...p, qty: item.qty };
  });

  const subtotal = orderProducts.reduce((s, p) => s + (p ? p.price * p.qty : 0), 0);
  const delivery = subtotal >= 499 ? 0 : 40;
  const total = subtotal + delivery;

  const statusSteps = ['Pending', 'Processing', 'Out for Delivery', 'Delivered'];
  const currentStep = statusSteps.indexOf(o.status);

  body.innerHTML = `
    <div class="osp-section-title">Customer Information</div>
    <div class="osp-info-grid">
      <div class="osp-info-item"><div class="osp-info-lbl">Name</div><div class="osp-info-val">${o.customer}</div></div>
      <div class="osp-info-item"><div class="osp-info-lbl">Phone</div><div class="osp-info-val">${o.phone}</div></div>
      <div class="osp-info-item"><div class="osp-info-lbl">Email</div><div class="osp-info-val">${o.email}</div></div>
      <div class="osp-info-item"><div class="osp-info-lbl">Payment</div><div class="osp-info-val">${o.payment}</div></div>
    </div>

    <div class="osp-section-title">Delivery Address</div>
    <p style="font-size:14px;color:#444;line-height:1.6">${o.address}</p>

    <div class="osp-section-title">Ordered Items</div>
    ${orderProducts.map(p => p ? `
      <div class="osp-order-item">
        <img src="${p.img}" alt="${p.name}" class="osp-item-img"/>
        <div class="osp-item-info">
          <div class="osp-item-name">${p.name}</div>
          <div class="osp-item-qty">Qty: ${p.qty} × ₹${p.price}</div>
        </div>
        <div class="osp-item-price">₹${p.price * p.qty}</div>
      </div>
    ` : '').join('')}

    <div class="osp-section-title">Price Breakdown</div>
    <div class="price-breakdown">
      <div class="pb-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
      <div class="pb-row"><span>Delivery</span><span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span></div>
      <div class="pb-row total"><span>Total</span><span>₹${total.toLocaleString()}</span></div>
    </div>

    <div class="osp-section-title">Order Status Timeline</div>
    <div class="status-timeline">
      ${(o.history || []).map((h, i) => `
        <div class="timeline-item">
          <div class="timeline-dot ${i === (o.history.length - 1) ? 'active' : 'done'}">✓</div>
          <div class="timeline-content">
            <div class="timeline-label">${h.label}</div>
            <div class="timeline-time">${h.time}</div>
          </div>
        </div>
      `).join('')}
      ${o.status !== 'Delivered' && o.status !== 'Cancelled' ? `
        ${statusSteps.slice(currentStep + 1).map(s => `
          <div class="timeline-item">
            <div class="timeline-dot" style="background:#e8ecf0;color:#bbb">○</div>
            <div class="timeline-content" style="opacity:0.45">
              <div class="timeline-label">${s}</div>
              <div class="timeline-time">Pending</div>
            </div>
          </div>
        `).join('')}
      ` : ''}
    </div>
  `;

  document.getElementById('orderSidePanel').classList.add('open');
  document.getElementById('orderPanelOverlay').classList.add('open');
}

function closeOrderPanel() {
  document.getElementById('orderSidePanel').classList.remove('open');
  document.getElementById('orderPanelOverlay').classList.remove('open');
}

// ─── CUSTOMERS TABLE ──────────────────────────────────────────────────────────
function renderCustomersTable() {
  const tbody = document.getElementById('customersTableBody');
  const term = customerSearchTerm.toLowerCase();
  const list = term
    ? customers.filter(c => c.name.toLowerCase().includes(term) || c.email.toLowerCase().includes(term) || c.phone.includes(term))
    : customers;

  tbody.innerHTML = list.map((c, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="cust-cell">
          <div class="cust-avatar">${c.initials}</div>
          <span class="cust-name">${c.name}</span>
        </div>
      </td>
      <td>${c.phone}</td>
      <td>${c.email}</td>
      <td><strong>${c.orders}</strong></td>
      <td><strong style="color:var(--primary)">₹${c.spent.toLocaleString()}</strong></td>
      <td>${c.joined}</td>
      <td>
        <button class="tbl-action tbl-view" onclick="showToast('Customer detail coming soon','info')">View</button>
      </td>
    </tr>
  `).join('');
}

function initCustomerSearch() {
  document.getElementById('customerSearch').addEventListener('input', function() {
    customerSearchTerm = this.value.trim();
    renderCustomersTable();
  });
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
function renderCategoriesGrid() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map((cat, i) => `
    <div class="cat-admin-card">
      <div class="cat-admin-icon">${cat.icon}</div>
      <div class="cat-admin-name">${cat.name}</div>
      <div class="cat-admin-count">${cat.count} Products</div>
      <div class="cat-admin-actions">
        <button class="tbl-action tbl-edit" onclick="editCategory(${i})" title="Edit">✏️</button>
        <button class="tbl-action tbl-delete" onclick="deleteCategory(${i})" title="Delete">🗑️</button>
      </div>
    </div>
  `).join('');
}

document.getElementById('addCatBtn').addEventListener('click', () => {
  const input = document.getElementById('newCatName');
  const name = input.value.trim();
  if (!name) { showToast('Please enter a category name', 'error'); return; }
  categories.push({ name, icon: '📦', count: 0 });
  saveCategories();
  renderCategoriesGrid();
  input.value = '';
  showToast(`Category "${name}" added`, 'success');
});

function editCategory(idx) {
  const cat = categories[idx];
  const newName = prompt('Edit category name:', cat.name);
  if (newName && newName.trim()) {
    categories[idx].name = newName.trim();
    saveCategories();
    renderCategoriesGrid();
    showToast('Category updated', 'success');
  }
}

function deleteCategory(idx) {
  showConfirm('Delete Category?', `Delete "${categories[idx].name}"?`, () => {
    categories.splice(idx, 1);
    saveCategories();
    renderCategoriesGrid();
    showToast('Category deleted', 'error');
  });
}

// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function initSettingsForm() {
  document.getElementById('settingsForm').addEventListener('submit', e => {
    e.preventDefault();
    const settings = {
      name: document.getElementById('st_name').value,
      tagline: document.getElementById('st_tagline').value,
      phone: document.getElementById('st_phone').value,
      email: document.getElementById('st_email').value,
      minOrder: document.getElementById('st_minorder').value,
      radius: document.getElementById('st_radius').value,
      address: document.getElementById('st_address').value,
      hours: document.getElementById('st_hours').value
    };
    localStorage.setItem('abc_pharmacy_settings', JSON.stringify(settings));
    showToast('Settings saved successfully', 'success');
  });
}

// ─── CONFIRM DIALOG ───────────────────────────────────────────────────────────
function initConfirmDialog() {
  document.getElementById('confirmCancel').addEventListener('click', () => {
    document.getElementById('confirmOverlay').classList.remove('open');
    confirmCallback = null;
  });
  document.getElementById('confirmOk').addEventListener('click', () => {
    document.getElementById('confirmOverlay').classList.remove('open');
    if (confirmCallback) { confirmCallback(); confirmCallback = null; }
  });
  document.getElementById('confirmOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('confirmOverlay')) {
      document.getElementById('confirmOverlay').classList.remove('open');
      confirmCallback = null;
    }
  });
}

function showConfirm(title, msg, onOk) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMsg').textContent = msg;
  confirmCallback = onOk;
  document.getElementById('confirmOverlay').classList.add('open');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fadeout');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function cssStatus(status) {
  return status.replace(/\s+/g, '-');
}
