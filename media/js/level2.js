/*jslint browser: true, node : true*/
/*jslint devel : true*/
/*global Crafty, window, this*/
Crafty.defineScene("level2", function () {
    "use strict";
    var bgX, bgY, player2, score, vie, scoreText, vieText, tirerPlayer, countSpacePressed, missilePlayer2Array, missilePlayer, missilePlayer, missilePlayer2NameHited, missilePlayer2Name, enemy2GreyBlueCloneDelay, enemy2GreyBlueCloneRandomX, enemy2GreyBlueName, countEnemy2GreyBlue, enemy2GreyBlueDestroy, enemy2GreyBlue, enemy2GreyBlueCloneRandom, enemy2GreyBlueGoRight, enemy2BlackRedCloneDelay, enemy2BlackRedCloneRandomX, enemy2BlackRedCloneRandom, countEnemy2BlackRed, enemy2BlackRedDestroy, enemy2BlackRed, enemy2BlackRedName, vieBigBoss2, vieBigBoss2Array, i, j, bigBossLevel2Killed, countMissileBigBoss2, missileBoss2, missileBigBoss2Name, bigBossLevel2Killed, bigBossLevel2GoRight, bigBossLevel2CanBeTouch, bigBossLevel2, k;
    
    bgX = 0;

    bgY = 0;

    enemy2GreyBlueCloneRandom = 2;

    enemy2BlackRedCloneRandom = 1;

    score = Crafty.stage.elem.score1;

    vie = Crafty.stage.elem.vie1;

    Crafty.stage.elem.score2 = score;
    
    Crafty.stage.elem.vie2 = vie;

    tirerPlayer = true;

    enemy2GreyBlueDestroy = 0;

    countSpacePressed = 0;

    countEnemy2GreyBlue = 0;

    countEnemy2BlackRed = 0;

    countMissileBigBoss2 = 0;

    enemy2BlackRedDestroy = 0;

    missilePlayer2Array = Crafty.stage.elem.missilePlayer1Array;

    Crafty.stage.elem.missilePlayer2Array = [];

    vieBigBoss2Array = [];

    vieBigBoss2 = 10;

    bigBossLevel2CanBeTouch = true;

    missilePlayer = "missilePlayer";

    enemy2GreyBlue = "enemy2GreyBlue";

    enemy2BlackRed = "enemy2BlackRed";

    missileBoss2 = "missileBoss2";

    enemy2GreyBlueGoRight = true;

    bigBossLevel2Killed = false;

    bigBossLevel2GoRight = true;

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

    Crafty.sprite(41, 57, "media/img/enemy2GreyBlue.png", {
        enemy2GreyBlue: [0, 0]
    });

    Crafty.sprite(41, 57, "media/img/enemy2BlackRed.png", {
        enemy2BlackRed: [0, 0]
    });

    Crafty.sprite(12, 29, "media/img/weaponEnemy2BlackRed.png", {
        missileEnemy2BlackRed: [0, 0]
    });

    Crafty.sprite(31.5, "media/img/enemyDead.png", {
        enemyDead: [0, 0]
    });

    Crafty.sprite(12, 29, "media/img/weaponEnemy2.png", {
        missileEnemy2: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss2.png", {
        bigBoss2: [0, 0]
    });

    Crafty.sprite(190, "media/img/bigBoss1Hited.png", {
        bigBoss2Hited: [0, 0]
    });

    Crafty.sprite(50, "media/img/weaponBoss2.png", {
        missileBoss2: [0, 0]
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
        Crafty.stage.elem.score2 = score;
    }

    function updateVieText() {
        vieText = Crafty.e("2D, Canvas, Text")
            .textFont({size: '30px', family: 'Arial'})
            .text("Vie : " + vie)
            .attr({x: 10, y: 10})
            .textColor("#FFFFFF");
        Crafty.stage.elem.vie2 = vie;
    }

    Crafty.e("2D, Canvas, Background, Delay").bind("EnterFrame", function () {
        Crafty.stage.elem.style.background = "url(http://localhost/HTML5_Gaming_Shoot_Them_Up/media/img/space.png) " + bgX + "%" + bgY + "%" + " repeat rgb(0, 0, 0)";
        bgY = bgY + 1;
    });

    Crafty.e("2D, Canvas, Text, Delay")
        .textFont({size: '50px', family: 'Arial'})
            .text("LEVEL 2")
            .attr({x: 400, y: 400})
            .textColor("#FF0000")
            .delay(function (){
                this.destroy();
            }, 1500, 0);
    
    player2 = Crafty.e("2D, Canvas, SpriteAnimation, playerBlackShipStop, Fourway, Solid, Collision")
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
                missilePlayer2Name = missilePlayer.concat(countSpacePressed);
                missilePlayer2Array[missilePlayer2Name] = Crafty.e("2D, Canvas, SpriteAnimation, missileBlackShip, Solid, Collision, Delay")
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

    enemy2GreyBlueCloneRandomX = Math.floor(Math.random() * 9) + 1;
        enemy2GreyBlueName = enemy2GreyBlue.concat(countEnemy2GreyBlue);
        enemy2GreyBlueName = Crafty.e("2D, Canvas, SpriteAnimation, enemy2GreyBlue, Collision, Solid, Delay")
            .setName(enemy2GreyBlue.concat(countEnemy2GreyBlue))
            .reel('enemy2GreyBlueRunning', 1000, 0, 0, 4)
            .animate('enemy2GreyBlueRunning', -1)
            .collision([20, 7], [26, 7], [40, 0], [40, 18], [26, 55], [20, 46], [13, 55], [0, 18], [0, 0], [13, 0])
            .bind("Move", function () {
                if (this.y >= 770) {
                    this.destroy();
                }
            })
            .delay(function () {
                this.x = (Math.floor(Math.random() * 9) + 1) * 100;
            }, 500, -1)
            .delay(function () {
                Crafty.e("2D, Canvas, SpriteAnimation, missileEnemy2, Solid, Collision")
                    .reel('missileEnemy2Running', 1000, 0, 0, 4)
                    .animate('missileEnemy2Running', -1)
                    .attr({x: (this.x + 15), y: (this.y + 60)})
                    .bind('EnterFrame', function () {
                        this.y = this.y + 3;
                    })
                    .checkHits("Solid")
                    .onHit("Solid", function () {
                        missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                        if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                            this.destroy();
                            Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                .attr({x: this.x, y: this.y})
                                .animate('enemyDeadAnimation', 1)
                                .delay(function () {
                                    this.destroy();
                                }, 1000, 0);
                            missilePlayer2Array[missilePlayer2NameHited].destroy();
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
            }, 500, -1)
            .attr({x: (enemy2GreyBlueCloneRandomX * 100), y: 6})
            .bind("EnterFrame", function () {
                this.y = this.y + 3;
            })
            .checkHits('Solid')
            .onHit("Solid", function () {
                missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                    this.destroy();
                    Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                        .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                        .attr({x: this.x, y: this.y})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy2GreyBlueDestroy = enemy2GreyBlueDestroy + 1;
                    missilePlayer2Array[missilePlayer2NameHited].destroy();
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
                        .attr({x: this.x, y: this.y})
                        .animate('enemyDeadAnimation', 1)
                        .delay(function () {
                            this.destroy();
                        }, 1000, 0);
                    enemy2GreyBlueDestroy = enemy2GreyBlueDestroy + 1;
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
        Crafty.e("2D, Canvas, Text, Delay")
                .textFont({size: '50px', family: 'Arial'})
                .text("WARNING !! BOSS INCOMING !!!")
                .attr({x: 100, y: 300})
                .textColor("#FF0000")
                .delay(function (){
                    this.destroy();
                    bigBoss2Spawning();
                }, 3500, 0);
        countEnemy2GreyBlue = countEnemy2GreyBlue + 1;
        /*if (countEnemy2GreyBlue === enemy2GreyBlueCloneRandom) {
            //enemy2GreyBlueCloneDelay.cancelDelay(enemy2GreyBlueCloneSpawning);
            Crafty.e("2D, Canvas, Text, Delay")
                .textFont({size: '50px', family: 'Arial'})
                .text("WARNING !! BOSS INCOMING !!!")
                .attr({x: 100, y: 300})
                .textColor("#FF0000")
                .delay(function (){
                    this.destroy();
                }, 2500, 0);
            Crafty.e("Delay").delay(function () {bigBoss2Spawning}, );
        }*/

    function updateVieBigBoss2 () {
        for (j = 0; j < vieBigBoss2Array.length; j = j + 1) {
            vieBigBoss2Array[j].destroy();
        }
        for (i = 0; i < vieBigBoss2; i = i + 1) {
            vieBigBoss2Array[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (350 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }
    }
    
    function bigBoss2Spawning () {
        for (i = 0; i < vieBigBoss2; i = i + 1) {
            vieBigBoss2Array[i] = Crafty.e("solid, 2D, Canvas, Color, Collision, Solid, Text")
                .textFont({size: '30px', family: 'Arial'})
                .attr({x: (350 - 40 + ((i + 1) * 40)), y: (100 - 40), w: 30, h: 30})
                .textColor("#FFFFFF")
                .color('#FF0000');
        }
        bigBossLevel2 = Crafty.e("2D, Canvas, SpriteAnimation, bigBoss2, Solid, Collision, Delay")
            .reel('bigBoss2Running', 1000, [[0, 0]])
            .animate('bigBoss2Running', -1)
            .collision([97, 0], [128, 25], [139, 6], [153, 0], [166, 6], [187, 47], [188, 75], [154, 58], [126, 85], [107, 117], [96, 125], [93, 125], [81, 117], [62, 85], [34, 58], [0, 75], [2, 47], [22, 6], [36, 0], [51, 6], [60, 25], [92, 0])
            .attr({x: 450, y: 100})
            .delay(function () {
                if (bigBossLevel2Killed === false) {
                    countMissileBigBoss2 = countMissileBigBoss2 + 1;
                    missileBigBoss2Name = missileBoss2.concat(countMissileBigBoss2);
                    missileBigBoss2Name = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss2, Solid, Collision, Delay")
                        .attr({x: (this.x + 30), y: (this.y + 55)});
                    missileBigBoss2Name.reel('missileBoss2Running', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss2Running', -1)
                        .setName(missileBoss2.concat(countMissileBigBoss2))
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
                            missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer2Array[missilePlayer2NameHited].destroy();
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
                if (bigBossLevel2Killed === false) {
                    countMissileBigBoss2 = countMissileBigBoss2 + 1;
                    missileBigBoss2Name = missileBoss2.concat(countMissileBigBoss2);
                    missileBigBoss2Name = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss2, Solid, Collision, Delay")
                        .attr({x: (this.x + 30), y: (this.y + 55)});
                    missileBigBoss2Name.reel('missileBoss2Running', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss2Running', -1)
                        .setName(missileBoss2.concat(countMissileBigBoss2))
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 3;
                            this.x = this.x - 3;
                        })
                        .delay(function () {
                            this.bind("Move", function () {
                                this.rotation = -50;
                            })
                            this.bind("EnterFrame", function () {
                                this.x = this.x + 6;
                            })
                        }, 2000, 0)
                        .bind("Move", function () {
                            this.rotation = 50;
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer2Array[missilePlayer2NameHited].destroy();
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
                if (bigBossLevel2Killed === false) {
                    countMissileBigBoss2 = countMissileBigBoss2 + 1;
                    missileBigBoss2Name = missileBoss2.concat(countMissileBigBoss2);
                    missileBigBoss2Name = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss2, Solid, Collision, Delay")
                        .attr({x: (this.x + 140), y: (this.y + 55)});
                    missileBigBoss2Name.reel('missileBoss2Running', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss2Running', -1)
                        .setName(missileBoss2.concat(countMissileBigBoss2))
                        .collision([10, 7], [14, 7], [14, 15], [19, 15], [19, 19], [14, 24], [14, 33], [16, 33], [16, 35], [14, 38], [14, 43], [13, 46], [10, 49], [9, 49], [6, 46], [5, 43], [5, 38], [2, 35], [2, 33], [5, 33], [5, 24], [0, 19], [0, 15], [5, 15], [5, 7])
                        .bind("EnterFrame", function () {
                            this.y = this.y + 3;
                            this.x = this.x + 3;
                        })
                        .delay(function () {
                            this.bind("Move", function () {
                                this.rotation = 50;
                            })
                            this.bind("EnterFrame", function () {
                                this.x = this.x - 6;
                            })
                        }, 2000, 0)
                        .bind("Move", function () {
                            this.rotation = -50;
                            if (this.y >= 700) {
                                this.destroy();
                            }
                        })
                        .checkHits("Solid")
                        .onHit("Solid", function () {
                            missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer2Array[missilePlayer2NameHited].destroy();
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
                if (bigBossLevel2Killed === false) {
                    countMissileBigBoss2 = countMissileBigBoss2 + 1;
                    missileBigBoss2Name = missileBoss2.concat(countMissileBigBoss2);
                    missileBigBoss2Name = Crafty.e("2D, Canvas, SpriteAnimation, missileBoss2, Solid, Collision, Delay")
                        .attr({x: (this.x + 140), y: (this.y + 55)});
                    missileBigBoss2Name.reel('missileBoss2Running', 1000, [[0, 0], [0, 1], [0, 2], [0, 3]])
                        .animate('missileBoss2Running', -1)
                        .setName(missileBoss2.concat(countMissileBigBoss2))
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
                            missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                            if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing") {
                                this.destroy();
                                Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                    .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                    .attr({x: this.x, y: this.y})
                                    .animate('enemyDeadAnimation', 1)
                                    .delay(function () {
                                        this.destroy();
                                    }, 1000, 0);
                                missilePlayer2Array[missilePlayer2NameHited].destroy();
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
            .bind("EnterFrame", function () {
                if (this.x <= 800 && bigBossLevel2GoRight === true && bigBossLevel2Killed === false) {
                    this.x = this.x + 5;
                }
                if (this.x === 800 && bigBossLevel2Killed === false) {
                    bigBossLevel2GoRight = false;
                }
                if (this.x >= 50 && bigBossLevel2GoRight === false && bigBossLevel2Killed === false) {
                    this.x = this.x - 5;
                }
                if (this.x === 50 && bigBossLevel2Killed === false) {
                    bigBossLevel2GoRight = true;
                }
                if (bigBossLevel2Killed === true) {
                    this.x = this.x;
                    this.y = this.y;
                }
            })
            .checkHits("Solid")
            .onHit("Solid", function () {
                missilePlayer2NameHited = this.hit("Solid")[0].obj["_entityName"];
                if (this.hit("Solid")[0].obj["_currentReelId"] === "missileBlackShipGoing" && bigBossLevel2CanBeTouch === true) {
                    bigBossLevel2CanBeTouch = false;
                    if (vieBigBoss2 !== 1) {
                        missilePlayer2Array[missilePlayer2NameHited].destroy();
                        vieBigBoss2 = vieBigBoss2 - 1;
                        updateVieBigBoss2();
                        this.removeComponent("bigBoss2")
                            .addComponent("bigBoss2Hited")
                            .reel('bigboss2HitedRunning', 1000, [[0, 0]])
                            .animate('bigboss2HitedRunning', -1);
                        Crafty.e("Delay").delay(function () {
                            bigBossLevel2CanBeTouch = true;
                        }, 1000, -1);
                        Crafty.e('Delay').delay(function () {
                            bigBossLevel2.removeComponent('bigBoss2Hited')
                                .addComponent('bigBoss2')
                                .reel('bigBoss2Running', 1000, [[0, 0]])
                                .animate('bigBoss2Running', -1);
                        }, 1000, 1);
                    } else {
                        bigBossLevel2Killed = true;
                        Crafty.e("2D, Canvas, Text")
                            .textFont({size: '40px', family: 'Arial'})
                            .text("Ne bouger pas votre vaisseau !!")
                            .attr({x: 400, y: 450})
                            .textColor("#FFFFFF");
                        this.removeComponent("Collision");
                        this.removeComponent("Solid");
                        for (k = 0; k < vieBigBoss2Array.length; k = k + 1) {
                            vieBigBoss2Array[k].destroy();
                        }
                        Crafty.e("Delay").delay(function () {
                            Crafty.e("2D, Canvas, SpriteAnimation, enemyDead, Delay")
                                .reel('enemyDeadAnimation', 1000, [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]])
                                .attr({x: (bigBossLevel2.x + (Math.floor((Math.random() * 10) + 1) * 10)), y: (bigBossLevel2.y + (Math.floor((Math.random() * 10) + 1) * 5))})
                                .animate('enemyDeadAnimation', 1)
                                .delay(function () {
                                    this.destroy();
                                }, 1000, 0);
                        }, 500, 3);
                        missilePlayer2Array[missilePlayer2NameHited].destroy();
                        Crafty.e("Delay").delay(function () {
                            bigBossLevel2.destroy();
                            Crafty.e("2D, Canvas, SpriteAnimation, enemy2GreyBlue, Collision, Solid")
                                .reel('enemy2GreyBlueRunning', 1000, 0, 0, 4)
                                .animate('enemy2GreyBlueRunning', -1)
                                .attr({x: 400, y: 20});
                            Crafty.e("2D, Canvas, Text")
                                .textFont({size: '20px', family: 'Arial'})
                                .text(" X " + enemy2GreyBlueDestroy)
                                .attr({x: 500, y: 40})
                                .textColor("#0080FF");
                            
                            player2.destroy();
                            Crafty.e("Delay").delay(function () {
                                Crafty.scene("level3");
                            }, 4500, 0);
                        }, 3000, 0);
                    }
                }
                Crafty.e("Delay").delay(function () {
                    bigBossLevel2CanBeTouch = true;
                }, 1000, -1);
            })
    }

});