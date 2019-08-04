import './js/libs/weapp-adapter'
// import './js/libs/weapp-adapter/index'
import './js/libs/symbol'

window.Phaser = window.Phaser || require('js/libs/phaser.js')


const {
    pixelRatio,
    windowWidth,
    windowHeight
} = wx.getSystemInfoSync()
window.CanvasRenderingContext2D = true;

// var ctx2d = canvas.getContext('2d')
// var newCvs = canvas.cloneNode(false);
// canvas.parentNode.replaceChild(newCvs, canvas);
// var ctx3d = newCvs.getContext('webgl', {
//     alpha: true,
//     depth: true,
//     stencil: true,
//     antialias: true,
//     premultipliedAlpha: true,
//     preserveDrawingBuffer: false,
//     powerPreference: 'default'
// })
var mainCanvas = canvas;

const conf = {
    width: windowWidth,
    height: windowHeight,
    canvas: mainCanvas,
    // renderer: Phaser.WEBGL, //CANVAS
    type: Phaser.AUTO,
    parent: 'phaser',
    transparent: false,
    antialias: false,
    scene: {
        preload: preload,
        create: create
    }, //update: update },
    // scaleMode: Phaser.ScaleManager.SHOW_ALL
}
// var game = new Phaser.Game(conf)

function preload() {
    this.load.image('ship', 'images/hero.png');
    this.load.image('ball', 'images/shinyball.png');
    this.load.image('sky', 'images/sunset.png');
}

var sprite1;
var sprite2;
var sprite3;

function create() {
    this.add.image(0, 0, 'sky');

    sprite1 = this.add.sprite(100, 100, 'ball');
    sprite2 = this.add.sprite(200, 100, 'ball');
    sprite3 = this.add.sprite(300, 100, 'ball');
}
////////////////////////////////////////////////////////

var config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    canvas: mainCanvas,
    parent: 'phaser',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var x;
var y;
var move = 0;
var group;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'images/shinyball.png');
    this.load.image('sky', 'images/sunset.png');
}

function create ()
{
    this.add.image(0, 0, 'sky').setOrigin(0);

    group = this.add.group({ key: 'ball', frameQuantity: 128 });

    this.input.on('pointermove', function (pointer) {

        x = pointer.x;
        y = pointer.y;

    });
}

function update (time, delta)
{
    move += delta;

    if (move > 6)
    {
        Phaser.Actions.ShiftPosition(group.getChildren(), x, y);
        move = 0;
    }
}
