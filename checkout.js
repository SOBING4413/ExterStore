/* ============================================
   ExterStore - Checkout Page JavaScript
   ============================================ */

/* === Product Data (same as main script) === */
const CHECKOUT_PRODUCTS = {
    'admin-dashboard': {
        name: 'Admin Dashboard', price: 250000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/5181dc36-5d70-4766-a3e9-34bc3cfb12bd.png',
        tags: ['ESX', 'QBCore']
    },
    'custom-hud': {
        name: 'Custom HUD', price: 180000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/a3e292ba-e3b6-4de5-baac-fb7574a4ee2e.png',
        tags: ['ESX', 'Standalone']
    },
    'inventory-system': {
        name: 'Inventory System', price: 300000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/58177ee9-8dc4-4285-a8d8-6e0e0f44fa68.png',
        tags: ['QBCore', 'ESX']
    },
    'garage-system': {
        name: 'Garage System', price: 200000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/e3893f8c-b394-4287-97a1-fbf8a25c7ad6.png',
        tags: ['ESX', 'QBCore']
    },
    'phone-system': {
        name: 'Phone System', price: 350000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/8bcdedd0-3387-4153-ba4d-19d0dd0fd9b4.png',
        tags: ['Standalone']
    },
    'starter-bundle': {
        name: 'Starter Pack Bundle', price: 650000, oldPrice: 930000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/74630368-48af-4515-8e5e-8944ddd3d6df.png',
        tags: ['ESX', 'QBCore', 'Bundle']
    }
};

/* === Currency Data === */
const CHECKOUT_CURRENCIES = {
    IDR: { symbol: 'Rp', rate: 1, locale: 'id-ID', decimals: 0 },
    USD: { symbol: '$', rate: 0.000063, locale: 'en-US', decimals: 2 },
    EUR: { symbol: '€', rate: 0.000058, locale: 'de-DE', decimals: 2 },
    GBP: { symbol: '£', rate: 0.000050, locale: 'en-GB', decimals: 2 },
    JPY: { symbol: '¥', rate: 0.0094, locale: 'ja-JP', decimals: 0 },
    KRW: { symbol: '₩', rate: 0.084, locale: 'ko-KR', decimals: 0 },
    CNY: { symbol: '¥', rate: 0.00046, locale: 'zh-CN', decimals: 2 },
    BRL: { symbol: 'R$', rate: 0.00032, locale: 'pt-BR', decimals: 2 },
    RUB: { symbol: '₽', rate: 0.0055, locale: 'ru-RU', decimals: 0 },
    THB: { symbol: '฿', rate: 0.0022, locale: 'th-TH', decimals: 2 },
    TRY: { symbol: '₺', rate: 0.0020, locale: 'tr-TR', decimals: 2 },
    INR: { symbol: '₹', rate: 0.0053, locale: 'hi-IN', decimals: 2 }
};

/* === Checkout i18n === */
const CHECKOUT_I18N = {
    id: {
        checkout_title: 'Checkout', checkout_billing: 'Informasi Pembeli', checkout_payment: 'Metode Pembayaran',
        checkout_confirm: 'Konfirmasi', checkout_summary: 'Ringkasan Pesanan', checkout_place: 'Bayar Sekarang',
        checkout_fname: 'Nama Depan', checkout_lname: 'Nama Belakang', checkout_email: 'Email',
        checkout_discord: 'Discord Username', checkout_country: 'Negara', checkout_notes: 'Catatan (Opsional)',
        checkout_next: 'Lanjut', checkout_back: 'Kembali', checkout_continue_shopping: 'Lanjut Belanja',
        checkout_subtotal: 'Subtotal', checkout_discount: 'Diskon', checkout_items: 'Item Pesanan',
        checkout_apply: 'Terapkan', checkout_agree: 'Saya setuju dengan Syarat & Ketentuan dan Kebijakan Refund',
        checkout_secure: 'Pembayaran aman & terenkripsi',
        checkout_trust_secure: 'Pembayaran Aman', checkout_trust_refund: 'Garansi Refund', checkout_trust_support: 'Support 24/7',
        checkout_paypal_desc: 'Bayar dengan akun PayPal', checkout_stripe_desc: 'Visa, Mastercard, dll.',
        checkout_crypto_desc: 'Bitcoin, Ethereum, USDT', checkout_ewallet_desc: 'GoPay, OVO, Dana, ShopeePay',
        checkout_bank_desc: 'Transfer via bank lokal',
        checkout_paypal_info: 'Anda akan diarahkan ke PayPal untuk menyelesaikan pembayaran.',
        checkout_stripe_info: 'Pembayaran kartu kredit/debit diproses secara aman melalui Stripe.',
        checkout_crypto_info: 'Anda akan menerima alamat wallet untuk mengirim pembayaran crypto.',
        checkout_ewallet_info: 'Pilih e-wallet Anda dan selesaikan pembayaran melalui aplikasi.',
        checkout_bank_info: 'Detail rekening bank akan diberikan setelah order dikonfirmasi.',
        checkout_success_title: 'Pesanan Berhasil! 🎉',
        checkout_success_desc: 'Terima kasih atas pembelian Anda. Detail pesanan telah dikirim ke email Anda.',
        checkout_success_email: 'Cek email Anda untuk detail pembayaran',
        checkout_success_discord: 'Join Discord kami untuk menerima script',
        checkout_success_delivery: 'Pengiriman dalam 1-24 jam setelah pembayaran',
        checkout_empty_desc: 'Tambahkan produk ke keranjang terlebih dahulu sebelum checkout.',
        checkout_coupon_placeholder: 'Kode Kupon',
        err_required: 'Field ini wajib diisi', err_email: 'Email tidak valid',
        err_terms: 'Anda harus menyetujui syarat & ketentuan',
        coupon_success: 'Kupon berhasil diterapkan! Diskon 10%',
        coupon_invalid: 'Kode kupon tidak valid',
    },
    en: {
        checkout_title: 'Checkout', checkout_billing: 'Billing Information', checkout_payment: 'Payment Method',
        checkout_confirm: 'Confirmation', checkout_summary: 'Order Summary', checkout_place: 'Place Order',
        checkout_fname: 'First Name', checkout_lname: 'Last Name', checkout_email: 'Email',
        checkout_discord: 'Discord Username', checkout_country: 'Country', checkout_notes: 'Notes (Optional)',
        checkout_next: 'Next', checkout_back: 'Back', checkout_continue_shopping: 'Continue Shopping',
        checkout_subtotal: 'Subtotal', checkout_discount: 'Discount', checkout_items: 'Order Items',
        checkout_apply: 'Apply', checkout_agree: 'I agree to the Terms of Service and Refund Policy',
        checkout_secure: 'Secure & encrypted payment',
        checkout_trust_secure: 'Secure Payment', checkout_trust_refund: 'Refund Guarantee', checkout_trust_support: '24/7 Support',
        checkout_paypal_desc: 'Pay with PayPal account', checkout_stripe_desc: 'Visa, Mastercard, etc.',
        checkout_crypto_desc: 'Bitcoin, Ethereum, USDT', checkout_ewallet_desc: 'GoPay, OVO, Dana, ShopeePay',
        checkout_bank_desc: 'Local bank transfer',
        checkout_paypal_info: 'You will be redirected to PayPal to complete payment.',
        checkout_stripe_info: 'Credit/debit card payment processed securely via Stripe.',
        checkout_crypto_info: 'You will receive a wallet address to send your crypto payment.',
        checkout_ewallet_info: 'Select your e-wallet and complete payment via the app.',
        checkout_bank_info: 'Bank account details will be provided after order confirmation.',
        checkout_success_title: 'Order Successful! 🎉',
        checkout_success_desc: 'Thank you for your purchase. Order details have been sent to your email.',
        checkout_success_email: 'Check your email for payment details',
        checkout_success_discord: 'Join our Discord to receive your scripts',
        checkout_success_delivery: 'Delivery within 1-24 hours after payment',
        checkout_empty_desc: 'Add products to your cart before checkout.',
        checkout_coupon_placeholder: 'Coupon Code',
        err_required: 'This field is required', err_email: 'Invalid email address',
        err_terms: 'You must agree to the terms and conditions',
        coupon_success: 'Coupon applied! 10% discount',
        coupon_invalid: 'Invalid coupon code',
    }
};

/* === State === */
let checkoutCart = JSON.parse(localStorage.getItem('exterstore_cart') || '[]');
let checkoutCurrency = localStorage.getItem('exterstore_currency') || 'IDR';
let checkoutLang = localStorage.getItem('exterstore_lang') || 'id';
let currentStep = 1;
let selectedPayment = 'paypal';
let couponApplied = false;
let discountPercent = 0;

/* === Checkout Translation Helper === */
function ct(key) {
    const trans = CHECKOUT_I18N[checkoutLang] || CHECKOUT_I18N['en'];
    return trans[key] || CHECKOUT_I18N['en'][key] || key;
}

/* === Format Price === */
function checkoutFormatPrice(priceIDR) {
    const curr = CHECKOUT_CURRENCIES[checkoutCurrency] || CHECKOUT_CURRENCIES['IDR'];
    const converted = priceIDR * curr.rate;
    return curr.symbol + ' ' + converted.toLocaleString(curr.locale, {
        minimumFractionDigits: curr.decimals,
        maximumFractionDigits: curr.decimals
    });
}

/* === Init === */
document.addEventListener('DOMContentLoaded', () => {
    // Re-read from localStorage in case main script updated them
    checkoutCurrency = localStorage.getItem('exterstore_currency') || 'IDR';
    checkoutLang = localStorage.getItem('exterstore_lang') || 'id';

    initCheckoutPage();
    initCheckoutSteps();
    initPaymentMethods();
    initCoupon();
    initCheckoutDropdowns();
    applyCheckoutI18n();
});

/* === Init Checkout Page === */
function initCheckoutPage() {
    const emptyEl = document.getElementById('checkoutEmpty');
    const gridEl = document.getElementById('checkoutGrid');

    if (checkoutCart.length === 0) {
        emptyEl.style.display = 'block';
        gridEl.style.display = 'none';
    } else {
        emptyEl.style.display = 'none';
        gridEl.style.display = 'grid';
        renderOrderSummary();
    }
}

/* === Render Order Summary === */
function renderOrderSummary() {
    const itemsEl = document.getElementById('summaryItems');
    const subtotalEl = document.getElementById('summarySubtotal');
    const totalEl = document.getElementById('summaryTotal');
    const discountRow = document.getElementById('discountRow');
    const discountEl = document.getElementById('summaryDiscount');

    let subtotal = 0;
    let html = '';

    checkoutCart.forEach(item => {
        const p = CHECKOUT_PRODUCTS[item.id];
        if (!p) return;
        subtotal += p.price;
        html += `
            <div class="summary-item">
                <div class="summary-item-img"><img src="${p.image}" alt="${p.name}"></div>
                <div class="summary-item-info">
                    <div class="summary-item-name">${p.name}</div>
                    <div class="summary-item-tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="summary-item-price">${checkoutFormatPrice(p.price)}</div>
            </div>
        `;
    });

    itemsEl.innerHTML = html;
    subtotalEl.textContent = checkoutFormatPrice(subtotal);

    if (couponApplied && discountPercent > 0) {
        const discountAmount = subtotal * (discountPercent / 100);
        discountRow.style.display = 'flex';
        discountEl.textContent = '- ' + checkoutFormatPrice(discountAmount);
        totalEl.textContent = checkoutFormatPrice(subtotal - discountAmount);
    } else {
        discountRow.style.display = 'none';
        totalEl.textContent = checkoutFormatPrice(subtotal);
    }
}

/* === Checkout Steps === */
function initCheckoutSteps() {
    const toStep2 = document.getElementById('toStep2Btn');
    const toStep3 = document.getElementById('toStep3Btn');
    const backToStep1 = document.getElementById('backToStep1Btn');
    const backToStep2 = document.getElementById('backToStep2Btn');
    const placeOrder = document.getElementById('placeOrderBtn');

    toStep2.addEventListener('click', () => {
        if (validateStep1()) goToStep(2);
    });
    toStep3.addEventListener('click', () => {
        renderConfirmation();
        goToStep(3);
    });
    backToStep1.addEventListener('click', () => goToStep(1));
    backToStep2.addEventListener('click', () => goToStep(2));
    placeOrder.addEventListener('click', () => handlePlaceOrder());
}

function goToStep(step) {
    currentStep = step;

    // Update step indicators
    document.querySelectorAll('.checkout-steps .step').forEach((s, i) => {
        const stepNum = i + 1;
        s.classList.remove('active', 'completed');
        if (stepNum === step) s.classList.add('active');
        else if (stepNum < step) s.classList.add('completed');
    });

    // Update step lines
    document.querySelectorAll('.checkout-steps .step-line').forEach((line, i) => {
        line.classList.toggle('active', i < step - 1);
    });

    // Show correct content
    document.querySelectorAll('.checkout-step-content').forEach(el => el.classList.remove('active'));
    const stepEl = document.getElementById(`step${step}`);
    if (stepEl) stepEl.classList.add('active');

    // Scroll to top of form
    window.scrollTo({ top: 200, behavior: 'smooth' });
}

/* === Validation === */
function validateStep1() {
    let valid = true;
    const fields = [
        { id: 'firstName', errorId: 'firstNameError', type: 'text' },
        { id: 'lastName', errorId: 'lastNameError', type: 'text' },
        { id: 'email', errorId: 'emailError', type: 'email' },
        { id: 'discord', errorId: 'discordError', type: 'text' },
        { id: 'country', errorId: 'countryError', type: 'select' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        const value = input.value.trim();

        input.classList.remove('error');
        error.textContent = '';

        if (!value) {
            input.classList.add('error');
            error.textContent = ct('err_required');
            valid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            input.classList.add('error');
            error.textContent = ct('err_email');
            valid = false;
        }
    });

    return valid;
}

/* === Payment Methods === */
function initPaymentMethods() {
    const methods = document.querySelectorAll('.payment-method');
    const detailIds = ['paypalDetail', 'stripeDetail', 'cryptoDetail', 'ewalletDetail', 'bankDetail'];
    const methodMap = { paypal: 0, stripe: 1, crypto: 2, ewallet: 3, bank: 4 };

    methods.forEach(method => {
        method.addEventListener('click', () => {
            methods.forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            selectedPayment = method.dataset.method;

            // Show corresponding detail
            detailIds.forEach(id => document.getElementById(id).style.display = 'none');
            const idx = methodMap[selectedPayment];
            if (idx !== undefined) {
                document.getElementById(detailIds[idx]).style.display = 'block';
            }
        });
    });
}

/* === Coupon System === */
function initCoupon() {
    const applyBtn = document.getElementById('applyCouponBtn');
    const input = document.getElementById('couponInput');
    const message = document.getElementById('couponMessage');

    applyBtn.addEventListener('click', () => {
        const code = input.value.trim().toUpperCase();
        message.className = 'coupon-message';

        // Demo coupon codes
        const validCoupons = {
            'EXTER10': 10,
            'WELCOME': 10,
            'FIVEM20': 20,
            'BUNDLE15': 15
        };

        if (validCoupons[code]) {
            couponApplied = true;
            discountPercent = validCoupons[code];
            message.textContent = '✅ ' + ct('coupon_success').replace('10%', discountPercent + '%');
            message.classList.add('success');
            input.disabled = true;
            applyBtn.disabled = true;
            applyBtn.style.opacity = '0.5';
            renderOrderSummary();
        } else if (code === '') {
            message.textContent = '';
        } else {
            message.textContent = '❌ ' + ct('coupon_invalid');
            message.classList.add('error');
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyBtn.click();
    });
}

/* === Render Confirmation === */
function renderConfirmation() {
    // Billing info
    const billingEl = document.getElementById('confirmBilling');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;
    const country = document.getElementById('country');
    const countryText = country.options[country.selectedIndex].text;

    billingEl.innerHTML = `
        <div class="confirm-detail-item">
            <span class="label">${ct('checkout_fname')}</span>
            <span class="value">${firstName} ${lastName}</span>
        </div>
        <div class="confirm-detail-item">
            <span class="label">${ct('checkout_email')}</span>
            <span class="value">${email}</span>
        </div>
        <div class="confirm-detail-item">
            <span class="label">${ct('checkout_discord')}</span>
            <span class="value">${discord}</span>
        </div>
        <div class="confirm-detail-item">
            <span class="label">${ct('checkout_country')}</span>
            <span class="value">${countryText}</span>
        </div>
    `;

    // Payment info
    const paymentEl = document.getElementById('confirmPayment');
    const paymentNames = {
        paypal: 'PayPal',
        stripe: 'Credit/Debit Card (Stripe)',
        crypto: 'Cryptocurrency',
        ewallet: 'E-Wallet',
        bank: 'Bank Transfer'
    };
    const paymentIcons = {
        paypal: 'fab fa-paypal',
        stripe: 'fab fa-stripe-s',
        crypto: 'fab fa-bitcoin',
        ewallet: 'fas fa-wallet',
        bank: 'fas fa-university'
    };
    paymentEl.innerHTML = `
        <div class="confirm-detail-item" style="grid-column: 1 / -1;">
            <span class="label">${ct('checkout_payment')}</span>
            <span class="value"><i class="${paymentIcons[selectedPayment]}" style="color:var(--accent);margin-right:6px;"></i> ${paymentNames[selectedPayment]}</span>
        </div>
    `;

    // Items
    const itemsEl = document.getElementById('confirmItems');
    let html = '';
    checkoutCart.forEach(item => {
        const p = CHECKOUT_PRODUCTS[item.id];
        if (!p) return;
        html += `
            <div class="confirm-item">
                <div class="confirm-item-img"><img src="${p.image}" alt="${p.name}"></div>
                <div class="confirm-item-info">
                    <div class="confirm-item-name">${p.name}</div>
                    <div class="confirm-item-tags">
                        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="confirm-item-price">${checkoutFormatPrice(p.price)}</div>
            </div>
        `;
    });
    itemsEl.innerHTML = html;
}

/* === Place Order === */
function handlePlaceOrder() {
    const termsCheck = document.getElementById('agreeTerms');
    const termsError = document.getElementById('termsError');

    termsError.textContent = '';

    if (!termsCheck.checked) {
        termsError.textContent = ct('err_terms');
        return;
    }

    // Generate order ID
    const orderId = 'EXT-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
    document.getElementById('orderId').textContent = '#' + orderId;

    // Show loading on button
    const btn = document.getElementById('placeOrderBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    // Simulate processing
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;

        // Clear cart
        localStorage.removeItem('exterstore_cart');
        checkoutCart = [];

        // Show success modal
        const modal = document.getElementById('successModal');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Close modal on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }, 2000);
}

/* === Checkout Dropdowns (Language & Currency) === */
function initCheckoutDropdowns() {
    // Language dropdown
    document.querySelectorAll('#langMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            checkoutLang = item.dataset.lang;
            localStorage.setItem('exterstore_lang', checkoutLang);
            document.getElementById('currentLang').textContent = checkoutLang.toUpperCase();
            document.querySelectorAll('#langMenu .dropdown-item').forEach(i => {
                i.classList.toggle('active', i.dataset.lang === checkoutLang);
            });
            document.getElementById('langDropdown').classList.remove('open');
            // RTL support
            document.documentElement.dir = checkoutLang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = checkoutLang;
            applyCheckoutI18n();
            renderOrderSummary();
        });
    });

    // Currency dropdown
    document.querySelectorAll('#currencyMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            checkoutCurrency = item.dataset.currency;
            localStorage.setItem('exterstore_currency', checkoutCurrency);
            document.getElementById('currentCurrency').textContent = checkoutCurrency;
            document.querySelectorAll('#currencyMenu .dropdown-item').forEach(i => {
                i.classList.toggle('active', i.dataset.currency === checkoutCurrency);
            });
            document.getElementById('currencyDropdown').classList.remove('open');
            renderOrderSummary();
        });
    });

    // Set initial states
    document.getElementById('currentLang').textContent = checkoutLang.toUpperCase();
    document.getElementById('currentCurrency').textContent = checkoutCurrency;
    document.querySelectorAll('#langMenu .dropdown-item').forEach(i => {
        i.classList.toggle('active', i.dataset.lang === checkoutLang);
    });
    document.querySelectorAll('#currencyMenu .dropdown-item').forEach(i => {
        i.classList.toggle('active', i.dataset.currency === checkoutCurrency);
    });
}

/* === Apply i18n for checkout page === */
function applyCheckoutI18n() {
    // Use the main script's TRANSLATIONS if available, plus checkout-specific ones
    const mainTrans = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[checkoutLang]) ? TRANSLATIONS[checkoutLang] : {};
    const checkoutTrans = CHECKOUT_I18N[checkoutLang] || CHECKOUT_I18N['en'];
    const merged = { ...mainTrans, ...checkoutTrans };

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (merged[key]) el.textContent = merged[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset['i18nPlaceholder'];
        if (merged[key]) el.placeholder = merged[key];
    });
}