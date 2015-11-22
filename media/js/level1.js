/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("level1", function () {
    "use strict";
    var bgX, bgY, player, countSpacePressed, missilePlayerName, missilePlayer, score, vie, scoreText, vieText, enemy1GreyBlue, countEnemy1GreyBlue, enemy1GreyBlueName, enemy1GreyBlueCloneRandom, enemy1GreyBlueCloneRandomX, enemy1GreyBlueCloneDelay, enemy1BlackRed, enemy1BlackRedCloneRandom, countEnemy1BlackRed, enemy1BlackRedCloneDelay, enemy1BlackRedCloneRandomX, enemy1BlackRedName, enemy1GreyBlueDestroy, enemy1BlackRedDestroy, countBoss1BlackRed, boss1BlackRedCloneDelay, boss1BlackRedName, boss1BlackRed, boss1BlackRedRandom, boss1BlackRedDestroy, boss1BlackRedCloneRandomX, boss1GreyBlueCloneSpawning, boss1GreyBlueCloneRandomX, boss1GreyBlueCloneDelay, countBoss1GreyBlue, boss1GreyBlueDestroy, boss1GreyBlue, boss1GreyBlueName, boss1GreyBlueRandom, countMissileBoss1GreyBlue, missileBoss1GreyBlue, missileBoss1GreyBlueName, tirerBoss1BlueGreyMissile, tirerPlayer, missilePlayerNameHited, missilePlayerArray, tirerBigBoss1BlueGreyMissile, missileBigBoss1GreyBlue, countMissileBigBoss1GreyBlue, missileBigBoss1GreyBlueArray, bigBoss1GreyBlueDestroy, missileBigBoss1GreyBlueName, vieBigBoss1GreyBlue, vieBigBoss1GreyBlueArray, i, bigBossLevel1, bigBossLevel1GoRight, bigBossLevel1Killed, bigBossLevel1CanBeTouch, k, j;

    bgX = 0;

    bgY = 0;
    
    enemy1GreyBlueCloneRandom = 5;

    enemy1BlackRedCloneRandom = 5;

    boss1BlackRedRandom = 5;

    boss1GreyBlueRandom = 5;

    countSpacePressed = 0;

    missilePlayerArray = [];

    missileBigBoss1GreyBlueArray = [];

    enemy1GreyBlueDestroy = 0;

    enemy1BlackRedDestroy = 0;

    boss1BlackRedDestroy = 0;

    boss1GreyBlueDestroy = 0;

    bigBoss1GreyBlueDestroy = 0;

    countEnemy1GreyBlue = 1;

    countEnemy1BlackRed = 1;

    countBoss1BlackRed = 1;

    countBoss1GreyBlue = 1;

    countMissileBoss1GreyBlue = 1;

    countMissileBigBoss1GreyBlue = 1;

    missilePlayer = "missilePlayer";

    enemy1BlackRed = "enemy1BlackRed";

    enemy1GreyBlue = "enemy1GreyBlue";

    boss1BlackRed = "boss1BlackRed";

    boss1GreyBlue = "boss1GreyBlue";

    missileBoss1GreyBlue = "missileBoss1GreyBlue";

    missileBigBoss1GreyBlue = "missileBigBoss1GreyBlue";

    bigBossLevel1GoRight = true;

    bigBossLevel1Killed = false;

    bigBossLevel1CanBeTouch = true;

    score = 0;

    vie = 30;

    Crafty.stage.elem.missilePlayer1Array = [];

    Crafty.stage.elem.score1 = score;
    
    Crafty.stage.elem.vie1 = vie;

    vieBigBoss1GreyBlueArray = [];

    vieBigBoss1GreyBlue = 5;

    tirerBoss1BlueGreyMissile = true;

    tirerPlayer = true;

    tirerBigBoss1BlueGreyMissile = true;

    Crafty.background('#000000');

    Crafty('obj').each(function () {
        this.destroy();
    });

    Crafty.canvas.init();

    Crafty.e("2D, Canvas, Keyboard")
        .bind("KeyDown", function (keyPressed) {
            if (keyPressed.key === Crafty.keys.P) {
                Crafty.pause();
            }
        });

    Crafty.e("2D, Canvas, Background, Delay").bind("EnterFrame", function () {
        Crafty.stage.elem.style.background = "url(http://localhost/HTML5_Gaming_Shoot_Them_Up/media/img/space.png) " + bgX + "%" + bgY + "%" + " repeat rgb(0, 0, 0)";
        bgY = bgY + 1;
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
        Crafty.stage.elem.score1 = score;
    }

    function updateVieText() {
        vieText = Crafty.e("2D, Canvas, Text")
            .textFont({size: '30px', family: 'Arial'})
            .text("Vie : " + vie)
            .attr({x: 10, y: 10})
            .textColor("#FFFFFF");
        Crafty.stage.elem.vie1 = vie;
    }

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

    Crafty.sprite(95, "media/img/enemy1.png", {
        enemy1GreyBlue: [0, 0]
    });

    Crafty.sprite(95, "media/img/enemy2.png", {
        enemy1BlackRed: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBlackShip.png", {
        missileBlackShip: [0, 0]
    });

    Crafty.sprite(95, "media/img/boss1.png", {
        boss1GreyBlue: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss1.png", {
        missileBoss1GreyBlue: [0, 0]
    });

    Crafty.sprite(95, "media/img/boss2.png", {
        boss1BlackRed: [0, 0]
    });

    Crafty.sprite(31.5, "media/img/enemyDead.png", {
        enemyDead: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss1.png", {
        bigBoss1: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss1Hited.png", {
        bigBoss1Hited: [0, 0]
    });

    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '50px', family: 'Arial'})
            .text("LEVEL 1")
            .attr({x: 400, y: 300})
            .textColor("#FF0000")
            .delay(function (){
                this.destroy();
            }, 1500, 0);

    player = Crafty.e("2D, Canvas, SpriteAnimation, playerBlackShipStop, Fourway, Solid, Collision")
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


    function updateVieBigBoss1 () {
        for (j = 0; j < vieBigBoss1GreyBlueArray.length; j = j + 1) {
            vieBigBoss1GreyBlueArray[j].destroy();
        }
        for (i = 0; i < vieBigBoss1GreyBlue; i = i + 1) {
            vieBigBoss1GreyBlueArray[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (450 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }
    }
    
    function bigBoss1Spawning () {
        for (i = 0; i < vieBigBoss1GreyBlue; i = i + 1) {
            vieBigBoss1GreyBlueArray[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (450 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }
        bigBossLevel1 = Crafty.e("2D, Canvas, SpriteAnimation, bigBoss1, Solid, Collision, Delay")
            .reel('bigBoss1Running', 1000, [[0, 0]])
            .animate('bigBoss1Running', -1)
            .collision([97, 0], [128, 25], [139, 6], [153, 0], [166, 6], [187, 47], [188, 75], [154, 58], [126, 85], [107, 117], [96, 125], [93, 125], [81, 117], [62, 85], [34, 58], [0, 75], [2, 47], [22, 6], [36, 0], [51, 6], [60, 25], [92, 0])
            .attr({x: 450, y: 100})
            .delay(function () {
                if (bigBossLevel1Killed === false) {
                    countMissileBigBoss1GreyBlue = countMissileBigBoss1GreyBlue + 1;
                    missileBigBoss1GreyBlueName = missileBoss1GreyBlue.concat(countMissileBigBoss1GreyBlue);
                    missileBigBoss1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss1GreyBlue, Solid, Collision, Delay")
                        .attr({x: (this.x + 30), y: (this.y + 55)});
                    missileBigBoss1GreyBlueName.reel('missileBoss1GreyBlueRunning', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss1GreyBlueRunning', -1)
                        .setName(missileBoss1GreyBlue.concat(countMissileBigBoss1GreyBlue))
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
                            missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayerArray[missilePlayerNameHited].destroy();
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
                if (bigBossLevel1Killed === false) {
                    countMissileBigBoss1GreyBlue = countMissileBigBoss1GreyBlue + 1;
                    missileBigBoss1GreyBlueName = missileBoss1GreyBlue.concat(countMissileBigBoss1GreyBlue);
                    missileBigBoss1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss1GreyBlue, Solid, Collision, Delay")
                        .attr({x: (this.x + 140), y: (this.y + 55)});
                    missileBigBoss1GreyBlueName.reel('missileBoss1GreyBlueRunning', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss1GreyBlueRunning', -1)
                        .setName(missileBoss1GreyBlue.concat(countMissileBigBoss1GreyBlue))
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 5;
                        })
                        .bind("Move", function () {
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        /*.checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayerArray[missilePlayerNameHited].destroy();
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
                            });*/
                }
            }, 500, -1)
            .bind("EnterFrame", function () {
                if (this.x <= 800 && bigBossLevel1GoRight === true && bigBossLevel1Killed === false) {
                    this.x = this.x + 5;
                }
                if (this.x === 800 && bigBossLevel1Killed === false) {
                    bigBossLevel1GoRight = false;
                }
                if (this.x >= 50 && bigBossLevel1GoRight === false && bigBossLevel1Killed === false) {
                    this.x = this.x - 5;
                }
                if (this.x === 50 && bigBossLevel1Killed === false) {
                    bigBossLevel1GoRight = true;
                }
                if (bigBossLevel1Killed === true) {
                    this.x = this.x;
                    this.y = this.y;
                }
            })
            .checkHits("Solid")
            .onHit("Solid", function () {
                missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing" && bigBossLevel1CanBeTouch === true) {
                    bigBossLevel1CanBeTouch = false;
                    if (vieBigBoss1GreyBlue !== 1) {
                        missilePlayerArray[missilePlayerNameHited].destroy();
                        vieBigBoss1GreyBlue = vieBigBoss1GreyBlue - 1;
                        updateVieBigBoss1();
                        this.removeComponent("bigBoss1")
                            .addComponent("bigBoss1Hited")
                            .reel('bigboss1HitedRunning', 1000, [[0, 0]])
                            .animate('bigboss1HitedRunning', -1);
                        Crafty.e("Delay").delay(function () {
                            bigBossLevel1CanBeTouch = true;
                        }, 1000, -1);
                        Crafty.e('Delay').delay(function () {
                            bigBossLevel1.removeComponent('bigBoss1Hited')
                                .addComponent('bigBoss1')
                                .reel('bigBoss1Running', 1000, [[0, 0]])
                                .animate('bigBoss1Running', -1);
                        }, 1000, 1);
                    } else {
                        bigBossLevel1Killed = true;
                        Crafty.e("2D, Canvas, Text")
                            .textFont({size: '40px', family: 'Arial'})
                            .text("Ne bouger pas votre vaisseau !!")
                            .attr({x: 300, y: 450})
                            .textColor("#FFFFFF");
                        this.removeComponent("Collision");
                        this.removeComponent("Solid");
                        for (k = 0; k < vieBigBoss1GreyBlueArray.length; k = k + 1) {
                            vieBigBoss1GreyBlueArray[k].destroy();
                        }
                        Crafty.e("Delay").delay(function () {
                            Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                .attr({x: (bigBossLevel1.x + (Math.floor((Math.random() * 10) + 1) * 10)), y: (bigBossLevel1.y + (Math.floor((Math.random() * 10) + 1) * 5))})
                                .animate('enemyDeadAnimation', 1)
                                .delay(function () {
                                    this.destroy();
                                }, 1000, 0);
                        }, 500, 3);
                        missilePlayerArray[missilePlayerNameHited].destroy();
                        Crafty.e("Delay").delay(function () {
                            bigBossLevel1.destroy();
                            Crafty.e("2D, Canvas, SpriteAnimation, enemy1GreyBlue, Collision, Solid")
                                .reel('enemy1GreyBlueRunning', 1000, 0, 0, 4)
                                .animate('enemy1GreyBlueRunning', -1)
                                .attr({x: 400, y: 20});
                            Crafty.e("2D, Canvas, Text")
                                .textFont({size: '20px', family: 'Arial'})
                                .text(" X " + enemy1GreyBlueDestroy)
                                .attr({x: 500, y: 40})
                                .textColor("#0080FF");

                            Crafty.e("2D, Canvas, SpriteAnimation, enemy1BlackRed, Collision, Solid")
                                .reel('enemy1BlackRedRunning', 1000, 0, 0, 4)
                                .animate('enemy1BlackRedRunning', -1)
                                .attr({x: 400, y: 100});
                            Crafty.e("2D, Canvas, Text")
                                .textFont({size: '20px', family: 'Arial'})
                                .text(" X " + enemy1BlackRedDestroy)
                                .attr({x: 500, y: 120})
                                .textColor("#FF0000");

                            Crafty.e("2D, Canvas, SpriteAnimation, boss1BlackRed, Solid, Collision, Delay")
                                .reel('boss1BlackRedRunning', 1000, 0, 0, 4)
                                .animate('boss1BlackRedRunning', -1)
                                .attr({x: 420, y: 190});
                            Crafty.e("2D, Canvas, Text")
                                .textFont({size: '20px', family: 'Arial'})
                                .text(" X " + boss1BlackRedDestroy)
                                .attr({x: 500, y: 230})
                                .textColor("#FF0000");

                            Crafty.e("2D, Canvas, SpriteAnimation, boss1GreyBlue, Solid, Collision, Delay")
                                .reel('boss1GreyBlueRunning', 1000, 0, 0, 4)
                                .animate('boss1GreyBlueRunning', -1)
                                .attr({x: 420, y: 330});
                            Crafty.e("2D, Canvas, Text")
                                .textFont({size: '20px', family: 'Arial'})
                                .text(" X " + boss1GreyBlueDestroy)
                                .attr({x: 500, y: 370})
                                .textColor("#0080FF");
                            
                            player.destroy();
                            Crafty.e("Delay").delay(function () {
                                Crafty.scene("level2");
                            }, 4500, 0);
                        }, 3000, 0);
                    }
                }
                Crafty.e("Delay").delay(function () {
                    bigBossLevel1CanBeTouch = true;
                }, 1000, -1);
            })
    }

    function boss1GreyBlueCloneSpawning() {
        boss1GreyBlueCloneRandomX = Math.floor(Math.random() * 9) + 1;
        boss1GreyBlueName = boss1GreyBlue.concat(countBoss1GreyBlue);
        boss1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, boss1GreyBlue, Solid, Collision, Delay")
            .reel('boss1GreyBlueRunning', 1000, 0, 0, 4)
            .animate('boss1GreyBlueRunning', -1)
            .collision([35, 0], [51, 0], [51, 21], [64, 23], [67, 38], [67, 52], [61, 72], [52, 98], [38, 100], [35, 96], [32, 100], [18, 98], [9, 72], [3, 52], [3, 38], [6, 23], [19, 21], [19, 0])
            .attr({x: (boss1GreyBlueCloneRandomX * 100), y: 6})
            .bind("Move", function () {
                if (this.y >= 770) {
                    this.destroy();
                }
            })
            .bind("EnterFrame", function () {
                this.y = this.y + 2;
                if (Math.abs(this.x - player.x) <= 15 && tirerBoss1BlueGreyMissile === true) {
                    tirerBoss1BlueGreyMissile = false;
                    countMissileBoss1GreyBlue = countMissileBoss1GreyBlue + 1;
                    missileBoss1GreyBlueName = missileBoss1GreyBlue.concat(countMissileBoss1GreyBlue);
                    missileBoss1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss1GreyBlue, Solid, Collision, Delay")
                        .attr({x: (this.x + 25), y: (this.y + 100)});
                    missileBoss1GreyBlueName.reel('missileBoss1GreyBlueRunning', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss1GreyBlueRunning', -1)
                        .setName(missileBoss1GreyBlue.concat(countMissileBoss1GreyBlue))
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 5;
                        })
                        .bind("Move", function () {
                            if (this.y <= 0) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayerArray[missilePlayerNameHited].destroy();
                            } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: (this.x + 20), y: (this.y + 25)})
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
                    Crafty.e("Delay").delay(function () {
                        tirerBoss1BlueGreyMissile = true;
                    }, 1000, -1);
                }
            })
            .checkHits("Solid")
            .onHit("Solid", function () {
                missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 20), y: (this.y + 25)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    boss1GreyBlueDestroy = boss1GreyBlueDestroy + 1;
                    missilePlayerArray[missilePlayerNameHited].destroy();
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
                    updateScoreText();
                } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 20), y: (this.y + 25)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    boss1GreyBlueDestroy = boss1GreyBlueDestroy + 1;
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
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
        countBoss1GreyBlue = countBoss1GreyBlue + 1;
        if (countBoss1GreyBlue === boss1GreyBlueRandom) {
            boss1GreyBlueCloneDelay.cancelDelay(boss1GreyBlueCloneSpawning);
            Crafty.e("2D, Canvas, Text, Delay")
                .textFont({size: '50px', family: 'Arial'})
                .text("WARNING !! BOSS INCOMING !!!")
                .attr({x: 100, y: 300})
                .textColor("#FF0000")
                .delay(function (){
                    this.destroy();
                }, 4500, 0);
            Crafty.e("Delay").delay(bigBoss1Spawning, 5000, 0);
        }
    }

    function boss1BlackRedCloneSpawning() {
        boss1BlackRedCloneRandomX = Math.floor(Math.random() * 9) + 1;
        boss1BlackRedName = boss1BlackRed.concat(countBoss1BlackRed);
        boss1BlackRedName = Crafty.e("2D, Canvas, SpriteAnimation, boss1BlackRed, Solid, Collision, Delay")
            .reel('boss1BlackRedRunning', 1000, 0, 0, 4)
            .animate('boss1BlackRedRunning', -1)
            .setName(boss1BlackRed.concat(countBoss1BlackRed))
            .collision([35, 0], [51, 0], [51, 21], [64, 23], [67, 38], [67, 52], [61, 72], [52, 98], [38, 100], [35, 96], [32, 100], [18, 98], [9, 72], [3, 52], [3, 38], [6, 23], [19, 21], [19, 0])
            .attr({x: (boss1BlackRedCloneRandomX * 100), y: 6})
            .bind("EnterFrame", function () {
                if (this.x > player.x && (this.x - player.x) > 5) {
                    this.x = this.x - 5;
                } else if (this.x < player.x && (player.x - this.x) > 5) {
                    this.x = this.x + 5;
                }
                this.y = this.y + 5;
            })
            .bind("Move", function () {
                if (this.y >= 770) {
                    this.destroy();
                }
            })
            .checkHits("Solid")
            .onHit("Solid", function () {
                missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 20), y: (this.y + 25)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    boss1BlackRedDestroy = boss1BlackRedDestroy + 1;
                    missilePlayerArray[missilePlayerNameHited].destroy();
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
                    updateScoreText();
                } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 20), y: (this.y + 25)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    boss1BlackRedDestroy = boss1BlackRedDestroy + 1;
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
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
        countBoss1BlackRed = countBoss1BlackRed + 1;
        if (countBoss1BlackRed === boss1BlackRedRandom) {
            boss1BlackRedCloneDelay.cancelDelay(boss1BlackRedCloneSpawning);
            boss1GreyBlueCloneDelay = Crafty.e("Delay").delay(boss1GreyBlueCloneSpawning, 1000, -1);
        }
    }

    function enemy1BlackRedCloneSpawning() {
        enemy1BlackRedCloneRandomX = Math.floor(Math.random() * 9) + 1;
        enemy1BlackRedName = enemy1BlackRed.concat(countEnemy1BlackRed);
        enemy1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, enemy1BlackRed, Collision, Solid")
            .reel('enemy1BlackRedRunning', 1000, 0, 0, 4)
            .setName(enemy1BlackRed.concat(countEnemy1BlackRed))
            .animate('enemy1BlackRedRunning', -1)
            .collision([48, 9], [52, 9], [52, 15], [56, 15], [56, 14], [57, 14], [57, 13], [59, 13], [59, 14], [60, 14], [60, 17], [64, 17], [64, 18], [68, 18], [68, 19], [72, 19], [72, 20], [76, 20], [76, 21], [80, 21], [80, 22], [84, 22], [84, 23], [88, 23], [88, 24], [92, 24], [92, 25], [95, 25], [95, 38], [93, 38], [93, 40], [92, 40], [92, 41], [91, 41], [91, 40], [90, 40], [90, 38], [59, 38], [59, 39], [58, 39], [58, 41], [57, 41], [57, 43], [56, 43], [56, 52], [55, 52], [55, 53], [54, 53], [54, 52], [53, 52], [53, 47], [51, 47], [51, 48], [50, 48], [50, 55], [49, 55], [49, 56], [47, 56], [47, 55], [46, 55], [46, 48], [45, 48], [45, 47], [43, 47], [43, 52], [42, 52], [42, 53], [41, 53], [41, 52], [40, 52], [40, 43], [39, 43], [39, 41], [38, 41], [38, 39], [37, 39], [37, 38], [6, 38], [6, 40], [5, 40], [5, 41], [4, 41], [4, 40], [3, 40], [3, 38], [1, 38], [1, 25], [4, 25], [4, 24], [8, 24], [8, 23], [12, 23], [12, 22], [16, 22], [16, 21], [20, 21], [20, 20], [24, 20], [24, 19], [28, 19], [28, 18], [32, 18], [32, 17], [36, 17], [36, 14], [37, 14], [37, 13], [39, 13], [39, 14], [40, 14], [40, 15], [44, 15], [44, 9])
            .bind("Move", function () {
                if (this.y >= 770) {
                    this.destroy();
                }
            })
            .attr({x: (enemy1BlackRedCloneRandomX * 100), y: 6})
            .bind("EnterFrame", function () {
                this.y = this.y + 2;
            })
            .checkHits('Solid')
            .onHit("Solid", function () {
                missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 40), y: (this.y + 5)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy1BlackRedDestroy = enemy1BlackRedDestroy + 1;
                    missilePlayerArray[missilePlayerNameHited].destroy();
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
                    updateScoreText();
                } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 40), y: (this.y + 5)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy1BlackRedDestroy = enemy1BlackRedDestroy + 1;
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
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
        countEnemy1BlackRed = countEnemy1BlackRed + 1;
        if (countEnemy1BlackRed === enemy1BlackRedCloneRandom) {
            enemy1BlackRedCloneDelay.cancelDelay(enemy1BlackRedCloneSpawning);
            boss1BlackRedCloneDelay = Crafty.e("Delay").delay(boss1BlackRedCloneSpawning, 1000, -1);
        }
    }

    function enemy1GreyBlueCloneSpawning() {
        enemy1GreyBlueCloneRandomX = Math.floor(Math.random() * 9) + 1;
        enemy1GreyBlueName = enemy1GreyBlue.concat(countEnemy1GreyBlue);
        enemy1GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, enemy1GreyBlue, Collision, Solid")
            .setName(enemy1GreyBlue.concat(countEnemy1GreyBlue))
            .reel('enemy1GreyBlueRunning', 1000, 0, 0, 4)
            .animate('enemy1GreyBlueRunning', -1)
            .collision([48, 9], [52, 9], [52, 15], [56, 15], [56, 14], [57, 14], [57, 13], [59, 13], [59, 14], [60, 14], [60, 17], [64, 17], [64, 18], [68, 18], [68, 19], [72, 19], [72, 20], [76, 20], [76, 21], [80, 21], [80, 22], [84, 22], [84, 23], [88, 23], [88, 24], [92, 24], [92, 25], [95, 25], [95, 38], [93, 38], [93, 40], [92, 40], [92, 41], [91, 41], [91, 40], [90, 40], [90, 38], [59, 38], [59, 39], [58, 39], [58, 41], [57, 41], [57, 43], [56, 43], [56, 52], [55, 52], [55, 53], [54, 53], [54, 52], [53, 52], [53, 47], [51, 47], [51, 48], [50, 48], [50, 55], [49, 55], [49, 56], [47, 56], [47, 55], [46, 55], [46, 48], [45, 48], [45, 47], [43, 47], [43, 52], [42, 52], [42, 53], [41, 53], [41, 52], [40, 52], [40, 43], [39, 43], [39, 41], [38, 41], [38, 39], [37, 39], [37, 38], [6, 38], [6, 40], [5, 40], [5, 41], [4, 41], [4, 40], [3, 40], [3, 38], [1, 38], [1, 25], [4, 25], [4, 24], [8, 24], [8, 23], [12, 23], [12, 22], [16, 22], [16, 21], [20, 21], [20, 20], [24, 20], [24, 19], [28, 19], [28, 18], [32, 18], [32, 17], [36, 17], [36, 14], [37, 14], [37, 13], [39, 13], [39, 14], [40, 14], [40, 15], [44, 15], [44, 9])
            .bind("Move", function () {
                if (this.y >= 770) {
                    this.destroy();
                }
            })
            .attr({x: (enemy1GreyBlueCloneRandomX * 100), y: 6})
            .bind("EnterFrame", function () {
                this.y = this.y + 2;
            })
            .checkHits('Solid')
            .onHit("Solid", function () {
                missilePlayerNameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 40), y: (this.y + 5)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy1GreyBlueDestroy = enemy1GreyBlueDestroy + 1;
                    missilePlayerArray[missilePlayerNameHited].destroy();
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
                    updateScoreText();
                } else if (this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRunningStop" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipLeftRunning" || this.hit("Solid")[0].obj["_currentReelId"] === "playerBlackShipRightRunning") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: (this.x + 40), y: (this.y + 5)})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy1GreyBlueDestroy = enemy1GreyBlueDestroy + 1;
                    scoreText.destroy();
                    score = score + 1;
                    if (score !== 0 && score % 20 === 0) {
                        vie = vie + 1;
                        vieText.destroy();
                        updateVieText();
                    }
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
        countEnemy1GreyBlue = countEnemy1GreyBlue + 1;
        if (countEnemy1GreyBlue === enemy1GreyBlueCloneRandom) {
            enemy1GreyBlueCloneDelay.cancelDelay(enemy1GreyBlueCloneSpawning);
            enemy1BlackRedCloneDelay = Crafty.e("Delay").delay(enemy1BlackRedCloneSpawning, 1000, -1);
        }
    }

    enemy1GreyBlueCloneDelay = Crafty.e("Delay").delay(enemy1GreyBlueCloneSpawning, 1000, -1);
});