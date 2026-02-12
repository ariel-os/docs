// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item affix "><li class="part-title">Hardware Support</li><li class="chapter-item "><a href="hardware-functionality-support.html"><strong aria-hidden="true">2.</strong> Overview</a></li><li class="chapter-item "><a href="boards/index.html"><strong aria-hidden="true">3.</strong> Boards</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="boards/adafruit-feather-nrf52840-express.html"><strong aria-hidden="true">3.1.</strong> Adafruit Feather nRF52840 Express</a></li><li class="chapter-item "><a href="boards/adafruit-feather-nrf52840-sense.html"><strong aria-hidden="true">3.2.</strong> Adafruit Feather nRF52840 Sense</a></li><li class="chapter-item "><a href="boards/bbc-micro-bit-v1.html"><strong aria-hidden="true">3.3.</strong> BBC micro:bit V1</a></li><li class="chapter-item "><a href="boards/bbc-micro-bit-v2.html"><strong aria-hidden="true">3.4.</strong> BBC micro:bit V2</a></li><li class="chapter-item "><a href="boards/dfrobot-firebeetle-2-esp32-c6.html"><strong aria-hidden="true">3.5.</strong> DFRobot FireBeetle 2 ESP32-C6</a></li><li class="chapter-item "><a href="boards/espressif-esp32-c3-devkit-rust-1.html"><strong aria-hidden="true">3.6.</strong> Espressif ESP32-C3-DevKit-RUST-1</a></li><li class="chapter-item "><a href="boards/espressif-esp32-c3-lcdkit.html"><strong aria-hidden="true">3.7.</strong> Espressif ESP32-C3-LCDkit</a></li><li class="chapter-item "><a href="boards/espressif-esp32-c6-devkitc-1.html"><strong aria-hidden="true">3.8.</strong> Espressif ESP32-C6-DevKitC-1</a></li><li class="chapter-item "><a href="boards/espressif-esp32-s2-devkitc-1.html"><strong aria-hidden="true">3.9.</strong> Espressif ESP32-S2-DevKitC-1</a></li><li class="chapter-item "><a href="boards/espressif-esp32-s3-devkitc-1.html"><strong aria-hidden="true">3.10.</strong> Espressif ESP32-S3-DevKitC-1</a></li><li class="chapter-item "><a href="boards/heltec-wifi-lora-32-v3.html"><strong aria-hidden="true">3.11.</strong> Heltec WiFi LoRa 32 V3</a></li><li class="chapter-item "><a href="boards/native.html"><strong aria-hidden="true">3.12.</strong> native</a></li><li class="chapter-item "><a href="boards/nordic-thingy-91-x.html"><strong aria-hidden="true">3.13.</strong> Nordic Thingy:91 X</a></li><li class="chapter-item "><a href="boards/nrf52-dk.html"><strong aria-hidden="true">3.14.</strong> nRF52-DK</a></li><li class="chapter-item "><a href="boards/nrf52840-dk.html"><strong aria-hidden="true">3.15.</strong> nRF52840-DK</a></li><li class="chapter-item "><a href="boards/nrf5340-dk.html"><strong aria-hidden="true">3.16.</strong> nRF5340-DK</a></li><li class="chapter-item "><a href="boards/nrf9151-dk.html"><strong aria-hidden="true">3.17.</strong> nRF9151-DK</a></li><li class="chapter-item "><a href="boards/nrf9160-dk.html"><strong aria-hidden="true">3.18.</strong> nRF9160-DK</a></li><li class="chapter-item "><a href="boards/raspberry-pi-pico.html"><strong aria-hidden="true">3.19.</strong> Raspberry Pi Pico</a></li><li class="chapter-item "><a href="boards/raspberry-pi-pico-2.html"><strong aria-hidden="true">3.20.</strong> Raspberry Pi Pico 2</a></li><li class="chapter-item "><a href="boards/raspberry-pi-pico-2-w.html"><strong aria-hidden="true">3.21.</strong> Raspberry Pi Pico 2 W</a></li><li class="chapter-item "><a href="boards/raspberry-pi-pico-w.html"><strong aria-hidden="true">3.22.</strong> Raspberry Pi Pico W</a></li><li class="chapter-item "><a href="boards/seeed-studio-lora-e5-mini.html"><strong aria-hidden="true">3.23.</strong> Seeed Studio LoRa-E5 mini</a></li><li class="chapter-item "><a href="boards/seeed-studio-xiao-esp32c6.html"><strong aria-hidden="true">3.24.</strong> Seeed Studio XIAO ESP32C6</a></li><li class="chapter-item "><a href="boards/st-b-l475e-iot01a.html"><strong aria-hidden="true">3.25.</strong> ST B-L475E-IOT01A</a></li><li class="chapter-item "><a href="boards/st-nucleo-c031c6.html"><strong aria-hidden="true">3.26.</strong> ST NUCLEO-C031C6</a></li><li class="chapter-item "><a href="boards/st-nucleo-f042k6.html"><strong aria-hidden="true">3.27.</strong> ST NUCLEO-F042K6</a></li><li class="chapter-item "><a href="boards/st-nucleo-f401re.html"><strong aria-hidden="true">3.28.</strong> ST NUCLEO-F401RE</a></li><li class="chapter-item "><a href="boards/st-nucleo-f411re.html"><strong aria-hidden="true">3.29.</strong> ST NUCLEO-F411RE</a></li><li class="chapter-item "><a href="boards/st-nucleo-h753zi.html"><strong aria-hidden="true">3.30.</strong> ST NUCLEO-H753ZI</a></li><li class="chapter-item "><a href="boards/st-nucleo-h755zi-q.html"><strong aria-hidden="true">3.31.</strong> ST NUCLEO-H755ZI-Q</a></li><li class="chapter-item "><a href="boards/st-nucleo-wb55rg.html"><strong aria-hidden="true">3.32.</strong> ST NUCLEO-WB55RG</a></li><li class="chapter-item "><a href="boards/st-nucleo-wba55cg.html"><strong aria-hidden="true">3.33.</strong> ST NUCLEO-WBA55CG</a></li><li class="chapter-item "><a href="boards/st-steval-mkboxpro.html"><strong aria-hidden="true">3.34.</strong> ST STEVAL-MKBOXPRO</a></li><li class="chapter-item "><a href="boards/stm32u083c-dk.html"><strong aria-hidden="true">3.35.</strong> STM32U083C-DK</a></li></ol></li><li class="chapter-item "><a href="chips/index.html"><strong aria-hidden="true">4.</strong> Chips</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="chips/esp32c3.html"><strong aria-hidden="true">4.1.</strong> ESP32-C3</a></li><li class="chapter-item "><a href="chips/esp32c3fx4.html"><strong aria-hidden="true">4.2.</strong> ESP32-C3Fx4</a></li><li class="chapter-item "><a href="chips/esp32c6.html"><strong aria-hidden="true">4.3.</strong> ESP32-C6</a></li><li class="chapter-item "><a href="chips/esp32c6fx4.html"><strong aria-hidden="true">4.4.</strong> ESP32-C6Fx4</a></li><li class="chapter-item "><a href="chips/esp32s2.html"><strong aria-hidden="true">4.5.</strong> ESP32-S2</a></li><li class="chapter-item "><a href="chips/esp32s2fx2.html"><strong aria-hidden="true">4.6.</strong> ESP32-S2Fx2</a></li><li class="chapter-item "><a href="chips/esp32s2fx4.html"><strong aria-hidden="true">4.7.</strong> ESP32-S2Fx4</a></li><li class="chapter-item "><a href="chips/esp32s2fx4r2.html"><strong aria-hidden="true">4.8.</strong> ESP32-S2Fx4R2</a></li><li class="chapter-item "><a href="chips/esp32s3.html"><strong aria-hidden="true">4.9.</strong> ESP32-S3</a></li><li class="chapter-item "><a href="chips/esp32s3fx8.html"><strong aria-hidden="true">4.10.</strong> ESP32-S3Fx8</a></li><li class="chapter-item "><a href="chips/native-chip.html"><strong aria-hidden="true">4.11.</strong> native</a></li><li class="chapter-item "><a href="chips/nrf51822-xxaa.html"><strong aria-hidden="true">4.12.</strong> nRF51822-xxAA</a></li><li class="chapter-item "><a href="chips/nrf52832.html"><strong aria-hidden="true">4.13.</strong> nRF52832</a></li><li class="chapter-item "><a href="chips/nrf52833.html"><strong aria-hidden="true">4.14.</strong> nRF52833</a></li><li class="chapter-item "><a href="chips/nrf52840.html"><strong aria-hidden="true">4.15.</strong> nRF52840</a></li><li class="chapter-item "><a href="chips/nrf5340-app.html"><strong aria-hidden="true">4.16.</strong> nRF5340 application core</a></li><li class="chapter-item "><a href="chips/nrf5340-net.html"><strong aria-hidden="true">4.17.</strong> nRF5340 network core</a></li><li class="chapter-item "><a href="chips/nrf9151.html"><strong aria-hidden="true">4.18.</strong> nRF9151</a></li><li class="chapter-item "><a href="chips/nrf9160.html"><strong aria-hidden="true">4.19.</strong> nRF9160</a></li><li class="chapter-item "><a href="chips/rp2040.html"><strong aria-hidden="true">4.20.</strong> RP2040</a></li><li class="chapter-item "><a href="chips/rp235xa.html"><strong aria-hidden="true">4.21.</strong> RP235xA</a></li><li class="chapter-item "><a href="chips/stm32c031c6.html"><strong aria-hidden="true">4.22.</strong> STM32C031C6</a></li><li class="chapter-item "><a href="chips/stm32f042k6.html"><strong aria-hidden="true">4.23.</strong> STM32F042K6</a></li><li class="chapter-item "><a href="chips/stm32f401re.html"><strong aria-hidden="true">4.24.</strong> STM32F401RE</a></li><li class="chapter-item "><a href="chips/stm32f411re.html"><strong aria-hidden="true">4.25.</strong> STM32F411RE</a></li><li class="chapter-item "><a href="chips/stm32h753zi.html"><strong aria-hidden="true">4.26.</strong> STM32H753ZI</a></li><li class="chapter-item "><a href="chips/stm32h755zi.html"><strong aria-hidden="true">4.27.</strong> STM32H755ZI</a></li><li class="chapter-item "><a href="chips/stm32l475vg.html"><strong aria-hidden="true">4.28.</strong> STM32L475VG</a></li><li class="chapter-item "><a href="chips/stm32u073kc.html"><strong aria-hidden="true">4.29.</strong> STM32U073KC</a></li><li class="chapter-item "><a href="chips/stm32u083mc.html"><strong aria-hidden="true">4.30.</strong> STM32U083MC</a></li><li class="chapter-item "><a href="chips/stm32u585ai.html"><strong aria-hidden="true">4.31.</strong> STM32U585AI</a></li><li class="chapter-item "><a href="chips/stm32wb55rg.html"><strong aria-hidden="true">4.32.</strong> STM32WB55RG</a></li><li class="chapter-item "><a href="chips/stm32wba55cg.html"><strong aria-hidden="true">4.33.</strong> STM32WBA55CG</a></li><li class="chapter-item "><a href="chips/stm32wle5jc.html"><strong aria-hidden="true">4.34.</strong> STM32WLE5JC</a></li></ol></li><li class="chapter-item "><li class="part-title">User Guide</li><li class="chapter-item "><a href="getting-started.html"><strong aria-hidden="true">5.</strong> Getting Started</a></li><li class="chapter-item "><a href="build-system.html"><strong aria-hidden="true">6.</strong> Build System</a></li><li class="chapter-item "><a href="application.html"><strong aria-hidden="true">7.</strong> Building an Application</a></li><li class="chapter-item "><a href="async-support.html"><strong aria-hidden="true">8.</strong> Async Executors</a></li><li class="chapter-item "><a href="debug-console.html"><strong aria-hidden="true">9.</strong> Debug Console</a></li><li class="chapter-item "><a href="networking.html"><strong aria-hidden="true">10.</strong> Networking</a></li><li class="chapter-item "><a href="bluetooth.html"><strong aria-hidden="true">11.</strong> Bluetooth Low Energy</a></li><li class="chapter-item "><a href="randomness.html"><strong aria-hidden="true">12.</strong> Randomness and Entropy</a></li><li class="chapter-item "><a href="multithreading.html"><strong aria-hidden="true">13.</strong> Multithreading</a></li><li class="chapter-item "><a href="storage.html"><strong aria-hidden="true">14.</strong> Persistent Storage</a></li><li class="chapter-item "><a href="native-target.html"><strong aria-hidden="true">15.</strong> Native Target</a></li><li class="chapter-item "><a href="testing.html"><strong aria-hidden="true">16.</strong> Testing</a></li><li class="chapter-item "><a href="tooling/index.html"><strong aria-hidden="true">17.</strong> Tooling</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="tooling/coap.html"><strong aria-hidden="true">17.1.</strong> CoAP</a></li><li class="chapter-item "><a href="tooling/ferrocene.html"><strong aria-hidden="true">17.2.</strong> Ferrocene</a></li></ol></li><li class="chapter-item "><a href="vscode-configuration.html"><strong aria-hidden="true">18.</strong> VSCode Configuration</a></li><li class="chapter-item "><a href="glossary.html"><strong aria-hidden="true">19.</strong> Glossary</a></li><li class="chapter-item affix "><li class="part-title">Developer Guide</li><li class="chapter-item "><a href="adding-board-support.html"><strong aria-hidden="true">20.</strong> Adding Support for a Board</a></li><li class="chapter-item "><a href="development-processes.html"><strong aria-hidden="true">21.</strong> Development Processes</a></li><li class="chapter-item "><a href="coding-conventions.html"><strong aria-hidden="true">22.</strong> Coding Conventions</a></li><li class="chapter-item "><a href="CODE_OF_CONDUCT.html"><strong aria-hidden="true">23.</strong> Code of Conduct</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                if (parent && parent.classList.contains('chapter-item')) {
                    parent.classList.add('expanded');
                }
                while (parent) {
                    if (parent.tagName === 'LI' && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains('chapter-item')) {
                            parent.previousElementSibling.classList.add('expanded');
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        const sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('#mdbook-sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

// This is a debugging tool for the threshold which you can enable in the console.
// eslint-disable-next-line prefer-const
let mdbookThresholdDebug = false;

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at most defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        let bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / maxPixelsBelow;
            const clamp = Math.max(0, Math.min(1, t));
            bottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // bottomAdd will offset the threshold towards the bottom of the
            // page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + bottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, bottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }
        lastKnownScrollPosition = scrollTop;
    }

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement.parentElement.parentElement;
        while (current.tagName === 'LI') {
            const prevSibling = current.previousElementSibling;
            if (prevSibling !== null
                && prevSibling.tagName === 'LI'
                && prevSibling.classList.contains('header-item')) {
                prevSibling.classList.add('expanded');
                current = prevSibling.parentElement.parentElement;
            } else {
                break;
            }
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (mdbookThresholdDebug) {
            drawDebugLine();
        }
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }
        const activeItem = activeSection.parentElement;
        const activeList = activeItem.parentElement;

        // Build a tree of headers in the sidebar.
        const rootLi = document.createElement('li');
        rootLi.classList.add('header-item');
        rootLi.classList.add('expanded');
        const rootOl = document.createElement('ol');
        rootOl.classList.add('section');
        rootLi.appendChild(rootOl);
        const stack = [{ level: 0, ol: rootOl }];
        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));
            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const a = document.createElement('a');
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            a.innerHTML = header.children[0].innerHTML;
            a.addEventListener('click', headerThresholdClick);
            li.appendChild(a);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const div = document.createElement('div');
                    div.textContent = '❱';
                    const toggle = document.createElement('a');
                    toggle.classList.add('toggle');
                    toggle.classList.add('header-toggle');
                    toggle.appendChild(div);
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    li.appendChild(toggle);
                    headerToggles.push(li);
                }
            }

            // Find the appropriate parent level.
            while (stack.length > 1 && stack[stack.length - 1].level >= level) {
                stack.pop();
            }

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);

            // Create new nested ol for potential children.
            const nestedOl = document.createElement('ol');
            nestedOl.classList.add('section');
            const nestedLi = document.createElement('li');
            nestedLi.appendChild(nestedOl);
            currentParent.ol.appendChild(nestedLi);
            stack.push({ level: level, ol: nestedOl });
        }

        activeList.insertBefore(rootLi, activeItem.nextSibling);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

