const products = [
  {id:'adm-01',name:'Admin Dashboard Pro',framework:'ESX',priceUSD:24,priceIDR:389000,desc:'Advanced moderation panel, logs, and anti abuse actions.'},
  {id:'hud-02',name:'Neon HUD System',framework:'Standalone',priceUSD:16,priceIDR:249000,desc:'Optimized player HUD with speedometer and minimap controls.'},
  {id:'inv-03',name:'Inventory X',framework:'QBCore',priceUSD:29,priceIDR:469000,desc:'Drag and drop inventory with stash, crafting, and metadata.'},
  {id:'gar-04',name:'Smart Garage',framework:'ESX',priceUSD:19,priceIDR:299000,desc:'Vehicle ownership, impound flows, and garage transitions.'}
];

const i18n = {
  en: {
    'nav.home':'Home','nav.shop':'Shop','nav.about':'About','nav.faq':'FAQ','nav.contact':'Contact',
    'hero.title':'Premium FiveM Scripts for Modern RP Servers','hero.desc':'Fast, secure, and optimized resources for ESX, QBCore, and standalone setups. Instant delivery after payment.',
    'hero.ctaShop':'Browse Products','hero.ctaDashboard':'My Dashboard','shop.title':'Shop / Products'
  },
  id: {
    'nav.home':'Beranda','nav.shop':'Toko','nav.about':'Tentang','nav.faq':'FAQ','nav.contact':'Kontak',
    'hero.title':'Script FiveM Premium untuk Server RP Modern','hero.desc':'Resource cepat, aman, dan optimal untuk ESX, QBCore, serta standalone. File langsung tersedia setelah pembayaran.',
    'hero.ctaShop':'Lihat Produk','hero.ctaDashboard':'Dashboard Saya','shop.title':'Toko / Produk'
  }
};

const gateway = {
  paypal: {name:'PayPal', checkout: purchase },
  stripe: {name:'Stripe', checkout: purchase }
};

const state = {
  selected: null,
  checkoutProduct: null,
  currency: localStorage.getItem('currency') || 'USD',
  lang: localStorage.getItem('lang') || 'en',
  dark: localStorage.getItem('theme') === 'dark'
};

const $ = (id) => document.getElementById(id);
const formatPrice = (p) => state.currency === 'USD' ? `$${p.priceUSD}` : `Rp ${p.priceIDR.toLocaleString('id-ID')}`;

document.addEventListener('DOMContentLoaded', () => {
  bindNav();
  bindSettings();
  renderProducts();
  applyLang();
  loadHistory();
  bindForms();
});

function bindNav(){
  $('menuToggle').addEventListener('click', () => {
    const menu = $('menu');
    menu.classList.toggle('open');
  });
}

function bindSettings(){
  $('currencySelect').value = state.currency;
  $('languageSelect').value = state.lang;
  if (state.dark) document.body.classList.add('dark');

  $('currencySelect').addEventListener('change', (e)=>{
    state.currency=e.target.value;localStorage.setItem('currency',state.currency);renderProducts();if(state.selected) showDetail(state.selected);
  });
  $('languageSelect').addEventListener('change', (e)=>{
    state.lang=e.target.value;localStorage.setItem('lang',state.lang);applyLang();
  });
  $('themeToggle').addEventListener('click', ()=>{
    state.dark=!state.dark;document.body.classList.toggle('dark',state.dark);localStorage.setItem('theme',state.dark?'dark':'light');
  });
}

function applyLang(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    el.textContent = i18n[state.lang][key] || i18n.en[key] || el.textContent;
  });
}

function renderProducts(){
  const q = $('searchInput').value?.toLowerCase() || '';
  const cat = $('categoryFilter').value;
  const list = products.filter(p => (cat === 'all' || p.framework === cat) && (p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  $('productGrid').innerHTML = list.map(p => `
    <article class="product" data-id="${p.id}">
      <h3>${p.name}</h3>
      <small>${p.framework}</small>
      <p>${p.desc}</p>
      <div class="row compact">
        <span class="price">${formatPrice(p)}</span>
        <button class="btn btn-ghost" data-detail="${p.id}">Detail</button>
        <button class="btn btn-primary" data-buy="${p.id}">Buy</button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('[data-detail]').forEach(btn=>btn.addEventListener('click',()=>showDetail(btn.dataset.detail)));
  document.querySelectorAll('[data-buy]').forEach(btn=>btn.addEventListener('click',()=>openCheckout(btn.dataset.buy)));
}

$('searchInput').addEventListener('input', renderProducts);
$('categoryFilter').addEventListener('change', renderProducts);

function showDetail(id){
  const p = products.find(x=>x.id===id); if(!p) return;
  state.selected = id;
  $('detailCard').innerHTML = `
    <h3>${p.name}</h3>
    <p class="muted">Framework: ${p.framework}</p>
    <p>${p.desc}</p>
    <ul>
      <li>• Optimized for OneSync + latest artifacts</li>
      <li>• Includes docs + changelog</li>
      <li>• Free updates for 12 months</li>
    </ul>
    <div class="row"><span class="price">${formatPrice(p)}</span><button class="btn btn-primary" onclick="openCheckout('${p.id}')">Checkout</button></div>
  `;
}

function openCheckout(id){
  const p = products.find(x=>x.id===id); if(!p) return;
  state.checkoutProduct = id;
  $('checkoutProduct').textContent = `${p.name} · ${formatPrice(p)}`;
  $('checkoutModal').classList.add('show');
}

$('cancelCheckout').addEventListener('click',()=> $('checkoutModal').classList.remove('show'));
$('confirmCheckout').addEventListener('click',()=>{
  const email = $('checkoutEmail').value.trim();
  const method = $('paymentMethod').value;
  if(!email || !/^\S+@\S+\.\S+$/.test(email)) return toast('Valid email is required');
  gateway[method].checkout({email, productId: state.checkoutProduct, provider: method});
});

function purchase(payload){
  const p = products.find(x=>x.id===payload.productId);
  const token = crypto.randomUUID().split('-')[0];
  const expiry = new Date(Date.now() + 24*3600*1000).toISOString();
  const item = {id: Date.now(), email: payload.email, provider: payload.provider, product: p.name, token, expiry};
  const history = JSON.parse(localStorage.getItem('purchase_history') || '[]');
  history.unshift(item);
  localStorage.setItem('purchase_history', JSON.stringify(history));
  loadHistory();
  $('checkoutModal').classList.remove('show');
  toast(`Payment success via ${payload.provider.toUpperCase()}. Download unlocked.`);
}

function loadHistory(){
  const history = JSON.parse(localStorage.getItem('purchase_history') || '[]');
  const box = $('purchaseHistory');
  if(!history.length){ box.className='history empty'; box.textContent='No purchases yet.'; return; }
  box.className='history';
  box.innerHTML = history.map(item=>`<article><strong>${item.product}</strong><p>${item.email} · ${item.provider.toUpperCase()}</p><p>Token: <code>${item.token}</code> · Expires: ${new Date(item.expiry).toLocaleString()}</p><a href="#" onclick="event.preventDefault();toast('Download started (demo) for token ${item.token}')">Download</a></article>`).join('<hr/>');
}

$('clearHistory').addEventListener('click',()=>{localStorage.removeItem('purchase_history');loadHistory();toast('Purchase history cleared');});

function bindForms(){
  $('contactForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = String(fd.get('name')||'').trim();
    const email = String(fd.get('email')||'').trim();
    const msg = String(fd.get('message')||'').trim();
    if(name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || msg.length < 10) return toast('Please complete form correctly.');
    toast('Message sent! We will reply soon.');
    e.target.reset();
  });
}

function toast(message){
  const node = $('toast');
  node.textContent = message;
  node.classList.add('show');
  setTimeout(()=>node.classList.remove('show'), 2200);
}
