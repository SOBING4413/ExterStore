/* ============================================
   ExterStore - Premium FiveM Scripts Store
   Advanced JavaScript - i18n, Currency, Cart
   ============================================ */

/* === Product Data === */
const PRODUCTS = {
    'admin-dashboard': {
        name: 'Admin Dashboard',
        desc_key: 'product1_desc',
        price: 250000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/5181dc36-5d70-4766-a3e9-34bc3cfb12bd.png',
        badge: 'Best Seller',
        tags: ['ESX', 'QBCore'],
        features: ['Real-time player monitoring', 'Server statistics & analytics', 'Player management (kick, ban, warn)', 'Economy management', 'Vehicle management', 'Log viewer', 'Announcement system', 'Custom themes']
    },
    'custom-hud': {
        name: 'Custom HUD',
        desc_key: 'product2_desc',
        price: 180000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/a3e292ba-e3b6-4de5-baac-fb7574a4ee2e.png',
        badge: 'Popular',
        tags: ['ESX', 'Standalone'],
        features: ['Health & armor bars', 'Minimap customization', 'Speedometer widget', 'Weapon selector', 'Hunger & thirst bars', 'Oxygen indicator', 'Customizable position', 'Multiple themes']
    },
    'inventory-system': {
        name: 'Inventory System',
        desc_key: 'product3_desc',
        price: 300000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/58177ee9-8dc4-4285-a8d8-6e0e0f44fa68.png',
        badge: 'New',
        tags: ['QBCore', 'ESX'],
        features: ['Drag & drop interface', 'Weight system', 'Hotbar slots', 'Item crafting', 'Drop system', 'Shop integration', 'Weapon attachments', 'Custom items support']
    },
    'garage-system': {
        name: 'Garage System',
        desc_key: 'product4_desc',
        price: 200000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/e3893f8c-b394-4287-97a1-fbf8a25c7ad6.png',
        badge: '',
        tags: ['ESX', 'QBCore'],
        features: ['3D vehicle preview', 'Multi-garage support', 'Vehicle customization', 'Impound system', 'Garage categories', 'Search & filter', 'Favorites system', 'Vehicle stats display']
    },
    'phone-system': {
        name: 'Phone System',
        desc_key: 'product5_desc',
        price: 350000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/8bcdedd0-3387-4153-ba4d-19d0dd0fd9b4.png',
        badge: '',
        tags: ['Standalone'],
        features: ['Messaging system', 'Contacts management', 'Camera app', 'Bank app', 'Social media', 'GPS navigation', 'Music player', 'App store']
    },
    'starter-bundle': {
        name: 'Starter Pack Bundle',
        desc_key: 'product6_desc',
        price: 650000,
        oldPrice: 930000,
        image: 'https://mgx-backend-cdn.metadl.com/generate/images/1095359/2026-04-07/74630368-48af-4515-8e5e-8944ddd3d6df.png',
        badge: 'Bundle',
        tags: ['ESX', 'QBCore', 'Bundle'],
        features: ['Admin Dashboard included', 'Custom HUD included', 'Inventory System included', 'Garage System included', '30% discount', 'Priority support', 'Free future updates', 'All frameworks supported']
    }
};

/* === Currency Data === */
const CURRENCIES = {
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

/* === i18n Translations === */
const TRANSLATIONS = {
    id: {
        nav_home: 'Beranda', nav_products: 'Produk', nav_features: 'Fitur', nav_reviews: 'Ulasan', nav_docs: 'Docs',
        hero_badge: 'Script FiveM Premium', hero_title_1: 'Level Up', hero_desc: 'Script premium berkualitas tinggi untuk server FiveM kamu. Dioptimasi untuk performa terbaik, aman, dan mudah digunakan.',
        hero_btn_products: 'Lihat Produk', hero_btn_docs: 'Dokumentasi',
        stat_sold: 'Script Terjual', stat_satisfaction: 'Kepuasan', stat_clients: 'Klien Senang', stat_languages: 'Bahasa',
        scroll_down: 'Gulir ke Bawah',
        trusted_badge: 'Terpercaya & Aman', trusted_title: 'Metode Pembayaran yang Diterima',
        products_badge: 'Produk Kami', products_title_1: 'Script', products_title_2: 'Premium', products_desc: 'Koleksi script premium kami yang sudah teruji dan dioptimasi untuk performa terbaik server FiveM kamu.',
        filter_all: 'Semua',
        btn_preview: 'Preview', btn_add_cart: 'Tambah',
        product1_desc: 'Panel admin lengkap dengan monitoring server, player management, dan real-time statistics.',
        product2_desc: 'HUD modern dengan health, armor, minimap, speedometer dan weapon selector yang customizable.',
        product3_desc: 'Sistem inventory drag & drop dengan weight system, hotbar, dan item crafting yang lengkap.',
        product4_desc: 'Sistem garasi modern dengan preview kendaraan 3D, customization, dan multi-garage support.',
        product5_desc: 'Smartphone in-game dengan messaging, contacts, camera, bank app, dan social media integration.',
        product6_desc: 'Paket lengkap untuk memulai server FiveM kamu. Termasuk HUD, inventory, garage, dan admin panel.',
        features_badge: 'Kenapa Pilih Kami', features_title_1: 'Kenapa Pilih', features_desc: 'Kami memberikan yang terbaik untuk server FiveM kamu dengan kualitas premium dan support 24/7.',
        feature1_title: 'Performa Optimal', feature1_desc: 'Semua script kami dioptimasi untuk resmon rendah. Tidak akan membebani server kamu.',
        feature2_title: 'Aman & Terlindungi', feature2_desc: 'Kode yang aman dengan escrow protection dan anti-cheat integration untuk keamanan maksimal.',
        feature3_title: 'Support 24/7', feature3_desc: 'Tim support kami siap membantu kamu kapan saja melalui Discord untuk instalasi dan troubleshooting.',
        feature4_title: 'Update Gratis', feature4_desc: 'Dapatkan update gratis selamanya. Kami terus mengembangkan dan memperbaiki script kami.',
        feature5_title: 'Support Global', feature5_desc: 'Dukungan multi-bahasa dengan 14+ bahasa dan opsi pembayaran multi-mata uang di seluruh dunia.',
        feature6_title: 'Integrasi Mudah', feature6_desc: 'Compatible dengan ESX, QBCore, dan framework populer lainnya. Plug and play!',
        global_badge: 'Jangkauan Global', global_title: 'Melayani Pelanggan di Seluruh Dunia',
        global_desc: 'Kami mendukung berbagai bahasa, mata uang, dan metode pembayaran untuk melayani Anda di mana pun berada.',
        global_languages: 'Bahasa Didukung', global_currencies: 'Mata Uang Tersedia', global_payments: 'Metode Pembayaran', global_countries: 'Negara Dijangkau',
        testimonials_badge: 'Testimoni', testimonials_title_1: 'Apa Kata', testimonials_title_2: 'Mereka',
        testimonials_desc: 'Review dari pelanggan yang sudah menggunakan script kami di server mereka.',
        testimonial1: '"Script HUD nya keren banget! Resmon rendah dan designnya premium. Support juga fast response. Recommended!"',
        testimonial2: '"Admin Dashboard nya sangat membantu untuk manage server. Fiturnya lengkap dan mudah digunakan. Worth the price!"',
        testimonial3: '"Inventory system nya smooth banget, drag and drop nya responsive. Player di server saya suka banget sama UI nya!"',
        testimonial4: '"Beli starter pack bundle dan langsung bisa setup server dalam sehari. Dokumentasinya jelas dan lengkap. Top!"',
        cta_title_1: 'Siap Upgrade', cta_title_2: 'Server Kamu', cta_desc: 'Bergabung dengan 50+ server owner yang sudah mempercayakan script mereka kepada kami.',
        cta_btn_products: 'Lihat Produk',
        footer_desc: 'Script FiveM premium untuk server kamu. Kualitas terbaik dengan harga terjangkau.',
        footer_quick: 'Link Cepat', footer_resources: 'Sumber Daya', footer_support: 'Dukungan',
        cart_title: 'Keranjang Belanja', cart_empty: 'Keranjang kamu kosong', cart_shop_now: 'Belanja Sekarang',
        cart_total: 'Total:', cart_checkout: 'Checkout', cart_clear: 'Kosongkan Keranjang',
        modal_features: 'Fitur:', modal_add_cart: 'Tambah ke Keranjang',
        toast_added: 'ditambahkan ke keranjang!', toast_removed: 'dihapus dari keranjang',
        checkout_title: 'Checkout', checkout_billing: 'Informasi Pembeli', checkout_payment: 'Metode Pembayaran',
        checkout_summary: 'Ringkasan Pesanan', checkout_place: 'Bayar Sekarang',
        checkout_fname: 'Nama Depan', checkout_lname: 'Nama Belakang', checkout_email: 'Email',
        checkout_discord: 'Discord Username', checkout_country: 'Negara',
    },
    en: {
        nav_home: 'Home', nav_products: 'Products', nav_features: 'Features', nav_reviews: 'Reviews', nav_docs: 'Docs',
        hero_badge: 'Premium FiveM Scripts', hero_title_1: 'Level Up Your', hero_desc: 'Premium high-quality scripts for your FiveM server. Optimized for the best performance, secure, and easy to use.',
        hero_btn_products: 'View Products', hero_btn_docs: 'Documentation',
        stat_sold: 'Scripts Sold', stat_satisfaction: 'Satisfaction', stat_clients: 'Happy Clients', stat_languages: 'Languages',
        scroll_down: 'Scroll Down',
        trusted_badge: 'Trusted & Secure', trusted_title: 'Accepted Payment Methods',
        products_badge: 'Our Products', products_title_1: 'Premium', products_title_2: 'Scripts', products_desc: 'Our premium script collection, tested and optimized for the best performance of your FiveM server.',
        filter_all: 'All',
        btn_preview: 'Preview', btn_add_cart: 'Add',
        product1_desc: 'Complete admin panel with server monitoring, player management, and real-time statistics.',
        product2_desc: 'Modern HUD with health, armor, minimap, speedometer and customizable weapon selector.',
        product3_desc: 'Drag & drop inventory system with weight system, hotbar, and complete item crafting.',
        product4_desc: 'Modern garage system with 3D vehicle preview, customization, and multi-garage support.',
        product5_desc: 'In-game smartphone with messaging, contacts, camera, bank app, and social media integration.',
        product6_desc: 'Complete package to start your FiveM server. Includes HUD, inventory, garage, and admin panel.',
        features_badge: 'Why Choose Us', features_title_1: 'Why Choose', features_desc: 'We provide the best for your FiveM server with premium quality and 24/7 support.',
        feature1_title: 'Optimized Performance', feature1_desc: 'All our scripts are optimized for low resmon. Won\'t burden your server.',
        feature2_title: 'Secure & Protected', feature2_desc: 'Secure code with escrow protection and anti-cheat integration for maximum security.',
        feature3_title: '24/7 Support', feature3_desc: 'Our support team is ready to help you anytime via Discord for installation and troubleshooting.',
        feature4_title: 'Free Updates', feature4_desc: 'Get free updates forever. We continuously develop and improve our scripts.',
        feature5_title: 'Global Support', feature5_desc: 'Multi-language support with 14+ languages and multi-currency payment options worldwide.',
        feature6_title: 'Easy Integration', feature6_desc: 'Compatible with ESX, QBCore, and other popular frameworks. Plug and play!',
        global_badge: 'Global Reach', global_title: 'Serving Customers Worldwide',
        global_desc: 'We support multiple languages, currencies, and payment methods to serve you wherever you are.',
        global_languages: 'Languages Supported', global_currencies: 'Currencies Available', global_payments: 'Payment Methods', global_countries: 'Countries Reached',
        testimonials_badge: 'Testimonials', testimonials_title_1: 'What They', testimonials_title_2: 'Say',
        testimonials_desc: 'Reviews from customers who have used our scripts on their servers.',
        testimonial1: '"The HUD script is amazing! Low resmon and premium design. Support is also fast response. Recommended!"',
        testimonial2: '"Admin Dashboard is very helpful for managing the server. Complete features and easy to use. Worth the price!"',
        testimonial3: '"The inventory system is super smooth, drag and drop is responsive. Players on my server love the UI!"',
        testimonial4: '"Bought the starter pack bundle and was able to set up the server in one day. Documentation is clear and complete. Top!"',
        cta_title_1: 'Ready to Upgrade Your', cta_title_2: 'Server', cta_desc: 'Join 50+ server owners who have trusted their scripts to us.',
        cta_btn_products: 'View Products',
        footer_desc: 'Premium FiveM scripts for your server. Best quality at affordable prices.',
        footer_quick: 'Quick Links', footer_resources: 'Resources', footer_support: 'Support',
        cart_title: 'Shopping Cart', cart_empty: 'Your cart is empty', cart_shop_now: 'Shop Now',
        cart_total: 'Total:', cart_checkout: 'Checkout', cart_clear: 'Clear Cart',
        modal_features: 'Features:', modal_add_cart: 'Add to Cart',
        toast_added: 'added to cart!', toast_removed: 'removed from cart',
        checkout_title: 'Checkout', checkout_billing: 'Billing Information', checkout_payment: 'Payment Method',
        checkout_summary: 'Order Summary', checkout_place: 'Place Order',
        checkout_fname: 'First Name', checkout_lname: 'Last Name', checkout_email: 'Email',
        checkout_discord: 'Discord Username', checkout_country: 'Country',
    },
    es: {
        nav_home: 'Inicio', nav_products: 'Productos', nav_features: 'Características', nav_reviews: 'Reseñas', nav_docs: 'Docs',
        hero_badge: 'Scripts FiveM Premium', hero_title_1: 'Mejora Tu', hero_desc: 'Scripts premium de alta calidad para tu servidor FiveM. Optimizados para el mejor rendimiento, seguros y fáciles de usar.',
        hero_btn_products: 'Ver Productos', hero_btn_docs: 'Documentación',
        stat_sold: 'Scripts Vendidos', stat_satisfaction: 'Satisfacción', stat_clients: 'Clientes Felices', stat_languages: 'Idiomas',
        scroll_down: 'Desplazar', trusted_badge: 'Confiable y Seguro', trusted_title: 'Métodos de Pago Aceptados',
        products_badge: 'Nuestros Productos', products_title_1: 'Scripts', products_title_2: 'Premium', products_desc: 'Nuestra colección de scripts premium, probados y optimizados para el mejor rendimiento.',
        filter_all: 'Todos', btn_preview: 'Vista Previa', btn_add_cart: 'Añadir',
        product1_desc: 'Panel de administración completo con monitoreo del servidor y estadísticas en tiempo real.',
        product2_desc: 'HUD moderno con salud, armadura, minimapa, velocímetro y selector de armas personalizable.',
        product3_desc: 'Sistema de inventario drag & drop con sistema de peso, hotbar y crafting completo.',
        product4_desc: 'Sistema de garaje moderno con vista previa 3D de vehículos y soporte multi-garaje.',
        product5_desc: 'Smartphone en el juego con mensajería, contactos, cámara y aplicación bancaria.',
        product6_desc: 'Paquete completo para iniciar tu servidor FiveM. Incluye HUD, inventario, garaje y panel admin.',
        features_badge: 'Por Qué Elegirnos', features_title_1: 'Por Qué Elegir', features_desc: 'Ofrecemos lo mejor para tu servidor FiveM con calidad premium y soporte 24/7.',
        feature1_title: 'Rendimiento Optimizado', feature1_desc: 'Todos nuestros scripts están optimizados para bajo resmon.',
        feature2_title: 'Seguro y Protegido', feature2_desc: 'Código seguro con protección escrow e integración anti-cheat.',
        feature3_title: 'Soporte 24/7', feature3_desc: 'Nuestro equipo de soporte está listo para ayudarte en cualquier momento.',
        feature4_title: 'Actualizaciones Gratis', feature4_desc: 'Obtén actualizaciones gratuitas para siempre.',
        feature5_title: 'Soporte Global', feature5_desc: 'Soporte multilingüe con 14+ idiomas y opciones de pago multidivisa.',
        feature6_title: 'Fácil Integración', feature6_desc: 'Compatible con ESX, QBCore y otros frameworks populares.',
        global_badge: 'Alcance Global', global_title: 'Sirviendo Clientes en Todo el Mundo',
        global_desc: 'Soportamos múltiples idiomas, monedas y métodos de pago.',
        global_languages: 'Idiomas Soportados', global_currencies: 'Monedas Disponibles', global_payments: 'Métodos de Pago', global_countries: 'Países Alcanzados',
        testimonials_badge: 'Testimonios', testimonials_title_1: 'Qué Dicen', testimonials_title_2: 'Ellos',
        testimonials_desc: 'Reseñas de clientes que han usado nuestros scripts.',
        testimonial1: '"¡El script HUD es increíble! Bajo resmon y diseño premium. ¡Recomendado!"',
        testimonial2: '"El Dashboard Admin es muy útil para gestionar el servidor. ¡Vale la pena!"',
        testimonial3: '"El sistema de inventario es super fluido. ¡A los jugadores les encanta!"',
        testimonial4: '"Compré el bundle y pude configurar el servidor en un día. ¡Documentación clara!"',
        cta_title_1: '¿Listo para Mejorar Tu', cta_title_2: 'Servidor', cta_desc: 'Únete a 50+ propietarios de servidores que confían en nosotros.',
        cta_btn_products: 'Ver Productos',
        footer_desc: 'Scripts FiveM premium para tu servidor. La mejor calidad a precios accesibles.',
        footer_quick: 'Enlaces Rápidos', footer_resources: 'Recursos', footer_support: 'Soporte',
        cart_title: 'Carrito', cart_empty: 'Tu carrito está vacío', cart_shop_now: 'Comprar Ahora',
        cart_total: 'Total:', cart_checkout: 'Pagar', cart_clear: 'Vaciar Carrito',
        modal_features: 'Características:', modal_add_cart: 'Añadir al Carrito',
        toast_added: 'añadido al carrito!', toast_removed: 'eliminado del carrito',
    },
    fr: {
        nav_home: 'Accueil', nav_products: 'Produits', nav_features: 'Fonctionnalités', nav_reviews: 'Avis', nav_docs: 'Docs',
        hero_badge: 'Scripts FiveM Premium', hero_title_1: 'Améliorez Votre', hero_desc: 'Scripts premium de haute qualité pour votre serveur FiveM. Optimisés, sécurisés et faciles à utiliser.',
        hero_btn_products: 'Voir Produits', hero_btn_docs: 'Documentation',
        stat_sold: 'Scripts Vendus', stat_satisfaction: 'Satisfaction', stat_clients: 'Clients Satisfaits', stat_languages: 'Langues',
        scroll_down: 'Défiler', trusted_badge: 'Fiable et Sécurisé', trusted_title: 'Méthodes de Paiement Acceptées',
        products_badge: 'Nos Produits', products_title_1: 'Scripts', products_title_2: 'Premium', products_desc: 'Notre collection de scripts premium, testés et optimisés.',
        filter_all: 'Tous', btn_preview: 'Aperçu', btn_add_cart: 'Ajouter',
        product1_desc: 'Panneau d\'administration complet avec surveillance du serveur et statistiques en temps réel.',
        product2_desc: 'HUD moderne avec santé, armure, minimap, compteur de vitesse personnalisable.',
        product3_desc: 'Système d\'inventaire drag & drop avec système de poids et crafting complet.',
        product4_desc: 'Système de garage moderne avec aperçu 3D des véhicules et support multi-garage.',
        product5_desc: 'Smartphone en jeu avec messagerie, contacts, caméra et application bancaire.',
        product6_desc: 'Pack complet pour démarrer votre serveur FiveM.',
        features_badge: 'Pourquoi Nous Choisir', features_title_1: 'Pourquoi Choisir', features_desc: 'Nous offrons le meilleur pour votre serveur FiveM.',
        feature1_title: 'Performance Optimisée', feature1_desc: 'Tous nos scripts sont optimisés pour un faible resmon.',
        feature2_title: 'Sécurisé et Protégé', feature2_desc: 'Code sécurisé avec protection escrow.',
        feature3_title: 'Support 24/7', feature3_desc: 'Notre équipe est prête à vous aider à tout moment.',
        feature4_title: 'Mises à Jour Gratuites', feature4_desc: 'Mises à jour gratuites à vie.',
        feature5_title: 'Support Global', feature5_desc: 'Support multilingue avec 14+ langues.',
        feature6_title: 'Intégration Facile', feature6_desc: 'Compatible avec ESX, QBCore et autres frameworks.',
        global_badge: 'Portée Mondiale', global_title: 'Au Service des Clients du Monde Entier',
        global_desc: 'Nous supportons plusieurs langues, devises et méthodes de paiement.',
        global_languages: 'Langues Supportées', global_currencies: 'Devises Disponibles', global_payments: 'Méthodes de Paiement', global_countries: 'Pays Atteints',
        testimonials_badge: 'Témoignages', testimonials_title_1: 'Ce Qu\'ils', testimonials_title_2: 'Disent',
        testimonials_desc: 'Avis de clients qui utilisent nos scripts.',
        testimonial1: '"Le script HUD est incroyable! Faible resmon et design premium. Recommandé!"',
        testimonial2: '"Le Dashboard Admin est très utile. Ça vaut le prix!"',
        testimonial3: '"Le système d\'inventaire est super fluide. Les joueurs adorent!"',
        testimonial4: '"J\'ai acheté le bundle et configuré le serveur en un jour. Top!"',
        cta_title_1: 'Prêt à Améliorer Votre', cta_title_2: 'Serveur', cta_desc: 'Rejoignez 50+ propriétaires de serveurs qui nous font confiance.',
        cta_btn_products: 'Voir Produits',
        footer_desc: 'Scripts FiveM premium. Meilleure qualité à prix abordable.',
        footer_quick: 'Liens Rapides', footer_resources: 'Ressources', footer_support: 'Support',
        cart_title: 'Panier', cart_empty: 'Votre panier est vide', cart_shop_now: 'Acheter',
        cart_total: 'Total:', cart_checkout: 'Commander', cart_clear: 'Vider le Panier',
        modal_features: 'Fonctionnalités:', modal_add_cart: 'Ajouter au Panier',
        toast_added: 'ajouté au panier!', toast_removed: 'retiré du panier',
    },
    de: {
        nav_home: 'Startseite', nav_products: 'Produkte', nav_features: 'Funktionen', nav_reviews: 'Bewertungen', nav_docs: 'Docs',
        hero_badge: 'Premium FiveM Scripts', hero_title_1: 'Verbessere Deinen', hero_desc: 'Premium-Scripts für deinen FiveM-Server. Optimiert, sicher und einfach zu verwenden.',
        hero_btn_products: 'Produkte Ansehen', hero_btn_docs: 'Dokumentation',
        stat_sold: 'Scripts Verkauft', stat_satisfaction: 'Zufriedenheit', stat_clients: 'Zufriedene Kunden', stat_languages: 'Sprachen',
        scroll_down: 'Nach Unten', trusted_badge: 'Vertrauenswürdig', trusted_title: 'Akzeptierte Zahlungsmethoden',
        products_badge: 'Unsere Produkte', products_title_1: 'Premium', products_title_2: 'Scripts', products_desc: 'Unsere Premium-Script-Kollektion, getestet und optimiert.',
        filter_all: 'Alle', btn_preview: 'Vorschau', btn_add_cart: 'Hinzufügen',
        product1_desc: 'Komplettes Admin-Panel mit Server-Überwachung und Echtzeit-Statistiken.',
        product2_desc: 'Modernes HUD mit Gesundheit, Rüstung, Minimap und anpassbarem Waffenwähler.',
        product3_desc: 'Drag & Drop Inventarsystem mit Gewichtssystem, Hotbar und Crafting.',
        product4_desc: 'Modernes Garagensystem mit 3D-Fahrzeugvorschau und Multi-Garagen-Support.',
        product5_desc: 'In-Game-Smartphone mit Messaging, Kontakten, Kamera und Bank-App.',
        product6_desc: 'Komplettpaket für deinen FiveM-Server.',
        features_badge: 'Warum Wir', features_title_1: 'Warum', features_desc: 'Wir bieten das Beste für deinen FiveM-Server.',
        feature1_title: 'Optimierte Leistung', feature1_desc: 'Alle Scripts für niedrigen Resmon optimiert.',
        feature2_title: 'Sicher & Geschützt', feature2_desc: 'Sicherer Code mit Escrow-Schutz.',
        feature3_title: '24/7 Support', feature3_desc: 'Unser Team hilft dir jederzeit.',
        feature4_title: 'Kostenlose Updates', feature4_desc: 'Lebenslang kostenlose Updates.',
        feature5_title: 'Globaler Support', feature5_desc: 'Mehrsprachiger Support mit 14+ Sprachen.',
        feature6_title: 'Einfache Integration', feature6_desc: 'Kompatibel mit ESX, QBCore und anderen.',
        global_badge: 'Globale Reichweite', global_title: 'Kunden Weltweit Bedienen',
        global_desc: 'Wir unterstützen mehrere Sprachen, Währungen und Zahlungsmethoden.',
        global_languages: 'Sprachen', global_currencies: 'Währungen', global_payments: 'Zahlungsmethoden', global_countries: 'Länder Erreicht',
        testimonials_badge: 'Bewertungen', testimonials_title_1: 'Was Sie', testimonials_title_2: 'Sagen',
        testimonials_desc: 'Bewertungen von Kunden.',
        testimonial1: '"Das HUD-Script ist fantastisch! Niedriger Resmon und Premium-Design. Empfohlen!"',
        testimonial2: '"Das Admin-Dashboard ist sehr hilfreich. Seinen Preis wert!"',
        testimonial3: '"Das Inventarsystem ist super flüssig. Spieler lieben es!"',
        testimonial4: '"Bundle gekauft und Server an einem Tag eingerichtet. Top!"',
        cta_title_1: 'Bereit Deinen', cta_title_2: 'Server zu Verbessern', cta_desc: 'Schließe dich 50+ Server-Besitzern an.',
        cta_btn_products: 'Produkte Ansehen',
        footer_desc: 'Premium FiveM Scripts. Beste Qualität zu erschwinglichen Preisen.',
        footer_quick: 'Schnelllinks', footer_resources: 'Ressourcen', footer_support: 'Support',
        cart_title: 'Warenkorb', cart_empty: 'Dein Warenkorb ist leer', cart_shop_now: 'Jetzt Einkaufen',
        cart_total: 'Gesamt:', cart_checkout: 'Zur Kasse', cart_clear: 'Warenkorb Leeren',
        modal_features: 'Funktionen:', modal_add_cart: 'In den Warenkorb',
        toast_added: 'zum Warenkorb hinzugefügt!', toast_removed: 'aus dem Warenkorb entfernt',
    },
    ja: {
        nav_home: 'ホーム', nav_products: '製品', nav_features: '機能', nav_reviews: 'レビュー', nav_docs: 'ドキュメント',
        hero_badge: 'プレミアムFiveMスクリプト', hero_title_1: 'レベルアップ', hero_desc: 'FiveMサーバー用の高品質プレミアムスクリプト。最高のパフォーマンスに最適化。',
        hero_btn_products: '製品を見る', hero_btn_docs: 'ドキュメント',
        stat_sold: '販売済み', stat_satisfaction: '満足度', stat_clients: '幸せな顧客', stat_languages: '言語',
        scroll_down: 'スクロール', trusted_badge: '信頼と安全', trusted_title: '利用可能な決済方法',
        products_badge: '製品', products_title_1: 'プレミアム', products_title_2: 'スクリプト', products_desc: 'テスト済みで最適化されたプレミアムスクリプトコレクション。',
        filter_all: 'すべて', btn_preview: 'プレビュー', btn_add_cart: '追加',
        product1_desc: 'サーバー監視とリアルタイム統計を備えた完全な管理パネル。',
        product2_desc: 'ヘルス、アーマー、ミニマップ、スピードメーター付きのモダンHUD。',
        product3_desc: 'ウェイトシステム、ホットバー、クラフティング付きのドラッグ＆ドロップインベントリ。',
        product4_desc: '3D車両プレビューとマルチガレージサポート付きのモダンガレージシステム。',
        product5_desc: 'メッセージング、連絡先、カメラ、銀行アプリ付きのゲーム内スマートフォン。',
        product6_desc: 'FiveMサーバーを始めるための完全パッケージ。',
        features_badge: '選ばれる理由', features_title_1: 'なぜ選ぶ', features_desc: 'プレミアム品質と24/7サポートで最高を提供。',
        feature1_title: '最適化されたパフォーマンス', feature1_desc: '低resmonに最適化されたスクリプト。',
        feature2_title: '安全で保護された', feature2_desc: 'エスクロー保護付きの安全なコード。',
        feature3_title: '24/7サポート', feature3_desc: 'いつでもDiscordでサポート。',
        feature4_title: '無料アップデート', feature4_desc: '永久無料アップデート。',
        feature5_title: 'グローバルサポート', feature5_desc: '14以上の言語と多通貨対応。',
        feature6_title: '簡単統合', feature6_desc: 'ESX、QBCore対応。',
        global_badge: 'グローバル展開', global_title: '世界中のお客様にサービス',
        global_desc: '複数の言語、通貨、決済方法をサポート。',
        global_languages: '対応言語', global_currencies: '利用可能通貨', global_payments: '決済方法', global_countries: '対応国',
        testimonials_badge: 'お客様の声', testimonials_title_1: 'お客様の', testimonials_title_2: '声',
        testimonials_desc: 'スクリプトを使用したお客様のレビュー。',
        testimonial1: '"HUDスクリプトは素晴らしい！低resmonでプレミアムデザイン。おすすめ！"',
        testimonial2: '"管理ダッシュボードはサーバー管理に非常に役立つ。価格に見合う！"',
        testimonial3: '"インベントリシステムは非常にスムーズ。プレイヤーが気に入っている！"',
        testimonial4: '"バンドルを購入して1日でサーバーをセットアップ。最高！"',
        cta_title_1: 'サーバーを', cta_title_2: 'アップグレード', cta_desc: '50以上のサーバーオーナーが信頼。',
        cta_btn_products: '製品を見る',
        footer_desc: 'プレミアムFiveMスクリプト。手頃な価格で最高品質。',
        footer_quick: 'クイックリンク', footer_resources: 'リソース', footer_support: 'サポート',
        cart_title: 'カート', cart_empty: 'カートは空です', cart_shop_now: '今すぐ購入',
        cart_total: '合計:', cart_checkout: '購入手続き', cart_clear: 'カートを空にする',
        modal_features: '機能:', modal_add_cart: 'カートに追加',
        toast_added: 'をカートに追加！', toast_removed: 'をカートから削除',
    },
    ko: {
        nav_home: '홈', nav_products: '제품', nav_features: '기능', nav_reviews: '리뷰', nav_docs: '문서',
        hero_badge: '프리미엄 FiveM 스크립트', hero_title_1: '레벨 업', hero_desc: 'FiveM 서버를 위한 고품질 프리미엄 스크립트. 최고의 성능으로 최적화.',
        hero_btn_products: '제품 보기', hero_btn_docs: '문서',
        stat_sold: '판매됨', stat_satisfaction: '만족도', stat_clients: '행복한 고객', stat_languages: '언어',
        scroll_down: '스크롤', trusted_badge: '신뢰할 수 있는', trusted_title: '결제 방법',
        products_badge: '우리 제품', products_title_1: '프리미엄', products_title_2: '스크립트', products_desc: '테스트되고 최적화된 프리미엄 스크립트 컬렉션.',
        filter_all: '전체', btn_preview: '미리보기', btn_add_cart: '추가',
        product1_desc: '서버 모니터링과 실시간 통계가 포함된 완전한 관리 패널.',
        product2_desc: '체력, 방어구, 미니맵, 속도계가 포함된 모던 HUD.',
        product3_desc: '무게 시스템, 핫바, 크래프팅이 포함된 드래그 앤 드롭 인벤토리.',
        product4_desc: '3D 차량 미리보기와 멀티 차고 지원이 포함된 모던 차고 시스템.',
        product5_desc: '메시징, 연락처, 카메라, 뱅킹 앱이 포함된 인게임 스마트폰.',
        product6_desc: 'FiveM 서버를 시작하기 위한 완전한 패키지.',
        features_badge: '왜 우리를 선택하나요', features_title_1: '왜 선택', features_desc: '프리미엄 품질과 24/7 지원으로 최고를 제공.',
        feature1_title: '최적화된 성능', feature1_desc: '낮은 resmon으로 최적화된 스크립트.',
        feature2_title: '안전하고 보호됨', feature2_desc: '에스크로 보호가 포함된 안전한 코드.',
        feature3_title: '24/7 지원', feature3_desc: 'Discord를 통한 언제든지 지원.',
        feature4_title: '무료 업데이트', feature4_desc: '영구 무료 업데이트.',
        feature5_title: '글로벌 지원', feature5_desc: '14개 이상의 언어와 다중 통화 지원.',
        feature6_title: '쉬운 통합', feature6_desc: 'ESX, QBCore 호환.',
        global_badge: '글로벌 도달', global_title: '전 세계 고객에게 서비스',
        global_desc: '여러 언어, 통화, 결제 방법을 지원합니다.',
        global_languages: '지원 언어', global_currencies: '이용 가능 통화', global_payments: '결제 방법', global_countries: '도달 국가',
        testimonials_badge: '후기', testimonials_title_1: '고객', testimonials_title_2: '후기',
        testimonials_desc: '스크립트를 사용한 고객의 리뷰.',
        testimonial1: '"HUD 스크립트가 놀라워요! 낮은 resmon과 프리미엄 디자인. 추천!"',
        testimonial2: '"관리 대시보드가 서버 관리에 매우 유용해요. 가격 대비 훌륭!"',
        testimonial3: '"인벤토리 시스템이 매우 부드러워요. 플레이어들이 좋아해요!"',
        testimonial4: '"번들을 구매하고 하루 만에 서버를 설정했어요. 최고!"',
        cta_title_1: '서버를', cta_title_2: '업그레이드할 준비', cta_desc: '50명 이상의 서버 소유자가 신뢰합니다.',
        cta_btn_products: '제품 보기',
        footer_desc: '프리미엄 FiveM 스크립트. 합리적인 가격에 최고 품질.',
        footer_quick: '빠른 링크', footer_resources: '리소스', footer_support: '지원',
        cart_title: '장바구니', cart_empty: '장바구니가 비어있습니다', cart_shop_now: '쇼핑하기',
        cart_total: '합계:', cart_checkout: '결제', cart_clear: '장바구니 비우기',
        modal_features: '기능:', modal_add_cart: '장바구니에 추가',
        toast_added: '장바구니에 추가됨!', toast_removed: '장바구니에서 삭제됨',
    },
    zh: {
        nav_home: '首页', nav_products: '产品', nav_features: '功能', nav_reviews: '评价', nav_docs: '文档',
        hero_badge: '高级FiveM脚本', hero_title_1: '升级你的', hero_desc: '为你的FiveM服务器提供高品质高级脚本。性能优化，安全易用。',
        hero_btn_products: '查看产品', hero_btn_docs: '文档',
        stat_sold: '已售脚本', stat_satisfaction: '满意度', stat_clients: '满意客户', stat_languages: '语言',
        scroll_down: '向下滚动', trusted_badge: '可信赖且安全', trusted_title: '接受的支付方式',
        products_badge: '我们的产品', products_title_1: '高级', products_title_2: '脚本', products_desc: '经过测试和优化的高级脚本合集。',
        filter_all: '全部', btn_preview: '预览', btn_add_cart: '添加',
        product1_desc: '完整的管理面板，包含服务器监控和实时统计。',
        product2_desc: '现代HUD，包含生命值、护甲、小地图、速度计。',
        product3_desc: '拖放库存系统，包含重量系统、快捷栏和制作。',
        product4_desc: '现代车库系统，包含3D车辆预览和多车库支持。',
        product5_desc: '游戏内智能手机，包含消息、联系人、相机和银行应用。',
        product6_desc: '启动FiveM服务器的完整套餐。',
        features_badge: '为什么选择我们', features_title_1: '为什么选择', features_desc: '以高级品质和24/7支持提供最佳服务。',
        feature1_title: '优化性能', feature1_desc: '所有脚本都针对低resmon进行了优化。',
        feature2_title: '安全受保护', feature2_desc: '带有escrow保护的安全代码。',
        feature3_title: '24/7支持', feature3_desc: '随时通过Discord提供支持。',
        feature4_title: '免费更新', feature4_desc: '永久免费更新。',
        feature5_title: '全球支持', feature5_desc: '支持14+语言和多币种。',
        feature6_title: '轻松集成', feature6_desc: '兼容ESX、QBCore。',
        global_badge: '全球覆盖', global_title: '服务全球客户',
        global_desc: '我们支持多种语言、货币和支付方式。',
        global_languages: '支持语言', global_currencies: '可用货币', global_payments: '支付方式', global_countries: '覆盖国家',
        testimonials_badge: '客户评价', testimonials_title_1: '他们', testimonials_title_2: '怎么说',
        testimonials_desc: '使用我们脚本的客户评价。',
        testimonial1: '"HUD脚本太棒了！低resmon和高级设计。推荐！"',
        testimonial2: '"管理面板对服务器管理非常有帮助。物有所值！"',
        testimonial3: '"库存系统非常流畅。玩家们都喜欢！"',
        testimonial4: '"买了套餐，一天就搭建好了服务器。太棒了！"',
        cta_title_1: '准备升级你的', cta_title_2: '服务器', cta_desc: '加入50+信任我们的服务器所有者。',
        cta_btn_products: '查看产品',
        footer_desc: '高级FiveM脚本。最佳品质，价格实惠。',
        footer_quick: '快速链接', footer_resources: '资源', footer_support: '支持',
        cart_title: '购物车', cart_empty: '购物车为空', cart_shop_now: '立即购物',
        cart_total: '总计:', cart_checkout: '结算', cart_clear: '清空购物车',
        modal_features: '功能:', modal_add_cart: '加入购物车',
        toast_added: '已加入购物车！', toast_removed: '已从购物车移除',
    },
    pt: {
        nav_home: 'Início', nav_products: 'Produtos', nav_features: 'Recursos', nav_reviews: 'Avaliações', nav_docs: 'Docs',
        hero_badge: 'Scripts FiveM Premium', hero_title_1: 'Melhore Seu', hero_desc: 'Scripts premium de alta qualidade para seu servidor FiveM.',
        hero_btn_products: 'Ver Produtos', hero_btn_docs: 'Documentação',
        stat_sold: 'Scripts Vendidos', stat_satisfaction: 'Satisfação', stat_clients: 'Clientes Felizes', stat_languages: 'Idiomas',
        scroll_down: 'Rolar', trusted_badge: 'Confiável e Seguro', trusted_title: 'Métodos de Pagamento Aceitos',
        products_badge: 'Nossos Produtos', products_title_1: 'Scripts', products_title_2: 'Premium', products_desc: 'Nossa coleção de scripts premium testados e otimizados.',
        filter_all: 'Todos', btn_preview: 'Visualizar', btn_add_cart: 'Adicionar',
        product1_desc: 'Painel admin completo com monitoramento e estatísticas em tempo real.',
        product2_desc: 'HUD moderno com vida, armadura, minimapa e velocímetro personalizável.',
        product3_desc: 'Sistema de inventário drag & drop com sistema de peso e crafting.',
        product4_desc: 'Sistema de garagem moderno com preview 3D de veículos.',
        product5_desc: 'Smartphone in-game com mensagens, contatos, câmera e app bancário.',
        product6_desc: 'Pacote completo para iniciar seu servidor FiveM.',
        features_badge: 'Por Que Nos Escolher', features_title_1: 'Por Que Escolher', features_desc: 'Oferecemos o melhor com qualidade premium e suporte 24/7.',
        feature1_title: 'Performance Otimizada', feature1_desc: 'Scripts otimizados para baixo resmon.',
        feature2_title: 'Seguro e Protegido', feature2_desc: 'Código seguro com proteção escrow.',
        feature3_title: 'Suporte 24/7', feature3_desc: 'Equipe pronta para ajudar a qualquer momento.',
        feature4_title: 'Atualizações Grátis', feature4_desc: 'Atualizações gratuitas para sempre.',
        feature5_title: 'Suporte Global', feature5_desc: 'Suporte multilíngue com 14+ idiomas.',
        feature6_title: 'Fácil Integração', feature6_desc: 'Compatível com ESX, QBCore.',
        global_badge: 'Alcance Global', global_title: 'Atendendo Clientes no Mundo Todo',
        global_desc: 'Suportamos múltiplos idiomas, moedas e métodos de pagamento.',
        global_languages: 'Idiomas Suportados', global_currencies: 'Moedas Disponíveis', global_payments: 'Métodos de Pagamento', global_countries: 'Países Alcançados',
        testimonials_badge: 'Depoimentos', testimonials_title_1: 'O Que Eles', testimonials_title_2: 'Dizem',
        testimonials_desc: 'Avaliações de clientes que usam nossos scripts.',
        testimonial1: '"O script HUD é incrível! Baixo resmon e design premium. Recomendado!"',
        testimonial2: '"O Dashboard Admin é muito útil. Vale o preço!"',
        testimonial3: '"O sistema de inventário é super fluido. Os jogadores adoram!"',
        testimonial4: '"Comprei o bundle e configurei o servidor em um dia. Top!"',
        cta_title_1: 'Pronto para Melhorar Seu', cta_title_2: 'Servidor', cta_desc: 'Junte-se a 50+ donos de servidores que confiam em nós.',
        cta_btn_products: 'Ver Produtos',
        footer_desc: 'Scripts FiveM premium. Melhor qualidade a preços acessíveis.',
        footer_quick: 'Links Rápidos', footer_resources: 'Recursos', footer_support: 'Suporte',
        cart_title: 'Carrinho', cart_empty: 'Seu carrinho está vazio', cart_shop_now: 'Comprar Agora',
        cart_total: 'Total:', cart_checkout: 'Finalizar', cart_clear: 'Limpar Carrinho',
        modal_features: 'Recursos:', modal_add_cart: 'Adicionar ao Carrinho',
        toast_added: 'adicionado ao carrinho!', toast_removed: 'removido do carrinho',
    },
    ru: {
        nav_home: 'Главная', nav_products: 'Продукты', nav_features: 'Функции', nav_reviews: 'Отзывы', nav_docs: 'Документы',
        hero_badge: 'Премиум FiveM Скрипты', hero_title_1: 'Улучшите Свой', hero_desc: 'Премиум скрипты для вашего FiveM сервера. Оптимизированы, безопасны и просты в использовании.',
        hero_btn_products: 'Смотреть Продукты', hero_btn_docs: 'Документация',
        stat_sold: 'Продано', stat_satisfaction: 'Удовлетворённость', stat_clients: 'Довольных Клиентов', stat_languages: 'Языков',
        scroll_down: 'Прокрутить', trusted_badge: 'Надёжно и Безопасно', trusted_title: 'Принимаемые Способы Оплаты',
        products_badge: 'Наши Продукты', products_title_1: 'Премиум', products_title_2: 'Скрипты', products_desc: 'Протестированная и оптимизированная коллекция скриптов.',
        filter_all: 'Все', btn_preview: 'Просмотр', btn_add_cart: 'Добавить',
        product1_desc: 'Полная панель администратора с мониторингом сервера и статистикой.',
        product2_desc: 'Современный HUD с здоровьем, бронёй, миникартой и спидометром.',
        product3_desc: 'Система инвентаря drag & drop с системой веса и крафтингом.',
        product4_desc: 'Современная система гаража с 3D предпросмотром транспорта.',
        product5_desc: 'Внутриигровой смартфон с сообщениями, контактами и банковским приложением.',
        product6_desc: 'Полный пакет для запуска вашего FiveM сервера.',
        features_badge: 'Почему Мы', features_title_1: 'Почему Выбирают', features_desc: 'Мы предоставляем лучшее с премиум качеством и поддержкой 24/7.',
        feature1_title: 'Оптимизированная Производительность', feature1_desc: 'Скрипты оптимизированы для низкого resmon.',
        feature2_title: 'Безопасно и Защищено', feature2_desc: 'Безопасный код с escrow защитой.',
        feature3_title: 'Поддержка 24/7', feature3_desc: 'Наша команда готова помочь в любое время.',
        feature4_title: 'Бесплатные Обновления', feature4_desc: 'Бесплатные обновления навсегда.',
        feature5_title: 'Глобальная Поддержка', feature5_desc: 'Мультиязычная поддержка с 14+ языками.',
        feature6_title: 'Лёгкая Интеграция', feature6_desc: 'Совместимо с ESX, QBCore.',
        global_badge: 'Глобальный Охват', global_title: 'Обслуживаем Клиентов по Всему Миру',
        global_desc: 'Мы поддерживаем множество языков, валют и способов оплаты.',
        global_languages: 'Языков', global_currencies: 'Валют', global_payments: 'Способов Оплаты', global_countries: 'Стран',
        testimonials_badge: 'Отзывы', testimonials_title_1: 'Что Говорят', testimonials_title_2: 'Клиенты',
        testimonials_desc: 'Отзывы клиентов, использующих наши скрипты.',
        testimonial1: '"HUD скрипт потрясающий! Низкий resmon и премиум дизайн. Рекомендую!"',
        testimonial2: '"Панель администратора очень полезна. Стоит своих денег!"',
        testimonial3: '"Система инвентаря супер плавная. Игрокам нравится!"',
        testimonial4: '"Купил бандл и настроил сервер за день. Отлично!"',
        cta_title_1: 'Готовы Улучшить Свой', cta_title_2: 'Сервер', cta_desc: 'Присоединяйтесь к 50+ владельцам серверов.',
        cta_btn_products: 'Смотреть Продукты',
        footer_desc: 'Премиум FiveM скрипты. Лучшее качество по доступным ценам.',
        footer_quick: 'Быстрые Ссылки', footer_resources: 'Ресурсы', footer_support: 'Поддержка',
        cart_title: 'Корзина', cart_empty: 'Корзина пуста', cart_shop_now: 'За Покупками',
        cart_total: 'Итого:', cart_checkout: 'Оформить', cart_clear: 'Очистить Корзину',
        modal_features: 'Функции:', modal_add_cart: 'В Корзину',
        toast_added: 'добавлено в корзину!', toast_removed: 'удалено из корзины',
    },
    ar: {
        nav_home: 'الرئيسية', nav_products: 'المنتجات', nav_features: 'المميزات', nav_reviews: 'التقييمات', nav_docs: 'الوثائق',
        hero_badge: 'سكربتات FiveM المميزة', hero_title_1: 'طوّر', hero_desc: 'سكربتات عالية الجودة لخادم FiveM الخاص بك. محسّنة وآمنة وسهلة الاستخدام.',
        hero_btn_products: 'عرض المنتجات', hero_btn_docs: 'الوثائق',
        stat_sold: 'مبيعات', stat_satisfaction: 'رضا', stat_clients: 'عملاء سعداء', stat_languages: 'لغات',
        scroll_down: 'مرر للأسفل', trusted_badge: 'موثوق وآمن', trusted_title: 'طرق الدفع المقبولة',
        products_badge: 'منتجاتنا', products_title_1: 'سكربتات', products_title_2: 'مميزة', products_desc: 'مجموعة سكربتات مميزة ومحسّنة.',
        filter_all: 'الكل', btn_preview: 'معاينة', btn_add_cart: 'إضافة',
        product1_desc: 'لوحة إدارة كاملة مع مراقبة الخادم وإحصائيات فورية.',
        product2_desc: 'واجهة HUD حديثة مع الصحة والدرع والخريطة المصغرة.',
        product3_desc: 'نظام مخزون سحب وإفلات مع نظام الوزن والتصنيع.',
        product4_desc: 'نظام مرآب حديث مع معاينة ثلاثية الأبعاد للمركبات.',
        product5_desc: 'هاتف ذكي داخل اللعبة مع رسائل وجهات اتصال وكاميرا.',
        product6_desc: 'حزمة كاملة لبدء خادم FiveM الخاص بك.',
        features_badge: 'لماذا نحن', features_title_1: 'لماذا تختار', features_desc: 'نقدم الأفضل بجودة عالية ودعم على مدار الساعة.',
        feature1_title: 'أداء محسّن', feature1_desc: 'جميع السكربتات محسّنة لاستهلاك منخفض.',
        feature2_title: 'آمن ومحمي', feature2_desc: 'كود آمن مع حماية escrow.',
        feature3_title: 'دعم 24/7', feature3_desc: 'فريقنا جاهز للمساعدة في أي وقت.',
        feature4_title: 'تحديثات مجانية', feature4_desc: 'تحديثات مجانية مدى الحياة.',
        feature5_title: 'دعم عالمي', feature5_desc: 'دعم متعدد اللغات مع 14+ لغة.',
        feature6_title: 'تكامل سهل', feature6_desc: 'متوافق مع ESX و QBCore.',
        global_badge: 'وصول عالمي', global_title: 'نخدم العملاء حول العالم',
        global_desc: 'ندعم لغات وعملات وطرق دفع متعددة.',
        global_languages: 'لغات مدعومة', global_currencies: 'عملات متاحة', global_payments: 'طرق دفع', global_countries: 'دول',
        testimonials_badge: 'آراء العملاء', testimonials_title_1: 'ماذا', testimonials_title_2: 'يقولون',
        testimonials_desc: 'تقييمات العملاء الذين يستخدمون سكربتاتنا.',
        testimonial1: '"سكربت HUD رائع! استهلاك منخفض وتصميم مميز. موصى به!"',
        testimonial2: '"لوحة الإدارة مفيدة جداً. تستحق السعر!"',
        testimonial3: '"نظام المخزون سلس جداً. اللاعبون يحبونه!"',
        testimonial4: '"اشتريت الحزمة وأعددت الخادم في يوم واحد. ممتاز!"',
        cta_title_1: 'مستعد لتطوير', cta_title_2: 'خادمك', cta_desc: 'انضم إلى 50+ من أصحاب الخوادم.',
        cta_btn_products: 'عرض المنتجات',
        footer_desc: 'سكربتات FiveM مميزة. أفضل جودة بأسعار معقولة.',
        footer_quick: 'روابط سريعة', footer_resources: 'الموارد', footer_support: 'الدعم',
        cart_title: 'سلة التسوق', cart_empty: 'سلتك فارغة', cart_shop_now: 'تسوق الآن',
        cart_total: 'المجموع:', cart_checkout: 'الدفع', cart_clear: 'تفريغ السلة',
        modal_features: 'المميزات:', modal_add_cart: 'أضف للسلة',
        toast_added: 'أُضيف للسلة!', toast_removed: 'أُزيل من السلة',
    },
    th: {
        nav_home: 'หน้าแรก', nav_products: 'สินค้า', nav_features: 'คุณสมบัติ', nav_reviews: 'รีวิว', nav_docs: 'เอกสาร',
        hero_badge: 'สคริปต์ FiveM พรีเมียม', hero_title_1: 'อัพเกรด', hero_desc: 'สคริปต์พรีเมียมคุณภาพสูงสำหรับเซิร์ฟเวอร์ FiveM ของคุณ',
        hero_btn_products: 'ดูสินค้า', hero_btn_docs: 'เอกสาร',
        stat_sold: 'ขายแล้ว', stat_satisfaction: 'ความพึงพอใจ', stat_clients: 'ลูกค้า', stat_languages: 'ภาษา',
        scroll_down: 'เลื่อนลง', trusted_badge: 'เชื่อถือได้', trusted_title: 'วิธีการชำระเงิน',
        products_badge: 'สินค้าของเรา', products_title_1: 'สคริปต์', products_title_2: 'พรีเมียม', products_desc: 'คอลเลกชันสคริปต์พรีเมียมที่ผ่านการทดสอบ',
        filter_all: 'ทั้งหมด', btn_preview: 'ดูตัวอย่าง', btn_add_cart: 'เพิ่ม',
        product1_desc: 'แผงควบคุมผู้ดูแลพร้อมการตรวจสอบเซิร์ฟเวอร์แบบเรียลไทม์',
        product2_desc: 'HUD ทันสมัยพร้อมพลังชีวิต เกราะ แผนที่ย่อ และมาตรวัดความเร็ว',
        product3_desc: 'ระบบคลังสินค้าลากและวางพร้อมระบบน้ำหนักและการคราฟต์',
        product4_desc: 'ระบบโรงรถทันสมัยพร้อมตัวอย่างยานพาหนะ 3D',
        product5_desc: 'สมาร์ทโฟนในเกมพร้อมข้อความ รายชื่อ กล้อง และแอปธนาคาร',
        product6_desc: 'แพ็คเกจครบชุดสำหรับเริ่มต้นเซิร์ฟเวอร์ FiveM',
        features_badge: 'ทำไมเลือกเรา', features_title_1: 'ทำไมเลือก', features_desc: 'เราให้สิ่งที่ดีที่สุดด้วยคุณภาพพรีเมียม',
        feature1_title: 'ประสิทธิภาพสูง', feature1_desc: 'สคริปต์ทั้งหมดปรับแต่งสำหรับ resmon ต่ำ',
        feature2_title: 'ปลอดภัย', feature2_desc: 'โค้ดปลอดภัยพร้อมการป้องกัน escrow',
        feature3_title: 'ซัพพอร์ต 24/7', feature3_desc: 'ทีมพร้อมช่วยเหลือตลอดเวลา',
        feature4_title: 'อัพเดทฟรี', feature4_desc: 'อัพเดทฟรีตลอดไป',
        feature5_title: 'ซัพพอร์ตทั่วโลก', feature5_desc: 'รองรับ 14+ ภาษาและหลายสกุลเงิน',
        feature6_title: 'ติดตั้งง่าย', feature6_desc: 'รองรับ ESX, QBCore',
        global_badge: 'ทั่วโลก', global_title: 'ให้บริการลูกค้าทั่วโลก',
        global_desc: 'เรารองรับหลายภาษา สกุลเงิน และวิธีการชำระเงิน',
        global_languages: 'ภาษา', global_currencies: 'สกุลเงิน', global_payments: 'วิธีชำระเงิน', global_countries: 'ประเทศ',
        testimonials_badge: 'รีวิว', testimonials_title_1: 'ลูกค้า', testimonials_title_2: 'พูดว่า',
        testimonials_desc: 'รีวิวจากลูกค้าที่ใช้สคริปต์ของเรา',
        testimonial1: '"สคริปต์ HUD สุดยอด! resmon ต่ำและดีไซน์พรีเมียม แนะนำ!"',
        testimonial2: '"แดชบอร์ดผู้ดูแลมีประโยชน์มาก คุ้มค่า!"',
        testimonial3: '"ระบบคลังสินค้าลื่นมาก ผู้เล่นชอบ!"',
        testimonial4: '"ซื้อบันเดิลแล้วตั้งเซิร์ฟเวอร์ได้ในวันเดียว เยี่ยม!"',
        cta_title_1: 'พร้อมอัพเกรด', cta_title_2: 'เซิร์ฟเวอร์', cta_desc: 'เข้าร่วมกับ 50+ เจ้าของเซิร์ฟเวอร์',
        cta_btn_products: 'ดูสินค้า',
        footer_desc: 'สคริปต์ FiveM พรีเมียม คุณภาพดีราคาเข้าถึงได้',
        footer_quick: 'ลิงก์ด่วน', footer_resources: 'ทรัพยากร', footer_support: 'ซัพพอร์ต',
        cart_title: 'ตะกร้า', cart_empty: 'ตะกร้าว่าง', cart_shop_now: 'ช้อปเลย',
        cart_total: 'รวม:', cart_checkout: 'ชำระเงิน', cart_clear: 'ล้างตะกร้า',
        modal_features: 'คุณสมบัติ:', modal_add_cart: 'เพิ่มลงตะกร้า',
        toast_added: 'เพิ่มลงตะกร้าแล้ว!', toast_removed: 'ลบออกจากตะกร้าแล้ว',
    },
    tr: {
        nav_home: 'Ana Sayfa', nav_products: 'Ürünler', nav_features: 'Özellikler', nav_reviews: 'Yorumlar', nav_docs: 'Belgeler',
        hero_badge: 'Premium FiveM Scriptleri', hero_title_1: 'Geliştir', hero_desc: 'FiveM sunucunuz için yüksek kaliteli premium scriptler.',
        hero_btn_products: 'Ürünleri Gör', hero_btn_docs: 'Belgeler',
        stat_sold: 'Satıldı', stat_satisfaction: 'Memnuniyet', stat_clients: 'Mutlu Müşteri', stat_languages: 'Dil',
        scroll_down: 'Aşağı Kaydır', trusted_badge: 'Güvenilir', trusted_title: 'Kabul Edilen Ödeme Yöntemleri',
        products_badge: 'Ürünlerimiz', products_title_1: 'Premium', products_title_2: 'Scriptler', products_desc: 'Test edilmiş ve optimize edilmiş premium script koleksiyonu.',
        filter_all: 'Tümü', btn_preview: 'Önizleme', btn_add_cart: 'Ekle',
        product1_desc: 'Sunucu izleme ve gerçek zamanlı istatistiklerle tam yönetici paneli.',
        product2_desc: 'Sağlık, zırh, mini harita ve hız göstergeli modern HUD.',
        product3_desc: 'Ağırlık sistemi ve crafting ile sürükle bırak envanter sistemi.',
        product4_desc: '3D araç önizlemeli modern garaj sistemi.',
        product5_desc: 'Mesajlaşma, kişiler, kamera ve banka uygulamalı oyun içi akıllı telefon.',
        product6_desc: 'FiveM sunucunuzu başlatmak için tam paket.',
        features_badge: 'Neden Biz', features_title_1: 'Neden', features_desc: 'Premium kalite ve 7/24 destek ile en iyisini sunuyoruz.',
        feature1_title: 'Optimize Performans', feature1_desc: 'Düşük resmon için optimize edilmiş scriptler.',
        feature2_title: 'Güvenli', feature2_desc: 'Escrow korumalı güvenli kod.',
        feature3_title: '7/24 Destek', feature3_desc: 'Ekibimiz her zaman yardıma hazır.',
        feature4_title: 'Ücretsiz Güncellemeler', feature4_desc: 'Ömür boyu ücretsiz güncellemeler.',
        feature5_title: 'Global Destek', feature5_desc: '14+ dil ve çoklu para birimi desteği.',
        feature6_title: 'Kolay Entegrasyon', feature6_desc: 'ESX, QBCore uyumlu.',
        global_badge: 'Global Erişim', global_title: 'Dünya Genelinde Hizmet',
        global_desc: 'Birden fazla dil, para birimi ve ödeme yöntemi destekliyoruz.',
        global_languages: 'Dil', global_currencies: 'Para Birimi', global_payments: 'Ödeme Yöntemi', global_countries: 'Ülke',
        testimonials_badge: 'Yorumlar', testimonials_title_1: 'Müşteriler', testimonials_title_2: 'Ne Diyor',
        testimonials_desc: 'Scriptlerimizi kullanan müşteri yorumları.',
        testimonial1: '"HUD scripti harika! Düşük resmon ve premium tasarım. Tavsiye ederim!"',
        testimonial2: '"Yönetici paneli sunucu yönetimi için çok faydalı. Fiyatına değer!"',
        testimonial3: '"Envanter sistemi çok akıcı. Oyuncular bayılıyor!"',
        testimonial4: '"Paketi aldım ve sunucuyu bir günde kurdum. Süper!"',
        cta_title_1: 'Sunucunu', cta_title_2: 'Geliştirmeye Hazır Mısın', cta_desc: '50+ sunucu sahibine katıl.',
        cta_btn_products: 'Ürünleri Gör',
        footer_desc: 'Premium FiveM scriptleri. Uygun fiyata en iyi kalite.',
        footer_quick: 'Hızlı Linkler', footer_resources: 'Kaynaklar', footer_support: 'Destek',
        cart_title: 'Sepet', cart_empty: 'Sepetiniz boş', cart_shop_now: 'Alışverişe Başla',
        cart_total: 'Toplam:', cart_checkout: 'Ödeme', cart_clear: 'Sepeti Temizle',
        modal_features: 'Özellikler:', modal_add_cart: 'Sepete Ekle',
        toast_added: 'sepete eklendi!', toast_removed: 'sepetten çıkarıldı',
    },
    hi: {
        nav_home: 'होम', nav_products: 'उत्पाद', nav_features: 'विशेषताएं', nav_reviews: 'समीक्षा', nav_docs: 'डॉक्स',
        hero_badge: 'प्रीमियम FiveM स्क्रिप्ट', hero_title_1: 'अपग्रेड करें', hero_desc: 'आपके FiveM सर्वर के लिए उच्च गुणवत्ता वाली प्रीमियम स्क्रिप्ट।',
        hero_btn_products: 'उत्पाद देखें', hero_btn_docs: 'दस्तावेज़',
        stat_sold: 'बिक्री', stat_satisfaction: 'संतुष्टि', stat_clients: 'खुश ग्राहक', stat_languages: 'भाषाएं',
        scroll_down: 'नीचे स्क्रॉल करें', trusted_badge: 'विश्वसनीय', trusted_title: 'स्वीकृत भुगतान विधियां',
        products_badge: 'हमारे उत्पाद', products_title_1: 'प्रीमियम', products_title_2: 'स्क्रिप्ट', products_desc: 'परीक्षित और अनुकूलित प्रीमियम स्क्रिप्ट संग्रह।',
        filter_all: 'सभी', btn_preview: 'पूर्वावलोकन', btn_add_cart: 'जोड़ें',
        product1_desc: 'सर्वर मॉनिटरिंग और रीयल-टाइम स्टैटिस्टिक्स के साथ पूर्ण एडमिन पैनल।',
        product2_desc: 'हेल्थ, आर्मर, मिनीमैप और स्पीडोमीटर के साथ मॉडर्न HUD।',
        product3_desc: 'वेट सिस्टम और क्राफ्टिंग के साथ ड्रैग एंड ड्रॉप इन्वेंटरी।',
        product4_desc: '3D व्हीकल प्रीव्यू के साथ मॉडर्न गैराज सिस्टम।',
        product5_desc: 'मैसेजिंग, कॉन्टैक्ट्स, कैमरा और बैंक ऐप के साथ इन-गेम स्मार्टफोन।',
        product6_desc: 'आपके FiveM सर्वर शुरू करने के लिए पूर्ण पैकेज।',
        features_badge: 'हमें क्यों चुनें', features_title_1: 'क्यों चुनें', features_desc: 'प्रीमियम गुणवत्ता और 24/7 सपोर्ट के साथ सर्वश्रेष्ठ।',
        feature1_title: 'अनुकूलित प्रदर्शन', feature1_desc: 'कम resmon के लिए अनुकूलित स्क्रिप्ट।',
        feature2_title: 'सुरक्षित', feature2_desc: 'Escrow सुरक्षा के साथ सुरक्षित कोड।',
        feature3_title: '24/7 सपोर्ट', feature3_desc: 'हमारी टीम हमेशा मदद के लिए तैयार।',
        feature4_title: 'मुफ्त अपडेट', feature4_desc: 'जीवन भर मुफ्त अपडेट।',
        feature5_title: 'वैश्विक सपोर्ट', feature5_desc: '14+ भाषाओं और बहु-मुद्रा सपोर्ट।',
        feature6_title: 'आसान एकीकरण', feature6_desc: 'ESX, QBCore संगत।',
        global_badge: 'वैश्विक पहुंच', global_title: 'दुनिया भर के ग्राहकों की सेवा',
        global_desc: 'हम कई भाषाओं, मुद्राओं और भुगतान विधियों का समर्थन करते हैं।',
        global_languages: 'भाषाएं', global_currencies: 'मुद्राएं', global_payments: 'भुगतान विधियां', global_countries: 'देश',
        testimonials_badge: 'प्रशंसापत्र', testimonials_title_1: 'ग्राहक', testimonials_title_2: 'क्या कहते हैं',
        testimonials_desc: 'हमारी स्क्रिप्ट का उपयोग करने वाले ग्राहकों की समीक्षा।',
        testimonial1: '"HUD स्क्रिप्ट अद्भुत है! कम resmon और प्रीमियम डिज़ाइन। अनुशंसित!"',
        testimonial2: '"एडमिन डैशबोर्ड बहुत उपयोगी है। कीमत के लायक!"',
        testimonial3: '"इन्वेंटरी सिस्टम बहुत स्मूथ है। खिलाड़ियों को पसंद है!"',
        testimonial4: '"बंडल खरीदा और एक दिन में सर्वर सेटअप किया। बढ़िया!"',
        cta_title_1: 'अपने सर्वर को', cta_title_2: 'अपग्रेड करें', cta_desc: '50+ सर्वर मालिकों से जुड़ें।',
        cta_btn_products: 'उत्पाद देखें',
        footer_desc: 'प्रीमियम FiveM स्क्रिप्ट। किफायती कीमत पर सर्वश्रेष्ठ गुणवत्ता।',
        footer_quick: 'त्वरित लिंक', footer_resources: 'संसाधन', footer_support: 'सपोर्ट',
        cart_title: 'कार्ट', cart_empty: 'आपका कार्ट खाली है', cart_shop_now: 'अभी खरीदें',
        cart_total: 'कुल:', cart_checkout: 'चेकआउट', cart_clear: 'कार्ट खाली करें',
        modal_features: 'विशेषताएं:', modal_add_cart: 'कार्ट में जोड़ें',
        toast_added: 'कार्ट में जोड़ा गया!', toast_removed: 'कार्ट से हटाया गया',
    }
};

/* === State === */
let currentLang = localStorage.getItem('exterstore_lang') || 'id';
let currentCurrency = localStorage.getItem('exterstore_currency') || 'IDR';
let cart = JSON.parse(localStorage.getItem('exterstore_cart') || '[]');

/* === Init === */
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initTypingEffect();
    initTestimonialsSlider();
    initSmoothScroll();
    initDropdowns();
    initLanguage();
    initCurrency();
    initCart();
    initProductFilters();
    initProductModal();
    initAddToCart();
});

/* === Particle System === */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            if (mouse.x != null && mouse.y != null) {
                const dx = mouse.x - this.x, dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x -= dx * force * 0.02; this.y -= dy * force * 0.02;
                }
            }
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(46, 204, 113, ${this.opacity})`; ctx.fill();
        }
    }

    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < count; i++) particles.push(new Particle());

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath(); ctx.strokeStyle = `rgba(46, 204, 113, ${(1 - dist / 120) * 0.15})`;
                    ctx.lineWidth = 0.5; ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y); ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles(); requestAnimationFrame(animate);
    }
    animate();
}

/* === Navbar === */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id'); });
        navLinks.forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
        });
    });
}

/* === Mobile Menu === */
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (!toggle || !navLinks) return;
    toggle.addEventListener('click', () => { toggle.classList.toggle('active'); navLinks.classList.toggle('active'); });
    navLinks.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', () => { toggle.classList.remove('active'); navLinks.classList.remove('active'); });
    });
}

/* === Scroll Reveal === */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('active'), i * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* === Counter Animation === */
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const startTime = performance.now();
                function update(currentTime) {
                    const progress = Math.min((currentTime - startTime) / 2000, 1);
                    counter.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3)));
                    if (progress < 1) requestAnimationFrame(update);
                    else counter.textContent = target;
                }
                requestAnimationFrame(update);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number').forEach(c => observer.observe(c));
}

/* === Typing Effect === */
function initTypingEffect() {
    const el = document.getElementById('typingText');
    if (!el) return;
    const words = ['FiveM Server', 'Roleplay Experience', 'Gaming Community', 'Server Performance'];
    let wi = 0, ci = 0, deleting = false;
    function type() {
        const word = words[wi];
        el.textContent = deleting ? word.substring(0, --ci) : word.substring(0, ++ci);
        let speed = deleting ? 50 : 100;
        if (!deleting && ci === word.length) { speed = 2000; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; speed = 500; }
        setTimeout(type, speed);
    }
    setTimeout(type, 1000);
}

/* === Testimonials Slider === */
function initTestimonialsSlider() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('sliderDots');
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    const cards = track.querySelectorAll('.testimonial-card');
    let current = 0, autoInterval;
    for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }
    function goTo(i) {
        current = i; track.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer.querySelectorAll('.slider-dot').forEach((d, j) => d.classList.toggle('active', j === current));
        clearInterval(autoInterval); autoInterval = setInterval(() => goTo((current + 1) % cards.length), 5000);
    }
    prevBtn.addEventListener('click', () => goTo((current - 1 + cards.length) % cards.length));
    nextBtn.addEventListener('click', () => goTo((current + 1) % cards.length));
    let touchX = 0;
    track.addEventListener('touchstart', e => { touchX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? (current + 1) % cards.length : (current - 1 + cards.length) % cards.length);
    }, { passive: true });
    autoInterval = setInterval(() => goTo((current + 1) % cards.length), 5000);
}

/* === Smooth Scroll === */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

/* === Dropdowns === */
function initDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dd => {
        dd.querySelector('.dropdown-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.dropdown.open').forEach(d => { if (d !== dd) d.classList.remove('open'); });
            dd.classList.toggle('open');
        });
    });
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    });
}

/* === Language System === */
function initLanguage() {
    setLanguage(currentLang);
    document.querySelectorAll('#langMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.dataset.lang;
            setLanguage(lang);
            document.getElementById('langDropdown').classList.remove('open');
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('exterstore_lang', lang);
    const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) el.textContent = t[key];
    });
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    document.querySelectorAll('#langMenu .dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });
    // RTL support for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Update prices with current currency
    updateAllPrices();
}

function t(key) {
    const trans = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
    return trans[key] || TRANSLATIONS['en'][key] || key;
}

/* === Currency System === */
function initCurrency() {
    updateAllPrices();
    document.querySelectorAll('#currencyMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            currentCurrency = item.dataset.currency;
            localStorage.setItem('exterstore_currency', currentCurrency);
            document.getElementById('currentCurrency').textContent = currentCurrency;
            document.querySelectorAll('#currencyMenu .dropdown-item').forEach(i => {
                i.classList.toggle('active', i.dataset.currency === currentCurrency);
            });
            updateAllPrices();
            updateCartUI();
            document.getElementById('currencyDropdown').classList.remove('open');
        });
    });
    // Set initial active state
    document.getElementById('currentCurrency').textContent = currentCurrency;
    document.querySelectorAll('#currencyMenu .dropdown-item').forEach(i => {
        i.classList.toggle('active', i.dataset.currency === currentCurrency);
    });
}

function formatPrice(priceIDR) {
    const curr = CURRENCIES[currentCurrency] || CURRENCIES['IDR'];
    const converted = priceIDR * curr.rate;
    return curr.symbol + ' ' + converted.toLocaleString(curr.locale, {
        minimumFractionDigits: curr.decimals,
        maximumFractionDigits: curr.decimals
    });
}

function updateAllPrices() {
    document.querySelectorAll('.price-amount[data-price]').forEach(el => {
        const price = parseInt(el.dataset.price);
        const curr = CURRENCIES[currentCurrency] || CURRENCIES['IDR'];
        const converted = price * curr.rate;
        el.textContent = converted.toLocaleString(curr.locale, {
            minimumFractionDigits: curr.decimals, maximumFractionDigits: curr.decimals
        });
        const currEl = el.parentElement.querySelector('.price-currency');
        if (currEl) currEl.textContent = curr.symbol;
    });
    document.querySelectorAll('.price-old[data-old-price]').forEach(el => {
        const price = parseInt(el.dataset.oldPrice);
        el.textContent = formatPrice(price);
    });
}

/* === Cart System === */
function initCart() {
    const toggle = document.getElementById('cartToggle');
    const overlay = document.getElementById('cartOverlay');
    const close = document.getElementById('cartClose');
    const drawer = document.getElementById('cartDrawer');
    const clearBtn = document.getElementById('cartClearBtn');
    const shopBtn = document.getElementById('cartShopBtn');

    toggle.addEventListener('click', () => openCart());
    overlay.addEventListener('click', () => closeCart());
    close.addEventListener('click', () => closeCart());
    clearBtn.addEventListener('click', () => { cart = []; saveCart(); updateCartUI(); showToast('🗑️ ' + t('cart_clear')); });
    if (shopBtn) shopBtn.addEventListener('click', () => closeCart());

    updateCartUI();
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartDrawer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartDrawer').classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        showToast('⚠️ ' + PRODUCTS[productId].name + ' already in cart');
        return;
    }
    cart.push({ id: productId, qty: 1 });
    saveCart();
    updateCartUI();
    showToast('✅ ' + PRODUCTS[productId].name + ' ' + t('toast_added'));
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('🗑️ ' + PRODUCTS[productId].name + ' ' + t('toast_removed'));
}

function saveCart() {
    localStorage.setItem('exterstore_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const body = document.getElementById('cartBody');
    const empty = document.getElementById('cartEmpty');
    const items = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');

    badge.textContent = cart.length;
    badge.classList.toggle('show', cart.length > 0);

    if (cart.length === 0) {
        empty.style.display = 'block';
        items.innerHTML = '';
        footer.style.display = 'none';
    } else {
        empty.style.display = 'none';
        footer.style.display = 'block';
        let total = 0;
        items.innerHTML = cart.map(item => {
            const p = PRODUCTS[item.id];
            if (!p) return '';
            total += p.price;
            return `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${p.name}</div>
                        <div class="cart-item-price">${formatPrice(p.price)}</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
        }).join('');
        totalEl.textContent = formatPrice(total);
    }
}

/* === Toast Notification === */
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* === Product Filters === */
function initProductFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* === Product Modal === */
function initProductModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalClose');
    closeBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    document.querySelectorAll('.product-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openProductModal(btn.dataset.product);
        });
    });
}

function openProductModal(productId) {
    const p = PRODUCTS[productId];
    if (!p) return;
    const modal = document.getElementById('productModal');
    document.getElementById('modalImg').src = p.image;
    document.getElementById('modalName').textContent = p.name;
    document.getElementById('modalDesc').textContent = t(p.desc_key) || p.desc_key;
    document.getElementById('modalPrice').textContent = formatPrice(p.price);

    const badgeEl = document.getElementById('modalBadge');
    if (p.badge) { badgeEl.textContent = p.badge; badgeEl.style.display = 'block'; }
    else { badgeEl.style.display = 'none'; }

    const tagsEl = document.getElementById('modalTags');
    tagsEl.innerHTML = p.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const featuresEl = document.getElementById('modalFeatures');
    featuresEl.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');

    const addBtn = document.getElementById('modalAddCart');
    addBtn.onclick = () => { addToCart(productId); closeModal(); };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
}

/* === Add to Cart Buttons === */
function initAddToCart() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(btn.dataset.product);
            btn.classList.add('added');
            setTimeout(() => btn.classList.remove('added'), 1500);
        });
    });
}
