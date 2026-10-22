/* WorldCorp International — behaviour and content rendering */

(function () {
    'use strict';

    var $ = function (sel, root) { return (root || document).querySelector(sel); };
    var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

    function esc(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    var chevron = WC.icons ? WC.icons.chevronRight : '';
    var allItems = WC.stories.concat(WC.reports);

    function itemUrl(item) { return 'article.html?s=' + encodeURIComponent(item.slug); }

    function centreById(id) {
        for (var i = 0; i < WC.centres.length; i++) if (WC.centres[i].id === id) return WC.centres[i];
        return null;
    }

    /* ---------- Menu ---------- */

    var menu = $('#site-menu');
    var lastFocus = null;

    function openMenu() {
        if (!menu) return;
        lastFocus = document.activeElement;
        menu.classList.add('is-open');
        document.body.classList.add('no-scroll');
        $$('[data-open-menu]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
        var first = $('[data-close-menu]', menu);
        if (first) first.focus();
    }

    function closeMenu() {
        if (!menu || !menu.classList.contains('is-open')) return;
        menu.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
        $$('[data-open-menu]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
        if (lastFocus) lastFocus.focus();
    }

    document.addEventListener('click', function (e) {
        if (e.target.closest('[data-open-menu]')) { openMenu(); return; }
        if (e.target.closest('[data-close-menu]')) { closeMenu(); return; }
        if (menu && menu.classList.contains('is-open') && e.target.closest('#site-menu a')) closeMenu();

        var opener = e.target.closest('[data-open-dialog]');
        if (opener) {
            var dlg = document.getElementById(opener.getAttribute('data-open-dialog'));
            if (dlg && typeof dlg.showModal === 'function') {
                if (!dlg.open) dlg.showModal();
                var input = $('input', dlg);
                if (input) setTimeout(function () { input.focus(); }, 30);
            }
            return;
        }

        if (e.target.closest('[data-close-dialog]')) {
            var d = e.target.closest('dialog');
            if (d) d.close();
            return;
        }

        if (e.target.tagName === 'DIALOG' && e.target.open) e.target.close();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    /* ---------- Sign in ---------- */

    var signin = $('[data-signin-form]');
    if (signin) {
        signin.addEventListener('submit', function (e) {
            e.preventDefault();
            var note = $('[data-signin-note]', signin);
            var email = $('#signin-email').value.trim();
            note.hidden = false;
            if (!email || email.indexOf('@') < 1) {
                note.className = 'form-note';
                note.textContent = 'Please enter the email address associated with your membership.';
                return;
            }
            note.className = 'form-note is-success';
            note.textContent = 'Thank you. As part of our ongoing platform consolidation, individual member accounts are being merged into a single shared account. We will notify you when it is your turn to sign in.';
        });
    }

    /* ---------- Search ---------- */

    var searchInput = $('#search-input');
    var searchResults = $('[data-search-results]');

    function runSearch() {
        var q = searchInput.value.trim().toLowerCase();
        if (!q) { searchResults.innerHTML = ''; return; }
        var hits = [];
        allItems.forEach(function (it) {
            if ((it.title + ' ' + it.dek + ' ' + it.topic).toLowerCase().indexOf(q) > -1) {
                hits.push('<li><a href="' + itemUrl(it) + '"><small>' + esc(it.type) + '</small>' + esc(it.title) + '</a></li>');
            }
        });
        WC.centres.forEach(function (c) {
            if ((c.name + ' ' + c.mission).toLowerCase().indexOf(q) > -1) {
                hits.push('<li><a href="centres.html#' + c.id + '"><small>Centre</small>' + esc(c.name) + '</a></li>');
            }
        });
        searchResults.innerHTML = hits.length
            ? hits.slice(0, 8).join('')
            : '<li><a href="stories.html"><small>No results</small>No matches. Our analysts suggest narrowing your interests.</a></li>';
    }

    if (searchInput) searchInput.addEventListener('input', runSearch);

    /* ---------- Card templates ---------- */

    function centreCard(c, opts) {
        opts = opts || {};
        var tag = opts.static ? 'div' : 'a';
        var href = opts.static ? '' : ' href="centres.html#' + c.id + '"';
        return '<' + tag + ' class="centre-card ' + c.tint + (c.img ? '' : ' no-image') + '"' + href + '>' +
            (c.img ? '<img src="' + c.img + '" alt="" loading="lazy">' : '') +
            '<div class="centre-card-body">' +
                '<h3 class="centre-card-title">' + esc(c.short) + '</h3>' +
                (opts.withMission ? '<p class="centre-card-sub">' + esc(c.mission) + '</p>' : '') +
            '</div>' +
        '</' + tag + '>';
    }

    function storyCard(it, opts) {
        opts = opts || {};
        if (!it.img) {
            return '<a class="story-card is-text" href="' + itemUrl(it) + '">' +
                '<div class="text-card"><p class="text-card-title">' + esc(it.title) + '</p><p class="text-card-type">' + esc(it.type) + '</p></div>' +
            '</a>';
        }
        return '<a class="story-card' + (opts.wide ? ' is-wide' : '') + '" href="' + itemUrl(it) + '">' +
            '<div class="story-media"><img src="' + it.img + '" alt="" loading="lazy"></div>' +
            '<p class="kicker">' + esc(it.topic) + '</p>' +
            '<h3 class="story-title">' + esc(it.title) + '</h3>' +
        '</a>';
    }

    function pubCover(r) {
        return '<div class="pub-cover ' + r.cover + '">' +
            '<span class="pub-brand">WorldCorp International</span>' +
            '<div><p class="pub-cover-title">' + esc(r.coverTitle) + '</p></div>' +
            '<span class="pub-cover-year">' + esc(r.year) + '</span>' +
        '</div>';
    }

    function pubCard(r) {
        return '<a class="pub-card" href="' + itemUrl(r) + '">' +
            pubCover(r) +
            '<p class="kicker">' + esc(r.type) + ' &middot; ' + esc(r.date) + '</p>' +
            '<h3 class="story-title">' + esc(r.title) + '</h3>' +
            '<p class="pub-dek">' + esc(r.dek) + '</p>' +
        '</a>';
    }

    function universeItem(u) {
        return '<a class="universe-item" href="' + u.url + '" target="_blank" rel="noopener">' +
            '<div class="universe-logo"><img src="' + u.logo + '" alt="' + esc(u.name) + ' logo" loading="lazy"></div>' +
            '<h3>' + esc(u.name) + '</h3>' +
            '<p>' + esc(u.desc) + '</p>' +
            '<span class="ext">Visit ' + (WC.icons ? WC.icons.ext : '') + '</span>' +
        '</a>';
    }

    /* ---------- Renderers ---------- */

    var renderers = {
        'centre-carousel': function (el) {
            el.innerHTML = WC.centres.map(function (c) { return centreCard(c); }).join('');
        },
        'spotlight': function (el) {
            var picks = [WC.stories[0], WC.stories[6], WC.stories[4]];
            el.innerHTML = picks.map(function (s) { return storyCard(s); }).join('');
        },
        'universe': function (el) {
            el.innerHTML = WC.universe.map(universeItem).join('');
        },
        'reports-latest': function (el) {
            el.innerHTML = WC.reports.map(pubCard).join('');
        },
        'centre-list': function (el) {
            el.innerHTML = WC.centres.map(function (c, i) {
                var related = WC.stories.filter(function (s) { return s.centre === c.id; })[0];
                return '<article class="centre-row" id="' + c.id + '">' +
                    centreCard(c, { static: true }) +
                    '<div>' +
                        '<p class="kicker">Centre ' + String(i + 1).padStart(2, '0') + '</p>' +
                        '<h2 style="margin-top:12px">' + esc(c.name) + '</h2>' +
                        '<p class="mission">' + esc(c.mission) + '</p>' +
                        '<p class="desc">' + esc(c.desc) + '</p>' +
                        '<div class="initiatives"><h3>Current initiatives</h3><ul>' +
                            c.initiatives.map(function (n) { return '<li><span>' + esc(n[0]) + '</span><span>' + esc(n[1]) + '</span></li>'; }).join('') +
                        '</ul></div>' +
                        (related ? '<a class="more-link" style="margin-top:30px" href="' + itemUrl(related) + '">Read: ' + esc(related.title) + ' ' + chevron + '</a>' : '') +
                    '</div>' +
                '</article>';
            }).join('');
        },
        'centre-index': function (el) {
            el.innerHTML = WC.centres.map(function (c) {
                return '<a class="chip" style="display:inline-flex;align-items:center" href="#' + c.id + '">' + esc(c.short.replace(/^Centre for (the )?/, '')) + '</a>';
            }).join('');
        }
    };

    $$('[data-render]').forEach(function (el) {
        var fn = renderers[el.getAttribute('data-render')];
        if (fn) fn(el);
    });

    /* ---------- Stories page ---------- */

    var storyGrid = $('[data-story-grid]');
    var storyFilters = $('[data-story-filters]');

    if (storyGrid && storyFilters) {
        var topics = ['All'];
        WC.stories.forEach(function (s) { if (topics.indexOf(s.topic) < 0) topics.push(s.topic); });

        storyFilters.innerHTML = topics.map(function (t, i) {
            return '<button class="chip" type="button" aria-pressed="' + (i === 0) + '" data-topic="' + esc(t) + '">' + esc(t) + '</button>';
        }).join('');

        var drawStories = function (topic) {
            var list = WC.stories.filter(function (s) { return topic === 'All' || s.topic === topic; });
            storyGrid.innerHTML = list.map(function (s) { return storyCard(s); }).join('');
        };

        storyFilters.addEventListener('click', function (e) {
            var b = e.target.closest('[data-topic]');
            if (!b) return;
            $$('[data-topic]', storyFilters).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
            drawStories(b.getAttribute('data-topic'));
        });

        drawStories('All');
    }

    /* ---------- Article page ---------- */

    var articleRoot = $('[data-article]');

    if (articleRoot) {
        var slug = new URLSearchParams(location.search).get('s');
        var item = null;
        allItems.forEach(function (it) { if (it.slug === slug) item = it; });

        if (!item) {
            articleRoot.innerHTML =
                '<section class="wrap not-found">' +
                    '<p class="kicker">Not found</p>' +
                    '<h1 class="display" style="margin-top:14px">This story has been consolidated.</h1>' +
                    '<p class="lead">It may have been merged with a related story, or retired as part of our ongoing content review.</p>' +
                    '<div class="actions"><a class="pill pill-dark" href="stories.html">Browse all stories</a></div>' +
                '</section>';
        } else {
            document.title = item.title + ' | WorldCorp International';
            var metaDesc = $('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', item.dek);

            var isReport = item.type === 'Report';
            var centre = item.centre ? centreById(item.centre) : null;

            var bodyHtml = item.body.map(function (b) {
                if (typeof b === 'string') return '<p>' + esc(b) + '</p>';
                if (b.h2) return '<h2>' + esc(b.h2) + '</h2>';
                if (b.quote) return '<blockquote class="pull-quote">' + esc(b.quote) + '</blockquote>';
                if (b.list) return '<ol>' + b.list.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ol>';
                return '';
            }).join('');

            var keyHtml = item.key
                ? '<aside class="article-key"><h2>' + (isReport ? 'Key findings' : 'Key takeaways') + '</h2><ul>' +
                    item.key.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') + '</ul></aside>'
                : '';

            var figure;
            if (isReport) {
                figure = '<div class="wrap"><div class="pub-feature">' + pubCover(item) +
                    '<div><p class="lead" style="color:var(--ink)">' + esc(item.read) + '. Available to members and the public.</p>' +
                    '<div style="margin-top:28px;display:flex;gap:14px;flex-wrap:wrap"><button class="pill pill-dark" type="button" data-download>Download PDF</button><a class="pill pill-outline" href="publications.html">All publications</a></div>' +
                    '<p class="form-note" data-download-note hidden>Thank you for your interest. To reduce document sprawl, the full report is distributed as this summary.</p></div>' +
                '</div></div>';
            } else if (item.img) {
                figure = '<div class="wrap"><figure class="article-figure"><img src="' + item.img + '" alt="">' +
                    (item.caption ? '<figcaption>' + esc(item.caption) + '</figcaption>' : '') + '</figure></div>';
            } else {
                figure = '';
            }

            var related = WC.stories.filter(function (s) { return s.slug !== item.slug; }).slice(0, 3);

            articleRoot.innerHTML =
                '<header class="wrap article-head">' +
                    '<p class="kicker"><a href="' + (isReport ? 'publications.html' : 'stories.html') + '">' + esc(item.topic) + '</a>' +
                    (centre ? ' &middot; <a href="centres.html#' + centre.id + '">' + esc(centre.short) + '</a>' : '') + '</p>' +
                    '<h1 class="h1">' + esc(item.title) + '</h1>' +
                    '<p class="lead">' + esc(item.dek) + '</p>' +
                    '<div class="article-meta">' +
                        '<span>' + esc(item.type) + '</span>' +
                        '<span>' + esc(item.date) + '</span>' +
                        '<span>' + esc(item.read) + '</span>' +
                        (item.author ? '<span><strong>' + esc(item.author) + '</strong>' + (item.role ? ', ' + esc(item.role) : '') + '</span>' : '') +
                    '</div>' +
                '</header>' +
                figure +
                '<div class="wrap"><div class="article-body">' + keyHtml + bodyHtml + '</div>' +
                    '<div class="article-foot"><span>The views expressed in this article are those of WorldCorp International, and therefore of everyone.</span>' +
                        '<div class="share-links"><a class="pill pill-outline pill-sm" href="' + WC.links.newsletter + '" target="_blank" rel="noopener">Get the newsletter</a></div>' +
                    '</div>' +
                '</div>' +
                '<section class="section"><div class="wrap">' +
                    '<div class="topic-head"><h2 class="h2">More from WorldCorp</h2><a href="stories.html">View all stories</a></div>' +
                    '<div class="story-grid">' + related.map(function (s) { return storyCard(s); }).join('') + '</div>' +
                '</div></section>';

            var dl = $('[data-download]');
            if (dl) dl.addEventListener('click', function () { $('[data-download-note]').hidden = false; });
        }
    }

    /* ---------- Tabs ---------- */

    $$('[role="tablist"]').forEach(function (list) {
        var tabs = $$('[role="tab"]', list);
        function select(tab) {
            tabs.forEach(function (t) {
                var on = t === tab;
                t.setAttribute('aria-selected', String(on));
                t.tabIndex = on ? 0 : -1;
                var panel = document.getElementById(t.getAttribute('aria-controls'));
                if (panel) panel.hidden = !on;
            });
            var p = document.getElementById(tab.getAttribute('aria-controls'));
            if (p) $$('[data-carousel]', p).forEach(syncCarousel);
        }
        list.addEventListener('click', function (e) {
            var t = e.target.closest('[role="tab"]');
            if (t) select(t);
        });
        list.addEventListener('keydown', function (e) {
            var i = tabs.indexOf(document.activeElement);
            if (i < 0) return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
                n.focus();
                select(n);
            }
        });
    });

    /* ---------- Carousels ---------- */

    function syncCarousel(root) {
        var track = $('.carousel-track', root);
        var dotsWrap = $('.carousel-dots', root);
        var prev = $('[data-prev]', root);
        var next = $('[data-next]', root);
        if (!track) return;
        var cards = Array.prototype.slice.call(track.children);
        if (!cards.length) return;

        if (!root._wcInit) {
            root._wcInit = true;
            if (dotsWrap) {
                dotsWrap.innerHTML = cards.map(function (_, i) {
                    return '<button type="button" aria-label="Go to slide ' + (i + 1) + '"></button>';
                }).join('');
                dotsWrap.addEventListener('click', function (e) {
                    var b = e.target.closest('button');
                    if (!b) return;
                    var idx = Array.prototype.indexOf.call(dotsWrap.children, b);
                    go(idx);
                });
            }
            if (prev) prev.addEventListener('click', function () { go(current() - 1); });
            if (next) next.addEventListener('click', function () { go(current() + 1); });
            var ticking = false;
            track.addEventListener('scroll', function () {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(function () { update(); ticking = false; });
            }, { passive: true });
            window.addEventListener('resize', update);
        }

        function step() {
            return cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
        }

        function current() {
            return Math.round(track.scrollLeft / step());
        }

        function go(i) {
            i = Math.max(0, Math.min(cards.length - 1, i));
            track.scrollTo({ left: i * step(), behavior: 'smooth' });
        }

        function update() {
            var maxScroll = track.scrollWidth - track.clientWidth;
            var idx = track.scrollLeft >= maxScroll - 4 ? cards.length - 1 : current();
            if (dotsWrap) {
                Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
                    d.setAttribute('aria-current', String(i === idx));
                });
            }
            if (prev) prev.disabled = track.scrollLeft <= 4;
            if (next) next.disabled = track.scrollLeft >= maxScroll - 4;
        }

        update();
    }

    $$('[data-carousel]').forEach(syncCarousel);

    /* ---------- Event sub-navigation ---------- */

    var eventTabs = $$('.event-tabs a[href^="#"]');
    if (eventTabs.length && 'IntersectionObserver' in window) {
        var setActive = function (id) {
            eventTabs.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); });
        };
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
        }, { rootMargin: '-45% 0px -50% 0px' });
        eventTabs.forEach(function (a) {
            var sec = document.getElementById(a.getAttribute('href').slice(1));
            if (sec) spy.observe(sec);
        });
    }

    /* ---------- Contact / membership form ---------- */

    var joinForm = $('[data-join-form]');
    if (joinForm) {
        joinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var note = $('[data-join-note]', joinForm);
            var btn = $('button[type="submit"]', joinForm);
            if (!joinForm.checkValidity()) {
                joinForm.reportValidity();
                return;
            }
            var data = {};
            new FormData(joinForm).forEach(function (v, k) { data[k] = v; });
            data._subject = 'WorldCorp membership enquiry: ' + (data.organization || data.name || '');
            btn.disabled = true;
            btn.textContent = 'Submitting...';
            fetch('https://formsubmit.co/ajax/' + WC.links.email, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (r) {
                if (!r.ok) throw new Error('bad status');
                note.hidden = false;
                note.className = 'form-note is-success';
                note.textContent = 'Thank you. Your enquiry has been received and will be reviewed alongside those of your competitors.';
                joinForm.reset();
            }).catch(function () {
                note.hidden = false;
                note.className = 'form-note';
                note.innerHTML = 'Something went wrong. Please email us directly at <a href="mailto:' + WC.links.email + '">' + WC.links.email + '</a>.';
            }).then(function () {
                btn.disabled = false;
                btn.textContent = 'Submit enquiry';
            });
        });
    }
})();
