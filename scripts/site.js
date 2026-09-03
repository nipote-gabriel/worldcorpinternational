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

    function setupContactModal() {
        var overlay = document.getElementById('contact-modal');
        if (!overlay) return;
        var closeBtn = overlay.querySelector('.firm-modal-close');
        var form = overlay.querySelector('#contact-form');
        var status = form ? form.querySelector('.firm-form-status') : null;
        var submitBtn = form ? form.querySelector('button[type="submit"]') : null;

        function open(e) {
            if (e) e.preventDefault();
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
        function close() {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        document.querySelectorAll('[data-modal-open="contact"]').forEach(function (el) {
            el.addEventListener('click', open);
        });
        if (closeBtn) closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('active')) close();
        });

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                if (submitBtn) submitBtn.disabled = true;
                if (status) {
                    status.textContent = 'Sending...';
                    status.className = 'firm-form-status';
                }
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { Accept: 'application/json' }
                })
                    .then(function (res) {
                        if (!res.ok) throw new Error('Request failed');
                        if (status) {
                            status.textContent = 'Sent. Someone will pretend to follow up.';
                            status.className = 'firm-form-status success';
                        }
                        form.reset();
                    })
                    .catch(function () {
                        if (status) {
                            status.textContent = 'Something went wrong. Email gabe@headquarterscomedy.com directly instead.';
                            status.className = 'firm-form-status error';
                        }
                    })
                    .finally(function () {
                        if (submitBtn) submitBtn.disabled = false;
                    });
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        setupNav();
        setupReveal();
        setupCounters();
        setupSmoothScroll();
        setupContactModal();
    });
})();
