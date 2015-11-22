/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("level3", function () {
    "use strict";
    var bgX, bgY, player3, score, vie, scoreText, vieText, tirerPlayer, countSpacePressed, missilePlayer3Array, missilePlayer, missilePlayer, missilePlayer3NameHited, missilePlayerName, bigBossLevel3Killed, bigBossLevel3GoRight, i, j, vieBigBoss3, vieBigBoss3Array, bigBossLevel3CanBeTouch, k, bigBossLevel3;
    
    bgX = 0;

    bgY = 0;

    score = Crafty.stage.elem.score2;

    vie = Crafty.stage.elem.vie2;

    tirerPlayer = true;

    bigBossLevel3Killed = false;

    bigBossLevel3GoRight = true;

    countSpacePressed = 0;

    missilePlayer3Array = Crafty.stage.elem.missilePlayer2Array;

    missilePlayer = "missilePlayer";

    vieBigBoss3 = 15;

    vieBigBoss3Array = [];

    bigBossLevel3CanBeTouch = true;

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

    Crafty.sprite(31.5, "media/img/enemyDead.png", {
        enemyDead: [0, 0]
    });

    Crafty.sprite(189, "media/img/boss3.png", {
        boss3: [0, 0]
    });

    Crafty.sprite(189, "media/img/boss3Hited.png", {
        bigBoss3Hited: [0, 0]
    });

    Crafty.sprite(12, 29, "media/img/weaponEnemy2.png", {
        missileBoss3GreyBluePetit: [0, 0]
    });

    Crafty.sprite(12, 29, "media/img/weaponEnemy2BlackRed.png", {
        missileBoss3BlackRedPetit: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss2.png", {
        missileBoss3BlackRedGros: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss1.png", {
        missileBoss3GreyBlueGros: [0, 0]
    });

    Crafty.sprite(38, 84, "media/img/blast.png", {
        missileBoss3PurplePetit: [0, 0]
    });

    Crafty.sprite(50, 545, "media/img/blast2.png", {
        missileBoss3PurpleGros: [0, 0]
    });

    Crafty.e("2D, Canvas, Keyboard")
        .bind("KeyDown", function (keyPressed) {
            if (keyPressed.key === Crafty.keys.P) {
                Crafty.pause();
            }
        });

    scoreText = Crafty.e("2D, Canvas, Text")
        .textFont({size: '30px', family: 'Arial'})
        .text("Score : " + score)
        .attr({x: 800, y: 10})
        .textColor("#FFFFFF");

    vieText = Crafty.e("2D, Canvas, Text")
        .textFont({size: '30px', family: 'Arial'})
        .text("Vie : " + vie)
        .attr({x: 10, y: 10})
        .textColor("#FFFFFF");

    function updateScoreText() {
        scoreText = Crafty.e("2D, Canvas, Text")
            .textFont({size: '30px', family: 'Arial'})
            .text("Score : " + score)
            .attr({x: 800, y: 10})
            .textColor("#FFFFFF");
    }

    function updateVieText() {
        vieText = Crafty.e("2D, Canvas, Text")
            .textFont({size: '30px', family: 'Arial'})
            .text("Vie : " + vie)
            .attr({x: 10, y: 10})
            .textColor("#FFFFFF");
    }

    Crafty.e("2D, Canvas, Background, Delay").bind("EnterFrame", function () {
        Crafty.stage.elem.style.background = "url(http://localhost/HTML5_Gaming_Shoot_Them_Up/media/img/space.png) " + bgX + "%" + bgY + "%" + " repeat rgb(0, 0, 0)";
        bgY = bgY + 1;
    });

    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '50px', family: 'Arial'})
            .text("LAST LEVEL, LAST BOSS !!")
            .attr({x: 200, y: 300})
            .textColor("#FF0000")
            .delay(function (){
                this.destroy();
            }, 1500, 0);
    
    player3 = Crafty.e("2D, Canvas, SpriteAnimation, playerBlackShipStop, Fourway, Solid, Collision")
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
                missilePlayer3Array[missilePlayerName] = Crafty.e("2D, Canvas, SpriteAnimation, missileBlackShip, Solid, Collision, Delay")
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

    function updateVieBigBoss3 () {
        for (j = 0; j < vieBigBoss3Array.length; j = j + 1) {
            vieBigBoss3Array[j].destroy();
        }
        for (i = 0; i < vieBigBoss3; i = i + 1) {
            vieBigBoss3Array[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (200 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }
    }

    function bigBossLevel3Spawning () {
        for (i = 0; i < vieBigBoss3; i = i + 1) {
            vieBigBoss3Array[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (200 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }

        bigBossLevel3 = Crafty.e("2D, Canvas, SpriteAnimation, boss3, Solid, Collision, Delay")
            .reel("boss3Runnig", 1000, [[0, 0]])
            .animate('boss3Runnig', -1)
            .collision([98, 22], [126, 4], [189, 0], [189, 20], [164, 44], [164, 50], [184, 60], [184, 96], [173, 96], [173, 73], [163, 62], [160, 74], [144, 74], [140, 61], [115, 61], [134, 73], [135, 90], [123, 88], [104, 124], [84, 124], [65, 88], [54, 90], [54, 73], [73, 61], [49, 61], [44, 74], [29, 74], [25, 62], [15, 72], [14, 96], [4, 96], [4, 59], [24, 50], [24, 44], [0, 20], [0, 0], [62, 4], [88, 22])
            .attr({ x: 400, y: 100})
            /*.delay(function () {
                if (bigBossLevel3Killed === false) {
                    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss3GreyBluePetit, Solid, Collision")
                        .reel('missileBoss3GreyBluePetit', 1000, 0, 0, 4)
                        .animate('missileBoss3GreyBluePetit', -1)
                        .attr({x: (this.x + 5), y: (this.y + 90)})
                        .bind('EnterFrame', function () {
                            this.y = this.y + 3;
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer3Array[missilePlayer3NameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                vieText.destroy();
                                vie = vie - 1;
                                updateVieText();
                                if (vie <= 0) {
                                    Crafty('obj').each(function () {
                                        this.destroy();
                                    });
                                    updateScoreText();
                                    Crafty.e("Delay").delay(function () {
                                        Crafty.scene("gameOver");
                                    }, 500, 0);
                                }
                            }
                        });
                }
            }, 500, -1)
            .delay(function () {
                if (bigBossLevel3Killed === false) {
                    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss3BlackRedPetit, Solid, Collision")
                        .reel('missileBoss3BlackRedPetit', 1000, 0, 0, 4)
                        .animate('missileBoss3BlackRedPetit', -1)
                        .attr({x: (this.x + 175), y: (this.y + 90)})
                        .bind('EnterFrame', function () {
                            this.y = this.y + 3;
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer3Array[missilePlayer3NameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                vieText.destroy();
                                vie = vie - 1;
                                updateVieText();
                                if (vie <= 0) {
                                    Crafty('obj').each(function () {
                                        this.destroy();
                                    });
                                    updateScoreText();
                                    Crafty.e("Delay").delay(function () {
                                        Crafty.scene("gameOver");
                                    }, 500, 0);
                                }
                            }
                    });
                }
            }, 500, -1)
            .delay(function () {
                if (bigBossLevel3Killed === false) {
                    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss3GreyBlueGros, Solid, Collision, Delay")
                        .attr({x: (this.x + 145), y: (this.y + 70)})
                        .reel('missileBoss3GreyBlueGrosRunning', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss3GreyBlueGrosRunning', -1)
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 5;
                        })
                        .bind("Move", function () {
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer3Array[missilePlayer3NameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                    updateScoreText();
                                    vieText.destroy();
                                    vie = vie - 1;
                                    updateVieText();
                                    if (vie <= 0) {
                                        Crafty('obj').each(function () {
                                            this.destroy();
                                        });
                                        updateScoreText();
                                        Crafty.e("Delay").delay(function () {
                                            Crafty.scene("gameOver");
                                        }, 500, 0);
                                    }
                            }
                        });
                    }
            }, 500, -1)
            .delay(function () {
                if (bigBossLevel3Killed === false) {
                    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss3BlackRedGros, Solid, Collision, Delay")
                        .attr({x: (this.x + 25), y: (this.y + 70)})
                        .reel('missileBoss3BlackRedGrosRunning', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss3BlackRedGrosRunning', -1)
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 5;
                        })
                        .bind("Move", function () {
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer3Array[missilePlayer3NameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                    updateScoreText();
                                    vieText.destroy();
                                    vie = vie - 1;
                                    updateVieText();
                                    if (vie <= 0) {
                                        Crafty('obj').each(function () {
                                            this.destroy();
                                        });
                                        updateScoreText();
                                        Crafty.e("Delay").delay(function () {
                                            Crafty.scene("gameOver");
                                        }, 500, 0);
                                    }
                            }
                        });
                    }
            }, 500, -1)*/
            .delay(function () {
                if (bigBossLevel3Killed === false) {
                    Crafty.e("2D, Canvas, SpriteAnimation, missileBoss3PurplePetit, Fourway, Solid, Collision")
                        .reel("missileBoss3PurplePetitRunning", 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate("missileBoss3PurplePetitRunning", -1)
                        .attr({x: (this.x + 75), y: (this.y + 95)})
                        .bind("EnterFrame", function () {
                            this.y = this.y + 5;
                        })
                        .bind("Move", function () {
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                missilePlayer3Array[missilePlayer3NameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                    updateScoreText();
                                    vieText.destroy();
                                    vie = vie - 1;
                                    updateVieText();
                                    if (vie <= 0) {
                                        Crafty('obj').each(function () {
                                            this.destroy();
                                        });
                                        updateScoreText();
                                        Crafty.e("Delay").delay(function () {
                                            Crafty.scene("gameOver");
                                        }, 500, 0);
                                    }
                            }
                        });
                    }
            }, 500, -1)
            .bind("EnterFrame", function () {
                if (this.x <= 800 && bigBossLevel3GoRight === true && bigBossLevel3Killed === false) {
                        this.x = this.x + 5;
                    }
                    if (this.x === 800 && bigBossLevel3Killed === false) {
                        bigBossLevel3GoRight = false;
                    }
                    if (this.x >= 50 && bigBossLevel3GoRight === false && bigBossLevel3Killed === false) {
                        this.x = this.x - 5;
                    }
                    if (this.x === 50 && bigBossLevel3Killed === false) {
                        bigBossLevel3GoRight = true;
                    }
                    if (bigBossLevel3Killed === true) {
                        this.x = this.x;
                        this.y = this.y;
                    }
            })
            .checkHits("Solid")
                .onHit("Solid", function () {
                    missilePlayer3NameHited = this.hit("Solid")[0].obj["_entityName"];
                    if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing" && bigBossLevel3CanBeTouch === true) {
                        bigBossLevel3CanBeTouch = false;
                        if (vieBigBoss3 !== 1) {
                            missilePlayer3Array[missilePlayer3NameHited].destroy();
                            vieBigBoss3 = vieBigBoss3 - 1;
                            updateVieBigBoss3();
                            this.removeComponent("boss3")
                                .addComponent("bigBoss3Hited")
                                .reel('bigboss3HitedRunning', 1000, [[0, 0]])
                                .animate('bigboss3HitedRunning', -1);
                            Crafty.e("Delay").delay(function () {
                                bigBossLevel3CanBeTouch = true;
                            }, 1000, -1);
                            Crafty.e('Delay').delay(function () {
                                bigBossLevel3.removeComponent('bigBoss3Hited')
                                    .addComponent('boss3')
                                    .reel('bigBoss3Running', 1000, [[0, 0]])
                                    .animate('bigBoss3Running', -1);
                            }, 1000, 1);
                        } else {
                            bigBossLevel3Killed = true;
                            this.removeComponent("Collision");
                            this.removeComponent("Solid");
                            for (k = 0; k < vieBigBoss3Array.length; k = k + 1) {
                                vieBigBoss3Array[k].destroy();
                            }
                            Crafty.e("Delay").delay(function () {
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: (bigBossLevel3.x + (Math.floor((Math.random() * 10) + 1) * 10)), y: (bigBossLevel3.y + (Math.floor((Math.random() * 10) + 1) * 5))})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                            }, 500, 3);
                            missilePlayer3Array[missilePlayer3NameHited].destroy();
                            Crafty.e("Delay").delay(function () {
                                bigBossLevel3.destroy();
                                scoreText.destroy();
                                vieText.destroy();
                                player3.destroy();
                                Crafty.e("Delay").delay(function () {
                                    Crafty.scene("levelEnd");
                                }, 4500, 0);
                            }, 3000, 0);
                        }
                    }
                    Crafty.e("Delay").delay(function () {
                        bigBossLevel3CanBeTouch = true;
                    }, 1000, -1);
                }); 
    }
    bigBossLevel3Spawning();
});