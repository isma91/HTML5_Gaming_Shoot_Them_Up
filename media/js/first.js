/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
window.onload = function () {
    "use strict";
    Crafty.init(1024, 768, "game");
    Crafty.background('#000000');
	Crafty.enterScene("menu");
};