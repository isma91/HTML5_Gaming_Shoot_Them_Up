/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("helpLevel2", function () {

    Crafty.canvas.init();

    Crafty.background('#000000');

    Crafty('obj').each(function () {
        this.destroy();
    });

    Crafty.sprite(41, 57, "media/img/enemy2GreyBlue.png", {
        enemy2GreyBlue: [0, 0]
    });

    Crafty.sprite(12, 29, "media/img/weaponEnemy2.png", {
        missileEnemy2: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss2.png", {
        bigBoss2: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss2.png", {
        missileBoss2: [0, 0]
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

    Crafty.e("2D, Canvas, SpriteAnimation, enemy2GreyBlue")
        .reel('enemy2GreyBlueRunning', 1000, 0, 0, 4)
        .animate('enemy2GreyBlueRunning', -1)
        .attr({x: 400, y: 100});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Basic enemy")
        .attr({x: 380, y: 70})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 1")
        .attr({x: 500, y: 100})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : Yes")
        .attr({x: 580, y: 100})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("caractéristique : Apparait aléatoirement")
        .attr({x: 500, y: 130})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("et tire des missiles")
        .attr({x: 500, y: 160})
        .textColor("#0080FF");
    Crafty.e("2D, Canvas, SpriteAnimation, missileEnemy2")
        .reel('missileEnemy2Running', 1000, 0, 0, 4)
        .animate('missileEnemy2Running', -1)
        .attr({x: 700, y: 100});

    Crafty.e("2D, Canvas, SpriteAnimation, bigBoss2")
        .reel('bigBoss2Running', 1000, [[0, 0]])
        .animate('bigBoss2Running', -1)
        .attr({x: 320, y: 220});
    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '20px', family: 'Arial'})
        .text("Big Boss")
        .attr({x: 380, y: 200})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '20px', family: 'Arial'})
        .text("PV : 10")
        .attr({x: 530, y: 250})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '20px', family: 'Arial'})
        .text("Shoot : Yes")
        .attr({x: 630, y: 250})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss2")
        .reel('missileBoss2Running', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
        .animate('missileBoss2Running', -1)
        .attr({x: 750, y: 230});
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("caractéristique : Tire quatres missiles")
        .attr({x: 530, y: 280})
        .textColor("#FF0000");
    Crafty.e("2D, Canvas, Text")
        .textFont({size: '20px', family: 'Arial'})
        .text("dont deux qui vont en diagonal")
        .attr({x: 530, y: 310})
        .textColor("#FF0000");
});