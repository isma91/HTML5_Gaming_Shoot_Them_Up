/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("menu", function () {
    Crafty.e("2D, DOM, Image")
        .attr({x: 350, y: 80})
        .image("media/img/logo.png");
        Crafty.e("2D, DOM, Image, Mouse")
            .attr({x: 400, y: 510})
            .image("media/img/help.png")
            .bind('Click', function () {
                Crafty.enterScene("helpMenu")
            });
    Crafty.e("2D, DOM, Image, Mouse")
        .attr({x: 400, y: 400})
        .image("media/img/play.png")
        .bind('Click', function () {
            Crafty.enterScene("level1");
        });
})
Crafty.defineScene("gameOver", function () {
    Crafty('obj').each(function () {
        this.destroy();
    });
    Crafty.canvas.init();
    Crafty.background("#000000");
    Crafty.sprite(95, "media/img/explosion.png", {
        explosion: [0, 0]
    });
    function gameOver () {
        Crafty.e("2D, Canvas, SpriteAnimation, explosion")
            .reel('load', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
            .animate('load', -1)
            .attr({x: Math.floor((Math.random() * 900) + 1), y: Math.floor((Math.random() * 700) + 1), w: 95, h: 100});
    }
    Crafty.e("Delay").delay(gameOver, 500, 50);
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '50px', family: 'Arial'})
        .text("Game Over")
        .attr({x: 400, y: 300})
        .textColor("#FFFFFF");
});