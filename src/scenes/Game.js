import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.ball = null;
        this.LeftPaddle = null;
        this.RightPaddle = null;
    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("ball", "assets/ball.png");
        this.load.paddle("paddle", "assets/paddle.png")
    }

    create() {
        this.add.image(WIDTH/2, HEIGHT/2, 'background').setScale(0.8, 0.8);
        this.ball = this.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0,5, 0.5);
        this.LeftPaddle = this.add.image(50, 384, 'paddle');
        this.RightPaddle = this.add.image(950, 384, 'paddle');
    }

    update() {
    }

}