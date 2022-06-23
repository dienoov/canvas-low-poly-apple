const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 480;

ctx.fillPoly = function (fillStyle, ...paths) {
    this.fillStyle = fillStyle;
    this.beginPath();
    paths.forEach((path, index) => {
        index ? this.lineTo(...path) : this.moveTo(...path);
    });
    this.closePath();
    this.fill();
};

ctx.fillPoly('#fa8669', [125, 135], [170, 125], [95, 165]);
ctx.fillPoly('#f96e46', [170, 125], [125, 175], [95, 165]);
ctx.fillPoly('#fd8a56', [170, 125], [230, 145], [125, 175]);
ctx.fillPoly('#d91e04', [170, 125], [230, 145], [240, 135]);
ctx.fillPoly('#f4472d', [230, 145], [305, 140], [240, 135]);
ctx.fillPoly('#fe5442', [300, 130], [305, 140], [240, 135]);
ctx.fillPoly('#fd411f', [300, 130], [305, 140], [355, 135]);
ctx.fillPoly('#fa8669', [365, 160], [305, 140], [355, 135]);
ctx.fillPoly('#fc421f', [365, 160], [385, 165], [355, 135]);
ctx.fillPoly('#fd411f', [365, 160], [305, 140], [325, 195]);
ctx.fillPoly('#f8633f', [230, 145], [305, 140], [325, 195]);
ctx.fillPoly('#fa8453', [230, 145], [220, 235], [325, 195]);
ctx.fillPoly('#ffad85', [230, 145], [220, 235], [125, 175]);
ctx.fillPoly('#fb6641', [120, 250], [220, 235], [125, 175]);
ctx.fillPoly('#f33f27', [120, 250], [80, 240], [125, 175]);
ctx.fillPoly('#ee2210', [95, 165], [80, 240], [125, 175]);
ctx.fillPoly('#b1180e', [120, 250], [80, 240], [105, 325]);
ctx.fillPoly('#bb1a0a', [120, 250], [150, 355], [105, 325]);
ctx.fillPoly('#c51d06', [120, 250], [150, 355], [225, 340]);
ctx.fillPoly('#de2106', [120, 250], [220, 235], [225, 340]);
ctx.fillPoly('#ee2200', [305, 290], [220, 235], [225, 340]);
ctx.fillPoly('#f33a24', [305, 290], [220, 235], [325, 195]);
ctx.fillPoly('#c81c06', [305, 290], [375, 240], [325, 195]);
ctx.fillPoly('#db1e03', [365, 160], [375, 240], [325, 195]);
ctx.fillPoly('#a41610', [365, 160], [375, 240], [400, 210]);
ctx.fillPoly('#fe272b', [365, 160], [385, 165], [400, 210]);
ctx.fillPoly('#941812', [400, 255], [375, 240], [400, 210]);
ctx.fillPoly('#9b1b1b', [400, 255], [375, 240], [355, 320]);
ctx.fillPoly('#b1180e', [305, 290], [375, 240], [355, 320]);
ctx.fillPoly('#951913', [305, 290], [300, 360], [355, 320]);
ctx.fillPoly('#a61510', [305, 290], [300, 360], [225, 340]);
ctx.fillPoly('#951d15', [235, 390], [300, 360], [225, 340]);
ctx.fillPoly('#861011', [235, 390], [150, 355], [225, 340]);
ctx.fillPoly('#9f1926', [235, 390], [150, 355], [205, 395]);
ctx.fillPoly('#a62a35', [135, 360], [150, 355], [205, 395]);
ctx.fillPoly('#880f11', [135, 360], [150, 355], [105, 325]);
ctx.fillPoly('#9f1926', [235, 390], [300, 360], [280, 400]);
ctx.fillPoly('#b04b54', [355, 350], [300, 360], [280, 400]);
ctx.fillPoly('#a62a34', [355, 350], [300, 360], [355, 320]);
ctx.fillPoly('#961a24', [355, 350], [380, 315], [355, 320]);
ctx.fillPoly('#a52835', [400, 255], [380, 315], [355, 320]);
