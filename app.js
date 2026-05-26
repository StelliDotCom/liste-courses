'use strict';

// ── DEFAULT DATA ──────────────────────────────────────────────────────────────

const DEFAULT_STORES = [
  { id: 's1', name: 'Migros',      color: '#FF6600', emoji: '🧡' },
  { id: 's2', name: 'Coop',        color: '#CC0000', emoji: '❤️' },
  { id: 's3', name: 'Denner',      color: '#B71C1C', emoji: '🍷' },
  { id: 's4', name: 'Aldi',        color: '#1B4F8A', emoji: '💙' },
  { id: 's5', name: 'Lidl',        color: '#E8A000', emoji: '💛' },
  { id: 's6', name: 'Pharmacie',   color: '#00897B', emoji: '💊' },
  { id: 's7', name: 'Boulangerie', color: '#795548', emoji: '🍞' },
  { id: 's8', name: 'Autre',       color: '#757575', emoji: '📦' },
];

const DEFAULT_PRODUCTS = [
  { id: 'p01', name: 'Pommes',           category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p02', name: 'Bananes',          category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p03', name: 'Tomates',          category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p04', name: 'Salade',           category: 'Fruits & Légumes',   unit: 'pièce' },
  { id: 'p05', name: 'Carottes',         category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p06', name: 'Oignons',          category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p07', name: 'Pommes de terre',  category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p08', name: 'Courgettes',       category: 'Fruits & Légumes',   unit: 'kg' },
  { id: 'p09', name: 'Champignons',      category: 'Fruits & Légumes',   unit: 'g' },
  { id: 'p10', name: 'Lait',             category: 'Produits laitiers',  unit: 'L' },
  { id: 'p11', name: 'Beurre',           category: 'Produits laitiers',  unit: 'pièce' },
  { id: 'p12', name: 'Yaourt nature',    category: 'Produits laitiers',  unit: 'pièce' },
  { id: 'p13', name: 'Fromage',          category: 'Produits laitiers',  unit: 'g' },
  { id: 'p14', name: 'Crème fraîche',    category: 'Produits laitiers',  unit: 'pièce' },
  { id: 'p15', name: 'Œufs',             category: 'Produits laitiers',  unit: 'pièce' },
  { id: 'p20', name: 'Pain',             category: 'Boulangerie',        unit: 'pièce' },
  { id: 'p21', name: 'Baguette',         category: 'Boulangerie',        unit: 'pièce' },
  { id: 'p22', name: 'Croissant',        category: 'Boulangerie',        unit: 'pièce' },
  { id: 'p30', name: 'Poulet',           category: 'Viandes & Poissons', unit: 'kg' },
  { id: 'p31', name: 'Bœuf haché',       category: 'Viandes & Poissons', unit: 'kg' },
  { id: 'p32', name: 'Saumon',           category: 'Viandes & Poissons', unit: 'g' },
  { id: 'p33', name: 'Jambon',           category: 'Viandes & Poissons', unit: 'g' },
  { id: 'p40', name: 'Pâtes',            category: 'Épicerie',           unit: 'kg' },
  { id: 'p41', name: 'Riz',              category: 'Épicerie',           unit: 'kg' },
  { id: 'p42', name: 'Huile d\'olive',   category: 'Épicerie',           unit: 'bouteille' },
  { id: 'p43', name: 'Café',             category: 'Épicerie',           unit: 'paquet' },
  { id: 'p44', name: 'Sucre',            category: 'Épicerie',           unit: 'kg' },
  { id: 'p45', name: 'Farine',           category: 'Épicerie',           unit: 'kg' },
  { id: 'p46', name: 'Conserves tomates', category: 'Épicerie',          unit: 'boîte' },
  { id: 'p47', name: 'Sel',              category: 'Épicerie',           unit: 'paquet' },
  { id: 'p50', name: 'Eau minérale',     category: 'Boissons',           unit: 'L' },
  { id: 'p51', name: 'Jus d\'orange',    category: 'Boissons',           unit: 'L' },
  { id: 'p52', name: 'Vin rouge',        category: 'Boissons',           unit: 'bouteille' },
  { id: 'p53', name: 'Bière',            category: 'Boissons',           unit: 'bouteille' },
  { id: 'p60', name: 'Shampoing',        category: 'Hygiène',            unit: 'pièce' },
  { id: 'p61', name: 'Savon',            category: 'Hygiène',            unit: 'pièce' },
  { id: 'p62', name: 'Dentifrice',       category: 'Hygiène',            unit: 'pièce' },
  { id: 'p63', name: 'Gel douche',       category: 'Hygiène',            unit: 'pièce' },
  { id: 'p70', name: 'Lessive',          category: 'Entretien',          unit: 'pièce' },
  { id: 'p71', name: 'Liquide vaisselle', category: 'Entretien',         unit: 'pièce' },
  { id: 'p72', name: 'Papier toilette',  category: 'Entretien',          unit: 'paquet' },
  { id: 'p73', name: 'Essuie-tout',      category: 'Entretien',          unit: 'paquet' },
  { id: 'p80', name: 'Pizza surgelée',   category: 'Surgelés',           unit: 'pièce' },
  { id: 'p81', name: 'Glace',            category: 'Surgelés',           unit: 'pièce' },
];

const EMOJIS = ['🛍️','🛒','🏪','🏬','🏢','💊','🍞','🍷','📦','🥗','🥩','🍰','🧺','🧴','🥛','🍎','🥦','🧼','🧹','🐟','🧀','🥐','☕','🍺','💐','🏋️','🎯','🏠','🌿','🧃'];
const COLORS = ['#FF6600','#CC0000','#B71C1C','#1B4F8A','#E8A000','#00897B','#795548','#757575','#2E7D32','#6A1B9A','#0288D1','#E65100','#37474F','#00838F','#558B2F'];
const UNITS = ['pièce','kg','g','L','cl','ml','paquet','boîte','bouteille','sachet','tube','pot'];
const CAT_LIST = ['Fruits & Légumes','Produits laitiers','Boulangerie','Viandes & Poissons','Épicerie','Boissons','Hygiène','Entretien','Surgelés','Autre'];

// ── STATE ─────────────────────────────────────────────────────────────────────

let state = {
  stores: [],
  products: [],
  list: [],
  currentView: 'liste',
  listFilter: 'all',
  gererTab: 'magasins',
  productCatFilter: '',
  lastStore: 's2',
};

// ── STORAGE ───────────────────────────────────────────────────────────────────

function loadData() {
  const s = localStorage.getItem('courses_stores');
  const p = localStorage.getItem('courses_products');
  const l = localStorage.getItem('courses_list');
  state.stores   = s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_STORES));
  state.products = p ? JSON.parse(p) : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  state.list     = l ? JSON.parse(l) : [];
}

function saveStores()   { localStorage.setItem('courses_stores',   JSON.stringify(state.stores)); }
function saveProducts() { localStorage.setItem('courses_products', JSON.stringify(state.products)); }
function saveList()     { localStorage.setItem('courses_list',     JSON.stringify(state.list)); }

// ── HELPERS ───────────────────────────────────────────────────────────────────

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }

function getStore(id) {
  return state.stores.find(s => s.id === id) || { name: '?', color: '#999', emoji: '?' };
}
function getProduct(id) { return state.products.find(p => p.id === id); }

function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

let _toastTimer;
function showToast(msg, ms = 2600) {
  clearTimeout(_toastTimer);
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  _toastTimer = setTimeout(() => t.classList.add('hidden'), ms);
}

function getCategories() {
  const cats = [...new Set(state.products.map(p => p.category))].sort();
  return cats;
}

// ── OPEN FOOD FACTS ───────────────────────────────────────────────────────────

const OFF_SEARCH = 'https://world.openfoodfacts.org/api/v2/search';
const OFF_PRODUCT = 'https://world.openfoodfacts.org/api/v2/product/';

let _offTimer = null;
let _offAbort = null;
let _scanner  = null;

async function searchOFF(query) {
  if (_offAbort) _offAbort.abort();
  _offAbort = new AbortController();
  try {
    const url = `${OFF_SEARCH}?search_terms=${encodeURIComponent(query)}&fields=product_name,brands,image_front_small_url&page_size=8&json=true`;
    const resp = await fetch(url, { signal: _offAbort.signal });
    if (!resp.ok) return [];
    const data = await resp.json();
    return (data.products || []).filter(p => p.product_name && p.product_name.trim());
  } catch(e) {
    if (e.name === 'AbortError') return null;
    return [];
  }
}

async function lookupBarcode(barcode) {
  try {
    const resp = await fetch(`${OFF_PRODUCT}${barcode}.json?fields=product_name,brands,image_front_small_url`);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data.status === 1 && data.product?.product_name) return data.product;
    return null;
  } catch { return null; }
}

function startBarcodeCapture() {
  openModal(`
    <p class="scanner-hint">Pointez la caméra sur le code-barres EAN</p>
    <div id="scanner-view" class="scanner-view"></div>
    <div class="modal-actions" style="margin-top:14px">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="stopScanner();closeModal();showBarcodeModal()">Manuel</button>
    </div>`, 'Scanner');
  setTimeout(startHtml5Scanner, 200);
}

async function startHtml5Scanner() {
  const container = document.getElementById('scanner-view');
  if (!container) return;

  if (typeof Html5Qrcode === 'undefined') {
    closeModal(); showBarcodeModal(); return;
  }

  try {
    _scanner = new Html5Qrcode('scanner-view', { verbose: false });
    await _scanner.start(
      { facingMode: 'environment' },
      { fps: 12, qrbox: { width: 280, height: 110 } },
      async (code) => {
        stopScanner();
        closeModal();
        await processBarcode(code);
      }
    );
  } catch(e) {
    _scanner = null;
    closeModal();
    showBarcodeModal();
  }
}

function stopScanner() {
  if (_scanner) {
    const s = _scanner;
    _scanner = null;
    s.stop().catch(() => {}).then(() => { try { s.clear(); } catch {} });
  }
}

async function processBarcode(barcode) {
  showToast('🔍 Recherche du produit…', 5000);
  const product = await lookupBarcode(barcode);
  if (!product) {
    showToast('Produit non trouvé (code: ' + barcode + ')');
    const s = document.getElementById('add-search');
    if (s) { s.value = barcode; buildProductList(); }
    return;
  }
  const name = product.product_name.trim();
  const brand = product.brands ? product.brands.split(',')[0].trim() : '';
  const img = product.image_front_small_url || '';
  const display = brand ? `${name} (${brand})` : name;
  selectOFFProduct(display, img);
  showToast(`✓ "${name}" trouvé`);
}

function showBarcodeModal() {
  openModal(`
    <div class="form-group">
      <label>Code-barres</label>
      <input type="text" id="modal-barcode" class="form-input" inputmode="numeric"
             pattern="[0-9]*" placeholder="ex: 7610001234567" autofocus>
    </div>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="confirmManualBarcode()">Rechercher</button>
    </div>`, 'Saisir le code-barres');
}

async function confirmManualBarcode() {
  const barcode = document.getElementById('modal-barcode')?.value.trim();
  if (!barcode) { showToast('⚠️ Entrez un code-barres'); return; }
  closeModal();
  await processBarcode(barcode);
}

function selectOFFProduct(displayName, imgUrl) {
  document.getElementById('add-product-id').value = '';
  const s = document.getElementById('add-search');
  s.value = displayName;
  s.dataset.offImg = imgUrl || '';
  document.getElementById('products-list').innerHTML = '';
  document.getElementById('selected-product').classList.remove('hidden');
  document.getElementById('selected-name').textContent = displayName;
  const thumb = document.getElementById('selected-thumb');
  if (thumb) {
    if (imgUrl) { thumb.src = imgUrl; thumb.style.display = 'block'; }
    else { thumb.style.display = 'none'; }
  }
}

// ── MODAL ─────────────────────────────────────────────────────────────────────

function openModal(bodyHtml, title = '') {
  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <h3>${esc(title)}</h3>
      <button class="modal-close-btn" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">${bodyHtml}</div>`;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  stopScanner();
  document.getElementById('modal-overlay').classList.add('hidden');
  document.getElementById('modal-content').innerHTML = '';
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────

function showView(view) {
  state.currentView = view;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  const titles = { liste:'Ma Liste 🛒', ajouter:'Ajouter un article', gerer:'Gérer', partager:'Partager' };
  document.getElementById('page-title').textContent = titles[view] || '';
  const c = document.getElementById('app-content');
  if (view === 'liste')    renderListe(c);
  if (view === 'ajouter')  renderAjouter(c);
  if (view === 'gerer')    renderGerer(c);
  if (view === 'partager') renderPartager(c);
}

// ── VIEW: LISTE ───────────────────────────────────────────────────────────────

function renderListe(container) {
  const total   = state.list.length;
  const checked = state.list.filter(i => i.checked).length;

  const storeIds = [...new Set(state.list.map(i => i.storeId))];
  let filterHTML = `<div class="filter-scroll">
    <button class="filter-btn ${state.listFilter === 'all' ? 'active' : ''}" onclick="setListFilter('all')">
      Tout (${total - checked}/${total})
    </button>`;
  storeIds.forEach(sid => {
    const store = getStore(sid);
    const items = state.list.filter(i => i.storeId === sid);
    const done  = items.filter(i => i.checked).length;
    filterHTML += `<button class="filter-btn ${state.listFilter === sid ? 'active' : ''}"
        style="${state.listFilter === sid ? '' : `color:${store.color}`}"
        onclick="setListFilter('${sid}')">
      ${store.emoji} ${esc(store.name)} (${items.length - done}/${items.length})
    </button>`;
  });
  filterHTML += '</div>';

  const items = state.listFilter === 'all'
    ? state.list
    : state.list.filter(i => i.storeId === state.listFilter);

  let bodyHTML = '';

  if (total === 0) {
    bodyHTML = `<div class="empty-state">
      <div class="empty-icon">🛒</div>
      <p>Votre liste est vide</p>
      <button class="btn-primary" onclick="showView('ajouter')">Ajouter des articles</button>
    </div>`;
  } else {
    bodyHTML += `<div class="list-actions">
      <button class="btn-sm" onclick="checkAll()">✓ Tout cocher</button>
      <button class="btn-sm btn-danger-sm" onclick="deleteChecked()">🗑 Suppr. cochés</button>
      <button class="btn-sm btn-danger-sm" onclick="confirmClearAll()">🗑 Tout vider</button>
    </div>`;

    const grouped = {};
    items.forEach(item => {
      const k = item.category || 'Autre';
      (grouped[k] = grouped[k] || []).push(item);
    });

    bodyHTML += '<div class="list-container">';
    Object.keys(grouped).sort().forEach(cat => {
      bodyHTML += `<div class="category-group"><div class="category-header">${esc(cat)}</div>`;
      grouped[cat].forEach(item => {
        const store = getStore(item.storeId);
        const thumb = item.img
          ? `<img class="item-thumb" src="${esc(item.img)}" alt="" loading="lazy" onerror="this.remove()">`
          : '';
        bodyHTML += `<div class="list-item ${item.checked ? 'checked' : ''}" id="li-${item.id}">
          <button class="check-btn" onclick="toggleItem('${item.id}')">${item.checked ? '✓' : ''}</button>
          ${thumb}
          <div class="item-info" onclick="toggleItem('${item.id}')">
            <span class="item-name">${esc(item.name)}</span>
            <span class="item-details">${esc(item.qty)} ${esc(item.unit)}${item.note ? ' · ' + esc(item.note) : ''}</span>
          </div>
          <div class="item-store" style="color:${store.color}">
            <span>${store.emoji}</span>
            <span class="item-store-name">${esc(store.name)}</span>
          </div>
          <button class="delete-btn" onclick="deleteItem('${item.id}')">✕</button>
        </div>`;
      });
      bodyHTML += '</div>';
    });
    bodyHTML += '</div>';
  }

  container.innerHTML = filterHTML + bodyHTML;
}

function setListFilter(f) { state.listFilter = f; renderListe(document.getElementById('app-content')); }

function toggleItem(id) {
  const item = state.list.find(i => i.id === id);
  if (item) { item.checked = !item.checked; saveList(); renderListe(document.getElementById('app-content')); }
}
function deleteItem(id) {
  state.list = state.list.filter(i => i.id !== id);
  saveList(); renderListe(document.getElementById('app-content'));
}
function checkAll() {
  state.list.forEach(i => i.checked = true);
  saveList(); renderListe(document.getElementById('app-content'));
}
function deleteChecked() {
  const n = state.list.filter(i => i.checked).length;
  state.list = state.list.filter(i => !i.checked);
  saveList(); renderListe(document.getElementById('app-content'));
  showToast(`🗑 ${n} article(s) supprimé(s)`);
}
function confirmClearAll() {
  openModal(`<p>Voulez-vous vraiment vider toute la liste ?</p>
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-danger" onclick="clearAll()">Vider la liste</button>
    </div>`, 'Confirmer');
}
function clearAll() {
  state.list = []; saveList(); closeModal();
  renderListe(document.getElementById('app-content'));
  showToast('Liste vidée');
}

// ── VIEW: AJOUTER ─────────────────────────────────────────────────────────────

function renderAjouter(container) {
  let storeOpts = '';
  state.stores.forEach(s => {
    storeOpts += `<option value="${s.id}" ${s.id === state.lastStore ? 'selected' : ''}>${s.emoji} ${esc(s.name)}</option>`;
  });

  container.innerHTML = `<div class="add-form">
    <div class="form-group">
      <label>Magasin</label>
      <select id="add-store" class="form-select" onchange="state.lastStore=this.value">${storeOpts}</select>
    </div>
    <div class="form-group">
      <label>Article *</label>
      <div class="search-row">
        <input type="text" id="add-search" class="form-input"
               placeholder="Tapez les premières lettres…" autocomplete="off" autocorrect="off" autofocus>
        <button class="scan-btn" onclick="startBarcodeCapture()" title="Scanner le code-barres">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3,9 3,3 9,3"/><polyline points="15,3 21,3 21,9"/>
            <polyline points="21,15 21,21 15,21"/><polyline points="9,21 3,21 3,15"/>
            <line x1="7" y1="8" x2="7" y2="16"/><line x1="9.5" y1="8" x2="9.5" y2="16"/>
            <line x1="11" y1="8" x2="11" y2="16"/><line x1="13" y1="8" x2="13" y2="16"/>
            <line x1="14.5" y1="8" x2="14.5" y2="16"/><line x1="17" y1="8" x2="17" y2="16"/>
          </svg>
        </button>
      </div>
      <div id="products-list" class="products-list"></div>
      <input type="hidden" id="add-product-id">
      <div id="selected-product" class="selected-product hidden">
        <img id="selected-thumb" src="" alt="" style="display:none"
             onerror="this.style.display='none'">
        <span id="selected-name"></span>
        <button class="btn-clear" onclick="clearSelectedProduct()">✕</button>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group flex-2">
        <label>Quantité</label>
        <input type="number" id="add-qty" class="form-input" value="1" min="0.01" step="0.1" inputmode="decimal">
      </div>
      <div class="form-group flex-1">
        <label>Unité</label>
        <select id="add-unit" class="form-select">
          ${UNITS.map(u => `<option value="${u}">${u}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Note (optionnel)</label>
      <input type="text" id="add-note" class="form-input" placeholder="Marque, taille, variété…">
    </div>
    <button class="btn-primary btn-large" onclick="addToList()">➕ Ajouter à la liste</button>
  </div>`;

  document.getElementById('add-search').addEventListener('input', buildProductList);
}

function buildProductList() {
  const searchEl = document.getElementById('add-search');
  const search = (searchEl?.value || '').toLowerCase().trim();
  const selId  = document.getElementById('add-product-id')?.value || '';
  const listEl = document.getElementById('products-list');
  if (!listEl || selId) return;

  clearTimeout(_offTimer);
  if (_offAbort) { _offAbort.abort(); _offAbort = null; }

  if (!search) { listEl.innerHTML = ''; return; }

  // Local results
  let filtered = state.products.filter(p => p.name.toLowerCase().includes(search));
  filtered.sort((a,b) => a.name.localeCompare(b.name));

  listEl.innerHTML = '';

  filtered.slice(0, 8).forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-option';
    div.innerHTML = `<span>${esc(p.name)}</span><span class="product-cat">${esc(p.category)}</span>`;
    div.addEventListener('click', () => selectProduct(p.id, p.name, p.unit, p.category));
    listEl.appendChild(div);
  });

  const exactMatch = filtered.find(p => p.name.toLowerCase() === search);
  if (!exactMatch) {
    const rawName = searchEl.value.trim();
    const div = document.createElement('div');
    div.className = 'product-option create-new';
    div.textContent = `➕ Créer "${rawName}"`;
    div.addEventListener('click', () => selectNewProduct(rawName));
    listEl.appendChild(div);
  }

  // Debounced Open Food Facts search
  _offTimer = setTimeout(async () => {
    if (!document.getElementById('add-search')) return;
    const cur = (document.getElementById('add-search')?.value || '').toLowerCase().trim();
    if (cur !== search) return;

    const loadDiv = document.createElement('div');
    loadDiv.className = 'off-loading';
    loadDiv.id = 'off-loading';
    loadDiv.textContent = '🔍 Recherche Open Food Facts…';
    listEl.appendChild(loadDiv);

    const results = await searchOFF(search);

    document.getElementById('off-loading')?.remove();
    if (!results || !results.length) return;
    if (!document.getElementById('add-search')) return;
    if ((document.getElementById('add-search')?.value || '').toLowerCase().trim() !== search) return;

    const sep = document.createElement('div');
    sep.className = 'off-separator';
    sep.textContent = '📷 Open Food Facts';
    listEl.appendChild(sep);

    results.slice(0, 6).forEach(p => {
      const name = p.product_name.trim();
      const brand = p.brands ? p.brands.split(',')[0].trim() : '';
      const img = p.image_front_small_url || '';
      const display = brand ? `${name} (${brand})` : name;

      const div = document.createElement('div');
      div.className = 'product-option off-product';
      div.innerHTML = `
        ${img
          ? `<img class="product-thumb" src="${esc(img)}" alt="" loading="lazy" onerror="this.style.display='none'">`
          : '<div class="product-thumb-placeholder"></div>'}
        <div class="off-product-info">
          <span class="off-product-name">${esc(name)}</span>
          ${brand ? `<span class="off-product-brand">${esc(brand)}</span>` : ''}
        </div>
        <span class="off-badge">OFF</span>`;
      div.addEventListener('click', () => selectOFFProduct(display, img));
      listEl.appendChild(div);
    });
  }, 650);
}

function selectProduct(id, name, unit, category) {
  document.getElementById('add-product-id').value = id;
  const s = document.getElementById('add-search');
  s.value = name;
  delete s.dataset.offImg;
  document.getElementById('add-unit').value = unit || 'pièce';
  document.getElementById('products-list').innerHTML = '';
  document.getElementById('selected-product').classList.remove('hidden');
  document.getElementById('selected-name').textContent = name;
  const thumb = document.getElementById('selected-thumb');
  if (thumb) thumb.style.display = 'none';
}

function selectNewProduct(name) {
  document.getElementById('add-product-id').value = '';
  const s = document.getElementById('add-search');
  s.value = name;
  delete s.dataset.offImg;
  document.getElementById('products-list').innerHTML = '';
  document.getElementById('selected-product').classList.remove('hidden');
  document.getElementById('selected-name').textContent = name + ' (nouveau)';
  const thumb = document.getElementById('selected-thumb');
  if (thumb) thumb.style.display = 'none';
}

function clearSelectedProduct() {
  document.getElementById('add-product-id').value = '';
  document.getElementById('selected-product').classList.add('hidden');
  document.getElementById('selected-name').textContent = '';
  const thumb = document.getElementById('selected-thumb');
  if (thumb) thumb.style.display = 'none';
  const s = document.getElementById('add-search');
  if (s) { s.value = ''; s.focus(); delete s.dataset.offImg; }
  document.getElementById('products-list').innerHTML = '';
}

function addToList() {
  const storeId = document.getElementById('add-store').value;
  const prodId  = document.getElementById('add-product-id').value;
  const name    = document.getElementById('add-search').value.trim();
  const qty     = parseFloat(document.getElementById('add-qty').value) || 1;
  const unit    = document.getElementById('add-unit').value;
  const note    = document.getElementById('add-note').value.trim();
  const offImg  = document.getElementById('add-search')?.dataset?.offImg || '';

  if (!storeId) { showToast('⚠️ Choisissez un magasin'); return; }
  if (!name)    { showToast('⚠️ Entrez un article'); return; }

  state.lastStore = storeId;

  let finalId = prodId;
  let finalCat = 'Autre';

  if (!prodId) {
    const newProd = { id: uid(), name, category: 'Autre', unit };
    state.products.push(newProd);
    saveProducts();
    finalId = newProd.id;
  } else {
    const p = getProduct(prodId);
    if (p) finalCat = p.category;
  }

  const item = {
    id: uid(), productId: finalId, name, storeId, qty, unit, note,
    category: finalCat, checked: false, dateAdded: new Date().toISOString(),
  };
  if (offImg) item.img = offImg;

  state.list.push(item);
  saveList();
  showToast(`✓ "${name}" ajouté`);

  clearSelectedProduct();
  document.getElementById('add-qty').value = '1';
  document.getElementById('add-note').value = '';
}

// ── VIEW: GÉRER ───────────────────────────────────────────────────────────────

function renderGerer(container) {
  container.innerHTML = `
    <div class="tab-bar">
      <button class="tab-btn ${state.gererTab === 'magasins' ? 'active' : ''}" onclick="setGererTab('magasins')">🏪 Magasins</button>
      <button class="tab-btn ${state.gererTab === 'produits' ? 'active' : ''}" onclick="setGererTab('produits')">📦 Produits</button>
    </div>
    <div id="gerer-content"></div>`;
  if (state.gererTab === 'magasins') renderMagasins();
  else renderProduits();
}

function setGererTab(tab) {
  state.gererTab = tab;
  renderGerer(document.getElementById('app-content'));
}

// ─ Magasins ─

function renderMagasins() {
  const c = document.getElementById('gerer-content');
  let html = `<div class="gerer-section">
    <button class="btn-primary btn-add" onclick="openAddStore()">➕ Nouveau magasin</button>
    <div class="items-list">`;
  state.stores.forEach(s => {
    html += `<div class="manage-item">
      <div class="manage-item-left">
        <span class="store-emoji">${s.emoji}</span>
        <div class="manage-item-col">
          <span class="store-name" style="color:${s.color}">${esc(s.name)}</span>
        </div>
      </div>
      <div class="manage-item-actions">
        <button class="btn-icon" onclick="openEditStore('${s.id}')">✏️</button>
        <button class="btn-icon" onclick="confirmDeleteStore('${s.id}')">🗑️</button>
      </div>
    </div>`;
  });
  html += '</div></div>';
  c.innerHTML = html;
}

function _storeModal(s) {
  const ei = s ? EMOJIS.indexOf(s.emoji) : 0;
  const ci = s ? COLORS.indexOf(s.color) : 0;
  return `
    ${s ? `<input type="hidden" id="modal-sid" value="${s.id}">` : ''}
    <div class="form-group">
      <label>Nom *</label>
      <input type="text" id="modal-sname" class="form-input" value="${s ? esc(s.name) : ''}" placeholder="ex: Migros">
    </div>
    <div class="form-group">
      <label>Emoji</label>
      <div class="emoji-grid">
        ${EMOJIS.map((e,i) => `<button class="emoji-btn ${i === ei ? 'selected' : ''}" onclick="pickEmoji(this,'${e}')">${e}</button>`).join('')}
      </div>
      <input type="hidden" id="modal-semoji" value="${s ? s.emoji : EMOJIS[0]}">
    </div>
    <div class="form-group">
      <label>Couleur</label>
      <div class="color-grid">
        ${COLORS.map((c,i) => `<button class="color-btn ${i === ci ? 'selected' : ''}" style="background:${c}" onclick="pickColor(this,'${c}')"></button>`).join('')}
      </div>
      <input type="hidden" id="modal-scolor" value="${s ? s.color : COLORS[0]}">
    </div>`;
}

function openAddStore() {
  openModal(`${_storeModal(null)}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveStore(false)">Ajouter</button>
    </div>`, 'Nouveau magasin');
}

function openEditStore(id) {
  const s = getStore(id);
  openModal(`${_storeModal(s)}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveStore(true)">Enregistrer</button>
    </div>`, 'Modifier le magasin');
}

function pickEmoji(btn, emoji) {
  document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('modal-semoji').value = emoji;
}

function pickColor(btn, color) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('modal-scolor').value = color;
}

function saveStore(isEdit) {
  const name  = document.getElementById('modal-sname').value.trim();
  const emoji = document.getElementById('modal-semoji').value;
  const color = document.getElementById('modal-scolor').value;
  if (!name) { showToast('⚠️ Entrez un nom'); return; }
  if (isEdit) {
    const id = document.getElementById('modal-sid').value;
    const s = state.stores.find(x => x.id === id);
    if (s) { s.name = name; s.emoji = emoji; s.color = color; }
  } else {
    state.stores.push({ id: uid(), name, emoji, color });
  }
  saveStores(); closeModal();
  renderGerer(document.getElementById('app-content'));
  showToast(`✓ ${name} ${isEdit ? 'modifié' : 'ajouté'}`);
}

function confirmDeleteStore(id) {
  const s = getStore(id);
  const n = state.list.filter(i => i.storeId === id).length;
  openModal(`<p>Supprimer <strong>${s.emoji} ${esc(s.name)}</strong> ?</p>
    ${n > 0 ? `<p class="warning">⚠️ Ce magasin est utilisé par ${n} article(s) dans votre liste.</p>` : ''}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-danger" onclick="deleteStore('${id}')">Supprimer</button>
    </div>`, 'Confirmer');
}

function deleteStore(id) {
  state.stores = state.stores.filter(s => s.id !== id);
  saveStores(); closeModal();
  renderGerer(document.getElementById('app-content'));
  showToast('Magasin supprimé');
}

// ─ Produits ─

function renderProduits() {
  const c = document.getElementById('gerer-content');
  const cats = getCategories();
  let filtered = state.productCatFilter
    ? state.products.filter(p => p.category === state.productCatFilter)
    : state.products;
  filtered = [...filtered].sort((a,b) => a.name.localeCompare(b.name));

  let html = `<div class="cat-filter-scroll">
    <button class="filter-btn ${!state.productCatFilter ? 'active' : ''}" onclick="setProdCat('')">Tout (${state.products.length})</button>
    ${cats.map(cat => `<button class="filter-btn ${state.productCatFilter === cat ? 'active' : ''}" onclick="setProdCat('${esc(cat)}')">${esc(cat)}</button>`).join('')}
  </div>
  <div class="gerer-section">
    <button class="btn-primary btn-add" onclick="openAddProduct()">➕ Nouveau produit</button>
    <div class="items-list">`;

  filtered.forEach(p => {
    html += `<div class="manage-item">
      <div class="manage-item-left">
        <div class="manage-item-col">
          <span class="product-name-m">${esc(p.name)}</span>
          <span class="product-meta">${esc(p.category)} · ${esc(p.unit)}</span>
        </div>
      </div>
      <div class="manage-item-actions">
        <button class="btn-icon" onclick="openEditProduct('${p.id}')">✏️</button>
        <button class="btn-icon" onclick="deleteProduct('${p.id}')">🗑️</button>
      </div>
    </div>`;
  });

  html += '</div></div>';
  c.innerHTML = html;
}

function setProdCat(cat) { state.productCatFilter = cat; renderProduits(); }

function _productModal(p) {
  const allCats = [...new Set([...CAT_LIST, ...getCategories()])].sort();
  return `
    ${p ? `<input type="hidden" id="modal-pid" value="${p.id}">` : ''}
    <div class="form-group">
      <label>Nom *</label>
      <input type="text" id="modal-pname" class="form-input" value="${p ? esc(p.name) : ''}" placeholder="ex: Yaourt nature">
    </div>
    <div class="form-group">
      <label>Catégorie *</label>
      <select id="modal-pcat" class="form-select">
        ${allCats.map(c => `<option value="${esc(c)}" ${p && p.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Unité par défaut</label>
      <select id="modal-punit" class="form-select">
        ${UNITS.map(u => `<option value="${u}" ${p && p.unit === u ? 'selected' : ''}>${u}</option>`).join('')}
      </select>
    </div>`;
}

function openAddProduct() {
  openModal(`${_productModal(null)}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveProduct(false)">Ajouter</button>
    </div>`, 'Nouveau produit');
}

function openEditProduct(id) {
  const p = getProduct(id);
  if (!p) return;
  openModal(`${_productModal(p)}
    <div class="modal-actions">
      <button class="btn-secondary" onclick="closeModal()">Annuler</button>
      <button class="btn-primary" onclick="saveProduct(true)">Enregistrer</button>
    </div>`, 'Modifier le produit');
}

function saveProduct(isEdit) {
  const name = document.getElementById('modal-pname').value.trim();
  const cat  = document.getElementById('modal-pcat').value;
  const unit = document.getElementById('modal-punit').value;
  if (!name) { showToast('⚠️ Entrez un nom'); return; }
  if (isEdit) {
    const id = document.getElementById('modal-pid').value;
    const p = getProduct(id);
    if (p) { p.name = name; p.category = cat; p.unit = unit; }
  } else {
    state.products.push({ id: uid(), name, category: cat, unit });
  }
  saveProducts(); closeModal();
  renderGerer(document.getElementById('app-content'));
  showToast(`✓ ${name} ${isEdit ? 'modifié' : 'ajouté'}`);
}

function deleteProduct(id) {
  const p = getProduct(id);
  if (!p) return;
  state.products = state.products.filter(x => x.id !== id);
  saveProducts(); renderProduits();
  showToast(`${p.name} supprimé`);
}

// ── VIEW: PARTAGER ────────────────────────────────────────────────────────────

function renderPartager(container) {
  const text    = buildShareText();
  const total   = state.list.length;
  const checked = state.list.filter(i => i.checked).length;

  if (total === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📋</div>
      <p>Votre liste est vide</p>
      <button class="btn-primary" onclick="showView('ajouter')">Ajouter des articles</button>
    </div>`;
    return;
  }

  container.innerHTML = `<div class="share-container">
    <div class="share-preview">
      <div class="share-stats">${total} article(s) · ${checked} cochés · ${total - checked} restants</div>
      <pre class="share-text">${esc(text)}</pre>
    </div>
    <div class="share-buttons">
      <button class="share-btn whatsapp" onclick="shareWhatsapp()">
        <span class="share-icon">💬</span><span>WhatsApp</span>
      </button>
      <button class="share-btn email" onclick="shareEmail()">
        <span class="share-icon">✉️</span><span>Email</span>
      </button>
      <button class="share-btn share-native" onclick="shareNative()">
        <span class="share-icon">📤</span><span>Partager…</span>
      </button>
      <button class="share-btn copy" onclick="copyList()">
        <span class="share-icon">📋</span><span>Copier</span>
      </button>
    </div>
  </div>`;
}

function buildShareText() {
  if (!state.list.length) return '';
  const date = new Date().toLocaleDateString('fr-CH', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  let text = `🛒 Liste de courses – ${date}\n\n`;

  const byStore = {};
  state.list.forEach(item => {
    (byStore[item.storeId] = byStore[item.storeId] || []).push(item);
  });

  Object.entries(byStore).forEach(([sid, items]) => {
    const s = getStore(sid);
    text += `${s.emoji} ${s.name.toUpperCase()}\n`;
    items.forEach(item => {
      const tick = item.checked ? '☑' : '☐';
      text += `  ${tick} ${item.name} – ${item.qty} ${item.unit}`;
      if (item.note) text += ` (${item.note})`;
      text += '\n';
    });
    text += '\n';
  });
  return text.trim();
}

function shareWhatsapp() {
  window.open('https://wa.me/?text=' + encodeURIComponent(buildShareText()), '_blank');
}

function shareEmail() {
  const subj = 'Liste de courses – ' + new Date().toLocaleDateString('fr-CH');
  window.location.href = `mailto:?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(buildShareText())}`;
}

async function shareNative() {
  if (navigator.share) {
    try { await navigator.share({ title: 'Liste de courses', text: buildShareText() }); }
    catch(e) { if (e.name !== 'AbortError') copyList(); }
  } else { copyList(); }
}

async function copyList() {
  const text = buildShareText();
  try {
    await navigator.clipboard.writeText(text);
    showToast('✓ Copié dans le presse-papier');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('✓ Copié');
  }
}

// ── PWA INSTALL ───────────────────────────────────────────────────────────────

let _deferredInstall = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _deferredInstall = e;
  if (!window.matchMedia('(display-mode: standalone)').matches) {
    showInstallBanner();
  }
});

function showInstallBanner() {
  const header = document.querySelector('.app-header');
  if (!header || document.getElementById('install-banner')) return;
  const banner = document.createElement('div');
  banner.id = 'install-banner';
  banner.className = 'install-banner';
  banner.innerHTML = `<span>📲 Installer sur l'écran d'accueil</span>
    <button onclick="triggerInstall()">Installer</button>
    <button class="dismiss" onclick="document.getElementById('install-banner').remove()">✕</button>`;
  header.insertAdjacentElement('afterend', banner);
}

async function triggerInstall() {
  if (!_deferredInstall) return;
  _deferredInstall.prompt();
  const { outcome } = await _deferredInstall.userChoice;
  if (outcome === 'accepted') document.getElementById('install-banner')?.remove();
  _deferredInstall = null;
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  showView('liste');

  window.addEventListener('popstate', () => {
    if (!document.getElementById('modal-overlay').classList.contains('hidden')) closeModal();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
