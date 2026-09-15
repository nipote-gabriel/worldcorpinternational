/* WorldCorp International — consultancy site interactions */
(function () {
    function setupNav() {
        var toggle = document.querySelector('.firm-nav-toggle');
        var panel = document.querySelector('.firm-mobile-panel');
        if (!toggle || !panel) return;
        toggle.addEventListener('click', function () {
            panel.classList.toggle('active');
        });
        panel.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { panel.classList.remove('active'); });
        });
    }

    function setupReveal() {
        var items = document.querySelectorAll('.firm-reveal');
        if (!items.length) return;
        if (!('IntersectionObserver' in window)) {
            items.forEach(function (el) { el.classList.add('is-visible'); });
            return;
        }
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        items.forEach(function (el) { observer.observe(el); });
    }

    function setupCounters() {
        var stats = document.querySelectorAll('[data-count-to]');
        if (!stats.length || !('IntersectionObserver' in window)) return;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                observer.unobserve(el);
                var target = parseFloat(el.getAttribute('data-count-to'));
                var prefix = el.getAttribute('data-prefix') || '';
                var suffix = el.getAttribute('data-suffix') || '';
                var decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals'), 10) : 0;
                var duration = 1200;
                var start = null;
                function step(ts) {
                    if (!start) start = ts;
                    var progress = Math.min((ts - start) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var value = target * eased;
                    el.textContent = prefix + value.toFixed(decimals) + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }, { threshold: 0.4 });
        stats.forEach(function (el) { observer.observe(el); });
    }

    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                var id = a.getAttribute('href');
                if (id.length < 2) return;
                var target = document.querySelector(id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupNav();
        setupReveal();
        setupCounters();
        setupSmoothScroll();
    });
})();
