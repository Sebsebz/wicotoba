/*global require, console */
var gui = require('nw.gui');
var win = gui.Window.get();
var bouton_close     = document.querySelector(".titlebar_close");
var bouton_resize    = document.querySelector(".titlebar_resize");
var bouton_reduce    = document.querySelector(".titlebar_reduce");
var bouton_inspect   = document.querySelector(".titlebar_inspect");
var bouton_refresh   = document.querySelector(".titlebar_refresh");
var bouton_draggable = document.querySelector(".titlebar_drag_zone");
var body_el = document.getElementsByTagName("body")[0];
var maximised;

/* Init App */
maximised = false;
bouton_resize.classList.add("titlebar_resize_A");
bouton_resize.classList.remove("titlebar_resize_D");

bouton_close.onclick = function () {
    'use strict';
    win.close();
};

bouton_reduce.onclick = function () {
    'use strict';
    win.minimize();
};

bouton_inspect.onclick = function () {
    'use strict';
    if (win.isDevToolsOpen() !== true) {
        bouton_inspect.classList.add("inspected");
        win.showDevTools('', true);
    } else {
        bouton_inspect.classList.remove("inspected");
        win.closeDevTools();
    }
};

win.on('devtools-closed', function () {
    'use strict';
    bouton_inspect.classList.remove("inspected");
});

bouton_resize.onclick = function () {
    'use strict';
    if (maximised === false) {
        win.maximize();
        maximised = true;
        bouton_resize.classList.add("titlebar_resize_D");
        bouton_resize.classList.remove("titlebar_resize_A");
    } else {
        win.unmaximize();
        maximised = false;
        bouton_resize.classList.add("titlebar_resize_A");
        bouton_resize.classList.remove("titlebar_resize_D");
    }
};

bouton_refresh.onclick = function () {
    'use strict';
    win.reload();
};

