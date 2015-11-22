/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("helpPlayer", function () {
	"use strict";

	var tirerPlayer, missilePlayer, missilePlayerName, missilePlayerArray, countSpacePressed, playerHelp;

	Crafty.background('#000000');

    Crafty('obj').each(function () {
        this.destroy();
    });

    Crafty.canvas.init();

    Crafty.sprite(95, "media/img/playerBlackShip.png", {
        playerBlackShip: [0, 0]
    });

    Crafty.sprite(95, "media/img/playerBlackShipStop.png", {
        playerBlackShipStop: [0, 0]
    });

    Crafty.sprite(101, "media/img/playerBlackShipLeft.png", {
        playerBlackShipLeft: [0, 0]
    });

    Crafty.sprite(101, "media/img/playerBlackShipRight.png", {
        playerBlackShipRight: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBlackShip.png", {
        missileBlackShip: [0, 0]
    });

    Crafty.e("solid, 2D, Canvas, Color, Collision, Solid")
        .color('#000000')
        .attr({x: 1, y: 770, w: 1020, h: 20});

    Crafty.e("solid, 2D, Canvas, Color, Collision, Solid")
        .color('#000000')
        .attr({x: 1025, y: 1, w: 20, h: 1020});

    Crafty.e("solid, 2D, Canvas, Color, Collision, Solid")
        .color('#000000')
        .attr({x: 1, y: -15, w: 1020, h: 20});

    Crafty.e("solid, 2D, Canvas, Color, Collision, Solid")
        .color('#000000')
        .attr({x: -15, y: 1, w: 20, h: 1020});

    Crafty.e("2D, Canvas, Text")
        .textFont({size: '30px', family: 'Arial'})
        .text("Voici votre vaisseau")
        .attr({x: 400, y: 50})
        .textColor("#FFFFFF");

	Crafty.e("2D, Canvas, Text")
        .textFont({size: '30px', family: 'Arial'})
        .text("Utiliser les touches directionnelles du clavier pour le deplacer")
        .attr({x: 100, y: 100})
        .textColor("#FFFFFF");

    Crafty.e("2D, Canvas, Text")
        .textFont({size: '30px', family: 'Arial'})
        .text("Appuyer sur la touche espace pour tirer !!")
        .attr({x: 250, y: 150})
        .textColor("#FFFFFF");

    Crafty.e("2D, Canvas, Text, Mouse")
        .textFont({size: '30px', family: 'Arial'})
        .text("Retour au menu d'aide")
        .attr({x: 10, y: 720})
        .textColor("#FFFFFF")
        .bind('Click', function () {
            Crafty('*').each(function () {
                this.destroy();
            });
            Crafty.e("Delay").delay(function () {
        	   Crafty.enterScene("helpMenu");
            }, 500, 0);
        });

    tirerPlayer = true;

    missilePlayerArray = [];

    missilePlayer = "missilePlayer";

    missilePlayerName;

    countSpacePressed = 0;

    playerHelp = Crafty.e("2D, Canvas, SpriteAnimation, playerBlackShipStop, Fourway, Solid, Collision")
        .reel('playerBlackShipRunningStop', 1000, [[0, 0]])
        .animate('playerBlackShipRunningStop', -1)
        .attr({x: 500, y: 500})
        .collision([47, 0.5], [48, 0.5], [48, 1], [49, 1], [49, 2], [50, 2], [50, 5], [51, 5], [51, 8], [52, 8], [52, 11], [53, 11], [54, 11], [54, 12], [54, 13], [55, 13], [55, 14], [56, 14], [56, 15], [57, 15], [57, 16], [58, 16], [58, 18], [59, 18], [59, 20], [60, 20], [60, 22], [61, 22], [61, 25], [62, 25], [62, 27], [63, 27], [63, 30], [64, 30], [64, 35], [65, 35], [65, 38], [66, 38], [66, 39], [67, 39], [67, 40], [68, 40], [68, 41], [69, 41], [70, 42], [70, 43], [71, 43], [71, 44], [72, 44], [72, 45], [73, 45], [73, 46], [74, 46], [74, 47], [75, 47], [75, 48], [76, 48], [76, 49], [77, 49], [77, 40], [78, 40], [78, 39], [79, 39], [79, 40], [80, 40], [80, 53], [81, 53], [81, 54], [82, 54], [82, 55], [83, 55], [83, 56], [84, 56], [84, 57], [85, 57], [85, 58], [86, 58], [86, 59], [87, 59], [87, 60], [88, 60], [88, 61], [89, 61], [89, 55], [90, 55], [90, 53], [91, 53], [91, 52], [92, 52], [92, 53], [93, 53], [93, 55], [94, 55], [94, 81], [89, 81], [89, 82], [87, 82], [87, 83], [83, 83], [83, 84], [79, 84], [79, 85], [75, 85], [75, 86], [71, 86], [71, 87], [67, 87], [67, 88], [65, 88], [65, 90], [65, 93], [56, 93], [56, 90], [56, 88], [50, 88], [50, 95], [49, 95], [49, 98], [48, 98], [48, 99], [47, 99], [46, 99], [46, 98], [45, 98], [45, 95], [44, 95], [44, 88], [38, 88], [38, 90], [38, 93], [29, 93], [29, 90], [29, 88], [27, 88], [27, 87], [23, 87], [23, 86], [19, 86], [19, 85], [15, 85], [15, 84], [11, 84], [11, 83], [7, 83], [7, 82], [5, 82], [5, 81], [0.5, 81], [0.5, 55], [1, 55], [1, 53], [2, 53], [2, 52], [3, 52], [3, 53], [4, 53], [4, 55], [5, 55], [5, 61], [6, 61], [6, 60], [7, 60], [7, 59], [8, 59], [8, 58], [9, 58], [9, 57], [10, 57], [10, 56], [11, 56], [11, 55], [12, 55], [12, 54], [13, 54], [13, 53], [14, 53], [14, 40], [15, 40], [15, 39], [16, 39], [16, 40], [17, 40], [17, 49], [18, 49], [18, 48], [19, 48], [19, 47], [20, 47], [20, 46], [21, 46], [21, 45], [22, 45])
        .fourway(4)
        .bind('NewDirection', function (direction) {
            if ((direction.x === 4 && direction.y === 4) || (direction.x === 4 && direction.y === -4) || (direction.x === 4 && direction.y === 0)) {
                this.removeComponent("playerBlackShipStop");
                this.removeComponent("playerBlackShipRight");
                this.removeComponent("playerBlackShipLeft");
                this.removeComponent("playerBlackShip");
                this.addComponent("playerBlackShipRight")
                    .reel('playerBlackShipRightRunning', 1000, [[0, 0], [0, 1]])
                    .animate('playerBlackShipRightRunning', -1);
            }
            if ((direction.x === -4 && direction.y === 4) || (direction.x === -4 && direction.y === -4) || (direction.x === -4 && direction.y === 0)) {
                this.removeComponent("playerBlackShipStop");
                this.removeComponent("playerBlackShipRight");
                this.removeComponent("playerBlackShipLeft");
                this.removeComponent("playerBlackShip");
                this.addComponent("playerBlackShipLeft")
                    .reel('playerBlackShipLeftRunning', 1000, [[0, 0], [0, 1]])
                    .animate('playerBlackShipLeftRunning', -1);
            }
            if (direction.x === 0 && direction.y === -4) {
                this.removeComponent("playerBlackShipStop");
                this.removeComponent("playerBlackShipRight");
                this.removeComponent("playerBlackShipLeft");
                this.removeComponent("playerBlackShip");
                this.addComponent("playerBlackShip")
                    .reel('playerBlackShipRunning', 1000, 0, 0, 4)
                    .animate('playerBlackShipRunning', -1);
            }
            if ((direction.x === 0 && direction.y === 4) || (direction.x === 0 && direction.y === 0)) {
                this.removeComponent("playerBlackShipStop");
                this.removeComponent("playerBlackShipRight");
                this.removeComponent("playerBlackShipLeft");
                this.removeComponent("playerBlackShip");
                this.addComponent("playerBlackShipStop")
                    .reel('playerBlackShipRunningStop', 1000, [[0, 0]])
                    .animate('playerBlackShipRunningStop', -1);
            }
        })
        .bind("KeyDown", function (keyPressed) {
            if (keyPressed.key === Crafty.keys.SPACE && tirerPlayer === true) {
                tirerPlayer = false;
                countSpacePressed = countSpacePressed + 1;
                missilePlayerName = missilePlayer.concat(countSpacePressed);
                missilePlayerArray[missilePlayerName] = Crafty.e("2D, Canvas, SpriteAnimation, missileBlackShip, Solid, Collision, Delay")
                    .attr({x: (this.x + 35), y: (this.y - 50)})
                    .setName(missilePlayer.concat(countSpacePressed))
                    .reel('missileBlackShipGoing', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                    .animate('missileBlackShipGoing', -1)
                    .collision([11, 1], [14, 4], [15, 7], [15, 12], [18, 15], [20, 31], [20, 35], [15, 39], [11, 42], [10, 42], [6, 39], [1, 35], [1, 31], [3, 15], [6, 12], [6, 7], [7, 4], [10, 1])
                    .bind("EnterFrame", function () {
                        this.y = this.y - 5;
                    })
                    .bind("Move", function () {
                        if (this.y <= 0) {
                            this.destroy();
                        }
                    })
                    .delay(function () {
                        tirerPlayer = true;
                    }, 500, -1);
            }
            Crafty.e("Delay").delay(function () {
                tirerPlayer = true;
            }, 500, -1);
        })
        .onHit("Solid", function () {
            if ((this.hit("Solid")[0].obj["_currentReelId"] !== "missileBlackShipGoing" && this._movement) || (this.hit("Solid")[0].obj["_currentReelId"] !== "missileBoss1GreyBlueRunning" && this._movement)) {
                this.x = this.x - this._movement.x;
                this.y = this.y - this._movement.y;
            }
        });
});