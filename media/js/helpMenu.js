/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("helpMenu", function () {

    Crafty.canvas.init();
    
    Crafty.background('#000000');

    Crafty('obj').each(function () {
        this.destroy();
    });

    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Retour au menu")
        .attr({x: 10, y: 720})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty.enterScene("menu");
        });

    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Apprenez à controler votre vaisseau !!")
        .attr({x: 200, y: 50})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty('*').each(function () {
                this.destroy();
            });
            Crafty.e("Delay").delay(function() {
                Crafty.scene("helpPlayer");
            }, 500, 0);
        });
    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Ennemi du Niveau 1")
        .attr({x: 200, y: 100})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty('*').each(function () {
                this.destroy();
            });
            Crafty.e("Delay").delay(function () {
               Crafty.scene("helpLevel1");
            }, 500, 0);
        });
    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Ennemi du Niveau 2")
        .attr({x: 200, y: 150})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty('*').each(function () {
                this.destroy();
            });
            Crafty.e("Delay").delay(function () {
               Crafty.scene("helpLevel2");
            }, 500, 0);
        });
});