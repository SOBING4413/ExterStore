/* ============================================
   ExterStore - Documentation Scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
    initSidebarLinks();
    initSearch();
    initMobileMenuDocs();
});

/* === Sidebar Toggle (Mobile) === */
function initSidebar() {
    var sidebar = document.getElementById('docsSidebar');
    var toggle = document.getElementById('sidebarToggle');
    var closeBtn = document.getElementById('sidebarClose');

    if (!sidebar || !toggle) return;

    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }

    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !toggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });
}

/* === Active Sidebar Link on Scroll === */
function initSidebarLinks() {
    var links = document.querySelectorAll('.sidebar-link');
    var sections = document.querySelectorAll('.docs-section');

    function updateActive() {
        var current = '';
        sections.forEach(function(section) {
            var top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActive);

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = link.getAttribute('href');
            var target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            var sidebar = document.getElementById('docsSidebar');
            if (sidebar && window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}

/* === Search === */
function initSearch() {
    var searchInput = document.getElementById('docsSearch');
    if (!searchInput) return;

    var links = document.querySelectorAll('.sidebar-link');

    searchInput.addEventListener('input', function(e) {
        var query = e.target.value.toLowerCase().trim();

        links.forEach(function(link) {
            var text = link.textContent.toLowerCase();
            var parent = link.parentElement;
            if (query === '' || text.includes(query)) {
                parent.style.display = '';
            } else {
                parent.style.display = 'none';
            }
        });
    });
}

/* === Mobile Menu (Docs) === */
function initMobileMenuDocs() {
    var toggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

/* === FAQ Toggle === */
function toggleFaq(element) {
    var item = element.parentElement;
    var isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(function(faq) {
        faq.classList.remove('active');
    });

    if (!isActive) {
        item.classList.add('active');
    }
}

/* === Copy Code === */
function copyCode(button) {
    var codeBlock = button.closest('.code-block');
    var code = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(code).then(function() {
        var originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');

        setTimeout(function() {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function() {
        var textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        var originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');

        setTimeout(function() {
            button.innerHTML = originalHTML;
            button.classList.remove('copied');
        }, 2000);
    });
}