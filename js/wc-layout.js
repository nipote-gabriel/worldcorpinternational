/* WorldCorp International — shared header, menu, dialogs and footer.
   Included twice per page (data-part="header" right after <body>, data-part="footer" before </body>)
   so the markup renders in place, before first paint. */

(function () {
    var script = document.currentScript;
    var part = script.getAttribute('data-part');
    var page = document.body.getAttribute('data-page') || '';

    var chevronRight = '<svg viewBox="0 0 12 22" aria-hidden="true"><path class="chevron" d="M1.5 1.5l9 9.5-9 9.5"/></svg>';
    var extIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';

    var logo =
        '<a href="index.html" class="wc-logo" aria-label="WorldCorp International, home">' +
            '<span>W<svg class="globe-o" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8.6"/><ellipse cx="10" cy="10" rx="3.8" ry="8.6"/><line x1="1.4" y1="10" x2="18.6" y2="10"/></svg>RLD</span>' +
            '<span>CORP</span>' +
            '<span class="wc-logo-sm">INTERNATIONAL</span>' +
        '</a>';

    var nav = [
        ['about', 'about.html', 'About us'],
        ['centres', 'centres.html', 'Centres'],
        ['publications', 'publications.html', 'Publications'],
        ['events', 'events.html', 'Events'],
        ['stories', 'stories.html', 'WorldCorp Stories']
    ];

    function navLinks() {
        return nav.map(function (n) {
            return '<a href="' + n[1] + '"' + (page === n[0] ? ' aria-current="page"' : '') + '>' + n[2] + '</a>';
        }).join('');
    }

    var header =
        '<a class="visually-hidden" href="#main">Skip to content</a>' +
        '<header class="site-header">' +
            '<div class="wrap header-inner">' +
                '<div class="header-left">' +
                    '<button class="icon-btn menu-btn" type="button" data-open-menu aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">' +
                        '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M3 7h20M3 13h20M3 19h20"/></svg>' +
                    '</button>' +
                    '<nav class="header-nav" aria-label="Primary">' + navLinks() + '</nav>' +
                '</div>' +
                logo +
                '<div class="header-right">' +
                    '<button class="icon-btn header-search" type="button" data-open-dialog="search-dialog" aria-label="Search">' +
                        '<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="11.5" cy="11.5" r="7.5"/><path d="M17 17l6 6"/></svg>' +
                    '</button>' +
                    '<a class="pill pill-blue pill-sm header-join" href="join.html">Join us</a>' +
                    '<button class="pill pill-dark" type="button" data-open-dialog="signin-dialog">Sign in</button>' +
                '</div>' +
            '</div>' +
        '</header>';

    var menu =
        '<div class="menu-overlay" id="site-menu" role="dialog" aria-modal="true" aria-label="Main menu">' +
            '<div class="wrap menu-top">' +
                '<button class="icon-btn menu-btn" type="button" data-close-menu aria-label="Close menu">' +
                    '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M5 5l16 16M21 5L5 21"/></svg>' +
                '</button>' +
                '<div class="menu-top-right">' +
                    '<button class="icon-btn" type="button" data-open-dialog="lang-dialog" aria-label="Language">' +
                        '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M3 6h11M8.5 3.5V6M5.5 6c.8 3.4 3.3 6.3 6.5 7.6M11.5 6c-.9 4-3.6 7.3-7.5 8.6M14 23l4.5-11 4.5 11M15.6 19.5h5.8"/></svg>' +
                    '</button>' +
                    '<button class="icon-btn" type="button" data-open-dialog="search-dialog" aria-label="Search">' +
                        '<svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="11.5" cy="11.5" r="7.5"/><path d="M17 17l6 6"/></svg>' +
                    '</button>' +
                    '<a class="pill pill-blue" href="join.html">Join us</a>' +
                '</div>' +
            '</div>' +
            '<div class="menu-body">' +
                '<div class="wrap">' +
                    '<p class="menu-label">Main Menu</p>' +
                    '<ul class="menu-links">' +
                        nav.map(function (n) { return '<li><a href="' + n[1] + '">' + n[2] + '</a></li>'; }).join('') +
                        '<li><a href="' + WC.links.newsletter + '" target="_blank" rel="noopener">Newsletter ' + extIcon + '</a></li>' +
                    '</ul>' +
                    '<div class="menu-secondary">' +
                        '<a href="join.html">Membership</a>' +
                        '<a href="join.html#contact">Contact</a>' +
                        '<a href="about.html#partners">Partners</a>' +
                        '<a href="' + WC.links.hq + '" target="_blank" rel="noopener">Headquarters Comedy</a>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<dialog class="wc-dialog" id="signin-dialog" aria-labelledby="signin-title">' +
            '<div class="dialog-head"><strong>Sign in</strong><button class="icon-btn" type="button" data-close-dialog aria-label="Close"><svg viewBox="0 0 26 26" aria-hidden="true"><path d="M6 6l14 14M20 6L6 20"/></svg></button></div>' +
            '<div class="dialog-body">' +
                '<h2 class="h3" id="signin-title">Welcome back</h2>' +
                '<p>Sign in to access the Member Platform, session recordings and your personalized Agenda.</p>' +
                '<form data-signin-form novalidate>' +
                    '<div class="field"><label for="signin-email">Email</label><input id="signin-email" type="email" autocomplete="email" required></div>' +
                    '<div class="field"><label for="signin-pass">Password</label><input id="signin-pass" type="password" autocomplete="current-password" required></div>' +
                    '<div class="form-actions"><button class="pill pill-dark" type="submit">Sign in</button><a href="join.html">Become a member</a></div>' +
                    '<p class="form-note" data-signin-note hidden></p>' +
                '</form>' +
            '</div>' +
        '</dialog>' +

        '<dialog class="wc-dialog" id="search-dialog" aria-label="Search">' +
            '<div class="dialog-head"><strong>Search</strong><button class="icon-btn" type="button" data-close-dialog aria-label="Close"><svg viewBox="0 0 26 26" aria-hidden="true"><path d="M6 6l14 14M20 6L6 20"/></svg></button></div>' +
            '<div class="dialog-body">' +
                '<label class="visually-hidden" for="search-input">Search WorldCorp</label>' +
                '<input class="search-input" id="search-input" type="search" placeholder="Search stories, reports and Centres" autocomplete="off">' +
                '<ul class="search-results" data-search-results></ul>' +
            '</div>' +
        '</dialog>' +

        '<dialog class="wc-dialog" id="lang-dialog" aria-labelledby="lang-title">' +
            '<div class="dialog-head"><strong id="lang-title">Language</strong><button class="icon-btn" type="button" data-close-dialog aria-label="Close"><svg viewBox="0 0 26 26" aria-hidden="true"><path d="M6 6l14 14M20 6L6 20"/></svg></button></div>' +
            '<div class="dialog-body">' +
                '<ul class="lang-list"><li><span>English (International)</span><span>Selected</span></li></ul>' +
                '<p class="form-note">To reduce translation overhead, WorldCorp publishes in one language.</p>' +
            '</div>' +
        '</dialog>';

    var social = [
        ['LinkedIn', WC.links.linkedin, '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3zM9.5 9.75h3.8v1.5h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12v6.43h-4v-5.7c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8h-4z"/>'],
        ['Instagram', WC.links.instagram, '<path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c2.7 0 3 0 4.1.06 2.7.12 4 1.42 4.12 4.12.05 1.06.06 1.38.06 4.08s0 3.02-.06 4.08c-.12 2.7-1.4 4-4.12 4.12-1.06.05-1.38.06-4.08.06s-3.02 0-4.08-.06c-2.72-.12-4-1.42-4.12-4.12C3.6 14.8 3.6 14.5 3.6 11.8s0-3 .06-4.08C3.78 5 5.07 3.7 7.78 3.6 8.84 3.6 9.16 3.6 12 3.6z"/>'],
        ['X', WC.links.x, '<path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.84-6.32L5.45 21H2.37l7.17-8.2L2 3h6.33l4.37 5.78zm-1.08 16.17h1.7L7.4 4.73H5.58z"/>'],
        ['YouTube', WC.links.youtube, '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>'],
        ['TikTok', WC.links.tiktok, '<path d="M16.6 3h-3.1v12.2a2.8 2.8 0 1 1-2-2.7V9.3a6 6 0 1 0 5.1 5.9V9a7.4 7.4 0 0 0 4.4 1.4V7.3A4.4 4.4 0 0 1 16.6 3z"/>']
    ];

    var footer =
        '<footer class="site-footer">' +
            '<div class="wrap">' +
                '<div class="footer-top">' +
                    '<div>' +
                        logo +
                        '<p class="footer-mission">The International Organization for Public-Private Consolidation.</p>' +
                        '<div class="footer-social">' +
                            social.map(function (s) {
                                return '<a href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + s[2] + '</svg></a>';
                            }).join('') +
                        '</div>' +
                    '</div>' +
                    '<div class="footer-cols">' +
                        '<div><h4>About</h4><ul>' +
                            '<li><a href="about.html">Our mission</a></li>' +
                            '<li><a href="about.html#leadership">Leadership</a></li>' +
                            '<li><a href="about.html#partners">Partners</a></li>' +
                            '<li><a href="about.html#offices">Offices</a></li>' +
                        '</ul></div>' +
                        '<div><h4>Explore</h4><ul>' +
                            '<li><a href="centres.html">Centres</a></li>' +
                            '<li><a href="publications.html">Publications</a></li>' +
                            '<li><a href="stories.html">WorldCorp Stories</a></li>' +
                            '<li><a href="events.html">Annual Meeting 2027</a></li>' +
                        '</ul></div>' +
                        '<div><h4>Engage</h4><ul>' +
                            '<li><a href="join.html">Join us</a></li>' +
                            '<li><a href="join.html#contact">Contact</a></li>' +
                            '<li><a href="' + WC.links.newsletter + '" target="_blank" rel="noopener">Newsletter</a></li>' +
                        '</ul></div>' +
                        '<div><h4>Affiliates</h4><ul>' +
                            WC.universe.map(function (u) {
                                return '<li><a href="' + u.url + '" target="_blank" rel="noopener">' + u.name + '</a></li>';
                            }).join('') +
                        '</ul></div>' +
                    '</div>' +
                '</div>' +
                '<div class="footer-bottom">' +
                    '<span>&copy; ' + new Date().getFullYear() + ' WorldCorp International. A subsidiary of <a href="' + WC.links.hq + '" target="_blank" rel="noopener">Headquarters Comedy</a>.</span>' +
                    '<span>Committed to simplifying the state of the world.</span>' +
                '</div>' +
            '</div>' +
        '</footer>';

    if (part === 'header') {
        script.insertAdjacentHTML('beforebegin', header + menu);
    } else if (part === 'footer') {
        script.insertAdjacentHTML('beforebegin', footer);
    }

    WC.icons = { chevronRight: chevronRight, ext: extIcon };
})();
