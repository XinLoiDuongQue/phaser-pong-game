import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.ball = null;
        this.leftPaddle = null;
        this.rightPaddle = null;
        this.ballInMotion = false;
        this.wasd = null;
        this.cursor = null;
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('paddle', 'assets/paddle.png');
    }

    create() {
    // load images and sprites
        this.add.image(WIDTH/2, HEIGHT/2, 'background').setScale(0.8, 0.8);
        this.leftPaddle = this.add.image(50, 384, "paddle");
        this.rightPaddle = this.add.image(974, 384, "paddle");
    // load ball and ball physics
        this.ball = this.physics.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05).refreshBody();
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1,1);
        this.input.keyboard.on("keydown-SPACE", this.startBall, this);
    // set up paddle physics
        this.cursor = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
        });
    }

    update() {
        //make the paddles move
        if (this.cursor.down.isDown && this.rightPaddle.y < HEIGHT - this.rightPaddle.height /2) {this.rightPaddle.y += 5;}
        else if (this.cursor.up.isDown && this.rightPaddle.y > this.rightPaddle.height /2) {this.rightPaddle.y -= 5;}

        if (this.wasd.up.isDown && this.leftPaddle.y > this.leftPaddle.height /2) {this.leftPaddle.y -= 5;}
        else if (this.wasd.down.isDown && this.leftPaddle.y < HEIGHT - this.leftPaddle.height /2) {this.leftPaddle.y += 5;}
    }

    startBall(){
    if (!this.ballInMotion) {
        this.ball.setVelocity(200, 200);
        this.ballInMotion = true;
    }
    }
}