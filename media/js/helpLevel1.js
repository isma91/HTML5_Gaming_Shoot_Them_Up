/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("helpLevel1", function () {

    Crafty.canvas.init();

    Crafty.background('#000000');

    Crafty('obj').each(function () {
        this.destroy();
    });


    Crafty.sprite(95, "media/img/enemy1.png", {
        enemy1GreyBlue: [0, 0]
    });

    Crafty.sprite(95, "media/img/enemy2.png", {
        enemy1BlackRed: [0, 0]
    });

    Crafty.sprite(95, "media/img/boss1.png", {
        boss1GreyBlue: [0, 0]
    });

    Crafty.sprite(95, "media/img/boss2.png", {
        boss1BlackRed: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss1.png", {
        bigBoss1: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss1.png", {
        missileBoss1GreyBlue: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss1.png", {
        bigBoss1: [0, 0]
    });

    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Retour au menu d'aide")
        .attr({x: 10, y: 720})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty('*').each(function () {
                this.destroy();
            });
            Crafty.e("Delay").delay(function() {
                Crafty.scene("helpMenu");
            }, 500, 0);
        });

    Crafty.e("2D, Canvas, SpriteAnimation, enemy1GreyBlue, Collision, Solid")
        .reel('enemy1GreyBlueRunning', 1000, 0, 0, 4)
        .animate('enemy1GreyBlueRunning', -1)
        .attr({x: 400, y: 40});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Basic enemy")
        .attr({x: 400, y: 10})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 1")
        .attr({x: 520, y: 60})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : No")
        .attr({x: 600, y: 60})
        .textColor("#0080FF");

    Crafty.e("2D, Canvas, SpriteAnimation, enemy1BlackRed, Collision, Solid")
        .reel('enemy1BlackRedRunning', 1000, 0, 0, 4)
        .animate('enemy1BlackRedRunning', -1)
        .attr({x: 400, y: 140});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Basic enemy")
        .attr({x: 400, y: 110})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 1")
        .attr({x: 520, y: 165})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : No")
        .attr({x: 600, y: 165})
        .textColor("#FF0000");

    Crafty.e("2D, Canvas, SpriteAnimation, boss1BlackRed, Solid, Collision, Delay")
        .reel('boss1BlackRedRunning', 1000, 0, 0, 4)
        .animate('boss1BlackRedRunning', -1)
        .attr({x: 420, y: 250});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Little Boss")
        .attr({x: 400, y: 220})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 1")
        .attr({x: 520, y: 280})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : No")
        .attr({x: 600, y: 280})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("caractéristique : Fonce vers vous")
        .attr({x: 520, y: 310})
        .textColor("#FF0000");

    Crafty.e("2D, Canvas, SpriteAnimation, boss1GreyBlue, Solid, Collision, Delay")
        .reel('boss1GreyBlueRunning', 1000, 0, 0, 4)
        .animate('boss1GreyBlueRunning', -1)
        .attr({x: 420, y: 390});
    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss1GreyBlue, Solid, Collision, Delay")
        .reel('missileBoss1GreyBlueRunnig', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
        .animate('missileBoss1GreyBlueRunnig', -1)
        .attr({x: 800, y: 400});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Little Boss")
        .attr({x: 400, y: 360})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 1")
        .attr({x: 520, y: 400})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : Yes")
        .attr({x: 600, y: 400})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("caractéristique : Tire un missile")
        .attr({x: 520, y: 430})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("quand il est proche de votre position horizontal")
        .attr({x: 520, y: 460})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, SpriteAnimation, bigBoss1, Solid, Collision, Delay")
        .reel('bigBoss1Running', 1000, [[0, 0]])
        .animate('bigBoss1Running', -1)
        .attr({x: 360, y: 530});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Big Boss")
        .attr({x: 400, y: 505})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 5")
        .attr({x: 570, y: 550})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : Yes")
        .attr({x: 650, y: 550})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("caractéristique : Tire deux missiles")
        .attr({x: 520, y: 600})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Tout en se déplaçant de droite à gauche")
        .attr({x: 520, y: 630})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss1GreyBlue, Solid, Collision, Delay")
        .reel('missileBoss1GreyBlueRunnig', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
        .animate('missileBoss1GreyBlueRunnig', -1)
        .attr({x: 830, y: 570});
});